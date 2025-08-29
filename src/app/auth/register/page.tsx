import RegisterForm from "./components/RegisterForm";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeelicious | Sign Up",
  description: "Best chile selling",
};


const Register = () => {
  return (
    <div className="w-full shadow-md shadow-gray-300 p-7 rounded-md">
      <div className="w-full">
        <h3 className="font-extrabold text-xl uppercase">Sign Up</h3>
        <p className="text-[0.85rem] text-dark-secondary">
          Fill The Required Credentials Below, And Start Your Shopping Journey
        </p>
      </div>
      <div className="mt-7">
        <RegisterForm/>
      </div>
    </div>
  );
};

export default Register;
