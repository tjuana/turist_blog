import axios from 'axios'
import * as types from '../action-types'

const urlImg = 'http://localhost:8000/wp-json/wp/v2/media/'

export const loadImg = (url, id) => async (dispatch, getState) => {

    try {
        // нужно использовать 2 размера

        const response = await axios.get(url)
        const data = response?.data?.media_details?.sizes?.full?.source_url || ''
        dispatch({
            type: types.LOAD_IMG,
            payload: data,
            imgId: id
        })

    } catch (errorPlaces) {
        console.error(errorPlaces)
    }
}
