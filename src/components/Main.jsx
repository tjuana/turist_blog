import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Card } from './Card/Card';
import { actions, selectors } from '../__data__'
import { noop, uniqueId } from 'lodash'

const Main = ({ loadContent, loaded, posts }) => {
    const url = 'http://localhost:8000/wp-json/wp/v2/turists'

    useEffect(() => {
        if (!loaded) {
           loadContent(url)
        }
    }, [loadContent, loaded])

    if (!loaded) {
        return (
            <span>Loading...</span>
        )
    }

    return(
        <div>
            <h1>Hiking</h1>
            {posts.map((blog) => (
                <Card
                    title={blog.title.rendered}
                    icon='img/example.png'
                    featuredMedia={blog.featured_media}
                    id={blog.id}
                />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    posts: selectors.getData(state),
    loaded: selectors.getLoading(state),
})

const mapDispatchToProps = {
    loadContent: actions.loadContent,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)