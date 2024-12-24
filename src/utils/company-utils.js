import companyServices from '../services/company.services'

export const fetchCompanies = async () => {
    try {
        const response = await
            companyServices.getAllCompanies()
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const addSelectedCompanies = async (clientId, selectedCompanies, quoteId) => {
    try {
        const response = await
            companyServices.addSelectedCompanies(clientId, selectedCompanies, quoteId)
        return response.data
    } catch (error) {
        console.error(error)
    }
}