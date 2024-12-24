import policyServices from "../services/policy.services"

export const fetchOnePolicy = async (userId) => {
    try {
        const response = await
            policyServices.getOnePolicy(userId)
        return response.data
    } catch (error) {
        console.error(error)
    }
}
