import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../contexts/auth.context'
import Loader from '../Loader'
import NavigationBroker from "./NavigationBroker"
import HeaderBroker from './HeaderBroker'
import BrokerUserCard from './BrokerUserCard'
import ActiveBids from "./ActiveBids"
import RankingCard from "./RankingCard"
import EarningsCard from "./EarningsCard"
import WinLoseCard from "./WinLoseCard"
import DashboardMenu from "./DashboardMenu"
import { loadUser } from '../../utils/user-utils'

const BrokerProfile = () => {

    const { user } = useContext(AuthContext)
    const [userData, setUserData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadUser(user._id)
            .then(data => {
                setUserData(data)
                setIsLoading(false)
            })
    }, [])

    const { avatar, firstName, lastName, brokerId } = userData
    const incomingQuotes = brokerId?.incomingQuotes || []

    return (
        <div className="py-4 px-8 h-screen flex">

            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className="w-1/12 flex items-center">
                        <NavigationBroker avatar={avatar} />
                    </div>
                    <div className="w-11/12 px-4">
                        <HeaderBroker firstName={firstName} />
                        <div className="flex px-4">
                            <div className="w-7/12 p-4 pr-8">
                                <BrokerUserCard
                                    avatar={avatar}
                                    firstName={firstName}
                                    lastName={lastName}
                                    // companyLogo={companyLogo}
                                    // clientCount={clientCount}
                                    clientCount={145}
                                />
                                <ActiveBids quotes={incomingQuotes} />
                            </div>
                            <div className="w-5/12 p-4 pr-8">
                                <RankingCard ranking={124} />
                                <EarningsCard earnings={'10,742.34'} />
                                <div className="mt-8">
                                    <WinLoseCard
                                        successRate={65}
                                        winStatus={'bids_won'}
                                    />
                                    <WinLoseCard
                                        successRate={35}
                                        winStatus={'bids_lost'}
                                    />
                                    {/* {bidsSuccessRate.map((data, i) => {
                            const { value, winStatus } = data
                            return (
                                <WinLoseCard
                                    key={i}
                                    successRate={value}
                                    winStatus={winStatus}
                                    />
                                    )
                                    }
                                    )} */}
                                </div>
                                <DashboardMenu />
                            </div>
                        </div>
                    </div>
                </>
            )}

        </div>
    )

}

export default BrokerProfile