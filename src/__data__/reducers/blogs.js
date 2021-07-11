import * as types from '../action-types'

const defaultState = {
    posts: {
        /* Здесь размещаются блоги в разбивке по категориям наверно */
        imgLoad: false
    },
    loaded: false

}

export default (state = defaultState, {
    payload,
    type,
    id
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
            // нужно к каждому посту добавить imgUrl, я чет  хуевый программист
            // return {
            //     ...state,
            //     imgUrl: payload,
            //     imgLoad: true
            // }
        }
        default:
            return state
    }
}
