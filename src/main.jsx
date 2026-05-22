import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TechHub from './TechHub.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TechHub />
  </StrictMode>,
)
