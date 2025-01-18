import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Chai from './chai'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Chai/>
  </StrictMode>,
)
