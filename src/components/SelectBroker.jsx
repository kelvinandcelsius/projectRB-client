import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../contexts/theme.context'
import { AuthContext } from '../contexts/auth.context'
import { useNavigate, useLocation } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import CheckBox from './Atoms/Checkbox'
import { fetchCompanies, addSelectedCompanies } from '../utils/company-utils'
import { loadUser } from "../utils/user-utils"

const SelectBroker = () => {

    const { user } = useContext(AuthContext)

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'dark' : 'light'

    const navigate = useNavigate()
    const location = useLocation()
    const quoteId = location.state?.quoteId
    const { t } = useTranslation()

    const [userClientId, setUserClientId] = useState()
    const [companies, setCompanies] = useState([])
    const [selectedCompanies, setSelectedCompanies] = useState([])


    useEffect(() => {
        const loadData = async () => {
            try {
                const userData = await loadUser(user._id)
                setUserClientId(userData.clientId)
                const companiesRes = await fetchCompanies()
                setCompanies(companiesRes)
            } catch (err) {
                console.error(err)
            }
        }
        loadData()
    }, [])

    const handleCompanySelection = ({ event, company }) => {
        const { checked } = event.target

        if (checked) {
            setSelectedCompanies(prevCompanies => [...prevCompanies, company])
        } else {
            setSelectedCompanies(prevCompanies => prevCompanies.filter(comp => comp._id !== company._id))
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await addSelectedCompanies(userClientId, selectedCompanies, quoteId)
            navigate('/profile')
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            {companies.map(company => (
                <CheckBox
                    key={company._id}
                    type="checkbox"
                    label={company.name}
                    value={company._id}
                    checked={selectedCompanies.some(selectedComp => selectedComp._id === company._id)}
                    onChange={(event) => handleCompanySelection({ event, company })}
                    className="custom-checkbox"
                />
            ))}

            <button
                className={`w-36 py-2 mt-6 rounded-lg shadow-md transition-all duration-300
                 ${variant === 'light'
                        ? 'bg-brand-green text-secondary-green hover:bg-secondary-green hover:text-white'
                        : 'bg-secondary-green text-white hover:bg-highlight-coral hover:text-white'
                    }`}
                type="submit"
                onClick={handleSubmit}>{`${t('ready')}!`}
            </button>

        </ div >
    )
}

export default SelectBroker