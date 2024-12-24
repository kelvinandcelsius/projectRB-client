import policyTypes from './policyTypes'

const policyFields = [

    {
        label: "company",
        name: "policyCompany",
        id: "policyCompany",
        type: "text",
        placeholderIconLight: "placeholder-dark-grafitti bg-briefcase-input-light",
        placeholderIconDark: "placeholder-white bg-briefcase-input-dark"
    },
    {
        component: "select",
        optionsArr: policyTypes,
        label: "policy_type",
        name: "policyType",
        id: "policyType",
        type: "text",
        placeholderIconLight: "placeholder-dark-grafitti bg-phone-input-light",
        placeholderIconDark: "placeholder-white bg-briefcase-input-dark"
    },
    {
        // component: "date",
        label: "expiry_date",
        name: "expiry",
        id: "expiry",
        type: "date",
        placeholderIconLight: "placeholder-dark-grafitti",
        placeholderIconDark: "placeholder-white"
    },
    {
        label: "premium",
        name: "premium",
        id: "premium",
        type: "number",
        placeholderIconLight: "placeholder-dark-grafitti",
        placeholderIconDark: "placeholder-white"
    },


]

export default policyFields