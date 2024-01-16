import { useEffect } from 'react'
import { useState } from 'react';
import TextareaRadio from '../textarea-radio';
import { useNavigate } from 'react-router-dom';
import Spin from '../spin';
type Props = {
    isLoading?: boolean | false;
    quizz?: any,
    text?: string,
    setText?: (text: string) => void
}

const Tab = ({ isLoading, quizz, text, setText }: Props) => {
    const [isCardVisible, setCardVisibility] = useState(true);
    const handlePaymentTypeChange = (isCardSelected: boolean) => {
        setCardVisibility(isCardSelected);
    };

    const navigeUrl = useNavigate();

    useEffect(() => {
        if (!isLoading && Object.keys(quizz).length > 0) {
            navigeUrl('quizz', {
                state: { quizz }
            });
        }
    }, [isLoading, quizz]);

    console.log(isLoading);



    return (

        <div>
            < div className="grid lg:grid-cols-2 gap-4" >
                <button onClick={() => handlePaymentTypeChange(false)} className={`${isCardVisible ? 'text-gray-500 border-2' : ' bg-secondary text-white'}  text-center rounded py-2 font-semibold `}>{option1}</button>
                <button onClick={() => handlePaymentTypeChange(true)} className={`${isCardVisible ? 'bg-secondary text-white' : 'text-gray-500 border-2 '}  text-center rounded py-2 font-semibold `}>{option2}</button>
            </div >
            {
                isCardVisible ? (
                    <TextareaRadio text={text} setText={setText}/>
                ) : (
                    <TextareaRadio text={text} setText={setText}/>
                )}
            {!isLoading ? '' : <Spin />}
        </div >
    )
}

export default Tab