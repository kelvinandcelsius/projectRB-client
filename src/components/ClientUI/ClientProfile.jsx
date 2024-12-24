import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../contexts/auth.context'
import { ThemeContext } from '../../contexts/theme.context'
import { useTranslation } from "react-i18next"
import userService from "../../services/user.services"
import { Link, useNavigate } from "react-router-dom"
import ReceivedBids from './ReceivedBids'
import Loader from '../Loader'


const Profile = () => {

    const { user } = useContext(AuthContext)
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()
    const { t } = useTranslation()

    const { theme, switchTheme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'dark' : 'light'

    const loadUser = () => {
        userService
            .getOneUser(user._id)
            .then(data => {
                setUserData(data.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadUser()
    }, [])

    if (loading) {
        return <Loader />
    }

    const { _id, firstName, lastName, email, avatar, clientId } = userData
    const { policies } = clientId

    return (
        <div className="">
            <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl">
                    {t("hello")} {firstName ? firstName : email.split("@")[0]}!
                </h1>
                <hr className="border-t-2 border-gray-100 py-2 my-4" />
            </div>

            <div className="flex justify-between">
                <div className="pr-2">
                    <img
                        src={avatar}
                        alt={'profile_pic'}
                        width={120} heigth={120}
                        className="rounded-full object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center pl-2">
                    <h2 className="text-xl">
                        {firstName ? firstName : "Name"} {lastName ? lastName : "Surname"}
                    </h2>
                    <h2 className="">
                        {email}
                    </h2>
                </div>
            </div>

            <div className="flex space-x-4 mt-4">
                <Link
                    to={`/profile/edit/${_id}`}
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                    {t("edit_profile")}
                </Link>

            </div>

            <div className="mt-2 mb-2">
                <Link
                    to={`/upload-policy`}
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mb-2"
                >
                    {t("upload_your_policy")}
                </Link>
            </div>

            <div>
                {/* <ReceivedBids policies={policies} /> */}
            </div>


        </div>

    )
}

export default Profile