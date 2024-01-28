type ButtonProps = {
  text: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick: () => void;
  disabled?: boolean;
  containerStyle?: string;
};

const Button = ({
  text,
  type,
  onClick,
  disabled,
  containerStyle,
}: ButtonProps) => {
  return (
    <div className={`text-center ${containerStyle}`}>
      <button
        onClick={onClick}
        disabled={disabled}
        className="btn btn-secondary hover:bg-teal border-none min-w-[90px]"
        type={type}>
        {text}
      </button>
    </div>
  );
};

export default Button;
