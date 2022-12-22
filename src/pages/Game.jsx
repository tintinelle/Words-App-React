import './../style/pageGame.scss';
import data from '../data/data.json';
import Card from '../components/Card/Card';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

export default function Game() {
  const [learntAll, setLearntAll] = useState(false);
  const [learntWordsIds, setLearntWordsIds] = useState([]);
  const [wordsNumber, setWordsNumber] = useState(0);

  const [clickedTranslate, setClickedTranslate] = useState(false);

  const [wordStock, setWordStock] = useState(data);

  const [index, setIndex] = useState(0);

  // анимация 
  const [animation, setAnimation] = useState(false);
  useEffect (() => {
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false)
    }, 200);
},[index])

  // переводим карточку и считаем переведенные карточки
  const handleChange = () => {
    setClickedTranslate (true);
    handleCount(wordStock[index].id);
  }

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

    setClickedTranslate(false);
    setIndex(newIndex)
  }

  return (
    <div className="game__container">

      <button className="game__button" onClick={() => handleClick('prev')}><LeftOutlined/></button>
  
      <Card 
        english = {wordStock[index].english} 
        transcription = {wordStock[index].transcription}
        russian = {wordStock[index].russian} 
        tag = {wordStock[index].tags}
        clickedTranslate = {clickedTranslate}
        handleChange = {handleChange}
        animation = {animation}
      />

      <button className="game__button" onClick={() => handleClick('next')}><RightOutlined/></button>

      {learntAll
        ? <div className="game__counter">You've learnt all the words!</div>
        : <div className="game__counter">Words learnt: {wordsNumber} / {wordStock.length}</div>
      }
      </div>
  )
}
