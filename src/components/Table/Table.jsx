// import { useState } from 'react';
import style from './table.module.scss';
import data from '../../data/data.json';
import TableRow from './Tablerow/Tablerow';

export default function Table (props) {
  // const [wordState, setWordState] = useState(data);

  return (
    <div className={style.container}>
      <div className={style.table}>
        <div className={style.header}>
          <div>English</div>
          <div>Transcription</div>
          <div>Russian</div>
          <div>Tag</div>
          <div>Edit</div>
          <div>Delete</div>
        </div>

        {
          data.map((item) => 
          <TableRow 
          key = {item.id} 
          english = {item.english} 
          transcription = {item.transcription}
          russian = {item.russian} 
          tag = {item.tags}
          >
          </TableRow>

          )
        }
      </div>
    </div>
  )
}

  // if ({table.english} !== "dog") {