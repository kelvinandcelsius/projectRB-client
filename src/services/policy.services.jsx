import axios from 'axios'

class PolicyServices {

    constructor() {

        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/policies`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    async analyzePolicy(key) {
        const response = await this.api.post(`/analyze-policy/${key}`)
        return response
    }

    createPolicy(policyData) {
        return this.api.post('/create-policy', policyData)
    }

}

const policyServices = new PolicyServices()

export default policyServices