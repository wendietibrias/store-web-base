import { Textarea } from "../../ui/textarea";
import { Label } from "../../ui/label";

interface TextareaCnProps {
  name: string;
  label: string;
  register: any;
  placeholder?: string;
  required: boolean;
  validator: {};
}

const TextareaCn = (props: TextareaCnProps) => {
  const { placeholder, register, required, validator, name, label } = props;

  return (
    <div className="w-full">
      {label && (
        <Label className="mb-3 font-semibold">
          {label}
          {required && (
            <span className="text-[0.7rem] text-red-400">(Required*)</span>
          )}
        </Label>
      )}
      <Textarea
        {...register(name, { required, validator })}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextareaCn;
