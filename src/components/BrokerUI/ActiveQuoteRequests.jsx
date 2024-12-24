import { useTranslation } from "react-i18next"
import QuoteRequestCard from "./QuoteRequestCard"

const ActiveQuoteRequests = ({ quoteRequests, brokerId }) => {

    const { t } = useTranslation()

    return (
        <div className="w-full px-1 py-4">
            <div className="pb-2">
                <h2 className="font-bold text-xl">{t('active_quote_requests')}</h2>
            </div>
            <div>
                <div className="w-1/2 flex justify-left items-center">
                    <div className="w-1/6">
                        <h2 className="flex-1 font-bold">{t('insurance_type')}</h2>
                    </div>
                    <div className="w-5/6 flex items-center">
                        <h2 className="flex-1 text-center font-bold">{t('current_premium')}</h2>
                        <p className="flex-1 text-center font-bold">{t('current_company')}</p>
                        <h2 className="flex-1 text-center font-bold">{t('time_left_to_bid')}</h2>
                    </div>
                </div>
            </div>
            <div className="">
                {
                    quoteRequests.map(quote => {
                        const { _id: quoteId, policyId, createdAt } = quote
                        const { premium, policyType, policyCompany, owner } = policyId
                        const { _id: ownerId, identity } = owner
                        const { firstName } = identity
                        return (
                            <QuoteRequestCard
                                key={quoteId}
                                type={policyType}
                                amount={premium}
                                company={policyCompany}
                                createdAt={createdAt}
                                requesterName={firstName ? firstName : `client's name not available`}
                                brokerId={brokerId}
                                clientId={ownerId}
                                quoteRequestId={quoteId}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ActiveQuoteRequests