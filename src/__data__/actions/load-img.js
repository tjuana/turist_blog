import axios from 'axios'
import * as types from '../action-types'

export const loadImg = (url) => async (dispatch, getState) => {

    try {

        const response = await axios.get(url)
        const data = response?.data.media_details.sizes.full.source_url || ''

        dispatch({
            type: types.LOAD_IMG,
            payload: data
        })


    } catch (errorPlaces) {
        console.error(errorPlaces)
    }
}
