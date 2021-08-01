import styled from '@emotion/styled'

export const CenterStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

// TODO Тут типа будет медиа когда будет адаптив
export const MediaStyled = styled.div`
    @media (min-width: 1052px) {
        width: 1052px;
    }

    @media (max-width: 1052px) {
        width: 300px;
    }
`