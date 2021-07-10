import React from 'react';
import { CenterStyled } from '../index.style';
import { Card } from './Card/Card';

export const Main = () => {

    return(
        <CenterStyled>
            {/* Redux */}
            <Card icon='img/example.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
            <Card icon='img/example.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
            <Card icon='img/example.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
            <Card icon='img/example.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
            <Card icon='img/example.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
            <Card icon='img/example.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
        </CenterStyled>
    )
}