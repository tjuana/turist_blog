import React from 'react';
import { Card } from './Card/Card';

export const Main = () => {
    return(
        <div>
            <h1>Hiking</h1>
            {/* Redux */}
            <Card icon='img/example.png' title="Как мы потерпели фиаско при подборе лодки на Эквадоре" />
        </div>
    )
}