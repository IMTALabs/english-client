import {  useLayoutEffect, useState } from "react";

interface Props {
    text: string;
    type: 'info' | 'success' | 'error';
    setErrorMessage: (x: string) => void
}

const alertType = {
    info: 'alert-info',
    success: 'alert-success',
    error: 'alert-error'
}
export const Error = ({ text, type, setErrorMessage }: Props) => {
    const [showToast, setShowToast] = useState<boolean>(false);

    useLayoutEffect(() => {
        if (text !== '') {
            setShowToast(true)
            setTimeout(() => {
                setShowToast(false)
                setErrorMessage('')
            }, 1500)
        }
    }, [])
    console.log(showToast, text, "showToast");

    if (!showToast) return

    return (
        <div className="toast toast-top toast-end z-20">
            <div className={`alert ${alertType[type]}`}>
                <span>{text}</span>
            </div>
        </div>
    );
};
