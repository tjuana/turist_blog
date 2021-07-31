import axios from 'axios'
import { contentParser } from '../parser/content'
import { loadImg } from '.'
import * as types from '../action-types'


export const authorization = (url) => async (dispatch, getState) => {
        // POST request using fetch with error handling
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: 'johny',
            password: 'VpY&8%ncMJzpOec$%e'})
        }

        fetch(url, requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json')
                const data = isJson && await response.json()
    
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error)
                }

                dispatch({
                    type: types.AUTH,
                    payload: data,
                    auth: true
                })
            })
            .catch(error => {
                console.error('There was an error!', error);
            })

}
