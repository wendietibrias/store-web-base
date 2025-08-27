import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

interface TextareaCnProps {
    name: string;
    label: string;
    placeholder?: string;
}

const TextareaCn = (props: TextareaCnProps) => {
    const { placeholder,name,label } = props;

    return (
        <div className="w-full">
            {label && <Label className="mb-3 font-semibold">{label}</Label>}
            <Textarea name={name} placeholder={placeholder} />
        </div>
    ) 
}

export default TextareaCn;