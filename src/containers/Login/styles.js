import styled from "styled-components"
import BackgroundLogin from "../../assets/background-login.svg"
import Background from '../../assets/background.svg'

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
		font-family: Poppins;
		font-size: 18px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
  a {
		color: #FFF;
		font-family: Poppins;
		font-size: 18px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		text-decoration-line: underline;
    text-decoration: underline;
    cursor: pointer;
    transition: ease-in-out;

    &:hover {
      color: #9758a6;
    }
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
		font-family: "Road Rage";
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
	margin-bottom: 42px;
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

`

export const Button = styled.button`
 	width: 350px;
	height: 52px;
	flex-shrink: 0;
	border-radius: 5px;
	background: #9758A6;
	color: #FFF;

	text-align: center;
	font-family: "Road Rage";
	font-size: 30px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;

  cursor: pointer;
  border: none;
  transition: ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }

  &:active {
    opacity: 0.6;
  }
`
