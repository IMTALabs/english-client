
type QuizzProps = {
    index: number;
    title: string;
    answer: string;
    explain: string;
    answerQuizz?: string;
};

const Quizz = ({ index, title, answer, explain, answerQuizz }: QuizzProps) => {
    return (
        <div>
            <div>
                <p className="sm:text-[24px] font-bold">{index + 1}. {title}</p>
                <label className="flex gap-[5px] radio-container">
                    <div className="flex gap-1 sm:mt-[5px]">
                        <p className="sm:text-[24px]"> The answer you have chosen : {answerQuizz}</p>
                    </div>
                </label>
                {
                    answerQuizz == answer ? <p className="text-[#10B981] sm:text-[24px] mb-[20px] mt-[20px]">Correct Answer</p> : <p className="text-[#FF0000] sm:text-[24px] mb-[20px] mt-[20px]">Wrong answer</p>
                }
                <p className="sm:text-[24px] mb-[40px]">Answer:{explain}</p>
            </div>
        </div>
    )
}

export default Quizz