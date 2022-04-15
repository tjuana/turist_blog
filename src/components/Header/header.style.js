import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { font600 } from '../../styles/utils.style'

export const HeaderStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 115px;
`

export const LogoStyle = styled.img`
    svg {
        height: 66px;
        weight: 103px;
    }
`
export const ButtonStyle = styled.button(font600, ({ theme }) => css`
    cursor: pointer;
    background-color: transparent;
    padding: 0;
    margin; 0;
    margin-right: 28px;

    font-size: 17px;
    line-height: 21px;
    color: ${theme.buttonHeader};
`)

export const MarginButtonStyle = styled(ButtonStyle)`
    margin-left: 310px;
`

export const SearchStyle = styled.div`
    height: 32px;
    width: 224px;
    background: ${({ theme }) => theme.search};
    border-radius: 48px;
`
