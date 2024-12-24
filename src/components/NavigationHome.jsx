import { useLocation, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'


const NavigationHome = () => {

    const location = useLocation()
    const { t } = useTranslation()


    const navLinks = [
        { path: "/", label: "home" },
        { path: "/about", label: "about" },
        { path: "/blog", label: "blog" },
        { path: "/pages", label: "pages" },
        { path: "/contact", label: "contact" },
    ]

    const navLinksRight = [
        { path: "/pick-role", label: "signup" },
        { path: "/login", label: "login" },

    ]

    return (
        <div className="flex justify-between items-center px-8 pt-4">

            <div className="flex justify-between items-center gap-8">
                {navLinks.map(({ path, label }) => {
                    const isExactMatch = location.pathname === path
                    const isHome = path === "/"

                    return (
                        <NavLink
                            key={label}
                            to={path}
                            className={`custom-underline 
                                    ${isExactMatch && !isHome ? 'active' : ''} 
                                    ${isHome && isExactMatch ? 'home-active' : ''}`}
                        >
                            {t(label)}
                        </NavLink>
                    )
                })}
            </div>

            <div className="flex justify-between items-center gap-8">
                <LanguageSwitcher />
                {navLinksRight.map(({ path, label }) => {
                    const isExactMatch = location.pathname === path
                    const isHome = path === "/"

                    return (
                        <NavLink
                            key={label}
                            to={path}
                            className={`text-brand-green custom-underline 
                                  ${(location.pathname === '/login' || location.pathname === '/') && label === 'login' ? 'active' : ''}
                                    `}
                        >
                            {t(label)}
                        </NavLink>
                    )
                })}

            </div>

        </div>
    )
}

export default NavigationHome