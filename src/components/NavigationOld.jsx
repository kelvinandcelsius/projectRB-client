import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AuthContext } from '../contexts/auth.context'
import { ThemeContext } from '../contexts/theme.context'
import Icon from '../assets/images/weather.png'
import Icon2 from '../assets/images/weather2.png'

const Navigation = () => {

    const { user, logout } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleLogout = () => {
        logout(navigate)
        navigate('/login')
    }
    const { theme, switchTheme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'dark' : 'light'

    const { t } = useTranslation()

    return (
        <nav className={`bg-${variant} border-2 border-red-800 text-${variant === 'light' ? 'black' : 'white'} px-4 py-3  shadow-md w-full `}>
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">PROJECT RB</Link>

                <ul className="flex items-center space-x-6">
                    {user ? (
                        <>
                            <li>
                                <Link to="/profile" className="text-e6dfdf font-bold mr-4 transition duration-300 hover:text-d37400">{t("hello")} {user.username}!</Link>
                            </li>
                            <li>
                                <button className="text-e6dfdf font-bold mt-1" onClick={handleLogout}>{t("logout")}</button>
                            </li>
                            {user.role === 'ADMIN' && (
                                <li>
                                    <Link to="/admin-page" className="text-e6dfdf font-bold mr-4 transition duration-300 hover:text-d37400">{t("users")}</Link>
                                </li>
                            )}
                        </>
                    ) : (
                        <>
                            <li>
                                <Link
                                    to="/signup"
                                    className="text-e6dfdf font-bold mr-4 transition duration-300 hover:text-d37400">
                                    {t("signup")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="navbarLink">{t("login")}</Link>
                            </li>
                        </>
                    )}
                    <li>
                        <button onClick={switchTheme} className="p-2 rounded-md">
                            {theme === 'dark' ? (
                                <img src={Icon} alt='theme' className="w-6 h-6" />
                            ) : (
                                <img src={Icon2} alt='theme' className="w-6 h-6" />
                            )}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation