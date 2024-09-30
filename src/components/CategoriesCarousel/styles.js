import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
	.carousel-item {
		padding-right: 40px;
	}

	padding: 30px;
`

export const Title = styled.h2`
	color: #9758A6;
	text-align: center;
	font-size: 32px;
	font-weight: 800;
	padding-bottom: 12px;
	position: relative;
	margin-bottom: 40px;

	&::after {
		content: '';
		position: absolute;
		width: 56px;
		height: 4px;
		background-color: #9758A6;
		bottom: 0;
		left: calc(50% - 28px);
	}
`

export const Carousel = styled.div`

`

export const ContainerItems = styled.div`
	background: url('${props => props.imageUrl}');
	background-position: center;
	background-size: cover;
	border-radius: 20px;

	display: flex;
	align-items: center;
	padding: 20px 10px;
	width: 100%;
	height: 250px;
`

export const CategoryButton = styled(Link)`
		color: #FFF;
		font-size: 22.45px;
		font-weight: 500;
		padding: 10px 30px;
		margin-top: 50px;
		text-decoration: none;

		border-radius: 30px;
		background-color: rgba(0, 0, 0, 0.50);

		&:hover {
			background-color: #9758A6;
		}
`
