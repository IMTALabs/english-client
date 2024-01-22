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
            {
                disabled && <div role="alert" className="alert alert-error my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Should be less than 400 words! .</span>
                </div>
            }
            <button
                onClick={onClick}
                disabled={disabled}
                className="btn btn-primary hover:bg-secondary border-none" type={type}>{text}</button>
        </div>
    )
}

export default Button;
