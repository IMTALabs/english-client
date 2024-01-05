// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import ReactPlayer from 'react-player'

const QuizzListening = () => {
    //     const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
    //     const handleChoiceChange = (choiceValue: string) => {
    //         setSelectedChoice(choiceValue);
    //     };

    //     const {
    //         body, link
    //     } = useLocation()?.state?.quizz
    //     console.log(body);

    return (
        <div className="sm:flex flex-1 gap-x-4 ">
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
                    <div className="">
                        <form >

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
                                        <input className="sm:w-6 sm:h-6 mt-[5px] custom-radio" checked type="radio" name="answer" value="4" />
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
                                        <input className="sm:w-6 sm:h-6 mt-[5px] custom-radio" checked type="radio" name="answer" value="4" />
                                        <p className="sm:text-[24px]">Mid-term examination.</p>
                                    </div>
                                </label>
                            </form>
                            <button className="w-full p-2 font-medium bg-[#10B981] text-white rounded-lg">Submit</button>
                        </form>




                    </div>
                </div>


            </div>

            {/* <div className="w-[760px] h-[450px] rounded-[24px] p-4" >
                <ReactPlayer
                    url={link}
                    controls
                    width="100%"
                    playsinline
                    height="100%"
                    className="rounded-[24px] overflow-hidden" config={{
                        youtube: {
                            playerVars: { showinfo: 1 }
                        },
                    }} />

            </div> */}



            {/* <section className="test-panel scroll container w-4/12" >
                <div className="test-panel__item">
                    <div className="test-panel__question">
                        <div className="test-panel__question-desc">
                            <div className="field field--name-field-block-description field--type-text-long field--label-hidden field--item">
                                <p><em>Choose the correct letter, <strong>A</strong>, <strong>B</strong>, <strong>С</strong> or <strong>D</strong>.</em></p>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-auto" style={{ height: "600px" }}>
                        <div data-num="31" data-q_type="6">
                            {body?.form?.map((item, index: string) => (
                                <div key={index}>
                                    <div>{index + 1}.{item.question}</div>
                                    <div data-question-item={index + 1}>
                                        {Object.entries(item.choices).map(([choiceKey, choiceValue]) => (
                                            <div key={choiceKey}>
                                                <span>{choiceKey}</span>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`q-${index + 1}`}
                                                        data-num={index + 1}
                                                        value={choiceKey}
                                                        id={`radio-${index + 1}-${choiceKey}`}
                                                        placeholder=""
                                                        onChange={() => handleChoiceChange(choiceKey)}
                                                    />
                                                    {choiceValue}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="bg-primary rounded border-none p-3 mt-10 text-right" >
                    End of Test
                </button>
            </section> */}
        </div >
    );
};

export default QuizzListening;
