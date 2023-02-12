class EDIT {
    static async editWord(id) {
        try {
            const responce = await fetch (`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, 
            {method: 'POST'});
            const data = await responce.json()
            return data
        }
        catch(error) {
            console.error(error)
        }
    }
}

export default EDIT;