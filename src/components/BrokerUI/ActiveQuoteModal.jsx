import { useState } from "react"
import { useTranslation } from "react-i18next"
import arrowLeft from '../../assets/images/brokerUI-modal-arrow-left.svg'
import arrowRight from '../../assets/images/brokerUI-modal-arrow-right.svg'
import closeIcon from '../../assets/images/brokerUI-close.svg'
import PolicyDetailsTable from './PolicyDetailsTable'


const ActiveQuoteModal = ({ show, handleClose, handleShowBidModal, icon, amount, requester, company }) => {

    const { t } = useTranslation()

    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${show ? '' : 'hidden'}`}>

            <div>
                <img src={arrowLeft} alt={t('previous')} className='w-16 h-16' />
            </div>

            <div className={`flex flex-col justify-between rounded-md shadow-lg p-6 bg-gray-200 text-dark-grafitti w-1/2`} >

                <div className="flex justify-between items-center mb-4">
                    <div className="flex-1"></div>
                    <div className="flex-1 flex justify-center">
                        <img src={icon} alt={t('insurance_type')} className="border-2 border-dark-grafitti rounded-md p-2 w-12 h-12" />
                    </div>
                    <button
                        onClick={handleClose}
                        className={`flex-1 flex justify-end text-sm hover:text-secondary-green focus:outline-none`}
                    >
                        <img src={closeIcon} alt={t('close')} className={"w-8 h-8"} />
                    </button>
                </div>

                <div className="flex flex-col h-full items-center justify-between mb-2">

                    <h2>{requester}</h2>
                    <h2>{company}</h2>
                    <h2>{amount} €</h2>

                </div>
                <PolicyDetailsTable />
                <div className="flex justify-center mt-6">
                    <button
                        className={`font-bold border-none rounded-lg shadow-md transition-all duration-300 mr-0 mt-6 w-1/2 p-1 bg-dark-grafitti text-white hover:bg-highlight-coral`}
                        type="button"
                        onClick={handleShowBidModal}
                    >
                        {t('place_bid')}
                    </button>
                </div>

            </div>

            <div>
                <img src={arrowRight} alt={t('next')} className='w-16 h-16' />
            </div>
        </div>
    )
}

export default ActiveQuoteModal