import axios from 'axios'
import * as types from '../action-types'

export const loadImg = (url) => async (dispatch, getState) => {

    try {

        const response = await axios.get(url)
        const data = response?.data || []

        dispatch({
            type: types.DATA_LOADED,
            payload: data
        })


    } catch (errorPlaces) {
        console.error(errorPlaces)
    }
}
