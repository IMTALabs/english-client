type Props = {
    text: string,
    type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
    onClick?: () => void
}

const Button = ({ text, type, onClick }: Props) => {
    return (
        <div className='text-center'>
            <button
                onClick={onClick}
                className="btn btn-primary" type={type}>{text}</button>
        </div>
    )
}

export default Button;
