import './../style/pageTable.scss';
import data from '../data/data.json';
import TableRow from '../components/Tablerow/Tablerow';

// 
import { observer, inject } from 'mobx-react';


export default function Table (props) {

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
