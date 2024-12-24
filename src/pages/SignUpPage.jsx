import { useContext } from 'react'
import { ThemeContext } from '@/contexts/theme.context'
import SignUpForm from "@/components/SignUpForm"

const SignUpPage = () => {

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'light' : 'dark'

    return (

        <>
            <div className={`w-full font-inter flex justify-center items-center py-8
                    ${variant === 'light'
                    ? 'bg-bg-light-gray'
                    : ''}`}>
                <SignUpForm />
            </div>
        </>
    )
}

export default SignUpPage