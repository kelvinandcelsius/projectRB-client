import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
// import FacebookLogin from 'react-facebook-login'
import AppleLogin from 'react-apple-login'
import googleIcon from '../assets/images/google-icon.svg'
import appleIcon from '../assets/images/apple-icon.svg'
import facebookIcon from '../assets/images/facebook-icon.svg'

const LoginSocial = () => {

    const handleGoogleSuccess = (response) => {
        console.log('Google login success:', response)
    }

    const handleGoogleFailure = (response) => {
        console.log('Google login failure:', response)
    }

    const handleFacebookResponse = (response) => {
        console.log('Facebook login response:', response)
    }

    const handleAppleResponse = (response) => {
        console.log('Apple login response:', response)
    }

    return (
        <div className="mt-12 w-full">
            <div className="flex justify-between items-center w-full">
                <hr className="border border-text-light-gray flex-1 px-2" />
                <p className="text-text-light-gray text-sm flex-2 px-4">
                    Or continue with
                </p>
                <hr className="border border-text-light-gray flex-1 px-2" />
            </div>

            <div className="flex justify-between items-center gap-2 mt-12">
                <div className="flex justify-center items-center border border-text-light-gray rounded-lg py-6 px-2 bg-transparent shadow-md hover:bg-white hover:border-none hover:shadow-lg w-24 h-12">
                    <img src={googleIcon} alt="google" className="w-[23px] h-[23px]" />
                </div>
                <div className="flex justify-center items-center border border-text-light-gray rounded-lg py-6 px-2 bg-transparent shadow-md hover:bg-white hover:border-none hover:shadow-lg w-24 h-12">
                    <img src={appleIcon} alt="apple" />
                </div>
                <div className="flex justify-center items-center border border-text-light-gray rounded-lg py-6 px-2 bg-transparent shadow-md hover:bg-white hover:border-none hover:shadow-lg w-24 h-12">
                    <img src={facebookIcon} alt="facebook" />
                </div>

            </div>
        </div>
    )

    // return (
    //     <div className="flex items-center gap-4">
    //         <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
    //             <GoogleLogin
    //                 onSuccess={handleGoogleSuccess}
    //                 onFailure={handleGoogleFailure}
    //                 buttonText="Login with Google"
    //             />
    //         </GoogleOAuthProvider>
    //         {/* 
    //         <FacebookLogin
    //             appId="YOUR_FACEBOOK_APP_ID"
    //             autoLoad={false}
    //             fields="name,email,picture"
    //             callback={handleFacebookResponse}
    //             textButton="Login with Facebook"
    //         /> */}

    //         <AppleLogin
    //             clientId="YOUR_APPLE_CLIENT_ID"
    //             redirectURI="YOUR_APPLE_REDIRECT_URI"
    //             responseType="code"
    //             responseMode="query"
    //             usePopup={true}
    //             callback={handleAppleResponse}
    //             buttonText="Login with Apple"
    //         />
    //     </div>
    // )
}

export default LoginSocial