
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme/index'

const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  )
}

export default wrapRootElement