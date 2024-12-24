import { useState, useContext, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { AuthContext } from '@/contexts/auth.context'
import { ThemeContext } from '@/contexts/theme.context'
import { useTranslation } from "react-i18next"
// import { isValidPhoneNumber, formatPhoneNumber } from 'libphonenumber-js'
import authService from '@/services/auth.services'
import { loginAndAuthenticateUser, getSignupRedirectPath } from "@/utils/auth-utils"
import { signupValidationSchema, validateData, brokerValidationSchema } from '@/utils/validation-utils'
import NewBrokerForm from "./NewBrokerForm"
import userFields, { placeholderTextLightTheme, placeholderTextDarkTheme } from "@/consts/userFields"
import FormField from "./FormField"
import Button from "./Atoms/Button"

const SignUpForm = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const { authenticateUser, storeToken } = useContext(AuthContext)

    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false)
    const [errorMessages, setErrorMessages] = useState({})

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'light' : 'dark'

    const [signUpData, setSignUpData] = useState({
        email: '',
        phone: '',
        password: '',
        firstName: '',
        lastName: '',
        brokerData: {},
        role: location.state ? location.state.role : null
    })

    useEffect(() => {
        if (!location.state) {
            navigate('/pick-role')
        }
    }, [location, navigate])

    const handleInputChange = e => {
        const { value, name } = e.target

        if (name.startsWith("brokerData.")) {
            const fieldName = name.replace("brokerData.", "")
            setErrorMessages(prevErrors => ({
                ...prevErrors,
                brokerData: {
                    ...prevErrors.brokerData,
                    [fieldName]: ''
                }
            }))
        } else {
            setErrorMessages(prevErrors => ({ ...prevErrors, [name]: '' }))
        }

        if (name.startsWith("brokerData.")) {
            const [_, fieldName] = name.split(".")
            setSignUpData((prevState) => ({
                ...prevState,
                brokerData: {
                    ...prevState.brokerData,
                    [fieldName]: value,
                },
            }))
        } else {
            setSignUpData({
                ...signUpData,
                [name]: value,
            })
        }
    }

    useEffect(() => {
        if (confirmPasswordTouched && errorMessages.confirmPassword) {
            setErrorMessages(prevErrors => ({ ...prevErrors, confirmPassword: '' }))
        }
    }, [confirmPassword, confirmPasswordTouched])

    const handleNewUserSubmit = e => {
        e.preventDefault()

        const errors = {
            ...validateData({ ...signUpData, confirmPassword: confirmPassword }, signupValidationSchema),
            brokerData: signUpData.role === 'BROKER' ? validateData(signUpData.brokerData, brokerValidationSchema) : {}
        }
        setErrorMessages(errors)

        const hasErrorsOutsideBrokerData = Object.keys(errors).length > 1 || (Object.keys(errors).length === 1 && !errors.hasOwnProperty('brokerData'))

        const hasBrokerDataErrors = errors.brokerData && Object.keys(errors.brokerData).length > 0

        if (hasErrorsOutsideBrokerData || (signUpData.role === 'BROKER' && hasBrokerDataErrors)) {
            return
        }

        const dataToSubmit = { ...signUpData }
        if (signUpData.role !== 'BROKER') {
            delete dataToSubmit.brokerData
        }

        authService
            .signup(dataToSubmit)
            .then(() => loginAndAuthenticateUser(dataToSubmit, storeToken, authenticateUser, navigate, getSignupRedirectPath))

            .catch(err => {
                if (err.response && err.response.status === 409) {
                    const { field, message } = err.response.data
                    setErrorMessages({ [field]: message })
                    console.error("client catch errorMessages", errorMessages)
                } else {
                    console.error("Error details:", err.response || err)
                }
            })
    }

    const { role, brokerData } = signUpData

    return (

        <div className="flex flex-col justify-center w-3/4">

            <form onSubmit={handleNewUserSubmit} >
                <h2
                    className={`text-center text-xl font-extrabold mb-4 
                        ${variant === 'light'
                            ? 'text-dark-grafitti'
                            : 'text-white'
                        }
                            `}
                >
                    {t("signup")}
                </h2>

                {userFields.filter(field => {
                    if ((field.id === 'firstName' || field.id === 'lastName') && role !== 'BROKER') {
                        return false
                    }
                    return true
                }).map(field => {
                    const { label, htmlFor, placeholder, type, autoComplete, id, placeholderIconLight, placeholderIconDark } = field

                    return (
                        <FormField
                            key={id}
                            label={t(label)}
                            htmlFor={htmlFor}
                            placeholder={t(placeholder)}
                            type={type}
                            autoComplete={autoComplete}
                            value={signUpData[id]}
                            name={id}
                            id={id}
                            onChange={handleInputChange}
                            placeholderIconLight={placeholderIconLight}
                            placeholderIconDark={placeholderIconDark}
                            variant={variant}
                            error={t(errorMessages[id])}
                        />
                    )
                })}

                <FormField
                    label={t('password_confirm')}
                    htmlFor='confirmPassword'
                    placeholder={t('password_confirm')}
                    type="password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    name="confirmPassword"
                    id="confirmPassword"
                    onChange={e => {
                        if (!confirmPasswordTouched) setConfirmPasswordTouched(true)
                        setConfirmPassword(e.target.value)
                    }}
                    placeholderIconLight={placeholderTextLightTheme}
                    placeholderIconDark={placeholderTextDarkTheme}
                    variant={variant}
                    error={t(errorMessages.confirmPassword)}
                />

                {
                    role === 'BROKER' && (
                        <NewBrokerForm
                            onChange={handleInputChange}
                            initialBrokerData={brokerData}
                            error={errorMessages.brokerData}
                        />
                    )
                }

                <div className="flex items-center mt-8">
                    <Button className="w-full"
                        text={t('ready')}
                        disabledStatus=""
                    />
                </div>
            </form >

        </div >
    )
}

export default SignUpForm