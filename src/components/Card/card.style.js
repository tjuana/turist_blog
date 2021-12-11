import styled from '@emotion/styled'
import { cardPosition, font600, sizePicture } from '../../styles/utils.style'
import {
    BORDER_RADIUS_24,
    IMAGE_WIDTH,
    IMAGE_GRADIENT_WIDTH
} from '../../styles/constans.config'
import { css } from '@emotion/react'

export const TitleStyled = styled.p(font600, ({ theme }) => css`
    color: ${theme.titleCard};
    margin: 32px 0 0;
`)

export const ShadowStyled = styled.img`
    border-radius: ${BORDER_RADIUS_24}px;
    width: ${IMAGE_WIDTH}px;

    position: absolute;
`

export const ImageStyled = styled.img(sizePicture, `
    border-radius: ${BORDER_RADIUS_24}px;
    z-index: 1;
`)

export const CardStyled = styled.div(cardPosition, ({ theme }) => css`
    width: ${IMAGE_WIDTH}px;
    margin: 0 16px 72px;

    &:hover {
        ${ShadowStyled} {
            top: 13px;
            filter: blur(36px);
            opacity: 0.5;
        }

        ${TitleStyled} {
            color: ${theme.hoverTitleCard};
        }
    }
`)

export const GradientImageStyled = styled(ImageStyled)``

export const GradientCardStyled = styled.div(cardPosition, ({ theme }) => css`
    margin: 0 16px 52px;
    width: ${IMAGE_GRADIENT_WIDTH}px;

    &:hover {
        ${GradientShadowStyled} {
            top: 13px;
            filter: blur(36px);
            opacity: 0.5;
        }

        ${TitleStyled} {
            color: ${theme.hoverTitleCard};
        }
    }
`)

export const GradientShadowStyled = styled(ShadowStyled)`
    width: ${IMAGE_GRADIENT_WIDTH}px;
`

export const GradientLinearStyled = styled.div`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.81) 100%);
    border-radius: 24px;
    width: ${IMAGE_GRADIENT_WIDTH}px;
    position: absolute;
    height: 100%;
    z-index: 3;
`

export const GradientTitleStyled = styled.p(font600, ({ theme }) => css`
    color: ${theme.titleCard};
    position: absolute;
    z-index: 5;
    bottom: 0;
    left: 5px;
`)