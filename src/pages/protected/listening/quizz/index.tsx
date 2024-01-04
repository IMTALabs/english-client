import { useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from 'react-player'

const QuizzListening = () => {
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
    const handleChoiceChange = (choiceValue: string) => {
        setSelectedChoice(choiceValue);
    };

    const {
        body, link
    } = useLocation()?.state?.quizz
    console.log(body);

    return (
        <div className="flex flex-1 gap-x-4">
            <div className="w-[760px] h-[450px] rounded-[24px] p-4" >
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
            </div>
            <section className="test-panel scroll container w-4/12" >
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
            </section>
        </div >
    );
};

export default QuizzListening;
