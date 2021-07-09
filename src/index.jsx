import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@emotion/react'
import THEME from './styles/theme-colors'
import { Main } from './components/Main'

const Application = () => {
    return (
        <ThemeProvider theme={THEME.MORNING}>
            <Main />
        </ThemeProvider>
    )
}

ReactDOM.render(<Application />, document.getElementById('app'))
