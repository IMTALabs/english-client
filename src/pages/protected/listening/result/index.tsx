import { useLocation } from 'react-router-dom';
import Quizz from 'src/components/assessment/quizz';
import TitleCard from 'src/components/cards/title-card';

interface Question {
    question: string;
    choices: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    explanation: string;
    answer: string;
}

const ResultListening = () => {
    const {
        markListening
    } = useLocation()?.state
    console.log(markListening);

    return (
        <>
            <TitleCard title="Listening Quizz" topMargin="0">
                <div className="bg-base-100  rounded-lg mt-[10px] h-[95%] p-4">
                    <div className=" gap-x-4 ">
                        <p className="text-[30px] mb-[27px]">Your point : {markListening?.point}</p>
                        {
                            markListening?.results?.map((item: Question, index: number) => {
                                return <div key={index}>
                                    <Quizz index={index} title={item.question} answer={item.answer} explain={item.explanation} user_answer={item.user_answer} />
                                </div>
                            })
                        }
                    </div >
                </div>
            </TitleCard>
        </>
    );
};

export default ResultListening;
