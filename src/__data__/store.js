/* eslint no-underscore-dangle: 0 */
import { createStore as createReduxStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly'

import * as reducers from './reducers'

export const createStore = () => {
    const reducer = combineReducers({
        ...reducers
    })

    const composedEnhancer = compose(
        applyMiddleware(thunkMiddleware),
        devToolsEnhancer({
            name: 'blogs.store',
            serializeAction: (key, value) => {
                if (typeof value === 'symbol') {
                    return String(value)
                }
                return value
            }
        })
    )

    return createReduxStore(reducer, composedEnhancer)
}

export default createStore()
