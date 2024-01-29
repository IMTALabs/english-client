import React from 'react';
import CustomCheckbox from '../checkbox';

interface Props {
    index: number;
    question: string;
    choices: Choices;
    handleChoiceSelection: (questionIndex: number, choice: string) => void;
}

interface Choices {
    A: string;
    B: string;
    C: string;
    D: string;
}

const Quizz = ({ index, question, choices, handleChoiceSelection }: Props) => {
    const onCheckboxChange = (choice: string) => {
        console.log(choice);
        handleChoiceSelection(index, choice);
    };

    return (
        <div className='border border-1 rounded-md p-5 m-3'>
            <div className='flex -mt-[30px]'>
                <div className='flex border border-1 rounded px-2 bg-green-200 text-green-600 border-green-600'>
                    Question {index + 1}
                </div>
            </div>

            <div>
                <div className='text-black font-bold'>{question}</div>
                {Object.entries(choices).map(([key, choice]) => (
                    <div key={key} className='flex items-center gap-x-2'>
                        <input
                            id={`checkbox_${index}_${key}`}
                            type="checkbox"
                            value={key}
                            name={`group_${index}`}
                            onClick={() => onCheckboxChange(key)}
                            className="checkbox checkbox-xs"
                        />
                        <label htmlFor={`checkbox_${index}_${key}`}>{key}.</label> {choice}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quizz;
