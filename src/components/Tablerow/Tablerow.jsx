import style from './tablerow.module.scss';
import { EditFilled, DeleteFilled } from '@ant-design/icons';

export default function Tablerow(props) {
    return (
        <tr className={style.row}>
            <th>{props.english}</th>
            <th>{props.transcription}</th>
            <th>{props.russian}</th>
            <th>{props.tag}</th>
            <th>
                <button className={style.button}><EditFilled /></button>
            </th>
            <th>
                <button className={style.button}><DeleteFilled/></button>
            </th>
        </tr>
    )
}
