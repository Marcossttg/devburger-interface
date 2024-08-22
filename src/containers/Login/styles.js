import styled from "styled-components"
import BackgroundLogin from "../../assets/background-login.svg"
import Background from '../../assets/background.svg'
import { Link as ReactLink } from "react-router-dom"

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
`

export const LeftContainer = styled.div`
background: url('${BackgroundLogin}');
background-size: cover;
background-position: center;

height: 100%;
width: 100%;
max-width: 50%;

display: flex;
align-items: center;
justify-content: center;

	img {
		width: 80%;
	}
`

export const RightContainer = styled.div`
	background: url('${Background}');
	background-size: cover;
	background-position: center;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	height: 100%;
	width: 100%;
	max-width: 50%;

	p {
		color: #FFF;
		text-align: center;
		font-family: Poppins, sans-serif;
		font-size: 18px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
`

export const Title = styled.h2`
	color: #FFF;
	text-align: center;
	font-family: "Road Rage";
	font-size: 40px;
	font-style: normal;
	font-weight: 400;
	line-height: 100%; /* 40px */

	span {
		color: #9758A6;
		font-family: "Road Rage", sans-serif;
		font-size: 40px;
		font-style: normal;
		font-weight: 400;
		line-height: 100%;
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px;
	width: 100%;
	max-width: 400px;
	margin-top: 60px;
	margin-bottom: 12px;
`

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	width: 100%;
	text-align: start;

	label {
		color: #FFF;
		font-family: Poppins;
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin-left: 5px;
	}

	input {
		width: 100%;
		border: none;
		border-radius: 5px;
		background-color: #fff;
		height: 52px;
		padding: 0 16px;
	}

	p {
		font-size: 14px;
		line-height: 80%;
		color: #cf3057;
		font-weight: 600;
		text-align: start;
		margin-left: 5px;
		height: 10px;
	}
`
export const Link = styled(ReactLink)`
		color: #FFF;
		font-family: Poppins, sans-serif;
		font-size: 18px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
    text-decoration: underline;
    transition: ease-in-out;

    &:hover {
      color: #9758a6;
    }
`
