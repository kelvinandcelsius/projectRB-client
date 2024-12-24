import { useTranslation } from "react-i18next"

const ReceivedBidCard = ({ createdAt, active, receivedBids, winningBid }) => {

    const { t } = useTranslation()

    return (
        < div className="w-full px-1 py-4" >
            <div className="flex justify-left items-center">
                <div className="w-1/6">
                    <h2 className="flex-1 font-bold">{t('insurance_type')}</h2>
                </div>
                <div className="w-5/6 flex items-center">
                    <h2 className="flex-1 text-center font-bold">{t('offered_price')}</h2>
                    <p className="flex-1 text-center font-bold">{t('company')}</p>
                    <h2 className="flex-1 text-center font-bold">{t('time_left_to_accept')}</h2>
                </div>
                <div className="">
                    {
                        receivedBids.map(bid => {
                            const { offerPrice, owner, message } = bid
                            return (
                                <div>
                                    <h2>offer price: {offerPrice}</h2>
                                    <h2>by company: {owner}</h2>
                                    <h2>message: {message}</h2>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default ReceivedBidCard