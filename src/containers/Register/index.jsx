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

export function Register() {
  const schema = yup.object().shape({
    name: yup.string().required('O seu nome é obrigatório'),
    email: yup.string()
      .email('Digite um e-mail ou senha válida.')
      .required('O e-mail é obrigatório'),
    password: yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no minimo 6 digítos'),
    confirmPassword: yup.string()
      .required('A confirme a senha')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificado dados',
        success: 'Cadastro efetuado com Sucesso! 👌',
        error: 'Ops, algo deu errado! Tente novamente. 🤯',
      })
  }

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>Criar conta</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register('name')} />
            <p>{errors.name?.message}</p>
          </InputContainer>

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

          <InputContainer style={{ marginTop: 10 }}>
            <label>Confirmar senha</label>
            <input type="password" {...register('confirmPassword')} />
            <p>{errors.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit" style={{ marginTop: 40 }}>Criar Conta</Button>
        </Form>

        <p>Já possui conta ? <a>Clique aqui.</a></p>
      </RightContainer>
    </Container>
  )
}
