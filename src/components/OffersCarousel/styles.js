import styled from "styled-components"

export const Container = styled.div`
	.carousel-item {
		padding-right: 40px;
	}

	overflow-x: hidden;

	.react-multi-carousel-list {
		overflow: visible;
	}

	padding-left: 40px;
	padding-bottom: 40px;
`

export const Title = styled.h2`
	color: #61A120;
	text-align: center;
	font-size: 32px;
	font-weight: 800;
	padding-bottom: 12px;
	position: relative;
	margin: 60px 0;

	&::after {
		content: '';
		position: absolute;
		width: 56px;
		height: 4px;
		background-color: #61A120;
		bottom: 0;
		left: calc(50% - 28px);
	}
`

export const Carousel = styled.div`

`
