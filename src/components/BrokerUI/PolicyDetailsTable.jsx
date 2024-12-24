import { useTranslation } from "react-i18next"
import greenTick from '../../assets/images/green-tick.svg'

const PolicyDetailsTable = () => {

    const { t } = useTranslation()
    return (
        <table className="min-w-full leading-normal">
            <thead>
                <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        {t('coverage_overview')}
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        {t('general_info')}
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        {t('amplified_coverage')}
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        {t('other_coverage')}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">
                        {t('roadside_assistance')}
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex justify-center">
                        <img src={greenTick} alt="Yes" />
                    </td>
                </tr>
                <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">
                        {t('windscreens')}

                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex justify-center">
                        <img src={greenTick} alt="Yes" />
                    </td>
                </tr>
                <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">
                        {t('collision_coverage')}
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex justify-center">
                        <img src={greenTick} alt="Yes" />
                    </td>
                </tr>
                <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">
                        {t('theft')}
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex justify-center">
                        <img src={greenTick} alt="Yes" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default PolicyDetailsTable