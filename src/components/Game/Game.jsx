import style from './game.module.scss';
import Card from '../../components/Game/Card/Card';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import data from '../../data/data.json';
import { useState } from 'react';

export default function Game() {
  const [learntAll, setLearntAll] = useState(false);

  const [learntWordsIds, setLearntWordsIds] = useState([]);
  const [wordsNumber, setWordsNumber] = useState(0);

  const [clicked, setClicked] = useState(false);

  const [wordStock, setWordStock] = useState(data);

  const [index, setIndex] = useState(0);

  // считаем количество выученных слов
  const handleCount = (id) => {
    const idsArr = [...learntWordsIds];
    idsArr.push(id);
    let result = [];

    idsArr.forEach((el)=>{
      if (!result.includes(el)) {
            result.push(el);
          }
    })

    setLearntWordsIds(result);
    setWordsNumber(result.length)

    // проверяем, не выучены ли еще все слова
    if (result.length === wordStock.length) {
      setLearntAll(true)
    }
  }

  // листаем карточки
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

    // handleCount(wordStock[index].id);
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

        id = {wordStock[index].id}
        handleCount = {handleCount}
      />

      <button className={style.button} onClick={() => handleClick('next')}><RightOutlined/></button>

      {learntAll
        ? <div className={style.counter}>You've learnt all the words!</div>
        : <div className={style.counter}>Words learnt: {wordsNumber} / {wordStock.length}</div>
      }
      </div>
  )
}
