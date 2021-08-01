import React from 'react';
import { CenterStyled } from '../index.style';
import { GradientStyled } from '../components/main.style'
import { Card } from './Card/Card';
import { GradientCard } from './Card/GradientCard';
import { Header } from './Header/Header';

export const Main = () => {

    return(
        <CenterStyled>
            {/* Redux */}
            <GradientStyled>
                <Header />
                {/* Из массива должно браться первых три элемента */}
                <GradientCard icon='img/example.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
                <GradientCard icon='img/example3.jpeg' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
                <GradientCard icon='img/example2.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
            </GradientStyled>
            <Card icon='img/example.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
            <Card icon='img/example3.jpeg' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
            <Card icon='img/example2.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
            <Card icon='img/example.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
            <Card icon='img/example2.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
            <Card icon='img/example.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
            <Card icon='img/example3.jpeg' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
            <Card icon='img/example.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
        </CenterStyled>
    )
}