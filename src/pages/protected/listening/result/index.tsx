const ResultListening = () => {


    return (
        <div className="sm:flex flex-1 gap-x-4 ">
            <div className="sm:w-3/5">
                <p className="font-bold text-[30px] mb-[22px]">Listening Quizz</p>
                <p className="text-[30px] mb-[27px]">Your submit</p>
                <form className="quiz-form mb-2">
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
                            <input checked className="sm:w-6 sm:h-6 mt-[5px] custom-radio" type="radio" name="answer" value="4" />
                            <p className="sm:text-[24px]">Mid-term examination.</p>
                        </div>
                    </label>
                    <p className="text-[#10B981] sm:text-[24px] mb-[20px] mt-[20px]">Correct Answer</p>
                    <p className="sm:text-[24px] mb-[40px]">Answer: C Mid-term examination. Daily rountine is wrong because of...</p>
                </form>
                <form className="quiz-form mb-2">
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
                            <input checked className="sm:w-6 sm:h-6 mt-[5px] custom-radio" type="radio" name="answer" value="4" />
                            <p className="sm:text-[24px]">Mid-term examination.</p>
                        </div>
                    </label>

                    <p className="text-[#10B981] sm:text-[24px] mb-[20px] mt-[20px]">Correct Answer</p>
                    <p className="sm:text-[24px] mb-[40px]">Answer: C Mid-term examination. Daily rountine is wrong because of...</p>
                </form>

            </div>
            <div className="sm:w-2/5 border-l-2 px-2">
                <p className="text-[96px] text-center font-bold text-[#FFA800]">7.0</p>
                <p className="text-[36px] font-normal text-center mb-5">Overall Band Score</p>
                <div>
                    <p className="font-bold text-[24px] mb-5">Coherence and cohesion: 5.0</p>
                    <div className="flex gap-1 mb-4">
                        <div className=" w-[40px] h-[40px] bg-[#EA6C6C] rounded-lg">
                            <p className=" mt-[5px] text-[20px] text-center text-white  font-bold ">6</p>

                        </div>
                        <p className="mt-[5px] text-[22px] font-medium">Logical structure</p>
                    </div>
                    <div className="flex gap-1 mb-4">
                        <div className=" w-[40px] h-[40px] bg-[#EA6C6C] rounded-lg">
                            <p className=" mt-[5px] text-[20px] text-center text-white  font-bold ">6</p>

                        </div>
                        <p className="mt-[5px] text-[22px] font-medium">Introduction & conclusion present</p>
                    </div>
                    <div className="flex gap-1 mb-4">
                        <div className=" w-[40px] h-[40px] bg-[#EA6C6C] rounded-lg">
                            <p className=" mt-[5px] text-[20px] text-center text-white  font-bold ">6</p>

                        </div>
                        <p className="mt-[5px] text-[22px] font-medium">Supported main points</p>
                    </div>
                    <div className="flex gap-1 mb-4">
                        <div className=" w-[40px] h-[40px] bg-[#10B981] rounded-lg">
                            <p className=" mt-[5px] text-[20px] text-center text-white  font-bold ">9</p>

                        </div>
                        <p className="mt-[5px] text-[22px] font-medium">Accurate linking words</p>
                    </div>
                </div>

                <div>
                    <p className="font-bold text-[24px] mb-5">Lexical resource: 8.0</p>
                    <div className="flex gap-1 mb-4">
                        <div className=" w-[40px] h-[40px] bg-[#EA6C6C] rounded-lg">
                            <p className=" mt-[5px] text-[20px] text-center text-white  font-bold ">6</p>

                        </div>
                        <p className="mt-[5px] text-[22px] font-medium">Varied vocabulary</p>
                    </div>
                    <div className="flex gap-1 mb-4">
                        <div className=" w-[40px] h-[40px] bg-[#EA6C6C] rounded-lg">
                            <p className=" mt-[5px] text-[20px] text-center text-white  font-bold ">6</p>
                        </div>
                        <p className="mt-[5px] text-[22px] font-medium">Accurate spelling & word formation</p>
                    </div>
                </div>

                <div>
                    <p className="font-bold text-[24px] mb-5">Coherence and cohesion: 5.0</p>
                    <div className="flex gap-1 mb-4">
                        <div className=" w-[40px] h-[40px] bg-[#EA6C6C] rounded-lg">
                            <p className=" mt-[5px] text-[20px] text-center text-white  font-bold ">6</p>

                        </div>
                        <p className="mt-[5px] text-[22px] font-medium">Mix of complex & simple sentences</p>
                    </div>
                    <div className="flex gap-1 mb-4">
                        <div className=" w-[40px] h-[40px] bg-[#EA6C6C] rounded-lg">
                            <p className=" mt-[5px] text-[20px] text-center text-white  font-bold ">6</p>
                        </div>
                        <p className="mt-[5px] text-[22px] font-medium">Clear and correct grammar</p>
                    </div>
                </div>



                <div>
                    <p className="font-bold text-[24px] mb-5">Grammatical range: 9.0</p>
                    <div className="flex gap-1 mb-4">
                        <div className=" w-[40px] h-[40px] bg-[#EA6C6C] rounded-lg">
                            <p className=" mt-[5px] text-[20px] text-center text-white  font-bold ">6</p>

                        </div>
                        <p className="mt-[5px] text-[22px] font-medium">Complete response</p>
                    </div>
                    <div className="flex gap-1 mb-4">
                        <div className=" w-[40px] h-[40px] bg-[#EA6C6C] rounded-lg">
                            <p className=" mt-[5px] text-[20px] text-center text-white  font-bold ">6</p>
                        </div>
                        <p className="mt-[5px] text-[22px] font-medium">Clear & comprehensive ideas</p>
                    </div>
                    <div className="flex gap-1 mb-4">
                        <div className=" w-[40px] h-[40px] bg-[#EA6C6C] rounded-lg">
                            <p className=" mt-[5px] text-[20px] text-center text-white  font-bold ">6</p>

                        </div>
                        <p className="mt-[5px] text-[22px] font-medium">Relevant & specific examples</p>
                    </div>
                    <div className="flex gap-1 mb-4">
                        <div className=" w-[40px] h-[40px] bg-[#10B981] rounded-lg">
                            <p className=" mt-[5px] text-[20px] text-center text-white  font-bold ">9</p>

                        </div>
                        <p className="mt-[5px] text-[22px] font-medium">Appropriate word count</p>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default ResultListening;
