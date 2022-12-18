import { useState, useEffect } from 'react';
import style from './tablerow.module.scss';
import { EditFilled, DeleteFilled } from '@ant-design/icons';

export default function Tablerow(props) {
    const {english, transcription, russian, tag} = props;

    const [editing, setEditing] = useState();
    const [state, setState] = useState('');

    useEffect (() => {
        setState(props)
    },[props])

    const handleEdit = () => {
        setEditing(!editing)
    }

    const handleCancel = () => {
        setState({
            ...props,
        });
        handleEdit();
    }

    const handleChangeInput = (event) => {
        setState({
            ...state,
            [event.target.dataset.name]: event.target.value,
        });
    }

    return (
        <div>
            <div className={style.row}>
                <div>{state.english}</div>
                <div>{state.transcription}</div>
                <div>{state.russian}</div>
                <div>{state.tag}</div>
                <div>
                    <button onClick={handleEdit} className={style.button}><EditFilled /></button>
                </div>
                <div>
                    <button className={style.button}><DeleteFilled/></button>
                </div>
            </div>

            {editing 
            ? (
                <div className={style.row}>
                    <input 
                    data-name="english"
                    type="text" 
                    value={state.english} 
                    onChange={handleChangeInput}/>

                    <input 
                    data-name="transcription"
                    type="text" 
                    value={state.transcription}
                    onChange={handleChangeInput} />

                    <input 
                    data-name="russian"
                    type="text" 
                    value={state.russian}
                    onChange={handleChangeInput} />

                    <input 
                    data-name="tag"
                    type="text" 
                    value={state.tag}
                    onChange={handleChangeInput} />

                    <div>
                        <button onClick={handleEdit} className={style.button_edit}>Save</button>
                    </div>
                    <div>
                        <button onClick={handleCancel} className={style.button_edit}>Cancel</button>
                    </div>
                </div>) 
            : ""}
        </div>
    )
}
