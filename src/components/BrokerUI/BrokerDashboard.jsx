import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../contexts/auth.context'
import Loader from '../Loader'
import NavigationBroker from "./NavigationBroker"
import ActiveQuoteRequests from "./ActiveQuoteRequests"
import { loadUser } from '../../utils/user-utils'

const BrokerDashboard = () => {

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

    const { avatar, brokerId } = userData
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
                        <ActiveQuoteRequests
                            quoteRequests={incomingQuotes}
                            brokerId={brokerId._id} />
                    </div>
                </>
            )}

        </div>
    )
}

export default BrokerDashboard