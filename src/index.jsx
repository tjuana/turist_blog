import 'regenerator-runtime/runtime'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@emotion/react'

const theme = {
    colors: "red"
}


const Application = () => {
    return (
        <React.Fragment>
                    <ThemeProvider theme={theme}>
                        <h1 style={{color: theme.colors}}>LOL</h1>
                    </ThemeProvider>
        </React.Fragment>
    )
}


ReactDOM.render(<Application />, document.getElementById('app'))
