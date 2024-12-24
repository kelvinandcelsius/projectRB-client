import { useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import SearchField from "../Atoms/SearchField"
import NotificationBell from "../Atoms/NotificationBell"

const HeaderBroker = ({ firstName }) => {

    const { t } = useTranslation()

    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-center px-2">
            <div className="w-full md:w-auto">
                <h1 className="text-2xl">{t('hi', { name: firstName ? firstName : t('mate') })}</h1>
            </div>
            <div className="flex justify-between items-center pr-2">
                <div className="pr-8"><SearchField /></div>
                <NotificationBell />
            </div>
        </div>
    )
}

export default HeaderBroker