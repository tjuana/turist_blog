import * as types from '../action-types'

const defaultState = {
    posts: [
        /* Здесь размещаются блоги в разбивке по категориям наверно */
    ],
    userData: {},
    loaded: false,
    auth: false,

}

export default (state = defaultState, {
    payload,
    type,
    imgId,
    auth
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
                posts : state.posts.reduce((memo, blog, index) => {
                    const {
                        id,
                        date,
                        modified,
                        link,
                        title,
                        content,
                        author,
                        featured_media,
                        imgUrl
                    } = blog

                    memo[index] = 
                    {
                        id,
                        date,
                        modified,
                        link,
                        title,
                        content,
                        author,
                        featured_media,
                        imgUrl: (imgId === id) ? payload : imgUrl
                    }
                    return memo
                }, [])
            }
        }
        case types.AUTH: {
            return {
                ...state,
                userData: payload,
                auth
            }
        }
        default:
            return state
    }
}
