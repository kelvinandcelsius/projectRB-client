import { useContext, useState } from 'react'
import { ThemeContext } from '@/contexts/theme.context'
import { useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import RoleCard from './Atoms/RoleCard'
import Button from './Atoms/Button'
import broker from '@/assets/images/role-broker.svg'
import client from '@/assets/images/role-client.svg'

const PickRole = () => {

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'dark' : 'light'
    const navigate = useNavigate()
    const { t } = useTranslation()

    const [userRole, setUserRole] = useState(null)

    const handlePickUserRole = (userType) => {
        setUserRole(userType)
    }

    const handleSubmit = e => {
        e.preventDefault()
        navigate('/signup', { state: { role: userRole } })
    }

    return (
        <div className="w-3/4 flex flex-col items-center justify-center">

            <form
                className="w-3/4 flex flex-col items-center justify-center"
                onSubmit={handleSubmit}
            >

                <h1 className="font-bold text-xl text-center" >
                    {t("select_your_profile")}
                </h1>

                <div className="flex justify-between items-center my-6 gap-12">
                    <RoleCard
                        role='BROKER'
                        image={broker}
                        text="im_a_broker"
                        handlePickUserRole={handlePickUserRole}
                        isSelected={userRole === 'BROKER'}
                    />

                    <RoleCard
                        role='CLIENT'
                        image={client}
                        text="im_a_client"
                        handlePickUserRole={handlePickUserRole}
                        isSelected={userRole === 'CLIENT'}
                    />
                </div>

                <Button
                    type="submit"
                    disabledStatus={!userRole}
                    text={t("continue")}
                    className='w-1/4'
                />
            </form >
        </div>
    )
}

export default PickRole