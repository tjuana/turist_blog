import * as types from '../action-types'
import { loadImg } from '../actions'

export const contentParser = (data) =>
    data?.reduce((memo, postObject, index) => {

        const {
            id,
            date,
            modified,
            link,
            title,
            content,
            author,
            featured_media,
            _links
        } = postObject

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
                imgUrl: _links["wp:featuredmedia"][0].href
            }
        return memo
    }, [])