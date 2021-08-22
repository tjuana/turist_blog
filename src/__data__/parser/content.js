import * as types from '../action-types'
import { loadImg } from '../actions'

export const contentParser = (data) =>
    data?.reduce((memo, blog, index) => {

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