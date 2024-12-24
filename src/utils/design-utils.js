import { iconMap, gemIcon } from "../consts/insuranceTypeIconMap"

const getIcon = (policyType) => {
    return iconMap[policyType] || gemIcon
}

export { getIcon }