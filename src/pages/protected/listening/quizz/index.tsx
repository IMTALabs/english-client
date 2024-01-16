import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/app/store';
import { Error } from 'src/components/alert';
import AssignmentQuizz from 'src/components/assignment-quizz';
import Button from 'src/components/button';
import { clearListeningState } from 'src/features/common/listening-slice';
import { updateCharge } from 'src/features/common/user-slice';


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



const QuizzListening = () => {
    const {
        body, link, remaining_accounting_charge
    } = useLocation()?.state?.quizz
    const dispatch = useAppDispatch();
    const navigeUrl = useNavigate();
    const questions: Question[] = body?.form

    const [selectedChoices, setSelectedChoices] = useState<Record<string, string>>({});
    const [isLoadingError, setIsLoadingError] = useState(true);
    const handleChoiceSelect = (questionIndex: number, choice: string) => {
        setSelectedChoices((prevChoices) => ({
            ...prevChoices,
            [questionIndex]: choice,
        }));
        setIsLoadingError(true)
    };
    useEffect(() => {
        dispatch(updateCharge(remaining_accounting_charge))
        dispatch(clearListeningState())
    }, []);
    const handleConfirmQuizz = () => {
        // Kiểm tra xem đã chọn hết lựa chọn hay chưa
        const allQuestionsAnswered = Object.keys(selectedChoices).length === questions?.length;
        if (allQuestionsAnswered) {
            // Nếu đã chọn hết, thì chuyển hướng hoặc thực hiện hành động khác
            navigeUrl('/app/listening/result', {
                state: {
                    answerQuizz: selectedChoices,
                    CorrectAnswer: questions
                }
            });
        } else {
            setIsLoadingError(false)
        }
    };

    return (
        <>
            {/* {!isLoadingError ? <Error text="Please complete all information" /> : null} */}

            <div className="sm:flex flex-1 gap-x-4">
                <div className="sm:w-1/2  mb-3 py-2">
                    <p className="font-bold text-[30px] mb-[27px]">Listening Quizz</p>
                    <div className="mx-auto h-[450px]">
                        <ReactPlayer
                            url={link}
                            controls
                            width="100%"
                            playsinline
                            height="100%"
                            className="rounded-[10px] sm:w-full sm:h-[500px] flex justify-center" config={{
                                youtube: {
                                    playerVars: { showinfo: 1 }
                                },
                            }} />
                    </div>
                </div>
                <div className="sm:w-1/2 border-l-2 px-2 ">
                    <div>
                        <AssignmentQuizz form={questions} onChoiceSelect={handleChoiceSelect} />
                    </div>
                    <Button type='submit' text='Submit' onClick={handleConfirmQuizz} />
                </div>
            </div >
        </>

    );
};

export default QuizzListening;
