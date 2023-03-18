import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlboalStyled from './styles/Global'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/theme/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlboalStyled />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
