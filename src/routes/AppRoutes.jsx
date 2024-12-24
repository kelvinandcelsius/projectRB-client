import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import HomePage from '../pages/HomePage'
import AdminPage from '../pages/AdminPage'
import UserDetails from '../pages/UserDetails'
import EditUserAdmin from '../pages/EditUserAdmin'
import EditUserSelf from '../pages/EditUserSelf'
import ClientProfilePage from '../pages/ClientUI/ClientProfilePage'
import PolicyUploaderPage from '../pages/ClientUI/PolicyUploaderPage'
import SelectBrokerPage from '../pages/ClientUI/SelectBrokerPage'
import BrokerProfilePage from '../pages/BrokerUI/BrokerProfilePage'
import BrokerDashboardPage from '../pages/BrokerUI/BrokerDashboardPage'
import LoginForm from '@/components/LoginForm'
import SignUpPage from '@/pages/SignUpPage'
import PickRolePage from '@/pages/PickRolePage'
import VerifyAccount from '@/components/VerifyAccount'

const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route index element={<LoginForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/verify-account" element={<VerifyAccount />} />
                <Route path="/forgot-password" element={<LoginForm />} />
            </Route>
            <Route path="/about" element={<h1>About this app 🚧</h1>} />
            <Route path="/blog" element={<h1>Blog 🚧</h1>} />
            <Route path="/pages" element={<h1>Pages 🚧</h1>} />
            <Route path="/contact" element={<h1>Contact 🚧</h1>} />

            <Route path="/pick-role" element={<PickRolePage />} />
            <Route path="/signup" element={<SignUpPage />} />

            <Route element={<PrivateRoute admittedRoles={['ADMIN', 'BROKER', 'CLIENT']} />}>

            </Route>

            <Route element={<PrivateRoute admittedRoles={['ADMIN', 'BROKER']} />}>
                <Route path="/broker-dashboard" element={<BrokerDashboardPage />} />
                <Route path="/broker-profile" element={<BrokerProfilePage />} />
            </Route>

            <Route element={<PrivateRoute admittedRoles={['ADMIN', 'CLIENT']} />}>
                <Route path="/profile" element={<ClientProfilePage />} />
                <Route path="/profile/edit/:id" element={<EditUserSelf />} />
                <Route path="/upload-policy" element={<PolicyUploaderPage />} />
                <Route path="/select-broker" element={<SelectBrokerPage />} />

            </Route>

            <Route element={<PrivateRoute admittedRoles={['ADMIN']} />}>
                <Route path="/admin-page" element={<AdminPage />} />
                <Route path="/users/:id" element={<UserDetails />} />
                <Route path="/users/edit/:id" element={<EditUserAdmin />} />
            </Route>

            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )

}

export default AppRoutes