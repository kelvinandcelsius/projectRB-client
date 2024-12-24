import { useTranslation } from "react-i18next"
import logoMapfre from "../../assets/images/logo-mapfre.svg"

const BrokerUserCard = ({ avatar, firstName, lastName, clientCount, companyLogo }) => {

    const { t } = useTranslation()

    return (
        <div className="w-full flex border border-black rounded-md">
            <div className="px-2 py-4 w-96 h-64">
                <div className="rounded-md h-3/4 w-full overflow-hidden flex items-center justify-center">
                    <img src={avatar} alt="Avatar" className="object-fit:cover rounded-md" />
                </div>
                <div className="mt-4">
                    {/* in the parent, make an api call to the broker company's logo property */}
                    {/* <img src={companyLogo} alt="Avatar" className="w-12 h-12" /> */}
                    <img src={logoMapfre} alt="company logo" className="w-5/6" />
                </div>
            </div>
            <div className="px-4 py-4 w-2/3 h-full flex flex-col justify-between ">
                <h1 className="text-xl md:text-2xl lg:text-3xl mb-6">{firstName} {lastName}</h1>
                <p>
                    <span className="text-4xl font-jetbrainsmono pr-2">{clientCount}</span>
                    <span className="text-2xl">{t('clients')}</span>
                </p>
            </div>
        </div>
    )
}

export default BrokerUserCard