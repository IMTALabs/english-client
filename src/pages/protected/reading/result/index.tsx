import { useLocation } from "react-router-dom";
import TitleCard from "src/components/cards/title-card";
import Quizz from "src/components/quizz";

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
    is_correct: boolean
}

const ResultReading = () => {
    const {

        markReading, article, readingQuizz
    } = useLocation()?.state
    console.log(readingQuizz?.body?.form[1].choices);
    console.log(markReading, 'markReading');

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
                                    <div key={index} className="mx-4">
                                        <Quizz
                                            index={index}
                                            question={item.question}
                                            explanation={item.explanation}
                                            user_answer={item?.user_answer}
                                            is_correct={item.is_correct}
                                            choices={readingQuizz?.body?.form[index].choices}
                                            type={'submission'}
                                            answer={item.answer}
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