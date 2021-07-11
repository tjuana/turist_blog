import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { store } from './__data__'
import THEME from './styles/theme-colors'
import Main from './components/Main'

const Application = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={THEME.MORNING}>
                <Provider store={store}>
                <Route exact path="/" component={Main} />
                </ Provider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

ReactDOM.render(<Application />, document.getElementById('app'))
