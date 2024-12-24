import { useState, useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import policyServices from "../../services/policy.services"
import { policyValidationSchema, validateData } from '../../utils/validation-utils'
import FormField from "../FormField"
import SelectFormField from '../SelectFormField'
import policyFields from '../../consts/policyFields'

const PolicyFormModal = ({ theme, show, handleClose, title, analyzedData }) => {

    const navigate = useNavigate()
    const { t } = useTranslation()

    const variant = theme === 'light' ? 'dark' : 'light'

    const [errorMessages, setErrorMessages] = useState({})

    const [policyData, setPolicyData] = useState(analyzedData || {
        policyCompany: '',
        policyType: '',
        expiry: '',
        premium: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setErrorMessages(prevErrors => ({ ...prevErrors, [name]: '' }))
        setPolicyData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const errors = validateData(policyData, policyValidationSchema)
        setErrorMessages(errors)

        if (Object.keys(errors).length > 0) {
            return
        }

        try {
            const response = await policyServices.createPolicy(policyData)
            const { quoteRequest } = response.data
            const policyId = quoteRequest.policyId
            const quoteId = quoteRequest._id
            navigate('/select-broker', { state: { policyId, quoteId } })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${show ? '' : 'hidden'}`}>
            <div
                className={`rounded-md shadow-lg p-6
                    ${variant === 'light'
                        ? 'bg-gray-200 text-dark-grafitti'
                        : 'bg-brand-green text-white'
                    }`
                }
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className={`pr-4 ${variant === 'light'
                        ? 'text-dark-grafitti'
                        : 'text-white'
                        }`}
                    >
                        {title}
                    </h2>
                    <button
                        onClick={handleClose}
                        className={`text-sm hover:text-secondary-green focus:outline-none
                        ${variant === 'light'
                                ? 'text-dark-grafitti'
                                : 'text-white'
                            }
                        `}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit}>

                    {policyFields.map(field => {
                        const { name, id, type, placeholderIconLight, placeholderIconDark, component, optionsArr } = field
                        const label = t(field.label)

                        return (
                            component === 'select' ? (
                                <SelectFormField
                                    key={id}
                                    label={label}
                                    htmlFor={id}
                                    id={id}
                                    value={policyData[name] || ""}
                                    optionsArr={optionsArr}
                                    name={name}
                                    onChange={handleInputChange}
                                    error={t(errorMessages[id])}
                                />

                            ) : (
                                <FormField
                                    key={id}
                                    label={label}
                                    htmlFor={id}
                                    id={id}
                                    placeholder={label}
                                    type={type}
                                    value={policyData[name] || ""}
                                    name={name}
                                    onChange={handleInputChange}
                                    placeholderIconLight={placeholderIconLight}
                                    placeholderIconDark={placeholderIconDark}
                                    error={t(errorMessages[id])}
                                />
                            )
                        )
                    })}

                    <button
                        className={`font-bold border-none rounded-lg shadow-md transition-all duration-300 mr-0 mt-6 w-full p-1 
                        hover:bg-highlight-coral hover:text-white 
                        ${variant === 'light'
                                ? 'bg-secondary-green text-white'
                                : 'bg-white text-secondary-green'
                            }`
                        }
                        type="submit"
                    >
                        {t('ready')}
                    </button>

                </form>
            </div>
        </div>
    )
}

export default PolicyFormModal