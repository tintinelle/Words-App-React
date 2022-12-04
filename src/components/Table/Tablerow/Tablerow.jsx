import { useState } from 'react';
import style from './tablerow.module.scss';
import { EditFilled, DeleteFilled } from '@ant-design/icons';

export default function Tablerow(props) {
    const {english, transcription, russian, tag} = props;

    const [editing, setEditing] = useState();
    const [value, setValue] = useState("");

    const editWord = () => {
        setEditing(!editing)
    }

    const handleChangeInput = (event) => {
        setValue(event.target.value) 
        console.log(event.target.value) 
    }

    return (
        <div>
            <div className={style.row}>
                <div>{english}</div>
                <div>{transcription}</div>
                <div>{russian}</div>
                <div>{tag}</div>
                <div>
                    <button onClick={editWord} className={style.button}><EditFilled /></button>
                </div>
                <div>
                    <button className={style.button}><DeleteFilled/></button>
                </div>
            </div>

            {editing 
            ? (
                <div className={style.row}>
                    <input 
                    name="english"
                    type="text" 
                    // value={english} 
                    onChange={handleChangeInput} 
                    placeholder={english}/>
                    <input 
                    name="transcription"
                    type="text" 
                    // value={english} 
                    onChange={handleChangeInput} 
                    placeholder={transcription}/>
                    <input 
                    name="russian"
                    type="text" 
                    // value={english} 
                    onChange={handleChangeInput} 
                    placeholder={russian}/>
                    <input 
                    name="tag"
                    type="text" 
                    // value={english} 
                    onChange={handleChangeInput} 
                    placeholder={tag}/>
                    <div>
                        <button className={style.button_edit}>Save</button>
                    </div>
                    <div>
                        <button onClick={editWord} className={style.button_edit}>Cancel</button>
                    </div>
                </div>) 
            : ""}
        </div>
    )
}
