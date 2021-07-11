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
    firstPosts
}) => {
    const url = '/wp-json/wp/v2/turists'

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
        <CenterStyled>
            <GradientStyle>
                <Header />
                {firstPosts.map((blog) => (
                    <GradientCard
                        title={blog.title.rendered}
                        icon={blog.imgUrl}
                        featuredMedia={blog.featured_media}
                        id={blog.id}
                    />
                ))}
            </GradientStyle>
            {posts.map((blog) => (
                <Card
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
})

const mapDispatchToProps = {
    loadContent: actions.loadContent,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)