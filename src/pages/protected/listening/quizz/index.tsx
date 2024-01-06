import Button from 'src/components/button';
const QuizzListening = () => {
    return (
        <>
            <div className="sm:flex items-center flex-1 gap-x-4">
                <div className="sm:w-1/2  mb-3">
                    <p className="font-bold text-[30px] mb-[27px]">Listening Quizz</p>
                    <div className="mx-auto">
                        <iframe className="rounded-[10px] sm:w-full sm:h-[500px] flex justify-center" src="https://www.youtube.com/embed/gsnndTUni_Y?si=1AyTvH-65t7WmyRr" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                    <div>
                        <p className="text-[24px] mt-[21px] ">The Ocean's Most Important Crystal</p>
                    </div>
                </div>
                <div className="sm:w-1/2 border-l-2 px-2 ">
                    <div>
                        <p className="font-bold sm:text-[30px]">Question 1-10</p>
                        <p className="sm:text-[24px]">Choose the correct letter, A, B, С or D.</p>
                        <div className="overflow-y-auto h-[700px]">
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
                                        <input className="sm:w-6 sm:h-6 mt-[5px] custom-radio" type="radio" name="answer" value="4" />
                                        <p className="sm:text-[24px]">Mid-term examination.</p>
                                    </div>
                                </label>
                            </form>

                            <form className=" mb-2">
                                <p className="sm:text-[24px] font-bold">10. What does the lecturer provide for those who are interested in doing extra reading?</p>
                                <label className="flex gap-[5px] radio-container">
                                    <p className="sm:text-[30px]">A.</p>
                                    <div className="flex gap-1 sm:mt-[5px]">
                                        <input className="sm:w-6 sm:h-6 mt-[5px] custom-radio" type="radio" name="answer" value="1" />
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
                            </form>
                            <form className=" mb-2">
                                <p className="sm:text-[24px] font-bold">10. What does the lecturer provide for those who are interested in doing extra reading?</p>
                                <label className="flex gap-[5px] radio-container">
                                    <p className="sm:text-[30px]">A.</p>
                                    <div className="flex gap-1 sm:mt-[5px]">
                                        <input className="sm:w-6 sm:h-6 mt-[5px] custom-radio" type="radio" name="answer" value="1" />
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
                            </form>
                            <form className=" mb-2">
                                <p className="sm:text-[24px] font-bold">10. What does the lecturer provide for those who are interested in doing extra reading?</p>
                                <label className="flex gap-[5px] radio-container">
                                    <p className="sm:text-[30px]">A.</p>
                                    <div className="flex gap-1 sm:mt-[5px]">
                                        <input className="sm:w-6 sm:h-6 mt-[5px] custom-radio" type="radio" name="answer" value="1" />
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
                            </form>
                            <form className=" mb-2">
                                <p className="sm:text-[24px] font-bold">10. What does the lecturer provide for those who are interested in doing extra reading?</p>
                                <label className="flex gap-[5px] radio-container">
                                    <p className="sm:text-[30px]">A.</p>
                                    <div className="flex gap-1 sm:mt-[5px]">
                                        <input className="sm:w-6 sm:h-6 mt-[5px] custom-radio" type="radio" name="answer" value="1" />
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
                            </form>
                            <form className=" mb-2">
                                <p className="sm:text-[24px] font-bold">10. What does the lecturer provide for those who are interested in doing extra reading?</p>
                                <label className="flex gap-[5px] radio-container">
                                    <p className="sm:text-[30px]">A.</p>
                                    <div className="flex gap-1 sm:mt-[5px]">
                                        <input className="sm:w-6 sm:h-6 mt-[5px] custom-radio" type="radio" name="answer" value="1" />
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
                            </form>
                        </div>
                    </div>
                    <Button type='submit' text='Submit' />
                </div>

            </div >
        </>

    );
};

export default QuizzListening;
