import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export const BlogItem = (props) =>  {

    const [state = {
        imgUrl: '',
        author: '',
        isLoaded: false
    }, setState] = useState()

    useEffect(() => {
        const { featured_media, author } = props.blog
        const getImageUrl = axios.get(`http://localhost:8000/wp-json/wp/v2/media/${featured_media}`)
        console.log(featured_media)
        const getAuthor = axios.get(`http://localhost:8000/wp-json/wp/v2/users/${author}`)
        Promise.all([getImageUrl, getAuthor])
        .then( res => {
            setState({
                imgUrl: res[0].data.media_details.sizes.full.source_url,
                author: res[1].data.name,
                isLoaded: true
            })
        })
    }, [])

        const { title, excerpt } = props.blog
        const { author , imgUrl, isLoaded } = state
        return (
            <div>
                <h2 style={{ marginBottom: '0' }}>{title.rendered}</h2>
                <small>
                    Rewiew by <strong>{author}</strong>
                </small>
                <img
                    style= {{ width: '100%' }}
                    src={imgUrl}
                    alt={title.rendered}
                />
                <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
            </div>
        )
    }

export default BlogItem
