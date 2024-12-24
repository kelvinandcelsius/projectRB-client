import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme.context'
import SelectBroker from '../../components/SelectBroker'

const SelectBrokerPage = () => {

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'dark' : 'light'

    return (

        <div className={`relative flex flex-col justify-center items-center h-screen font-inter
         ${variant === 'light'
                ? 'bg-gray-200 text-dark-grafitti'
                : 'bg-brand-green text-white'
            }`}>

            <SelectBroker />

        </div>
    )
}

export default SelectBrokerPage