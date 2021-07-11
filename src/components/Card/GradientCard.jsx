import React from 'react'
import {
    GradientCardStyle,
    ImageStyled,
    ShadowStyled,
    TitleStyled
} from './card.style'

export const GradientCard = ({ icon, title }) => {
    return (
        <GradientCardStyle>
            <ImageStyled src={icon} />
            <ShadowStyled src={icon} />
            <TitleStyled>{title}</TitleStyled>
        </GradientCardStyle>
    )
}