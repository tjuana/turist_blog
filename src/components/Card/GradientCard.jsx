import React from 'react'
import {
    GradientCardStyled,
    GradientImageStyled,
    GradientShadowStyled,
    TitleStyled
} from './card.style'

export const GradientCard = ({ icon, title }) => {
    return (
        <GradientCardStyled src = {icon}>
            
            <GradientImageStyled src={icon} />
            {/* <GradientShadowStyled src={icon} />  */}
            {/* <TitleStyled>{title}</TitleStyled> */}
        </GradientCardStyled>
    )
}