import { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/theme.context'
import Icon from '../assets/images/weather.png'
import Icon2 from '../assets/images/weather2.png'
import LanguageSwitcher from './LanguageSwitcher'

const NavigationTop = () => {

    const { theme, switchTheme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'dark' : 'light'

    const [isDropdownVisible, setDropdownVisible] = useState(false)

    return (
        <nav
            className={`flex items-center justify-between bg-transparent p-2 
             ${variant === 'light'
                    ? 'text-black'
                    : ' text-white'}`
            }
        >

            <div className="block lg:hidden">
                {/* <button
                    onClick={() => setDropdownVisible(!isDropdownVisible)}
                    className={`flex items-center px-3 py-2 border rounded ${theme === "dark" ? "text-secondary-green border-secondary-green hover:text-white hover:border-white" : "text-white border-wite hover:text-secondary-green hover:border-secondary-green"}`}
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" /></svg>

                </button>
                {isDropdownVisible && (
                    <div className="absolute flex flex-col items-center bg-secondary-green py-2 w-36">
                        <Link to="#home" className="block px-4 py-2 hover:bg-gray-200">
                            Home
                        </Link>
                        <hr className="border-t border-white border-opacity-50 w-1/2" />
                        <Link to="#about" className="block px-4 py-2 hover:bg-gray-200">
                            About
                        </Link>
                        <hr className="border-t border-white border-opacity-50 w-1/2" />
                        <Link to="#profile" className="block px-4 py-2 hover:bg-gray-200">
                            Profile
                        </Link>
                    </div>
                )} */}
            </div>
            <div className="hidden lg:block w-12 h-12 ">

            </div>

            <div className="hidden lg:flex justify-between items-center p-2 lg:w-auto ">

                {/* <Link to="#home" className={`block lg:inline-block mr-4 ${theme === "dark" ? "text-secondary-green hover:text-brand-green" : "text-white hover:text-secondary-green"}`} >
                    Home
                </Link>
                <Link to="#about" className={`block lg:inline-block mr-4 ${theme === "dark" ? "text-secondary-green hover:text-brand-green" : "text-white hover:text-secondary-green"}`}>
                    About
                </Link>
                <Link to="#profile" className={`block lg:inline-block ${theme === "dark" ? "text-secondary-green hover:text-brand-green" : "text-white hover:text-secondary-green"}`}>
                    Profile
                </Link> */}

            </div>

            <div className="flex justify-end ">
                <LanguageSwitcher />
                <button onClick={switchTheme} >
                    {
                        theme === 'dark' ?
                            <img src={Icon} alt='theme' className="w-12 h-12 cursor-pointer flex justify-end"></img> :
                            <img src={Icon2} alt='theme' className="w-12 h-12 cursor-pointer flex justify-end"></img>
                    }
                </button>
            </div>
        </nav>
    )
}

export default NavigationTop