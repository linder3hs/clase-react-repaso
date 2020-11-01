import React from 'react'
import Routes from './router'
import theme from './theme'
import { ThemeProvider } from '@material-ui/core/styles'

const App = _ => {
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  )
}

export default App
