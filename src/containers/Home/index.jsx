import React from 'react'
import { Banner, Container, Content } from './styles'

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-vindo!</h1>
      </Banner>
      <Container>
        <Content>
          <div>CATEGORIAS</div>
          <div>OFERTAS DO DIA</div>
        </Content>
      </Container>
    </main>
  )
}
