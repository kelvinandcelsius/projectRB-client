import bell from '../../assets/images/bell.svg'

const NotificationBell = ({ children }) => {

    const handleSomething = () => {
        console.log("Notifications go here")
    }

    return (
        <div className="flex justify-center items-center">
            <button onClick={handleSomething} className="p-0 pr-2">
                <img src={bell} alt="Search" className="w-5 h-5" />
            </button>

        </div>
    )
}

export default NotificationBell