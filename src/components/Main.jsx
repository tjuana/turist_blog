import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { CenterStyled } from '../index.style';
import Card from './Card/Card';
import { GradientCard } from './Card/GradientCard';
import { Header } from './Header/Header';
import { GradientStyle } from './main.style';

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
    const contentUrl = 'wp-json/wp/v2/turists'

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
            <GradientStyle>
                <Header />
                {firstPosts.map((blog) => (
                    <GradientCard
                        key={blog.id}
                        title={blog.title.rendered}
                        icon={blog.imgUrl}
                        id={blog.id}
                    />
                ))}
            </GradientStyle>
            {posts.map((blog) => (
                <Card
                    key={blog.id}
                    title={blog.title.rendered}
                    icon={blog.imgUrl}
                    featuredMedia={blog.featured_media}
                    id={blog.id}
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