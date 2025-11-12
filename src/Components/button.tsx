import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  className = "",
  children,
  ...props
}) => {
  const base =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none";

  const styles =
    variant === "outline"
      ? "border border-gray-400 text-gray-800 hover:bg-gray-100"
      : "bg-green-700 text-white hover:bg-green-800";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};
