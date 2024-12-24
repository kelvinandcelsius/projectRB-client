import { useTranslation } from "react-i18next"

const WinLoseCard = ({ successRate, winStatus }) => {

    const { t } = useTranslation()

    return (
        <div className="px-2 py-1 mb-2 w-5/6 border border-black rounded-md flex">
            <div className="w-full flex justify-center items-center">
                <h1 className="text-4xl font-jetbrainsmono">{successRate}%</h1>
            </div>
            <div className="w-full flex flex-col justify-center items-left ml-2">
                <p>{t(winStatus)}</p>
            </div>
        </div>
    )
}

export default WinLoseCard