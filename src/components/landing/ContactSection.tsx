"use client";

import ButtonCn from "../global/Form/ButtonCn";
import InputCn from "../global/Form/InputCn";
import SectionTitle from "../global/SectionTitle";
import { useForm } from "react-hook-form";
import TextareaCn from "../global/Form/TextareaCn";

interface IContractForm {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const { register } = useForm<IContractForm>();
  return (
    <section className="@container pb-38">
      <SectionTitle
        alignment="center"
        title="Get In Touch"
        badgeTitle="Contact"
      />
      <div className="w-[50%] mx-auto">
        <form className="w-full flex flex-col gap-y-4 mt-10">
          <InputCn
            name="name"
            label="Username"
            placeholder="Your Name"
            register={register}
            required={true}
            validator={{}}
            type="text"
          />
          <InputCn
            name="email"
            label="Email"
            placeholder="Your Email"
            register={register}
            required={true}
            validator={{}}
            type="text"
          />
          <TextareaCn
            required={true}
            register={register}
            validator={{}}
            name="message"
            label="Message"
            placeholder="Your Message Here"
          />
          <ButtonCn
            isPrimary={true}
            loading={false}
            mode="dark"
            size="sm"
            title="Submit"
            type="button"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
