import axios from 'axios'
import * as types from '../action-types'

export const loadContent = (url) => async (dispatch, getState) => {

    try {

        const response = await axios.get(url)
        const data = response?.data || []

        dispatch({
            type: types.DATA_LOADED,
            payload: data
        })
        console.log(getState())

    } catch (errorPlaces) {
        console.error(errorPlaces)
    }
}
