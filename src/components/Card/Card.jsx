import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    CardStyled,
    ImageStyled,
    ShadowStyled,
    TitleStyled
} from './card.style'

import { actions } from '../../__data__'

const CardComponent = ({
    icon = 'img/example.png',
    title,
    loadImg,
    imgUrl,
    id,
    mediaId,
    imgLoading
}) => {
    let img = useRef()


    useEffect(() => {
        if (mediaId !== 0 ) {
            loadImg(icon, id, mediaId)
        }

    }, [loadImg])

    useEffect(() => {

        if (!imgLoading) {
            img.src = 'img/example2.png'
        }

    }, [imgLoading, img])



    const onError = () => {
        img.src = 'img/example2.png'
    }


    return (
        // нужно использовать 2 размера картинки
        <CardStyled>
            <ImageStyled 
                srcSet={icon}
                src={icon}
                ref={img2 => img = img2}
                alt=''
                onError={onError} 
                loading='lazy'
            />
            <ShadowStyled src={icon} />
            <TitleStyled>{title}</TitleStyled>
        </CardStyled>
    )
}

Card.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
}

//Это точно нужно????
const mapStateToProps = (state) => ({
    // imgLoad: selectors.getImgLoad(state),
})

const mapDispatchToProps = {
    loadImg: actions.loadImg
}

export const Card = connect(mapStateToProps, mapDispatchToProps)(CardComponent)
