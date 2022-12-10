import { useState } from 'react';
import style from './card.module.scss';

export default function Card(props) {
    const {english, transcription, russian, clicked, setClicked} = props;

    const handleClick = () => {
        setClicked (!clicked);
    }

    return (
        <div className={style.card}>
            <div className={style.word}>{english}</div>
            <div className={style.transcription}>{transcription}</div>
            <div onClick = {handleClick} className={style.translate}>
                {clicked 
                ? <div className={style.word}>{russian}</div>
                : <button className={style.button_translate}>Show translation</button>
                }
            </div>
        </div>
    )
}
