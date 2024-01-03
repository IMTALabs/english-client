import { useState } from "react";

const QuizzListening = () => {
    const storedQuizz = JSON.parse(sessionStorage.getItem('quizz') || 'null');
    const dataQuizz = storedQuizz?.data?.form;
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
    const handleChoiceChange = (choiceValue: string) => {
        setSelectedChoice(choiceValue);
    };
    console.log(selectedChoice);

    return (
        <div className="flex">
            <div className="w-8/12" dangerouslySetInnerHTML={{ __html: storedQuizz?.embedCode }} />
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
                            {dataQuizz.map((item, index: string) => (
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
