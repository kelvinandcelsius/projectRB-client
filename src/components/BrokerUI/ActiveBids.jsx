import { useTranslation } from "react-i18next"
import BidCard from "./BidCard"

const ActiveBids = ({ quotes }) => {

    const { t } = useTranslation()


    return (
        <div className="w-full px-1 py-4">
            <div className="pb-2">
                <h2 className="font-bold text-xl">{t('active_bids')}</h2>
            </div>
            <div className="">
                {
                    quotes.map(quote => {

                        const { policyId, createdAt } = quote
                        const { premium, policyType, policyCompany } = policyId
                        return (
                            <BidCard
                                type={policyType}
                                amount={premium}
                                company={policyCompany}
                                createdAt={createdAt}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ActiveBids