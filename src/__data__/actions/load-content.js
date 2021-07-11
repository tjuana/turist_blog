import axios from 'axios'
import { loadImg } from '.'
import * as types from '../action-types'


export const loadContent = (url) => async (dispatch, getState) => {

    try {

        const response = await axios.post(url)
        const data = response?.data || []

        dispatch({
            type: types.DATA_LOADED,
            payload: data
        })

    } catch (errorPlaces) {
        console.error(errorPlaces)
    }
}
