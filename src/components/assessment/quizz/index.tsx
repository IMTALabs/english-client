
type QuizzProps = {
    index: number;
    title: string;
    answer: string;
    explain: string;
    user_answer?: string;
};

const Quizz = ({ index, title, explain, user_answer, answer }: QuizzProps) => {
    return (
        <div>
            <div>
                <p className="sm:text-[24px] font-bold">{index + 1}. {title}</p>
                <label className="flex gap-[5px] radio-container">
                    <div className="flex gap-1 sm:mt-[5px]">
                        <p className="sm:text-[24px]"> The answer you have chosen : {user_answer}</p>
                    </div>
                </label>
                {
                    user_answer == answer ? <p className="text-[#10B981] sm:text-[24px] mb-[20px] mt-[20px]">Correct Answer</p> : <p className="text-[#FF0000] sm:text-[24px] mb-[20px] mt-[20px]">Wrong answer</p>
                }
                <p className="sm:text-[24px] mb-[40px]">Answer: {explain}</p>
            </div>
        </div>
    )
}

export default Quizz