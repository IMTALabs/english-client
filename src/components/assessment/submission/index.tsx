
type QuizzProps = {
    index: number;
    question: string;
    explanation: string;
    user_answer?: string;
    is_correct?: boolean;
};

const Submission = ({ index, question, explanation, user_answer, is_correct }: QuizzProps) => {
    
    return (
        <div className='border border-1 rounded-md p-5 my-8'>
            <div className='flex -mt-[30px]'>
                <div className={`flex border border-1 rounded px-2 ${is_correct ? 'bg-green-50 text-green-700 border-green-600' : 'bg-red-50 text-red-700 border-red-600'}`}>
                    Question {index + 1}
                </div>
            </div>

            <div className='space-y-2'>
                <div className='text-primary font-bold mt-2'>{question}</div>
                <p>The answer you have chosen : {user_answer}</p>
                <p>Explanation : {explanation}</p>
            </div>
        </div>
    );
}

export default Submission