import { Error } from "../alert";

type Props = {
    text: string,
    type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
    onClick?: () => void,
    disabled?: boolean
}


const Button = ({ text, type, onClick, disabled }: Props) => {
    return (
        <div className='text-center'>
            <div className="my-4">
            </div>
            <button
                onClick={onClick}
                disabled={disabled}
                className="btn btn-primary hover:bg-secondary border-none" type={type}>{text}</button>
        </div>
    )
}

export default Button;
