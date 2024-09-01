import React from 'react'
import { Banner, Container, Content } from './styles'
import { CategoriesCarousel } from '../../components/CategoriesCarousel'

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-vindo!</h1>
      </Banner>
      <Container>
        <Content>
          <CategoriesCarousel />
          <div>OFERTAS DO DIA</div>
        </Content>
      </Container>
    </main>
  )
}
