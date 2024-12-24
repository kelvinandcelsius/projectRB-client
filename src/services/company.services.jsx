import axios from 'axios'

class CompanyServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/companies`
        })
    }

    createCompany() {
        return this.api.post('/create-company')
    }

    getAllCompanies() {
        return this.api.get('/get-all-companies')
    }

    addSelectedCompanies(clientId, selectedCompanies, quoteId) {
        return this.api.post('/add-selected-companies', { clientId, selectedCompanies, quoteId })
    }

}

const companyServices = new CompanyServices()

export default companyServices