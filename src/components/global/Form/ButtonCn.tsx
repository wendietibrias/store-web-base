import { ReactNode } from "react";
import { Button } from "../../ui/button";

interface ButtonCnProps {
  title: string;
  icon?: ReactNode;
  loading: boolean;
  color?: string;
  type: "button" | "link";
  isPrimary: boolean;
  mode: "dark" | "white";
  variant?: "link" | "secondary" | "outline" | "ghost";
  size: "sm" | "lg" | "icon" | "default";
}

const ButtonCn = (props: ButtonCnProps) => {
  const { title, color, isPrimary, mode, icon, variant, loading, size } = props;

  if(variant === "ghost"){
    return (
      <Button size={size} className={`p-0 ${mode === "dark" ? "text-primary-clr" : "text-dark-primary"} font-bold`} variant="ghost">
         {icon}
         <span className="text-[0.8rem]">{title}</span>
      </Button>
    )
  }

  if (variant === "outline") {
    return (
      <Button
        variant="outline"
        className={`rounded-full bg-transparent   border-2 ${isPrimary ? " border-primary-clr" : `bg-[${color}]`} ${mode === "dark" ? "text-primary-clr" : "text-dark-primary"}`}
        size={size}
      >
        {icon}
        <span className="text-[0.8rem] font-bold">{loading ? "Loading..." : title}</span>
      </Button>
    );
  }

  return (
    <Button
      className={`rounded-full ${isPrimary ? "bg-primary-clr" : `bg-[${color}]`} ${mode === "dark" ? "text-white" : "text-dark-primary"}`}
      size={size}
    >
      {icon}
      <span className="text-[0.8rem]">{loading ? "Loading..." : title}</span>
    </Button>
  );
};

export default ButtonCn;
