import { useContext, useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'
import { AuthContext } from '@/contexts/auth.context'
import { ThemeContext } from '@/contexts/theme.context'
import NavigationHome from '@/components/NavigationHome'
import heroImg from '@/assets/images/hero-car-homepage.svg'


const HomePage = () => {

    const navigate = useNavigate()
    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'light' : 'dark'
    const { t } = useTranslation()
    const { user } = useContext(AuthContext)

    const [sessionExpired, setSessionExpired] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("authToken")
        if (!user && token) {
            setSessionExpired(true)
        }

        if (user && token) {
            navigate('/profile')
        }
    }, [user])

    return (
        <div
            className={`h-full w-full font-inter 
                    ${variant === 'light'
                    ? 'bg-bg-light-gray'
                    : ''}`}
        >
            <NavigationHome className="fixed top-0 left-0 w-full z-10" />

            <div
                className="flex flex-col lg:flex-row justify-center items-center px-16 gap-4 h-full"
                style={{ marginTop: '-3rem' }}
            >
                <div className="flex-1">
                    <h1 className="font-bold text-4xl text-left mb-4">
                        <Trans
                            i18nKey="sign_in_to_renew_your_policy"
                            components={{ br: <br />, span: <span className="text-brand-green" /> }}
                        />
                    </h1>
                    <p className="text-left">{t("homepage_text")}</p>
                </div>

                <div className="flex-1 flex justify-center">
                    <img src={heroImg} className="lg:w-[500px] lg:h-[500px] w-64 h-64" />
                </div>

                <div className="flex-1 flex flex-col justify-center items-center">
                    <Outlet />
                    <div className="h-16">
                        {sessionExpired && <p>{t('session_expired_please_log_in_again')}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
