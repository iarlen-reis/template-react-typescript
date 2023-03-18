import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlboalStyled from './styles/Global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlboalStyled />
    <App />
  </React.StrictMode>
)
