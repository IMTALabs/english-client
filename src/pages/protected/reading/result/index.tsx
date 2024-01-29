import { useLocation } from "react-router-dom";
import Quizz from "src/components/assessment/submission";
import TitleCard from "src/components/cards/title-card";

interface Question {
    question: string;
    choices: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    explanation: string;
    user_answer: string;
    answer: string;
}

const ResultReading = () => {
    const {
        markReading, article
    } = useLocation()?.state

    return (
        <TitleCard
            title={`Your result : ${markReading?.point}`}
            topMargin="0"
            titleStyle="text-3xl font-bold "
        >
            <div className="bg-base-100  rounded-lg mt-[10px] h-[95%] p-4">
                <div className="sm:flex flex-1 gap-4 ">
                    <div className="w-1/2">
                        <div className="overflow-y-auto h-[calc(100vh-18rem)]">
                            {markReading?.results?.map((item: Question, index: number) => {
                                return (
                                    <div key={index}>
                                        <Quizz
                                            index={index}
                                            title={item.question}
                                            answer={item.answer}
                                            explain={item.explanation}
                                            user_answer={item?.user_answer}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div >
                    <div className="w-1/2 overflow-y-auto h-[calc(100vh-18rem)]" >
                        <p className='my-3' dangerouslySetInnerHTML={{ __html: article }} />
                    </div>
                </div>
            </div>
        </TitleCard>
    );
};

export default ResultReading;