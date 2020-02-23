import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider as MobxProvider } from 'mobx-react'
import { StylesProvider } from '@material-ui/core/styles'
import { hot } from 'react-hot-loader/root'

import { theme, GlobalStyles } from 'UI'
import { Routes, Layout } from 'core'
import * as stores from 'stores'

const App = () => {
  return (
    <MobxProvider {...stores}>
      <GlobalStyles />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst={true}>
            <Layout>
              <Routes />
            </Layout>
          </StylesProvider>
        </ThemeProvider>
      </BrowserRouter>
    </MobxProvider>
  )
}

export default hot(App)
