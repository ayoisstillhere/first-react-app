import { ReactNode } from "react";

interface ButtonProps {
    className: string;
    children: ReactNode;
}

const Button = ({className, children}: ButtonProps) => {
  return (
    <button type="button" className={className}>{children}</button>
  )
}

export default Button;