import {createContext, useState, useEffect } from "react";
import GetWords from "../services/getWords";

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [valueContext, setValueContext] = useState([]);
    const values = {valueContext, setValueContext};

    // const getWords = async () => {
    //     const words = await GetWords.getWords()
    //     setValueContext(words);
    // }

    useEffect (() => {
        const getWords = async () => {
            const words = await GetWords.getWords()
            setValueContext(words);
        }
        getWords()
    },[])

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}
