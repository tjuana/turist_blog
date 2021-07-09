import 'regenerator-runtime/runtime'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@emotion/react'

const theme = {
    colors: "red"
}


const Application = () => {
    return (
        <ThemeProvider theme={THEME.MORNING}>
            <Main />
        </ThemeProvider>
    )
}


ReactDOM.render(<Application />, document.getElementById('app'))
