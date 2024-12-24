import './App.css'
import { useLocation } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import NavigationOld from './components/NavigationOld'
// import NavigationTop from './components/NavigationTop'
// import Footer from './components/Footer'
import NavigationHome from './components/NavigationHome'
import LogOutButton from './components/Atoms/LogoutButton'


const App = () => {

  const location = useLocation()

  return (
    <div className={`h-screen w-screen`}
    >
      {!["/verify-account", "/pick-role", "/signup", "/login", "/"].includes(location.pathname) && <NavigationHome />}
      {/* {!["/"].includes(location.pathname) && <NavigationTop />} */}

      {/* <div className="w-full flex justify-end px-4">
        <LogOutButton />
      </div> */}
      <AppRoutes />
      {/* {!["/signup", "/login", "/"].includes(location.pathname) && <Footer />} */}
    </div>
  )
}

export default App
