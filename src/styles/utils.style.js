import { css } from '@emotion/react'
import { MAX_HEIGHT, MIN_HEIGHT } from './constans.config'

export const font600 = css`
    font-family: Commissioner;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
`

export const cardPosition = css`
    position: relative;
    display: flex;
    flex-direction: column;
`

export const sizePicture  = css`
    min-height: ${MIN_HEIGHT}px;
    max-height: ${MAX_HEIGHT}px;
`
