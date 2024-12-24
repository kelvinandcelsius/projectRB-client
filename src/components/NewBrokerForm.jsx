import React from 'react'
import { useTranslation } from 'react-i18next'
import brokerFields from '../consts/brokerFields'
import CompanySelectForm from "./CompanySelectForm"
import FormField from "./FormField"
import YesNoFormField from './YesNoFormField'
import CustomDateFormField from './CustomDateFormField'
import SelectFormField from './SelectFormField'

const NewBrokerForm = ({ onChange, initialBrokerData, error }) => {

    const { t } = useTranslation()

    return (
        <>
            {brokerFields.map(field => {
                const { name, id, type, placeholderIconLight, placeholderIconDark, component, optionsArr } = field
                const label = t(field.label)
                const prefixedName = `brokerData.${name}`

                return (

                    component === 'company-select' ? (
                        <CompanySelectForm
                            key={id}
                            label={label}
                            htmlFor={id}
                            id={id}
                            value={initialBrokerData.insuranceCompany}
                            onChange={onChange}
                            error={t(error?.insuranceCompany)}
                        />
                    ) : component === 'select' ? (

                        <SelectFormField
                            key={id}
                            label={label}
                            htmlFor={id}
                            id={id}
                            value={initialBrokerData[name] || ""}
                            optionsArr={optionsArr}
                            name={prefixedName}
                            onChange={onChange}
                            error={t(error?.[name])}
                        />

                    ) : component === "date" ? (
                        <CustomDateFormField
                            key={id}
                            label={label}
                            htmlFor={id}
                            id={id}
                            placeholder={label}
                            type={type}
                            value={initialBrokerData[name] || ""}
                            name={prefixedName}
                            onChange={onChange}
                            placeholderIconLight={placeholderIconLight}
                            placeholderIconDark={placeholderIconDark}
                            error={t(error?.[name])}
                        />
                    ) : component === "radio" ? (
                        <YesNoFormField
                            key={id}
                            label={label}
                            htmlFor={id}
                            id={id}
                            name={prefixedName}
                            value={initialBrokerData[name] || ""}
                            onChange={onChange}
                            error={t(error?.[name])}
                        />
                    ) : (
                        <FormField
                            key={id}
                            label={label}
                            htmlFor={id}
                            id={id}
                            placeholder={label}
                            type={type}
                            value={initialBrokerData[name] || ""}
                            name={prefixedName}
                            onChange={onChange}
                            placeholderIconLight={placeholderIconLight}
                            placeholderIconDark={placeholderIconDark}
                            error={t(error?.[name])}
                        />
                    )
                )
            })}
        </>
    )
}

export default NewBrokerForm