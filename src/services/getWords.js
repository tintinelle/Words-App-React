class GetWords {
    static async getWords () {
        try {
            const responce = await fetch ('http://itgirlschool.justmakeit.ru/api/words');
            const data = await responce.json();
            return data
        }
        catch (error) {
            console.error(error)
        }
    }
}

export default GetWords