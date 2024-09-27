import styled from "styled-components"
import BannerHamburger from '../../assets/BannerHamburger.svg'
import Background from '../../assets/background.svg'
import { Link } from "react-router-dom"

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: #f0f0f0;

	background: linear-gradient(90deg,
		rgba(255,255,255,0.6) 0%,
		rgba(251,251,251,0.6) 0%
	),url('${Background}');
	height: 100%;
`

export const Banner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 480px;
	width: 100%;
	position: relative;


	background: url('${BannerHamburger}') no-repeat;
	background-size: cover;
	background-position: center;

	h1 {
		color: #FFF;
		text-align: center;
		font-family: "Road Rage", sans-serif;
		font-size: 96.257px;
		font-style: normal;
		font-weight: 400;
		line-height: 68.5%; /* 65.936px */

		position: absolute;
		right: 20%;
		top: 30%;
	}

	span {
		margin-top: 10px;
		display: block;
		color: #FFF;
		text-align: center;
		font-size: 19.11px;
		font-style: normal;
		line-height: 68.5%; /* 13.09px */
	}
`
export const CategoryMenu = styled.div`
	display: flex;
	justify-content: center;
	gap: 50px;
	margin-top: 30px;
`

export const CategoryButton = styled(Link)`
	text-decoration: none;
	cursor: pointer;
	background: none;
	color: ${(props) => props.$isActiveCategory ?
		'#9758a6' : '#313030'};
	font-size: 24px;
	font-weight: 500;
	padding-bottom: 5px;
	line-height: 20px;
	border: none;
	border-bottom: ${(props) => props.$isActiveCategory &&
		'3px solid #9758a6'};
`

export const ProductsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding: 40px;
	justify-content: center;
	max-width: 1280px;
	gap: 60px;
	margin: 50px auto 0;

		 	/* h2 {
		color: #61A120;
		text-align: center;
		font-family: Poppins;
		font-size: 32px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
	} */
`
