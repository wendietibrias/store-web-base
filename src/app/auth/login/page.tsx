"use client"

import LoginForm from "./components/LoginForm";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeelicious | Sign In",
  description: "Best chile selling",
};


const Login = () => {
    return (
        <div className="w-full shadow-md shadow-gray-300 p-7 rounded-md">
            <div className="w-full">
                <h3 className="font-extrabold text-xl uppercase">Sign In</h3>
                <p className="text-[0.85rem] text-dark-secondary">Fill The Required Credentials Below</p>
            </div>
            <div className="mt-7">
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login;