import React from 'react'
import PropTypes from 'prop-types'

import {
    CardStyled,
    ImageStyled,
    ShadowStyled,
    TitleStyled
} from './card.style'

export const Card = ({ icon, title }) => {
    return (
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