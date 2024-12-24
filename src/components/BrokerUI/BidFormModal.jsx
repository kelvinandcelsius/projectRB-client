import { useState } from 'react'
import { useTranslation } from "react-i18next"
import bidServices from '../../services/bid.services'
import { bidValidationSchema, validateData } from '../../utils/validation-utils'
import ErrorMessage from '../ErrorMessage'
import closeIcon from '../../assets/images/brokerUI-close.svg'

const BidFormModal = ({ showBid, handleClose, brokerId, clientId, quoteRequestId }) => {

    const { t } = useTranslation()

    const [errorMessages, setErrorMessages] = useState({})

    const [bidData, setBidData] = useState({
        owner: brokerId,
        lead: clientId,
        offerPrice: '',
        message: '',
        quoteRequestId: quoteRequestId
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setErrorMessages(prevErrors => ({ ...prevErrors, [name]: '' }))
        setBidData({
            ...bidData,
            [name]: value,
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const errors = validateData(bidData, bidValidationSchema)
        setErrorMessages(errors)


        if (Object.keys(errors).length > 0) {
            return
        }
        try {
            await bidServices.createBid(bidData)
            handleClose()
        } catch (err) {
            console.log("error on bid's handleSubmit", err)
        }
    }

    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${showBid ? '' : 'hidden'}`}>

            <div className={`flex flex-col justify-between rounded-md shadow-lg p-6 bg-gray-200 text-dark-grafitti w-1/2`} >

                <div className="flex justify-end items-center mb-4">
                    <button
                        onClick={handleClose}
                        className={`flex-1 flex justify-end text-sm hover:text-secondary-green focus:outline-none`}
                    >
                        <img src={closeIcon} alt={t('close')} className={"w-8 h-8"} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()} className="flex flex-col px-16">

                    <label>{t('offered_price')}</label>
                    <input
                        type="number"
                        name="offerPrice"
                        onChange={handleInputChange}
                        className="bg-white bg-opacity-50 border-none shadow-md outline-none p-2 rounded-md mb-4"
                    />
                    <ErrorMessage message={t(errorMessages.offerPrice)} />

                    <label>{t('conditions')}</label>
                    <input
                        type="text"
                        name="message"
                        onChange={handleInputChange}
                        className="bg-white bg-opacity-50 border-none shadow-md outline-none p-2 rounded-md"
                    />

                    <div className="flex justify-center mt-6">
                        <button
                            className={`font-bold border-none rounded-lg shadow-md transition-all duration-300 mr-0 mt-6 w-1/2 p-1 bg-dark-grafitti text-white hover:bg-highlight-coral`}
                            type="submit"

                        >
                            {t('bid')}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default BidFormModal