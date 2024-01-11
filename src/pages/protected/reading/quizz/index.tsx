import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from "src/app/store";
import AssignmentContent from "src/components/assignment-content"
import AssignmentQuizz from "src/components/assignment-quizz"
import Button from "src/components/button";
import { clearReadingState } from "src/features/common/reading-slice";
import { updateCharge } from "src/features/common/user-slice";

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
const QuizzReading = () => {
    const data = useLocation()?.state?.quizz
    const navigeUrl = useNavigate();
    const dispatch = useAppDispatch();
    const questions: Question[] = data?.body?.form
    const [selectedChoices, setSelectedChoices] = useState<Record<string, string>>({});
    const handleChoiceSelect = (questionIndex: number, choice: string) => {
        setSelectedChoices((prevChoices) => ({
            ...prevChoices,
            [questionIndex]: choice,
        }));
    };
    const handleConfirmQuizz = () => {
        const allQuestionsAnswered = Object.keys(selectedChoices).length === questions?.length;

        if (allQuestionsAnswered) {
            navigeUrl('/app/reading/result', {
                state: {
                    answerQuizz: selectedChoices,
                    CorrectAnswer: questions
                }
            });
        } else {
            console.log('Please answer all questions before submitting.');
        }
    };
    useEffect(() => {
        dispatch(updateCharge(data?.remaining_accounting_charge))
        dispatch(clearReadingState())

    }, []);

    return (
        <div>
            <div className='grid lg:grid-cols-2 '>
                <div>
                    <AssignmentContent paragraph={data?.body?.paragraph} />
                </div>
                <div>
                    <AssignmentQuizz form={data?.body?.form} onChoiceSelect={handleChoiceSelect} />
                    <Button type='submit' text='Submit' onClick={handleConfirmQuizz} />
                </div>
            </div>
        </div>
    )
}

export default QuizzReading