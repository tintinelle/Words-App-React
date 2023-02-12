import { makeAutoObservable } from 'mobx';
import GET from '../services/getWords';
import DEL from '../services/deleteWord';
import EDIT from '../services/editWord';

export default class Words {
    constructor() {
        this.words = [];
        makeAutoObservable(this)
        this.loadData()
    }
    loadData = async () => {
        const data = await GET.getWords()
        this.words = data
    }
    deleteWord = async (id) => {
        this.words = this.words.filter(word => word.id !== id)
        await DEL.deleteWord(id)
    }
    editWord = async (word) => {
        await EDIT.editWord(word.id);
    }
}