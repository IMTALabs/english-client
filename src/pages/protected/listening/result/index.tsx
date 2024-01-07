import { useLocation } from 'react-router-dom';
import BandScore from 'src/components/assessment/band-score';
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
        CorrectAnswer, answerQuizz
    } = useLocation()?.state
    console.log(CorrectAnswer, answerQuizz);

    return (
        <>
            <TitleCard title="Profile Settings" topMargin="mt-2">
                <div className="bg-base-100  rounded-lg mt-[10px] h-[95%] p-4">
                    <div className="sm:flex flex-1 gap-x-4 ">
                        <div className="sm:w-3/5">
                            <p className="font-bold text-[30px] mb-[22px]">Listening Quizz</p>
                            <p className="text-[30px] mb-[27px]">Your submit</p>
                            {
                                CorrectAnswer?.map((item: Question, index: number) => {
                                    return <div key={index}>
                                        <Quizz index={index} title={item.question} answer={item.answer} explain={item.explanation} answerQuizz={answerQuizz[index]} />
                                    </div>
                                })
                            }
                        </div>
                        <BandScore />
                    </div >
                </div>
            </TitleCard>
        </>


    );
};

export default ResultListening;
