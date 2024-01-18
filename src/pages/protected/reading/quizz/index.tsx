import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useAppDispatch} from 'src/app/store';
import AssignmentContent from 'src/components/assignment-content';
import AssignmentQuizz from 'src/components/assignment-quizz';
import Button from 'src/components/button';
import {showNotification} from 'src/features/common/header-slice';
import {clearReadingState} from 'src/features/common/reading-slice';
import {updateCharge} from 'src/features/common/user-slice';

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
  const data = useLocation()?.state?.quizz;
  const navigeUrl = useNavigate();
  const dispatch = useAppDispatch();
  const questions: Question[] = data?.body?.form;
  const [selectedChoices, setSelectedChoices] = useState<
    Record<string, string>
  >({});
  const handleChoiceSelect = (questionIndex: number, choice: string) => {
    setSelectedChoices(prevChoices => ({
      ...prevChoices,
      [questionIndex]: choice,
    }));
  };

  const handleConfirmQuizz = () => {
    const allQuestionsAnswered =
      Object.keys(selectedChoices).length === questions?.length;

    if (allQuestionsAnswered) {
      navigeUrl('/app/reading/result', {
        state: {
          answerQuizz: selectedChoices,
          CorrectAnswer: questions,
        },
      });
    } else {
      dispatch(
        showNotification({
          message: 'Please answer all questions before submitting.',
          status: 0,
        }),
      );
    }
  };

  useEffect(() => {
    dispatch(updateCharge(data?.remaining_accounting_charge));
    dispatch(clearReadingState());
  }, []);

  return (
    <div>
      <div className="grid lg:grid-cols-2 mt-10 border rounded-[2.25rem]">
        <div>
          <AssignmentContent paragraph={data?.body?.paragraph} />
        </div>
        <div className="mb-2">
          <AssignmentQuizz
            form={data?.body?.form}
            onChoiceSelect={handleChoiceSelect}
          />
          <Button type="submit" text="Submit" onClick={handleConfirmQuizz} />
        </div>
      </div>
    </div>
  );
};

export default QuizzReading;
