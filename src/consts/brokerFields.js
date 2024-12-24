import brokerTypes from "./brokerTypes"
import brokerRegulationAuthorities from "./brokerRegulationAuthorities"
import brokerOpsScopes from "./brokerOpsScopes"
import spainProvincias from "./spainProvincias"

const brokerFields = [
    {
        component: "company-select",
        label: "select_your_company",
        id: "companySelect",
    },
    {
        component: "select",
        optionsArr: brokerTypes,
        label: "broker_type",
        name: "claseDeMediador",
        id: "brokerTypes",
        type: "text",
        placeholderIconLight: "placeholder-dark-grafitti bg-phone-input-light",
        placeholderIconDark: "placeholder-white bg-briefcase-input-dark"
    },
    {
        component: "select",
        optionsArr: brokerRegulationAuthorities,
        label: "regulation_authority",
        name: "autoridadDeControl",
        id: "regulationAuthority",
        type: "text",
        placeholderIconLight: "placeholder-dark-grafitti bg-phone-input-light",
        placeholderIconDark: "placeholder-white bg-briefcase-input-dark"
    },
    {
        label: "license_number",
        name: "claveDeInscripcion",
        id: "licenseNumber",
        type: "text",
        placeholderIconLight: "placeholder-dark-grafitti bg-phone-input-light",
        placeholderIconDark: "placeholder-white bg-email-input-dark"
    },
    {
        // component: "date",
        label: "registry_date",
        name: "fechaDeInscripcion",
        id: "registryDate",
        type: "date",
        placeholderIconLight: "",
        placeholderIconDark: ""
    },
    {
        label: "business_name",
        name: "razonSocial",
        id: "businessName",
        type: "text",
        placeholderIconLight: "placeholder-dark-grafitti bg-phone-input-light",
        placeholderIconDark: "placeholder-white bg-briefcase-input-dark"
    },
    {
        label: "business_number",
        name: "cifIdentificacion",
        id: "businessNumber",
        type: "text",
        placeholderIconLight: "placeholder-dark-grafitti bg-phone-input-light",
        placeholderIconDark: "placeholder-white bg-briefcase-input-dark"
    },
    {
        component: "select",
        optionsArr: brokerOpsScopes,
        label: "scope_of_operation",
        name: "ambitoDeOperacion",
        id: "scopeOfOps",
        type: "text",
        placeholderIconLight: "placeholder-dark-grafitti bg-phone-input-light",
        placeholderIconDark: "placeholder-white bg-briefcase-input-dark"
    },
    {
        component: "radio",
        label: "authorized_by_another_insurance_entity",
        name: "autorizadaPorOtraEntidadAseguradora",
        id: "authorizedByOtherInsuranceEntity",
        type: "radio",
        placeholderIconLight: "placeholder-dark-grafitti bg-phone-input-light",
        placeholderIconDark: "placeholder-white bg-briefcase-input-dark"
    },
    {
        component: "radio",
        label: "complementary",
        name: "complementario",
        id: "complementary",
        type: "radio",
        placeholderIconLight: "placeholder-dark-grafitti bg-phone-input-light",
        placeholderIconDark: "placeholder-white bg-briefcase-input-dark"
    },
    {
        component: "radio",
        label: "group_agent",
        name: "agenteDeGrupo",
        id: "groupAgent",
        type: "radio",
        placeholderIconLight: "placeholder-dark-grafitti bg-phone-input-light",
        placeholderIconDark: "placeholder-white bg-briefcase-input-dark"
    },
    {
        label: "website",
        name: "website",
        id: "brokerWeb",
        type: "web",
        placeholderIconLight: "placeholder-dark-grafitti bg-phone-input-light",
        placeholderIconDark: "placeholder-white bg-briefcase-input-dark"
    },
    {
        label: "street_address",
        name: "billingAddress",
        id: "billingStreet",
        type: "text",
        placeholderIconLight: "placeholder-dark-grafitti",
        placeholderIconDark: "placeholder-white"
    },
    {
        label: "postcode",
        name: "postcode",
        id: "billingPostcode",
        type: "text",
        placeholderIconLight: "placeholder-dark-grafitti",
        placeholderIconDark: "placeholder-white"
    },
    {
        label: "town_city",
        name: "townCity",
        id: "billingCity",
        type: "text",
        placeholderIconLight: "placeholder-dark-grafitti",
        placeholderIconDark: "placeholder-white"

    },
    {
        component: "select",
        optionsArr: spainProvincias,
        label: "provincia",
        name: "provincia",
        id: "billingProvincia",
        type: "text",
        placeholderIconLight: "placeholder-dark-grafitti",
        placeholderIconDark: "placeholder-white"
    },
    {
        label: "country",
        name: "country",
        id: "billingCountry",
        type: "text",
        placeholderIconLight: "placeholder-dark-grafitti",
        placeholderIconDark: "placeholder-white"
    },
]

export default brokerFields