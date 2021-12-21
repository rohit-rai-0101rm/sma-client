import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from '../features/User/userSlice';
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
const Login = () => {
    const dispatch = useDispatch()
    const responseGoogle = (response) => {
        localStorage.setItem('user',JSON.stringify(response.profileObj))
        //console.log(response)
       const{name,googleId,imageUrl,email}=response.profileObj
        dispatch(login({
            name,
            email,
            googleId,
            imageUrl
        }))


    }
    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className='relative w-full h-full'>
                <video
                    src={shareVideo}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                />

                <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
                    <div className="p-5">
                        <img src={logo} width="130px" />
                    </div>
                    <div className='shadow-2xl'>
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            render={(renderProps) => (
                                <button
                                    type="button"
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    className='bg-mainColor flex justidy-center items-center p-3 rounded-lg cursor-pointer outline-none'>
                                    <FcGoogle className='mr-5' />
                                    Sign in with Google

                                </button>
                            )}
                            onSuccess={responseGoogle}
                            onSuccess={responseGoogle}
                            cookiePolicy='single_host_origin'

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
