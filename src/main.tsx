
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./stylesheets/stylesheet_2.css"
import "./stylesheets/stylesheet_1.css"
import "./stylesheets/stylesheet_0.css"
import "./stylesheets/inline-style-3.css"
import "./stylesheets/inline-style-4.css"
import './global.css'
import App from './App.tsx'

createRoot(document.querySelector('html')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
   