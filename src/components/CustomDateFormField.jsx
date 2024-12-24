import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ErrorMessage from './ErrorMessage'
import CalendarLight from '../assets/images/calendar.png'
import CalendarDark from '../assets/images/calendar-darkmode.png'

const CustomDateFormField = ({ label, htmlFor, id, value, onChange, error, variant }) => {

    const { t } = useTranslation()
    const [showCalendar, setShowCalendar] = useState(false)

    const handleDateChange = (event) => {
        onChange(event)
        setShowCalendar(false)
    }

    const handleCalendarToggle = () => {
        setShowCalendar(!showCalendar)
    }

    return (
        <div className="mb-3 relative">
            <input
                id={id}
                type="text"
                className={`w-full bg-transparent border-none shadow-md outline-none p-2 rounded-md
                    bg-no-repeat bg-right-10-center bg-20 focus:bg-gray-600 focus:bg-opacity-50 
                    ${variant === 'light'
                        ? 'placeholder-dark-grafitti'
                        : 'placeholder-white bg-calendar-input-dark'
                    }`}
                placeholder={t(label)}
                value={value}
                onChange={handleDateChange}
            />
            <label htmlFor={htmlFor} className="sr-only">{label}</label>

            <span
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
                onClick={handleCalendarToggle}
            >
                {variant === 'light' ? (
                    <img
                        src={CalendarLight}
                        alt="Calendar"
                        className="w-5 h-5"
                    />
                ) : (
                    <img
                        src={CalendarDark}
                        alt="Calendar"
                        className="w-5 h-5"
                    />
                )}

            </span>

            {showCalendar && (
                < div className="absolute z-10 top-full left-0 w-full bg-white shadow-lg rounded">
                </div>
            )
            }
            <ErrorMessage error={error} />
        </div >
    )
}

export default CustomDateFormField