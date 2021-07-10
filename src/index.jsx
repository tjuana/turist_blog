import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@emotion/react'

import THEME from './styles/theme-colors'
import { Main } from './components/Main'
import { CenterStyled, MediaStyled } from './index.style'

const Application = () => {
    return (
        <ThemeProvider theme={THEME.MORNING}>
            <CenterStyled>
                <MediaStyled>
                    {/* Тут страницы */}
                    <Main />
                </MediaStyled>
            </CenterStyled>
        </ThemeProvider>
    )
}

ReactDOM.render(<Application />, document.getElementById('app'))
