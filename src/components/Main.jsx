import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { CenterStyled } from '../index.style';
import { Card } from './Card/Card';
import { GradientCard } from './Card/GradientCard';
import { Header } from './Header/Header';
import { GradientStyle } from './main.style';

import { actions, selectors } from '../__data__'

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
        <CenterStyled>
            <GradientStyle>
                <Header />
                {/* Из массива должно браться первых три элемента */}
                <GradientCard icon='img/example.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
                <GradientCard icon='img/example3.jpeg' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
                <GradientCard icon='img/example2.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
            </GradientStyle>
            {posts.map((blog) => (
                <Card
                    title={blog.title.rendered}
                    icon='img/example.png'
                    featuredMedia={blog.featured_media}
                    id={blog.id}
                />
            ))}
        </CenterStyled>
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