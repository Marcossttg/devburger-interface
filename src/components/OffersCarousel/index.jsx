import { useState, useEffect } from "react"
import { api } from "../../services/api"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CardProduct } from "../CardProduct";
import {
	Container,
	Title,
} from "./styles";
import { formatPrice } from "../../utils/formatPrice";

export function OffersCarousel() {
	const [offers, setOffers] = useState([])

	useEffect(() => {
		async function loadProducts() {
			const { data } = await api.get('/products')

			const onlyOffers = data.filter((product) => product.offer)
				.map((product) => ({
					currencyValue: formatPrice(product.price), ...product,
				}))

			setOffers(onlyOffers)
		}

		loadProducts()
	}, [])

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4
		},
		tablet: {
			breakpoint: { max: 1280, min: 690 },
			items: 3
		},
		mobile: {
			breakpoint: { max: 690, min: 0 },
			items: 2
		}
	};

	return (
		<Container>
			<Title>OFERTAS DO DIA</Title>
			<Carousel responsive={responsive}
				infinite={true}
				partialVisbile={true}
				itemClass="carousel-item">
				{offers.map((product) => (
					<CardProduct key={product.id} product={product} />
				))}
			</Carousel>
		</Container >
	)
}
