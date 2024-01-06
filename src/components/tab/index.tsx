import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'src/components/button';
import TextareaRadio from '../textarea-radio';
import { useAppSelector } from 'src/app/store';
import { useNavigate } from 'react-router-dom';
type Props = {
    option1: string,
    option2: string
}

const Tab = ({ option1, option2 }: Props) => {
    const [isCardVisible, setCardVisibility] = useState(true);
    const handlePaymentTypeChange = (isCardSelected: boolean) => {
        setCardVisibility(isCardSelected);
    };
    const navigeUrl = useNavigate();
    const quizz = useAppSelector((state) => state.reading?.quizzs?.data || "");
    const { isLoading } = useAppSelector((state) => state.reading);
    const quizzWriting = useAppSelector((state) => state.writing?.quizzs?.data || "");

    useEffect(() => {
        if (!isLoading && quizz || !isLoading && quizzWriting) {
            navigeUrl('quizz', {
                state: { quizz, quizzWriting }
            });
        }
    }, [isLoading, quizz, quizzWriting]);


    return (
        <div>
            <div className="grid lg:grid-cols-2 gap-4">
                <button onClick={() => handlePaymentTypeChange(false)} className={`${isCardVisible ? 'text-gray-500 border-2' : ' border-[#10B981] bg-[#10B981] text-white'}  text-center rounded py-2 font-semibold `}>{option1}</button>
                <button onClick={() => handlePaymentTypeChange(true)} className={`${isCardVisible ? 'border-[#10B981] bg-[#10B981] text-white' : 'text-gray-500 border-2 '}  text-center rounded py-2 font-semibold `}>{option2}</button>
            </div>
            {isCardVisible ? (
                <TextareaRadio option={option2} mode={'topic'} />
            ) : (
                <TextareaRadio option={option1} mode={'no_topic'} />
            )}
        </div >
    )
}

export default Tab