type Props = {}

const FormQuizz = (props: Props) => {
    return (
        <div>
            <p className="sm:text-[24px] font-bold">1. What does the lecturer provide for those who are interested in doing extra reading?</p>
            <label className="flex gap-[5px] radio-container">
                <p className="sm:text-[30px]">A.</p>
                <div className="flex gap-1 sm:mt-[5px]">
                    <input className="sm:w-6 sm:h-6 sm:mt-[5px] custom-radio" type="radio" name="answer" value="1" />
                    <p className="sm:text-[24px]">Personal consultation sessions.</p>
                </div>
            </label>
            <label className="flex gap-[5px] radio-container">
                <p className="sm:text-[30px]">B.</p>
                <div className="flex gap-1 sm:mt-[5px]">
                    <input className="sm:w-6 sm:h-6 mt-[5px] custom-radio" type="radio" name="answer" value="2" />
                    <p className="sm:text-[24px]">Extra materials, such as a booklist.</p>
                </div>
            </label>
            <label className="flex gap-[5px] radio-container">
                <p className="sm:text-[30px]">C.</p>
                <div className="flex gap-1 sm:mt-[5px]">
                    <input className="sm:w-6 sm:h-6 mt-[5px] custom-radio" type="radio" name="answer" value="3" />
                    <p className="sm:text-[24px]">Mid-term examination.</p>
                </div>
            </label>
            <label className="flex gap-[5px] radio-container">
                <p className="sm:text-[30px]">D.</p>
                <div className="flex gap-1 sm:mt-[5px]">
                    <input className="sm:w-6 sm:h-6 mt-[5px] custom-radio" type="radio" name="answer" value="4" />
                    <p className="sm:text-[24px]">Mid-term examination.</p>
                </div>
            </label>
        </div>
    )
}

export default FormQuizz