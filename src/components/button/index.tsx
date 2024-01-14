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
            {!disabled ? '' : <Error text={'Giới hạn 400 từ'} />}
            <button
                onClick={onClick}
                disabled={disabled}
                className="btn btn-primary hover:bg-secondary border-none" type={type}>{text}</button>
        </div>
    )
}

export default Button;
