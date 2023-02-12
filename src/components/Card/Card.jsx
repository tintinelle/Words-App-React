import style from './card.module.scss';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { observer } from "mobx-react-lite";
import { inject } from 'mobx-react';

function Card({WordsStore, index, clickedTranslate, handleChange, animation}) {
    const classCard = classNames(style.card, animation ? style.animation : "")

    const focusBtn = useRef(null);
    useEffect (() => {
        focusBtn.current.focus();
    }, [index])

    return (
        <div className={classCard}>
            <div className={style.word}>{WordsStore.words[index].english}</div>
            <div className={style.transcription}>{WordsStore.words[index].transcription}</div>
            <div onClick = {handleChange} className={style.translate}>
                {clickedTranslate 
                ? <div className={style.word}>{WordsStore.words[index].russian}</div>
                : <button ref={focusBtn} className={style.button_translate}>Show translation</button>
                }
            </div>
        </div>
    )
}

Card.defaultProps = {
    english : "Sorry, there are no words",
    transcription : "",
    russian :  "",
    clickedTranslate  :  ""
}
export default inject(['WordsStore'])(observer(Card));