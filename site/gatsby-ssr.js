import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./theme/index"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
