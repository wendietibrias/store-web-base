"use client";

import InputCn from "@/components/global/Form/InputCn";
import { useForm } from "react-hook-form";
import { IRegisterForm } from "../interfaces/register.interface";
import ButtonCn from "@/components/global/Form/ButtonCn";
import { Link } from "lucide-react";

const RegisterForm = () => {
  const { register } = useForm<IRegisterForm>();
  return (
    <form>
      <div className="flex  gap-y-4 flex-wrap justify-between items-start">
        <div className="w-[48%]">
          <InputCn
            name="name"
            label="Name"
            placeholder="Your Name"
            register={register}
            validator={{}}
            required={true}
            type="text"
          />
        </div>
        <div className="w-[48%]">
          <InputCn
            name="username"
            label="Username"
            placeholder="Your Username"
            register={register}
            validator={{}}
            required={true}
            type="text"
          />
        </div>
        <div className="w-[48%]">
          <InputCn
            name="email"
            label="Email"
            placeholder="Your@gmail.example.com"
            register={register}
            validator={{}}
            required={true}
            type="email"
          />
        </div>
        <div className="w-[48%]">
          <InputCn
            name="phone"
            label="Phone Number"
            placeholder="Your Phone Number"
            register={register}
            validator={{}}
            required={true}
            type="text"
          />
        </div>
        <div className="w-full">
          <InputCn
            name="password"
            label="Password"
            placeholder="Your Password"
            register={register}
            validator={{}}
            required={true}
            type="password"
          />
        </div>
        <div className="w-full mt-5">
          <ButtonCn
            isPrimary={true}
            title="Sign Up"
            isFullWidth={true}
            loading={false}
            mode="dark"
            size="sm"
            type="button"
          />
        </div>
      </div>
      <p className="mt-3 text-dark-secondary text-[0.85rem] text-center">
        Don't Have Account?{" "}
        <Link href="/auth/login" className="font-extrabold text-primary-clr">
          Register
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
