import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
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
    imgUrl,
    id
}) => {

    useEffect(() => {
            loadImg(icon, id)
    }, [loadImg])

    return (
        // нужно использовать 2 размера картинки
        <CardStyled>
            <ImageStyled src={icon} />
            <ShadowStyled src={icon} />
            <TitleStyled>{title}</TitleStyled>
        </CardStyled>
    )
}

Card.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
}

//Это точно нужно????
const mapStateToProps = (state) => ({
    // imgLoad: selectors.getImgLoad(state),
})

const mapDispatchToProps = {
    loadImg: actions.loadImg
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
