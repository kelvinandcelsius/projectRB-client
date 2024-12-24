import { useTranslation } from "react-i18next"
import ReceivedBidCard from "./ReceivedBidCard"

const ReceivedBids = ({ policies }) => {

    const { t } = useTranslation()

    return (
        <div className="w-full px-1 py-4">
            <div className="pb-2">
                <h2 className="font-bold text-xl">{t('you_have_bids')}</h2>
            </div>
            {
                policies.map(policy => {
                    const { policyType, policyCompany, quoteRequestId } = policy
                    const { createdAt, active, receivedBids, winningBid } = quoteRequestId
                    console.log("policy----", policy)
                    // console.log("policy----", policy)

                    return (
                        <div>
                            <h1>{t('policy_type')}: {policyType}</h1>
                            <h1>{t('company')}: {policyCompany}</h1>
                            <ReceivedBidCard
                                createdAt={createdAt}
                                active={active}
                                receivedBids={receivedBids}
                                winningBid={winningBid}
                            />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ReceivedBids