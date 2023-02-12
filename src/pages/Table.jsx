import './../style/pageTable.scss';
// import data from '../data/data.json';
import TableRow from '../components/Tablerow/Tablerow';
// import { useEffect } from 'react';

// mobX
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";
  
const Table = inject(['WordsStore'])(observer(({ WordsStore }) => {

  return (
    <div className="table__container">
      <div className="table__tablewrap">
        <div className="table__header">
          <div>English</div>
          <div>Transcription</div>
          <div>Russian</div>
          <div>Tag</div>
          <div>Edit</div>
          <div>Delete</div>
        </div>

        {
          WordsStore.words.map((word) => 
          <TableRow 
          key = {word.id} 
          word={word}
          >
          </TableRow>
          )
        }
      </div>
    </div>
  )
}));

export default Table;
