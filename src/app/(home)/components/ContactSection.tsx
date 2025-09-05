"use client";

import ButtonCn from "../../../components/global/Form/ButtonCn";
import InputCn from "../../../components/global/Form/InputCn";
import SectionTitle from "../../../components/global/Public/SectionTitle";
import { useForm } from "react-hook-form";
import TextareaCn from "../../../components/global/Form/TextareaCn";

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
          <InputCn
            name="phone"
            label="Phone"
            placeholder="Your Phone Number"
            required={true}
            register={register}
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
            isFullWidth={true}
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
