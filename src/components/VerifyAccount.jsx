import { useContext, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation, Trans } from "react-i18next"
import { AuthContext } from "@/contexts/auth.context"
import { ThemeContext } from '@/contexts/theme.context'
import FormField from "./FormField"
import Button from "./Atoms/Button"
import { placeholderTextLightTheme, placeholderTextDarkTheme } from "@/consts/userFields"

const VerifyAccount = () => {

    const { t } = useTranslation()
    const navigate = useNavigate()

    const { authenticateUser, storeToken } = useContext(AuthContext)

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'light' : 'dark'

    const [verificationCode, setVerificationCode] = useState(null)
    const [errorMessages, setErrorMessages] = useState({})


    const email = 'wip'

    const handleInputChange = e => {
        const { value } = e.target
        setVerificationCode(value)
    }

    const handleSubmit = e => {

        e.preventDefault()



    }

    return (
        <div className="w-3/4">
            <form onSubmit={handleSubmit}>
                <h2
                    className={`text-center text-xl font-extrabold mb-4`}
                >
                    {t("verify_account")}
                </h2>

                <p className={`text-center`}>
                    <Trans
                        i18nKey="code_sent"
                        values={{ email: email ? email : t('no_email_found') }}
                        components={{ span: <span className="font-bold" /> }}
                    />
                </p>
                <p className={`text-center`}>
                    {t('enter_code_to_verify')}
                </p>


                <FormField
                    label={t('enter_code')}
                    htmlFor='enterCode'
                    placeholder={t('4_digit_code')}
                    type='number'
                    autoComplete='off'
                    value={verificationCode}
                    name='enterCode'
                    id='enterCode'
                    onChange={handleInputChange}
                    placeholderIconLight={placeholderTextLightTheme}
                    placeholderIconDark={placeholderTextDarkTheme}
                    variant={variant}
                // error={t(errorMessages[id])}
                />

                <div className="flex items-center mt-8">
                    <Button className="w-full"
                        text={t('verify_account')}
                        disabledStatus=""
                    />
                </div>
            </form>

            <p
                className={`w-full text-center mt-8 
                         ${variant === 'light'
                        ? ' text-dark-grafitti '
                        : 'text-white'
                    }`}
            >
                {t("didnt_receive_code")}{" "}
                <Link
                    className={`underline underline-offset-2 hover:text-highlight-coral
                             ${variant === 'light'
                            ? ' text-brand-green'
                            : 'text-white'
                        }`}
                    to="#"
                >
                    {t("resend")}
                </Link>
            </p>
            <p>{t('resend_in')}</p>
        </div>
    )
}

export default VerifyAccount