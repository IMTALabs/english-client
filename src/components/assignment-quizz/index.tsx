// AssignmentQuizz.jsx
import React, { useState } from 'react';

interface Props {
    form?: Root;
    onSubmission?: (answers: Record<string, string>) => void;
    onChoiceSelect?: (questionIndex: number, choice: string) => void;
    onChoiceTextarea?: (questionIndex: string) => void;
}
type Root = Root2[];
interface Root2 {
    question: string;
    choices: Choices;
    explanation: string;
    answer: string;
}
interface Choices {
    A: string;
    B: string;
    C: string;
    D: string;
}
const AssignmentQuizz: React.FC<Props> = ({ form, onChoiceSelect, onChoiceTextarea }) => {
    const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
    const [textAreaValue, setTextAreaValue] = useState<string>('');
    const handleChoiceSelection = (questionIndex: number, choice: string) => {
        setUserAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionIndex]: choice,
        }));
        // Gọi hàm callback để thông báo về sự kiện chọn lựa
        if (onChoiceSelect) {
            onChoiceSelect(questionIndex, choice);
        }
    };


    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        setTextAreaValue(value);
        // Gọi hàm callback để thông báo về sự kiện thay đổi giá trị textarea
        if (onChoiceTextarea) {
            // Pass the questionIndex along with the value
            onChoiceTextarea(value);
        }
    };
    console.log(form);
    if (form) {
        return (
            <div>
                <div className='p-4 lg:mt-0 sm:mt-[70px]'>
                    <p className='font-bold bg-base-100 text-[30px]'>Question 1-10</p>
                    <p className='my-3'>Choose the correct letter, A, B, C, or D.</p>
                    {form.map((item, index) => (
                        <div key={index}>
                            <p className='bg-base-100 text-[15px] font-bold'>{index + 1}. {item.question}</p>
                            <ul>
                                {Object.entries(item.choices).map(([key, choice]) => (
                                    <li key={key} className='my-3 flex justify-start'>
                                        <span className='w-[-10px]'>{key}.</span>
                                        <div
                                            className={`border border-gray-400 rounded-full w-6 h-6 mx-2 cursor-pointer ${userAnswers[index] === key ? 'bg-blue-500' : ''
                                                }`}
                                            onClick={() => handleChoiceSelection(index, key)}
                                        ></div>
                                        {choice}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    // ... (your existing code for handling "No Questions Available")

    return (
        <div className='p-4 lg:mt-0 sm:mt-[70px]'>
            <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm h-[400px]  rounded-lg border"
                placeholder="Write your thoughts here..."
                value={textAreaValue}
                onChange={handleTextAreaChange}
            ></textarea>
        </div>
    );
};

export default AssignmentQuizz;
