import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyles from './styles/globalStyles'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

// Biblioteca de feedback de eventos
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="colored" />
  </StrictMode>,
)
