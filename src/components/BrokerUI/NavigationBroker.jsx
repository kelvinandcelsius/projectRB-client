import { Link } from 'react-router-dom'
import logoSvg from '../../assets/images/logo.svg'
import userPlus from '../../assets/images/user-plus-sign.svg'
import dollarSign from '../../assets/images/dollar-sign.svg'
import chartLine from '../../assets/images/chart-line-up.svg'

const NavigationBroker = ({ avatar }) => {

    return (
        <nav className="p-2 bg-black h-full rounded-lg flex flex-col items-center">

            <ul className="h-full flex flex-col justify-between items-center mt-10">
                <li className="mb-6">
                    <Link to="/">
                        <img src={logoSvg} alt="Logo" className="w-8 h-8" />

                    </Link>
                </li>
                <div style={{ height: '45%' }} className='flex flex-col justify-between'>
                    <li className="mb-6">
                        <Link to="/graph">
                            <img src={chartLine} alt="Logo" className="w-6 h-6" />
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link to="/finance">
                            <img src={dollarSign} alt="Logo" className="w-6 h-6" />
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link to="/profile">
                            <img src={userPlus} alt="Logo" className="w-6 h-6" />
                        </Link>
                    </li>
                </div>
                <li className="mb-6">
                    <Link to="/profile">
                        <img src={avatar} alt="Avatar" className="lg:w-12 lg:h-12 rounded-full object-cover" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBroker