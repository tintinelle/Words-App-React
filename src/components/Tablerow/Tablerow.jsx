import { useState, useEffect } from 'react';
import style from './tablerow.module.scss';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import classNames from 'classnames';

export default function Tablerow(props) {
    const {english, transcription, russian, tag} = props;

    const [editing, setEditing] = useState(false);

    const [state, setState] = useState({english, transcription, russian, tag});

    const [errors, setErrors] = useState({
        english: false,
        transcription: false,
        russian: false,
        tag: false
    });

    // useEffect (() => {
    //     setState(props)
    // },[props])

    const handleEdit = (e) => {
        setEditing(!editing);
    }

    const handleCancel = () => {
        setState({
            ...props,
        });
        handleEdit();
        setErrors({
        english: false,
        transcription: false,
        russian: false,
        tag: false
    })
    }

    const handleChangeInput = (event) => {
        if (event.target.dataset.name==='english' && event.target.value.match(/[а-яА-Я]/g)) {
            alert("Please use English letters only");
        }

        if (event.target.dataset.name==='russian' && event.target.value.match(/[a-zA-Z]/g)) {
            alert("Please use Cyrillic alphabet only");
        }

        setErrors({
            ...errors,
            [event.target.dataset.name]: false,
        })
        setState({
            ...state,
            [event.target.dataset.name]: event.target.value,
        });

        validate(event.target);
    }

    const validate = (input) => {
        if (input.value === "") {
            throwError(input);
        }
    }

    const throwError = (input) => {
        setErrors({
            ...errors,
            [input.dataset.name]: true,
        })
        // console.log(errors)
        // console.log(input.dataset.name)
    }

    const validateFlag = !errors.english && !errors.transcription && !errors.russian && !errors.tag;

    const errorInputEnglish = classNames(errors.english ? style.error : "");
    const errorInputTranscription = classNames(errors.transcription ? style.error : "");
    const errorInputRussian = classNames(errors.russian ? style.error : "");
    const errorInputTag = classNames(errors.tag ? style.error : "");

    return (
        <div>
            <div className={style.row}>
                <div>{errors.english ? 'Пустое поле' : state.english}</div>
                <div>{errors.transcription ? 'Пустое поле' : state.transcription}</div>
                <div>{errors.russian ? 'Пустое поле' : state.russian}</div>
                <div>{errors.tag ? 'Пустое поле' : state.tag}</div>
                <div>
                {validateFlag &&
                    <button onClick={handleEdit} className={style.button}><EditFilled /></button>
                }
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
                    className = {errorInputEnglish}
                    onChange={handleChangeInput}
                    />

                    <input 
                    data-name="transcription"
                    type="text" 
                    value={state.transcription}
                    className = {errorInputTranscription}
                    onChange={handleChangeInput} />

                    <input 
                    data-name="russian"
                    type="text" 
                    value={state.russian}
                    className = {errorInputRussian}
                    onChange={handleChangeInput} />

                    <input 
                    data-name="tag"
                    type="text" 
                    value={state.tag}
                    className = {errorInputTag}
                    onChange={handleChangeInput} />

                    {validateFlag
                    ? <div>
                    <button onClick={handleEdit} className={style.button_edit}>Save</button>
                    </div>
                    : <div>
                    <button className={style.button_error}>X</button>
                    </div>}

                    <div>
                        <button onClick={handleCancel} className={style.button_edit}>Cancel</button>
                    </div>
                </div>) 
            : ""}
        </div>
    )
}