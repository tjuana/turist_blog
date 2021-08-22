import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { CenterStyled } from '../index.style';
import { GradientStyled } from '../components/main.style'
import { Card } from './Card/Card';
import { GradientCard } from './Card/GradientCard';
import { Header } from './Header/Header';

import { actions, selectors } from '../__data__'

// PropTypes
const Main = ({
    loadContent,
    loaded,
    posts,
    firstPosts,
    authorization,
    auth
}) => {
    const localUrl = 'http://localhost:8000/'
    const authUrl = 'wp-json/jwt-auth/v1/token'
    const contentUrl = 'wp-json/wp/v2/posts'

    useEffect(() => {
        if (!auth) {
            authorization(`${localUrl}${authUrl}`)
        }
        if (!loaded && auth) {
           loadContent(`${localUrl}${contentUrl}`)
        }
    }, [loadContent, loaded, auth])

    if (!loaded) {
        return (
            <span>Loading...</span>
        )
    }

    return(
        <CenterStyled>
            <GradientStyled>
                <Header />
                {firstPosts.map((blog) => (
                    <GradientCard
                        key={blog.id}
                        title={blog.title.rendered}
                        icon={blog.imgUrl}
                        mediaId={blog.featured_media}
                        id={blog.id}
                    />
                ))}
            </GradientStyled>
            {posts.map((blog) => (
                <Card
                    key={blog.id}
                    title={blog.title.rendered}
                    icon={blog.imgUrl}
                    mediaId={blog.featured_media}
                    id={blog.id}
                    imgLoading={blog.imgLoaded}

                />
            ))}
        </CenterStyled>
    )
}

const mapStateToProps = (state) => ({
    posts: selectors.getData(state),
    firstPosts: selectors.getFirstThreePosts(state),
    loaded: selectors.getLoading(state),
    auth: selectors.getAuth(state),
})

const mapDispatchToProps = {
    loadContent: actions.loadContent,
    authorization: actions.authorization,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)