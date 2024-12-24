import { useContext } from 'react'
import { ThemeContext } from '@/contexts/theme.context'
import PickRole from "@/components/PickRole"

const PickRolePage = () => {

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'light' : 'dark'

    return (

        <>
            <div className={`h-full w-full font-inter flex justify-center items-center
                    ${variant === 'light'
                    ? 'bg-bg-light-gray'
                    : ''}`}>
                <PickRole />
            </div>
        </>
    )
}

export default PickRolePage