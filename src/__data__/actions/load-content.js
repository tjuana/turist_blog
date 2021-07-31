import axios from 'axios'
import { contentParser } from '../parser/content'
import { loadImg } from '.'
import * as types from '../action-types'


export const loadContent = (url) => async (dispatch, getState) => {

    const token = getState().blogs.userData.token

    try {
        const response = await axios.get(url, {
            headers: {'Authorization': 'Bearer '+ token}
        })
        const data = response?.data || []

        const parsedDate = contentParser(data, dispatch)

        dispatch({
            type: types.DATA_LOADED,
            payload: parsedDate
        })

    } catch (errorPlaces) {
        console.error(errorPlaces)
    }
}
