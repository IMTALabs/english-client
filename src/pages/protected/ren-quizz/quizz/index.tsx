import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz: React.FC = () => {
    const url = useNavigate()
    const storedData = localStorage.getItem('renQuizz');
    const [form, setForm] = useState(0)
    useEffect(() => {
        if (storedData !== null) {
            setForm(JSON.parse(storedData));
        } else {
            // Handle the case when the key 'renQuizz' doesn't exist in localStorage
        }
    }, []); // Empty dependency array to run the effect only once when the component mounts

    const [time, setTime] = useState(0);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        // Start the interval only if 'form' is not null and there are questions
        if (form !== null && time < form.length - 1) {
            intervalId = setInterval(() => {
                setTime((prevTime) => {

                    if (prevTime == form.length - 1) {
                        url('/pointQuizz');
                        clearInterval(intervalId);
                    }
                    return prevTime + 1;
                });
            }, 5000);
        }
        // Cleanup function to clear the interval when the component unmounts
    }, [form, time]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [answerQuizz, setAnswerQuizz] = useState([]);
    const handleChoiceClick = (defaultValue: any) => {
        if (defaultValue == form[time]?.answer) {
            setSelectedOptions((prevOptions) => [...prevOptions, defaultValue]);
        }
        setAnswerQuizz((prevOptions) => [...prevOptions, defaultValue]);

    };
    localStorage.setItem('answer', JSON.stringify(answerQuizz))
    console.log(selectedOptions, answerQuizz);
    return (
        <div>
            <div className="text-center mb-20">
                <div className="my-auto">
                    <h1 className="text-6xl font-bold">{time + 1}. {form[time]?.question}</h1>
                </div>
            </div>
            <div className="w-full h-full grid grid-cols-2 gap-4 flex justify-center items-center">
                <div
                    className={`answer-option bg-red-500 text-white p-4 rounded-lg h-[300px] flex justify-center items-center hover:bg-green-500 transition-all duration-300 
                ${selectedOptions[time] == 'A' ? 'shadow-lg p-3 mb-5 bg-green rounded' : ''
                        }
                        `}
                    data-default-value={'A'}
                    onClick={(e) => handleChoiceClick(e.currentTarget.getAttribute("data-default-value"))}
                >
                    <p className="text-center my-auto">{form[time]?.choices.A}</p>
                </div>
                <div
                    className={`answer-option bg-purple-500 text-white p-4 rounded-lg h-[300px] flex justify-center items-center hover:bg-green-500 transition-all duration-300 
                ${selectedOptions[time] == 'B' ? 'shadow-lg p-3 mb-5 bg-green rounded' : ''
                        }`}
                    data-default-value={'B'}
                    onClick={(e) => handleChoiceClick(e.currentTarget.getAttribute("data-default-value"))}
                >
                    <p className="text-center my-auto">{form[time]?.choices.B}</p>
                </div>
                <div
                    className={`answer-option bg-yellow-500 text-white p-4 rounded-lg h-[300px] flex justify-center items-center hover:bg-green-500 transition-all duration-300 
                ${selectedOptions[time] == 'C' ? 'shadow-lg p-3 mb-5 bg-green rounded' : ''
                        }`}
                    data-default-value={'C'}
                    onClick={(e) => handleChoiceClick(e.currentTarget.getAttribute("data-default-value"))}
                >
                    <p className="text-center my-auto">{form[time]?.choices.C}</p>
                </div>
                <div
                    className={`answer-option bg-blue-500 text-white p-4 rounded-lg h-[300px] flex justify-center items-center hover:bg-green-500 transition-all duration-300 
                ${selectedOptions[time] == 'D' ? 'shadow-lg p-3 mb-5 bg-green rounded' : ''
                        }`}
                    data-default-value={'D'}
                    onClick={(e) => handleChoiceClick(e.currentTarget.getAttribute("data-default-value"))}
                >
                    <p className="text-center my-auto">{form[time]?.choices.D}</p>
                </div>
            </div>
        </div>

    );
};

export default Quiz;
