import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services/api"

// Biblioteca de feedback de eventos
import * as yup from "yup"
import { toast } from 'react-toastify'

// UseContext hook
import Logo from '../../assets/logo.svg'
import { Button } from "../../components/Button"

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title
} from "./styles"

export function Login() {
  const schema = yup
    .object({
      email: yup.string()
        .email('Digite um e-mail ou senha válida.')
        .required('O e-mail é obrigatório'),
      password: yup.string()
        .required('A senha é obrigatória')
        .min(3, 'A senha deve ter no minimo 3 caracteres'),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificado dados',
        success: 'Seja bem-vindo(a) 👌',
        error: 'Verifique seu e-mail e senha 🤯',
      }
    )
  }

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br></br>
          Acesse com seu <span>Login e senha.</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors.email?.message}</p>
          </InputContainer>

          <InputContainer style={{ marginTop: 10 }}>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors.password?.message}</p>
          </InputContainer>

          <Button type="submit" style={{ marginTop: 60 }}>Entrar</Button>
        </Form>

        <p>Não possui conta? <a>Clique aqui.</a></p>
      </RightContainer>
    </Container>
  )
}
