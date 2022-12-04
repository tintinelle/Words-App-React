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
          data.map((table) =>
          <TableRow 
          key = {table.id} 
          english = {table.english} 
          transcription = {table.transcription}
          russian = {table.russian} 
          tag = {table.tags}
          // wordState = {wordState}
          // setWordState = {setWordState}
          >
          </TableRow>

          )
        }
      </div>
    </div>
  )
}
