import 'regenerator-runtime/runtime'
import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'

import { store } from './__data__'
import THEME from './styles/theme-colors'
import { Applo } from './Applo'

const theme = {
    white: '#f8f9fa',
    purple: '#8c81d8',
    gold: '#ffd43b'
  }

// export const ThemeWrapperContext = createContext(theme)

const Application = () => {
    console.log(theme)
    return (
        // <ThemeWrapperContext.Provider value={props.theme}>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Applo />
                </Provider>
            </ThemeProvider>
        // </ThemeWrapperContext.Provider>
    )
}

ReactDOM.render(<Application />, document.getElementById('app'))
