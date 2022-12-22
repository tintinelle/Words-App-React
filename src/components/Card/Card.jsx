import style from './card.module.scss';
import classNames from 'classnames';

export default function Card(props) {
    const {english, transcription, russian, clickedTranslate, handleChange, animation} = props;
    const classCard = classNames(style.card, animation ? style.animation : "")

    return (
        <div className={classCard}>
            <div className={style.word}>{english}</div>
            <div className={style.transcription}>{transcription}</div>
            <div onClick = {handleChange} className={style.translate}>
                {clickedTranslate 
                ? <div className={style.word}>{russian}</div>
                : <button className={style.button_translate}>Show translation</button>
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
