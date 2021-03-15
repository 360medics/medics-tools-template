import axios from "axios"

class DataServiceClass {
    $data: any

    load(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            axios.get("./data.json")
                .then(response => {
                    this.$data = response.data
                    resolve()
            }).catch(e => {
                console.log(e)
                reject(e)
            })
        })
    }
    
    getList(slug: string){
        // boucle
    }
}

export default new DataServiceClass()