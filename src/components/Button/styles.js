import styled from 'styled-components'

export const ContainerButton = styled.button`
 	width: 100%;
	height: 52px;
  border: none;
	border-radius: 5px;
	background: #9758A6;
	color: #FFF;

	font-family: "Road Rage", sans-serif;
	text-align: center;
	font-size: 30px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
  transition: ease-in-out;

  &:hover {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='%23FFF7F7FF' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
    opacity: 0.8;
    transform: scale(1.1);
  }

  &:active {
    opacity: 0.6;
  }
`
