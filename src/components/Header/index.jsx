import { useNavigate, useResolvedPath } from "react-router-dom"
import { ClipboardText, UserCircle, } from "@phosphor-icons/react"
import { useUser } from "../../hooks/UserContext";

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


export function Header() {
  const navigate = useNavigate()
  const { logout, userInfo } = useUser()

  const { pathname } = useResolvedPath()

  function logoutUser() {
    logout()
    navigate('/login')
  }

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to="/" $isActive={pathname === '/'}>Home</HeaderLink >
            <hr></hr>
            <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>Cardápio</HeaderLink>
            <hr></hr>
            <HeaderLink to="/cadastro" $isActive={pathname === '/cadastro'}>Contatos</HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCircle color="#fff" size={24} />
            <div>
              <p>
                Olá, <span>{userInfo.name}</span>

              </p>
              <Logout onClick={logoutUser}>Sair</Logout>

            </div>
          </Profile>
          <LinkContainer>
            <ClipboardText color="#fff" size={24} />
            <HeaderLink to="/pedidos" $isActive={pathname === '/pedidos'}>Pedidos</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  )
}
