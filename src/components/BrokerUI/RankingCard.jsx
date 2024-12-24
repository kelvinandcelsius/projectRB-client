import { useTranslation } from "react-i18next"

const BrokerUserCard = ({ ranking }) => {

    const { t } = useTranslation()

    return (
        <div className="px-2 py-1 w-5/6 border border-black rounded-md">
            <div className="w-full pb-1">
                <p>{t('ranking')}</p>
            </div>
            <div className="w-full flex justify-center items-center">
                <h1 className="text-4xl font-jetbrainsmono">{ranking}º</h1>
            </div>
        </div>
    )
}

export default BrokerUserCard