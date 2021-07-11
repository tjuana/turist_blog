import * as types from '../action-types'

const defaultState = {
    posts: {
        /* Здесь размещаются блоги в разбивке по категориям наверно */
    },
    loaded: false

}

export default (state = defaultState, {
    payload,
    type
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
                posts: payload,
                loadingPlaces: false,
                loaded: true
            }
        }
        case types.DATA_ERROR: {
            return {
                ...state,
                loaded: false,
                error
            }
        }
        case types.LOAD_IMG: {
            return {
                ...state,
                ...posts,
                imgUrl: payload
            }
        }
        default:
            return state
    }
}
