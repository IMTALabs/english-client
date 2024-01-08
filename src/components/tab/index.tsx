import { useEffect } from 'react'
import { useState } from 'react';
import TextareaRadio from '../textarea-radio';
import { useNavigate } from 'react-router-dom';
import Spin from '../spin';
type Props = {
    option1: string,
    option2: string,
    mode1?: string,
    mode2?: string,
    isLoading?: boolean | false;
    quizz?: any
}

const Tab = ({ option1, option2, mode1, mode2, isLoading, quizz }: Props) => {
    const [isCardVisible, setCardVisibility] = useState(true);
    const handlePaymentTypeChange = (isCardSelected: boolean) => {
        setCardVisibility(isCardSelected);
    };
 
    const navigeUrl = useNavigate();
    useEffect(() => {
        if (!isLoading && quizz && quizz?.id || !isLoading && quizz?.length > 0) {
            navigeUrl('quizz', {
                state: { quizz }
            });
        }
    }, [isLoading, quizz]);


    return (

        <div>
            < div className="grid lg:grid-cols-2 gap-4" >
                <button onClick={() => handlePaymentTypeChange(false)} className={`${isCardVisible ? 'text-gray-500 border-2' : ' border-[#10B981] bg-[#10B981] text-white'}  text-center rounded py-2 font-semibold `}>{option1}</button>
                <button onClick={() => handlePaymentTypeChange(true)} className={`${isCardVisible ? 'border-[#10B981] bg-[#10B981] text-white' : 'text-gray-500 border-2 '}  text-center rounded py-2 font-semibold `}>{option2}</button>
            </div >
            {
                isCardVisible ? (
                    <TextareaRadio option={option1} mode={mode1} />
                ) : (
                    <TextareaRadio option={option2} mode={mode2} />
                )}
            {!isLoading ? '' : <Spin />}
        </div >
    )
}

export default Tab