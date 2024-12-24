import { useTranslation } from "react-i18next"
import MenuCard from "../Atoms/MenuCard"
import brokerMenu from "../../consts/brokerMenu"

const DashBoardMenu = () => {

    const { t } = useTranslation()

    return (
        <div className="w-full px-1 py-4">
            <div className="pb-2">
                <h2 className="font-bold text-xl">{t('menu')}</h2>
            </div>
            <div>
                {brokerMenu.map((item, i) => <MenuCard key={i} menuItem={item} />)}
            </div>
        </div>
    )
}

export default DashBoardMenu