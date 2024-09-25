import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	padding: 20px;
	border-radius: 8px;
	background-color: #FFFFFF;
	cursor: grab;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	position: relative;

	div {
		width: 100%;
		height: 80px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 10px;

		p {
		color: #FF8C05;
		font-size: 18px;
		font-weight: 700;
		line-height: 20px;
		margin-top: 40px;
	}

		strong {
			color: #363636;
			font-size: 22px;
			font-style: normal;
			font-weight: 800;
			line-height: 20px; /* 14.58px */
		}

	}

`

export const CardImage = styled.img`
	height: 100px;
	position: absolute;
	top: -50px;
`
