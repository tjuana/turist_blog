import styled from '@emotion/styled'

//TODO Вынести в файл с константами
const IMAGE_WIDTH  = 208
const IMAGE_GRADIENT_WIDTH = 288
const BORDER_RADIUS_24 = 24

//TODO: Изменить цвет 
//TODO Шрифт функция?
export const TitleStyled = styled.p`
    color: ${({ theme }) => theme.fontCard};
    font-family: Commissioner;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin: 32px 0 0;
`

export const ShadowStyled = styled.img`
    border-radius: ${BORDER_RADIUS_24}px;
    width: ${IMAGE_WIDTH}px;
    position: absolute;
`

//TODO Нужно добавить мин и макс высоту
export const ImageStyled = styled.img`
    border-radius: ${BORDER_RADIUS_24}px;
    z-index: 1;
`

//TODO Объединить позишион 
export const CardStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${IMAGE_WIDTH}px;
    margin: 0 16px 72px;

    &:hover {
        ${ShadowStyled} {
            top: 13px;
            filter: blur(36px);
        }
    }
`
export const GradientCardStyle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 16px 52px;
    width: ${IMAGE_GRADIENT_WIDTH}px;
`