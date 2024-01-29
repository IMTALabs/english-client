
interface Props {
    index: number;
    question?: string;
    choices: Choices;
    handleChoiceSelection?: (questionIndex: number, choice: string) => void;
    is_correct?: false | boolean;
    type?: string;
    explanation?: string;
    user_answer?: string;
    answer?: string;
}

interface Choices {
    A: string;
    B: string;
    C: string;
    D: string;
}

const Quizz = ({ index, question, choices, is_correct, type, user_answer, explanation, answer, handleChoiceSelection }: Props) => {
    const onCheckboxChange = (choice: string) => {
        console.log(choice);
        handleChoiceSelection(index, choice);
    };

    return (
        <div className='border border-1 rounded-md p-5 my-8'>
            <div className='flex -mt-[30px]'>
                <div className={`flex border border-1 rounded px-2 ${is_correct ? 'bg-green-50 text-green-700 border-green-600' : 'bg-red-50 text-red-700 border-red-600'}`}>
                    Question {index + 1}
                </div>
            </div>

            <div className='space-y-2'>
                <div className='text-primary font-bold mt-2'>{question}</div>
                {Object.entries(choices).map(([key, choice]) => (
                    <div key={key} className='flex items-center gap-x-2'>
                        <input
                            id={`checkbox_${index}_${key}`}
                            type="checkbox"
                            value={key}
                            disabled={type === 'submission' ? true : false}
                            name={`group_${index}`}
                            onClick={() => type === 'submission' ? null : onCheckboxChange(key)}
                            className={`checkbox checkbox-xs`}
                        />
                        <div className={`${(is_correct && key === user_answer) ? 'text-green-700' : (!is_correct && key === user_answer) ? 'text-red-700' : (!is_correct && key === answer) ? 'text-green-700' : ''}`}>
                            <label htmlFor={`checkbox_${index}_${key}`}>{key}.</label> {choice}
                        </div>

                    </div>
                ))}
                {
                    type === 'submission' && <div>
                        <p><span className="font-bold">Explanation</span>: {explanation}</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Quizz;
