import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../contexts/theme.context'
import { fetchCompanies } from '../utils/company-utils'
import { useTranslation } from 'react-i18next'
import ErrorMessage from "./ErrorMessage"

const CompanySelectForm = ({ label, htmlFor, id, value, onChange, error }) => {

    const { theme, switchTheme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'dark' : 'light'

    const { t } = useTranslation()

    const [companies, setCompanies] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        fetchCompanies()
            .then(data => setCompanies(data))
            .catch(error => console.error(error))
    }, [])

    const handleSelect = (company) => {
        onChange({ target: { value: company._id, name: 'brokerData.insuranceCompany' } })
        setIsOpen(false)
    }

    return (
        <>
            <div className="mb-3">
                <button
                    id={id}
                    className={`w-full p-2 bg-transparent border-none shadow-md text-left
                    outline-none focus:outline-none active:outline-none 
                    bg-no-repeat bg-right-10-center bg-20
                     ${variant === 'light'
                            ? ' bg-briefcase-input-light'
                            : 'bg-briefcase-input-dark'
                        }`
                    }
                    name="brokerData.insuranceCompany"
                    onClick={(e) => {
                        e.preventDefault()
                        setIsOpen(!isOpen)
                    }}
                    value={value}
                >
                    {companies.find(company => company._id === value)?.name || t('select_your_company')}
                </button>
                <label htmlFor={htmlFor} className="sr-only">{label}</label>
                <ErrorMessage message={error} />
            </div>
            {
                isOpen && (
                    <div>
                        <ul className="list-none">

                            {companies.map(company => (

                                <li
                                    className="flex justify-start mb-2 hover:bg-black hover:bg-opacity-25 rounded cursor-pointer"
                                    key={company._id}
                                    onClick={() => handleSelect(company)}
                                >

                                    <div className="w-6 h-6 mr-2">
                                        <img
                                            className="w-full h-full object-cover rounded-full"
                                            src={company.logo}
                                            alt={company.name}
                                        />
                                    </div>

                                    <div>
                                        {company.name}

                                    </div>
                                </li>

                            )
                            )}

                        </ul>
                    </div>
                )}
        </>
    )
}

export default CompanySelectForm