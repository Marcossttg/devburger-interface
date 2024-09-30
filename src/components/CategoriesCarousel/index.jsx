import { useState, useEffect } from "react"
import { api } from "../../services/api"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import {
	Container,
	Title,
	ContainerItems,
	CategoryButton
} from "./styles";
import { useNavigate } from "react-router-dom"

export function CategoriesCarousel() {
	const [categories, setCategories] = useState([])

	const navegate = useNavigate()

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('/categories')

			setCategories(data)
		}

		loadCategories()
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
			<Title>CATEGORIAS</Title>
			<Carousel responsive={responsive}
				infinite={true}
				partialVisbile={true}
				itemClass="carousel-item">
				{categories.map(category => (
					<ContainerItems key={category.id} imageUrl={category.url}>
						<CategoryButton
							onClick={() => {
								navegate({
									pathname: '/cardapio',
									search: `?categoria=${category.id}`,
								})
							}}
						>
							{category.name}
						</CategoryButton>
					</ContainerItems>
				))}
			</Carousel>
		</Container>
	)
}
