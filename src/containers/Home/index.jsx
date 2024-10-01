import React from 'react'
import { Banner, Container, Content } from './styles'
import { CategoriesCarousel } from '../../components/CategoriesCarousel'
import { OffersCarousel } from '../../components/OffersCarousel'
import { useUser } from '../../hooks/UserContext'

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-vindo!</h1>
      </Banner>
      <Container>
        <Content>
          <CategoriesCarousel />
          <OffersCarousel />
        </Content>
      </Container>
    </main>
  )
}
