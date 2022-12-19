import style from './card.module.scss';

export default function Card(props) {
    const {english, transcription, russian, clickedTranslate, handleChange} = props;

    return (
        <div className={style.card}>
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
    clicked :  "",
    setClicked :  ""
}
