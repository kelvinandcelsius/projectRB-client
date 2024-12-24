import axios from 'axios'

class BidServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/bids`
        })
    }

    createBid(bidData) {
        return this.api.post('/create-bid', bidData)
    }

    editOneBid(id, bidData) {
        return this.api.put(`/edit/${id}`, bidData)
    }

    deleteOneBid(id) {
        return this.api.delete(`/delete/${id}`)
    }
}
const bidServices = new BidServices()

export default bidServices