import React from 'react';
import { CenterStyled } from '../index.style';
import { Card } from './Card/Card';
import { GradientCard } from './Card/GradientCard';
import { Header } from './Header/Header';
import { GradientStyle } from './main.style';

export const Main = () => {

    return(
        <CenterStyled>
            {/* Redux */}
            <GradientStyle>
                <Header />
                {/* Из массива должно браться первых три элемента */}
                <GradientCard icon='img/example.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
                <GradientCard icon='img/example.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
                <GradientCard icon='img/example.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
            </GradientStyle>
            <Card icon='img/example.png' title="1" />
            <Card icon='img/example.png' title="2" />
            <Card icon='img/example.png' title="3" />
            <Card icon='img/example.png' title="4" />
            <Card icon='img/example.png' title="5" />
            <Card icon='img/example.png' title="6" />
        </CenterStyled>
    )
}