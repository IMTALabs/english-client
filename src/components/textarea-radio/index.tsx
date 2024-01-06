import React from 'react'
import { useState } from 'react';
import Button from 'src/components/button';
type Props = {
    option1: string,
    option2: string
}

const TextareaRadio = ({ option1, option2 }: Props) => {
    const [isCardVisible, setCardVisibility] = useState(true);
    const handlePaymentTypeChange = (isCardSelected: boolean) => {
        setCardVisibility(isCardSelected);
    };
    const [text, setText] = useState('');

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.target.value;
        setText(newText);
    };
    const characterCount = text.length;
    return (
        <div>
            <div className="grid lg:grid-cols-2 gap-4">
                <button onClick={() => handlePaymentTypeChange(false)} className={`${isCardVisible ? 'text-gray-500 border-2' : ' border-[#10B981] bg-[#10B981] text-white'}  text-center rounded py-2 font-semibold `}>{option1}</button>
                <button onClick={() => handlePaymentTypeChange(true)} className={`${isCardVisible ? 'border-[#10B981] bg-[#10B981] text-white' : 'text-gray-500 border-2 '}  text-center rounded py-2 font-semibold `}>{option2}</button>
            </div>
            {isCardVisible ? (
                <div className="mx-auto" >
                    <p className="text-[24px] font-bold my-3 ">{option1}</p>
                    <textarea onChange={handleTextChange} className="w-full py-2 px-2 h-[203px] border-2 border-gray-300 rounded " placeholder="Type or patse the topic here..." ></textarea>
                    <div className="flex justify-between">
                        <p>{characterCount}/500</p>
                    </div>
                    <Button type="submit" text='Generate Quizz' />
                </div>
            ) : (
                <div className="mx-auto">
                    <p className="font-bold text-[24px] my-3 ">{option2}</p>
                    <textarea onChange={handleTextChange} className="w-full py-2 px-2 h-[203px] border-2 border-gray-300 rounded " placeholder="Type or patse the topic here..." ></textarea>
                    <div className="flex justify-between">
                        <p >{characterCount}/500</p>
                    </div>
                    <Button type="submit" text='Generate Quizz' />
                </div>
            )}
        </div>
    )
}

export default TextareaRadio