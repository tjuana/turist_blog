import React from 'react'
import {
    GradientCardStyled,
    GradientImageStyled,
    GradientShadowStyled,
    GradientTitleStyled,
    GradientLinearStyled,
} from './card.style'

export const GradientCard = ({ icon, title }) => {
    return (
        <GradientCardStyled src = {icon}>
            <GradientLinearStyled />
            <GradientImageStyled src={icon} />
            <GradientShadowStyled src={icon} /> 
            <GradientTitleStyled>{title}</GradientTitleStyled>
        </GradientCardStyled>
    )
}