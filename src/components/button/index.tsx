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
                className="flex-1 self-center px-6 py-2 font-medium bg-[#10B981] text-white rounded-lg mt-4" type={type}>{text}</button>
        </div>
    )
}

export default Button;
