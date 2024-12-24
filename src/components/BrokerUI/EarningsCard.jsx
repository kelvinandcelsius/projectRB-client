import { useTranslation } from "react-i18next"

const BrokerUserCard = ({ earnings }) => {

    const { t } = useTranslation()

    return (
        <div className="px-2 py-1 my-2 w-5/6 border border-black rounded-md bg-black text-white">
            <div className="w-full pb-1">
                <p className="">{t('total_earnings')}</p>
            </div>
            <div className="w-full flex justify-center items-center">
                <h1 className="text-xl lg:text-4xl md:text-2xl sm:text-xl font-jetbrainsmono">{earnings}$</h1>
            </div>
        </div>
    )
}

export default BrokerUserCard