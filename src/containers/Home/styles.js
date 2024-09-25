import styled from "styled-components"
import BannerHome from "../../assets/banner-home.svg"
import Background from '../../assets/background.svg'

export const Banner = styled.div`
	background: url('${BannerHome}');
	background-size: cover;
	background-position: center;
	height: 480px;

	h1 {
		color: #FFF;
		font-family: "Road Rage";
		font-size: 80px;
		position: absolute;
		top: 10%;
		right: 20%;
		font-style: normal;
		font-weight: 400;
		line-height: 100%;
	}

	img {
		width: 60%;
	}
`

export const Container = styled.section`
	background: linear-gradient(90deg,
		rgba(255,255,255,0.6) 0%,
		rgba(251,251,251,0.6) 0%
	),url('${Background}');
	height: 100%;
`

export const Content = styled.div`
	padding-bottom: 70px;
`
