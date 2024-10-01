import {
  Container,
  HeaderLink,
  Logout,
  LinkContainer,
  Navigation,
  Options,
  Profile,
  Content
} from "./styles";

import { ClipboardText, UserCircle, } from "@phosphor-icons/react";

export function Header() {
  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink>Home</HeaderLink>
            <HeaderLink>Cardápio</HeaderLink>
            <HeaderLink>Contatos</HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCircle color="#fff" size={24} />
            <div>
              <p>
                Olá, <span>Marcos</span>
              </p>
              <Logout>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            <ClipboardText color="#fff" size={24} />
            <HeaderLink>Pedidos</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  )
}
