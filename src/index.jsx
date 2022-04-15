import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { css, Global, ThemeProvider, useTheme } from '@emotion/react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { store } from './__data__'
import THEME from './styles/theme-colors'
import Main from './components/Main'
import { CenterStyled, MediaStyled } from './index.style'

const GlobalStyles = () => {
    const theme = useTheme()
    return (
      <Global styles={css`
        body {
          background: ${theme.background};
        }
      `} />
    )
}  

const Application = () => {
    return (
        <ThemeProvider theme={THEME.EVENING}>
            <GlobalStyles />
            <CenterStyled>
                <MediaStyled>
                    <Provider store={store}>
                        <Main />
                    </ Provider>
                </MediaStyled>
            </CenterStyled>
        </ThemeProvider>
    )
}

ReactDOM.render(<Application />, document.getElementById('app'))
