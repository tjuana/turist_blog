import axios from 'axios'
import { contentParser } from '../parser/content'
import { loadImg } from '.'
import * as types from '../action-types'

const PER_PAGE = 100

export const loadContent = (url, page) => async (dispatch, getState) => {

    const pageNumber = page || 0
    const urlWithParametr = `${url}?per_page=${PER_PAGE}&${pageNumber}`
    const token = getState().blogs.userData.token

    try {
        const response = await axios.get(urlWithParametr, {
            headers: {'Authorization': 'Bearer '+ token}
        })
        const data = response?.data || []

        dispatch({
            type: types.DATA_LOADED,
            payload: data
        })

    } catch (errorPlaces) {
        console.error(errorPlaces)
    }
}
