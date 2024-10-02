import styled from "styled-components"
import TextureCart from "../../assets/texture-cart.svg"
import Background from '../../assets/background.svg'

export const Container = styled.div`
		background: linear-gradient(90deg,
		rgba(255,255,255,0.6) 0%,
		rgba(251,251,251,0.6) 0%
	),url('${Background}');
	width: 100%;
	min-height: 100vh;
`

export const Banner = styled.div`
	background: url('${TextureCart}');
	background-color: #1f1f1f;
	background-size: cover;
	background-position: center;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	/* width: 1472px; */
	height: 193px;
	flex-shrink: 0;

	img {
		width: 180px;
		height: 165.438px;
	}
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

export const Content = styled.div`
	height: 100%;
	width: 100%;
	max-width: 1280px;

	display: grid;
	grid-template-columns: 1fr 20%;
	gap: 20px;
	padding: 40px;
	margin: 0 auto;
`
