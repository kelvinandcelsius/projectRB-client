import axios from 'axios'

class BrokerServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/broker`
        })
    }
    editOneBroker(id, brokerData) {
        return this.api.put(`/edit/${id}`, brokerData)
    }

    deleteOneBroker(id) {
        return this.api.delete(`/delete/${id}`)
    }
}
const brokerServices = new BrokerServices()

export default brokerServices