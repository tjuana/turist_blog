import styled from '@emotion/styled'

export const HeaderStyle = styled.div`
    height: 115px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LogoStyle = styled.img`
    svg {
        height: 66px;
        weight: 103px;
    }
`
export const ButtonStyle = styled.button`
    background-color: transparent;
    padding: 0;
    margin; 0;
    margin-right: 28px;
`

export const MarginButtonStyle = styled(ButtonStyle)`
    margin-left: 290px;
`

//TODO Цвет
export const SearchStyle = styled.div`
    height: 32px;
    width: 224px;
    background: rgba(255, 255, 255, 0.43);
    border-radius: 48px;
`