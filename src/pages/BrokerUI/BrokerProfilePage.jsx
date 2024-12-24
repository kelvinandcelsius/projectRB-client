import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme.context'
import BrokerProfile from '../../components/BrokerUI/BrokerProfile'

const BrokerProfilePage = () => {

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'light' : 'dark'
    return (
        <div className={`h-screen w-screen flex flex-col font-urbanist
            ${variant === 'light'
                ? 'bg-broker text-dark-grafitti'
                : 'bg-dark-grafitti text-white'
            }`}>
            <BrokerProfile />
        </div>
    )
}

export default BrokerProfilePage