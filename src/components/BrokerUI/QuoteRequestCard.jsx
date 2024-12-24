import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import ActiveQuoteModal from "./ActiveQuoteModal"
import BidFormModal from "./BidFormModal"
import { getIcon } from "../../utils/design-utils"
import { updateCountdown } from "../../utils/time-utils"

const QuoteRequestCard = ({ type, amount, company, createdAt, requesterName, brokerId, clientId, quoteRequestId }) => {

    const { t } = useTranslation()

    const icon = getIcon(type)

    const [showModal, setShowModal] = useState(false)
    const [showBidModal, setShowBidModal] = useState(false)
    const [countdown, setCountdown] = useState('')

    const handleShowModal = () => {
        setShowModal(!showModal)
    }

    const handleShowBidModal = () => {
        setShowBidModal(!showBidModal)
        setShowModal(false)
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
        <div className="w-1/2 flex my-1.5 border border-black rounded-sm cursor-pointer"
            onClick={handleShowModal}>
            <div className="w-1/6 flex justify-center items-center h-full p-1.5 border-r border-black rounded-sm">
                <img src={icon} alt="type icon" className="" />
                <p className="flex-1 text-center ">{type}</p>
            </div>

            <div className="w-5/6 flex justify-evenly items-center">
                <h2 className="flex-1 text-center font-bold text-xl">{amount} €</h2>
                <p className="flex-1 text-center ">{company}</p>
                <h2 className="flex-1 font-bold text-center ">{countdown}</h2>
            </div>

            {showModal &&
                <ActiveQuoteModal
                    show={showModal}
                    handleClose={handleShowModal}
                    handleShowBidModal={handleShowBidModal}
                    icon={icon}
                    amount={amount}
                    requester={requesterName}
                    company={company}
                />
            }
            {showBidModal &&
                <BidFormModal
                    showBid={showBidModal}
                    handleClose={handleShowBidModal}
                    icon={icon}
                    amount={amount}
                    requester={requesterName}
                    company={company}
                    brokerId={brokerId}
                    clientId={clientId}
                    quoteRequestId={quoteRequestId}
                />
            }
        </div>
    )
}

export default QuoteRequestCard