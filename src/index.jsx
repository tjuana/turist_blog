import 'regenerator-runtime/runtime'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'

import { store } from './__data__/store'

const theme = {
    colors: "red"
}


const Application = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <h1 style={{color: theme.colors}}>LOL</h1>
                </Provider>
            </ThemeProvider>
        </React.Fragment>
    )
}


ReactDOM.render(<Application />, document.getElementById('app'))
