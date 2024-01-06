
type QuizzProps = {
    index: number;
    title: string;
    answer: string;
    explain: string;
};

const Quizz = ({ index, title, answer, explain }: QuizzProps) => {
    return (
        <div>
            <div>
                <p className="sm:text-[24px] font-bold">{index + 1}. {title}</p>
                <label className="flex gap-[5px] radio-container">
                    <p className="sm:text-[30px]">C.</p>
                    <div className="flex gap-1 sm:mt-[5px]">
                        <p className="sm:text-[24px]">{answer}</p>
                    </div>
                </label>
                <p className="text-[#10B981] sm:text-[24px] mb-[20px] mt-[20px]">Correct Answer</p>
                <p className="sm:text-[24px] mb-[40px]">Answer:{explain}</p>
            </div>
        </div>
    )
}

export default Quizz