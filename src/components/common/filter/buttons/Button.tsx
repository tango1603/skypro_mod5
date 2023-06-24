import { MouseEventHandler } from "react";
import "./Button.scss";

interface ButtonProps {
  text: string;
  type: string;
  onClick(type: string): void;
}

const Button = ({ text, type, onClick }: ButtonProps) => {
  return (
    <div
      data-type={type}
      className="filter__button _btn-text"
      onClick={() => {
        onClick(type);
      }}
    >
      {text}
    </div>
  );
};
export default Button;
