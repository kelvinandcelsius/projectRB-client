import axios from 'axios'

class ClientServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/client`
        })
    }

    editOneClient(id, clientData) {
        return this.api.put(`/edit/${id}`, clientData)
    }

    deleteOneClient(id) {
        return this.api.delete(`/delete/${id}`)
    }
}

const clientServices = new ClientServices()

export default clientServices