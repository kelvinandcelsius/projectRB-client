import { useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const UserCard = ({ firstName, lastName, avatar, _id, updateList }) => {
    const { t } = useTranslation()
    const [showModal, setShowModal] = useState(false)

    const handleDelete = e => {
        e.preventDefault()

        userService
            .deleteOneUser(_id)
            .then(() => { updateList() })
            .catch(err => console.log(err))
    }

    return (
        <div className="mb-3 border rounded shadow-md">
            <img className="w-full h-auto" src={avatar} alt={firstName} />
            <div className="p-4">
                <h4 className="text-lg font-semibold">{firstName} {lastName}</h4>
                <div className="flex justify-between mt-4">
                    <Link to={`/users/${_id}`} className="btn btn-dark">{t("details")}</Link>
                    <Link to={`/users/edit/${_id}`} className="btn btn-dark">{t("edit")}</Link>
                    <button onClick={() => setShowModal(true)} className="btn btn-dark">{t("delete")}</button>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded shadow-md">
                        <h2 className="text-lg font-semibold mb-4">{t("are_you_sure")}</h2>
                        <div className="flex justify-end">
                            <button onClick={() => setShowModal(false)} className="btn btn-gray mr-2">{t("cancel")}</button>
                            <button onClick={handleDelete} className="btn btn-red">{t("delete")}</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserCard
