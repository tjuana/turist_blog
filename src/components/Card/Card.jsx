import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
    CardStyled,
    ImageStyled,
    ShadowStyled,
    TitleStyled
} from './card.style'

import { actions, selectors } from '../../__data__'

const Card = ({
    icon,
    title,
    loadImg,
    featuredMedia,
    id
}) => {
    const [imgUrl, setImgUrl] = useState()

    useEffect(() => {
        loadImg(featuredMedia, id)
    }, [loadImg, featuredMedia])

    return (
        <CardStyled>
            <ImageStyled src={icon} />
            <ShadowStyled src={icon} />
            <TitleStyled>{title}</TitleStyled>
        </CardStyled>
    )
}

const mapStateToProps = (state) => ({
    // imgLoad: selectors.getImgLoad(state),
})

const mapDispatchToProps = {
    loadImg: actions.loadImg
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)