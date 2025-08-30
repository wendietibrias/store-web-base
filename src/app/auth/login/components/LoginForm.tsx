"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm } from "../interfaces/login.interface";
import InputCn from "@/components/global/Form/InputCn";
import ButtonCn from "@/components/global/Form/ButtonCn";
import Link from "next/link";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = (data) => console.log(data);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 flex gap-y-3 flex-col"
      >
        <InputCn
          name="email"
          placeholder="Your@gmail.com"
          label="Email"
          type="text"
          register={register}
          validator={{}}
          required={true}
        />
        <InputCn
          name="password"
          placeholder="Your Password"
          label="Password"
          type="password"
          register={register}
          validator={{}}
          required={true}
        />
        <div className="mt-5">
          <ButtonCn
            variant="default"
            size="sm"
            title="Sign In"
            isFullWidth={true}
            isPrimary={true}
            loading={false}
            mode="dark"
            type="button"
          />
        </div>
        <p className="mt-3 text-dark-secondary text-[0.85rem] text-center">
          Don't Have Account?{" "}
          <Link
            href="/auth/register"
            className="font-extrabold text-primary-clr"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
