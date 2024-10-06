import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AuthWrapper } from "./context/authorization.js";
import App from './App.js'
import '../index.css'

createRoot(document.getElementById('root') as HTMLElement ).render(
  <StrictMode>
    <BrowserRouter>
      <AuthWrapper>
        <App />
      </AuthWrapper>
    </BrowserRouter>
  </StrictMode>,
)

