import axios from 'axios'
import * as types from '../action-types'

const urlImg = 'http://localhost:8000/wp-json/wp/v2/media/'

export const loadImg = (url, id) => async (dispatch, getState) => {

    try {

        const response = await axios.get(`${urlImg}${url}`)
        const data = response?.data?.media_details?.sizes?.full?.source_url || ''
        dispatch({
            type: types.LOAD_IMG,
            payload: data,
            id
        })
        console.log(getState())

    } catch (errorPlaces) {
        console.error(errorPlaces)
    }
}
