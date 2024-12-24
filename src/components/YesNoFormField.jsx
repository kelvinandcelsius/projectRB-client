import React from 'react'
import { useTranslation } from 'react-i18next'
import ErrorMessage from './ErrorMessage'

const YesNoFormField = ({ name, id, htmlFor, label, value, onChange, error }) => {
    const { t } = useTranslation()

    return (
        <div className="mb-3">
            <div className={`w-full bg-transparent border-none shadow-md outline-none p-2 rounded-md`}>
                <label htmlFor={htmlFor} className="mr-4">
                    {label}
                </label>
                <div className="flex items-center">
                    <input
                        type="radio"
                        name={name}
                        id={`${id}-yes`}
                        value="true"
                        checked={value === "true"}
                        onChange={onChange}
                        className="mr-2"
                    />
                    <label htmlFor={`${htmlFor}-yes`} className="mr-4">
                        {t('yes')}
                    </label>

                    <input
                        type="radio"
                        name={name}
                        id={`${id}-no`}
                        value="false"
                        checked={value === "false"}
                        onChange={onChange}
                        className="mr-2"
                    />
                    <label htmlFor={`${htmlFor}-no`}>
                        {t('no')}
                    </label>

                    <ErrorMessage message={error} />
                </div>
            </div>
        </div>
    )
}

export default YesNoFormField