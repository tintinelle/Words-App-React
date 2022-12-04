import { useState } from 'react';
import style from './game.module.scss';

export default function Game(props) {
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed (!pressed);
  }

  return (
    <div className={style.game}>
      <div className={style.card}>
        <div className={style.word}>{props.word}</div>
        <div className={style.transcription}>{props.transcription}</div>
        <div {...props} onClick = {handleChange} className={style.translate}>
          {pressed 
          ? <div className={style.word}>{props.translation}</div>
          : <button className={style.button_translate}>Show translation</button>
          }
        </div>
      </div>
    </div>
  )
}
