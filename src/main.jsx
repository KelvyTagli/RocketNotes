import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global.js'

import theme from './styles/theme.js'

import { AuthProvider } from './hooks/auth.jsx'

import { Routes } from './Router/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
