import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

interface InputCnProps {
  name: string;
  placeholder?: string;
  type: string;
  label?: string;
  register: any;
  validator: {};
  required: boolean;
}

const InputCn = (props: InputCnProps) => {
  const { name, register,required, validator, label, placeholder, type } =
    props;

  return (
    <div className="w-full">
      {label && <Label className="mb-3 font-semibold">{label}</Label>}
      <Input
        type={type}
        {...register(name, {
          required,
          validator,
        })}
        placeholder={placeholder}
        name={name}
        className="w-full"
      />
    </div>
  );
};

export default InputCn;
