import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import { Login } from './containers/Login'

// Biblioteca de feedback de eventos
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="colored" />
  </StrictMode>,
)
