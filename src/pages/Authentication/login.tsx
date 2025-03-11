import React from 'react';
// import logo from '../assets/logo.png';
import lalogo from '../assets/LALogo.png';
import { useNavigate } from 'react-router-dom';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo from '../../assets/LALogo.png';
const Login = () => {

    const navigate=useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen  ">
        <div className="min-w-[300px] flex-col border border-gray-300 bg-white px-6 py-14 shadow-md rounded-[4px]">
            <div className="mb-3 flex justify-center">
                <img className="w-20 mb-[20px]" src={logo} alt="Logo" />
            </div>
            <div className="flex flex-col text-sm rounded-md">
                <input
                    className="mb-5 rounded-[4px] border border-gray-300    p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
                    type="text"
                    placeholder="Username or Email id"
                />
                <input
                    className="border border-gray-300 rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
                    type="password"
                    placeholder="Password"
                />
            </div>
            <button
                className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-graydark text-white rounded-[4px] hover:bg-graydark hover:font-bold  scale-105 duration-300"
                type="submit"
                onClick={() => navigate("/dashboard/ECommerce")}
            >
                Sign in
            </button>
            <div className="mt-5 flex justify-between text-sm text-gray-600">
                <a href="#">Forgot password?</a>
                <a onClick={() => navigate("/auth/signup")} className="cursor-pointer">
                    Sign up
                </a>
            </div>
        </div>
    </div>
    );
}

export default Login;
