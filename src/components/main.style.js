import styled from '@emotion/styled'
import { CenterStyled } from '../index.style'

export const GradientStyled = styled(CenterStyled)`
    width: 100%;
    border-radius: 32px;
    background: ${({ theme }) => theme.gradient};
    margin-bottom: 88px;
    margin-top: 42px;
`
