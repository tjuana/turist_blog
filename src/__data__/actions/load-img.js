import axios from 'axios'
import * as types from '../action-types'

const imgUrl = 'http://localhost:8000/wp-json/wp/v2/media/'

export const loadImg = (url, id, mediaId) => async (dispatch, getState) => {
    const URL = `${imgUrl}${mediaId}`

    try {
        // нужно использовать 2 размера

        if (mediaId != 0) {
            const response = await axios.get(URL)
            const data = response?.data?.media_details?.sizes?.full?.source_url || ''

            dispatch({
                type: types.LOAD_IMG,
                payload: data,
                imgId: id,
                imgloaded: true
            })

        }

    } catch (error) {
        dispatch({
            type: types.LOAD_IMG,
            payload: 'img/example.png',
            imgId: id
        })
        console.error('error', error)
    }
}
