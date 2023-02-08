import './../style/pageTable.scss';
import data from '../data/data.json';
import TableRow from '../components/Tablerow/Tablerow';

// апрол
import { useContext } from 'react';
import { Context } from '../context/context';

// export default function Table (props) {
  export default function Table () {
  const [valueContext, setValueContext] = useContext(Context);

  // const [wordState, setWordState] = useState(data);

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
          // data.map((item) => 
          // <TableRow 
          // key = {item.id} 
          // english = {item.english} 
          // transcription = {item.transcription}
          // russian = {item.russian} 
          // tag = {item.tags}
          // >
          // </TableRow>

          valueContext.map((item) => 
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
