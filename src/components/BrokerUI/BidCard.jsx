import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import ActiveBidModal from "./ActiveBidModal"
import { getIcon } from "../../utils/design-utils"
import { updateCountdown } from "../../utils/time-utils"

const BidCard = ({ type, amount, createdAt }) => {

    const { t } = useTranslation()

    const icon = getIcon(type)

    const [showModal, setShowModal] = useState(false)
    const [countdown, setCountdown] = useState('')

    const handleShowModal = () => {
        setShowModal(!showModal)
    }

    useEffect(() => {
        const update = () => {
            const time = updateCountdown(createdAt)
            setCountdown(time)
        }
        update()
        const intervalId = setInterval(update, 1000)

        return () => clearInterval(intervalId)
    }, [createdAt])

    return (
        <div className="w-full flex my-1.5 border border-black rounded-sm cursor-pointer"
            onClick={handleShowModal}>
            <div className="w-1/12 h-full p-1.5 border-r border-black rounded-sm">
                <img src={icon} alt="type icon" className="" />
            </div>
            <div className="w-11/12 flex justify-evenly items-center">
                <h2 className="font-bold text-xl">{amount}$</h2>
                <p className="text-xs">{t('youre_winning')}</p>
                <h2 className="font-bold">{countdown}</h2>
            </div>
            {showModal &&
                <ActiveBidModal
                    show={showModal}
                    icon={icon}
                    amount={amount}
                />
            }
        </div>
    )
}

export default BidCard