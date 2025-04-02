import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: LucideIcon;
  label: string;
  variant?: "default" | "primary" | "success" | "info" | "warning" | "danger" | "outline" | "ghost" | "loading";
  isLoading?: boolean;
};

export const PrimaryButton = ({ icon: Icon, label,  variant = "default", ...rest }: PrimaryButtonProps) => {

  const baseStyles = "flex items-center gap-2 text-white px-4 py-2 rounded shadow transition disabled:opacity-50";
  const variantStyles = {
    default: "bg-default hover:bg-default-hover text-default-content",
    primary: "bg-primary hover:bg-primary-hover text-primary-content",
    success: "bg-success hover:bg-success-hover text-success-content",
    info: "bg-info hover:bg-info-hover text-info-content",
    warning: "bg-warning hover:bg-warning-hover text-warning-content",
    danger: "bg-danger hover:bg-danger-hover text-danger-content",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-800 shadow-none",
    loading: "bg-gray-300 text-gray-600 cursor-not-allowed",
  };
  
  return (
    <button
      {...rest}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {label}
    </button>
  );
};
