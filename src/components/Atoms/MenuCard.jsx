import { useState } from "react"
import { useTranslation } from "react-i18next"
import arrowLeft from "../../assets/images/arrow-left.svg"
import arrowRight from "../../assets/images/arrow-right.svg"

const MenuCard = ({ menuItem }) => {

    const { t } = useTranslation()
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div
            className={`w-full flex my-1.5 border border-black rounded-sm 
                ${isFocused ? 'bg-black' : ''}`}
            tabIndex="0"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        >
            <div className="w-1/6 h-full p-1.5">
                <img src={isFocused ? arrowRight : arrowLeft} alt="menu arrow" className="w-5/6 h-5/6" />
            </div>
            <div className="w-5/6 pl-2 flex items-center">
                <p className={`font-bold text-xs ${isFocused ? 'text-white' : 'text-black'}`}>
                    {t(menuItem)}
                </p>
            </div>
        </div>
    )
}

export default MenuCard