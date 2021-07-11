import React from 'react'
import { ButtonStyle, HeaderStyle, LogoStyle, MarginButtonStyle, SearchStyle } from './header.style'

//TODO Текстовки
export const Header = () => {
    return (
        <HeaderStyle>
            <LogoStyle src="img/Logo.svg" />
            <MarginButtonStyle>В походе</MarginButtonStyle>
            <ButtonStyle>В городе</ButtonStyle>
            <SearchStyle />
        </HeaderStyle>
    )
}