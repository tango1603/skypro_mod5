interface ButtonProps {
  text: string;
  type: string;
}

const Button = ({ text, type }: ButtonProps) => {
  return (
    <div data-type={type} className="filter__button _btn-text">
      {text}
    </div>
  );
};
export default Button;
