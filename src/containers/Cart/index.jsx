import React from 'react'
import LogoIcon from '../../assets/logo-m.svg'
import { Banner, Container, Content, Title } from './styled'


export function Cart() {
	return (
		<Container>
			<Banner>
				<img src={LogoIcon} alt='logo devburger' />
			</Banner>
			<Title>Checkout - Pedido</Title>
			<Content>

			</Content>
		</Container>
	)
}
