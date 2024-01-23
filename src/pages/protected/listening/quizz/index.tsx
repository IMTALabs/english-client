import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/app/store';
import AssignmentQuizz from 'src/components/assignment-quizz';
import Button from 'src/components/button';
import TitleCard from 'src/components/cards/title-card';
import TimerApp from 'src/components/time';
import { showNotification } from 'src/features/common/header-slice';
import { clearListeningState } from 'src/features/common/listening-slice';
import { updateCharge } from 'src/features/common/user-slice';
import listeningApi from 'src/features/services/listening/listening-api';

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
        body, link, remaining_accounting_charge, hash
    } = useLocation()?.state?.quizz
    const dispatch = useAppDispatch();
    const navigeUrl = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const questions: Question[] = body?.form
    const [selectedChoices, setSelectedChoices] = useState<Record<string, string>>({});
    const handleChoiceSelect = (questionIndex: number, choice: string) => {
        setSelectedChoices((prevChoices) => ({
            ...prevChoices,
            [questionIndex]: choice,
        }));
    };
    useEffect(() => {
        dispatch(updateCharge(remaining_accounting_charge))
        dispatch(clearListeningState())
    }, []);
    const handleConfirmQuizz = async () => {
        // Kiểm tra xem đã chọn hết lựa chọn hay chưa
        const allQuestionsAnswered = Object.keys(selectedChoices).length === questions?.length;
        if (allQuestionsAnswered) {
            // Nếu đã chọn hết, thì chuyển hướng hoặc thực hiện hành động khác
            setIsLoading(true);
            const formChoices = {
                submit: selectedChoices,
                hash: hash
            }
            try {
                const response = await listeningApi.postMarkListening(formChoices)
                if (response) {
                    navigeUrl(`/app/listening/result/id=${hash}`, {
                        state: {
                            markListening: response,
                            video: link
                        }
                    });
                }
            } catch (error: any) {
                dispatch(showNotification({ message: error.message, status: 0 }));
            } finally {
                setIsLoading(false)
            }
        } else {
            dispatch(showNotification({ message: 'Please answer all questions', status: 0 }));
        }
    };

    return (
        <>
            <TitleCard title="Listening" topMargin="mt-0" TopSideButtons={<TimerApp Active={true} /> } skill={'listening'} skillHash={hash}>

            <div className="sm:flex flex-1 gap-x-4">
                <div className="sm:w-1/2  mb-3 py-2">
                    <div className="mx-auto h-[450px] rounded-xl overflow-hidden">
                        <ReactPlayer
                            url={link}
                            controls
                            width="100%"
                            playsinline
                            height="100%"
                            className=" sm:w-full sm:h-[500px] flex justify-center" config={{
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
                    <Button type='submit' text='Submit' onClick={handleConfirmQuizz} disabled={isLoading} />
                </div>
            </div >
        </TitleCard >
        </>

    );
};

export default QuizzListening;
