import { useState, useContext } from 'react'
import { ThemeContext } from '../../contexts/theme.context'
import uploadServices from "../../services/upload.services"
import policyServices from "../../services/policy.services"
import { useTranslation } from 'react-i18next'
import PolicyFormModal from './PolicyFormModal'

const PolicyUploader = () => {

    const { theme, switchTheme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'dark' : 'light'

    const [loadingImage, setLoadingImage] = useState(true)
    const [selectedPolicy, setSelectedPolicy] = useState(null)
    const [analyzedPolicyData, setAnalyzedPolicyData] = useState(null)
    const [isManualEntry, setIsManualEntry] = useState(false)
    const [inputKey, setInputKey] = useState(Date.now())

    const { t } = useTranslation()

    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => {
        setIsManualEntry(true)
        setShowModal(true)
    }
    const handleCloseModal = () => setShowModal(false)

    const handlePolicySelection = e => {
        setSelectedPolicy(e.target.files[0])
        setLoadingImage(false)
    }

    const handleClearSelection = () => {
        setSelectedPolicy(null)
        setInputKey(Date.now())
    }

    const handlePolicyUpload = (selectedPolicy) => {

        setLoadingImage(true)

        return uploadServices
            .uploadPolicy(selectedPolicy)
            .then(res => {
                setSelectedPolicy({ presignedUrl: res.data.presignedUrl })
                setLoadingImage(false)
                return res.data.key
            })
            .then(key => {
                return policyServices.analyzePolicy(key)
            })
            .then(data => {
                setAnalyzedPolicyData(data)
                setIsManualEntry(false)
                setShowModal(true)
            })
            .catch(err => {
                console.log("error in handlePolicyUpload", err)
                setLoadingImage(false)
            })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await handlePolicyUpload(selectedPolicy)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <h2 className={`text-left font-extrabold mb-4 
                        ${variant === 'light'
                        ? 'text-dark-grafitti'
                        : 'text-white'
                    }`}
                >
                    {t("upload_your_policy")}
                </h2>

                <div className="mb-3">
                    <label className={"sr-only"} htmlFor="policy">{t("upload_your_policy_here")}</label>
                    <div className="relative">
                        <input
                            key={inputKey}
                            id="policy"
                            className={`bg-transparent border-none shadow-md outline-none focus:bg-gray-600 focus:bg-opacity-50 
                             ${variant === 'light'
                                    ? 'text-dark-grafitti'
                                    : 'text-white'
                                }`
                            }
                            type="file"
                            onChange={handlePolicySelection}
                        />
                        {selectedPolicy && (
                            <button
                                onClick={handleClearSelection}
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-3 text-sm text-white-500 hover:text-gray-700"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        className={`font-bold border-none rounded-lg shadow-md transition-all duration-300 mr-0 mt-6 w-36 p-1 
                        hover:bg-highlight-coral hover:text-white 
                        ${variant === 'light'
                                ? 'bg-secondary-green text-white'
                                : 'bg-white text-secondary-green'
                            }`
                        }
                        type="submit"
                        disabled={!selectedPolicy || loadingImage}>
                        {loadingImage ? `${t('loading')} ➜` : `${t('ready')} ➜`}
                    </button>
                </div>
            </form>

            <button
                className="mt-8 hover:text-highlight-coral"
                onClick={handleOpenModal}
            >
                {t('fill_out_manually')}
            </button>
            {showModal && (
                isManualEntry
                    ? <PolicyFormModal
                        theme={theme}
                        show={showModal}
                        handleClose={handleCloseModal}
                        title={t('fill_out_manually')}
                    />
                    : <PolicyFormModal
                        theme={theme}
                        show={showModal}
                        handleClose={handleCloseModal}
                        analyzedData={analyzedPolicyData}
                        title={t('is_this_data_correct')}
                    />
            )}

        </div >
    )
}

export default PolicyUploader