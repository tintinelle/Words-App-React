import style from './table.module.scss';
import data from '../../data/data.json';
import TableRow from '../Tablerow/Tablerow';

export default function Table (props) {
  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead>
          <tr className={style.header}>
            <th>English</th>
            <th>Transcription</th>
            <th>Russian</th>
            <th>Tag</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
        {
      data.map((table) =>
      <TableRow 
      english={table.english} 
      transcription={table.transcription}
      russian={table.russian} 
      tag={table.tags}>
      </TableRow>
      )
      }
        </tbody>

        <tfoot>
          <tr>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
