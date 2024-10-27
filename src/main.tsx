import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript, Box } from '@chakra-ui/react'
import App from './App'
import theme from './theme'
import './index.css'
import AppRouters from './assets/Router/AppRouters'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <AppRouters />
    </ChakraProvider>
  </React.StrictMode>
)
