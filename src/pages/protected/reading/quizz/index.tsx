import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import AssignmentContent from "src/components/assignment-content"
import AssignmentQuizz from "src/components/assignment-quizz"
import Button from "src/components/button";

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
    const questions: Question[] = data?.form
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
    return (
        <div>
            <div className='grid lg:grid-cols-2 '>
                <div>
                    <AssignmentContent paragraph={data?.paragraph} />
                </div>
                <div>
                    <AssignmentQuizz form={data?.form} onChoiceSelect={handleChoiceSelect} />
                    <Button type='submit' text='Submit' onClick={handleConfirmQuizz} />
                </div>
            </div>
        </div>
    )
}

export default QuizzReading