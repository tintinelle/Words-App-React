import style from './game.module.scss';
import Card from './Card/Card';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import data from '../../data/data.json';
import { useState } from 'react';

export default function Game() {
  const [clicked, setClicked] = useState(false);

  const [wordStock, setWordStock] = useState(data);

  const [index, setIndex] = useState(0);

  const handleClick = (direction) => {
    let newIndex = index;

    (direction === 'next')
    ? ++newIndex
    : --newIndex;

    if (newIndex >= wordStock.length) {
      newIndex = 0;
    }

    if (newIndex < 0) {
      newIndex = wordStock.length-1;
    }

    setClicked(false);
    setIndex(newIndex);
  }

  return (
    <div className={style.game}>

      <button className={style.button} onClick={() => handleClick('prev')}><LeftOutlined/></button>

      <Card 
        english = {wordStock[index].english} 
        transcription = {wordStock[index].transcription}
        russian = {wordStock[index].russian} 
        tag = {wordStock[index].tags}
        clicked = {clicked}
        setClicked = {setClicked}
      />

      <button className={style.button} onClick={() => handleClick('next')}><RightOutlined/></button>
    </div>
  )
}
