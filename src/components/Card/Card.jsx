import React from 'react'
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