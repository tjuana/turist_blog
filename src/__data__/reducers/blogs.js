import * as types from '../action-types'

const defaultState = {
    blogs: {
        /* Здесь размещаются блоги в разбивке по категориям наверно */
    }
}

export default (state = defaultState, {
    payload
}) => {
    switch (type) {
        case types.STARTING_REQUES: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case types.DATA_LOADED: {
            return {
                ...state,
                blogs: payload,
                loadingPlaces: false
            }
        }
        case types.DATA_ERROR: {
            return {
                ...state,
                loading: false,
                error
            }
        }
        default:
            return state
    }
}
