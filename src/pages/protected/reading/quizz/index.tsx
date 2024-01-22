import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/app/store';
import AssignmentContent from 'src/components/assignment-content';
import AssignmentQuizz from 'src/components/assignment-quizz';
import Button from 'src/components/button';
import TitleCard from 'src/components/cards/title-card';
import TimerApp from 'src/components/time';
import { showNotification } from 'src/features/common/header-slice';
import { clearReadingState } from 'src/features/common/reading-slice';
import { updateCharge } from 'src/features/common/user-slice';
import readingApi from 'src/features/services/reading/reading-api';

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
  console.log(data, "hash");

  const navigeUrl = useNavigate();
  const dispatch = useAppDispatch();
  const questions: Question[] = data?.body?.form;
  const [isLoading, setIsLoading] = useState(false);


  const [selectedChoices, setSelectedChoices] = useState<
    Record<string, string>
  >({});
  const handleChoiceSelect = (questionIndex: number, choice: string) => {
    setSelectedChoices(prevChoices => ({
      ...prevChoices,
      [questionIndex]: choice,
    }));
  };

  const handleConfirmQuizz = async () => {
    const allQuestionsAnswered =
      Object.keys(selectedChoices).length === questions?.length;

    if (allQuestionsAnswered) {
      setIsLoading(true);
      const formChoices = {
        submit: selectedChoices,
        hash: data.hash
      }
      try {
        const response = await readingApi.postMarkReading(formChoices)
        if (response) {
          navigeUrl(`/app/reading/result/id=${data.hash}`, {
            state: {
              markReading: response,
              article: data?.body?.paragraph
            }
          });
        }
      } catch (error: any) {
        dispatch(showNotification({ message: error.message, status: 0 }));
      } finally {
        setIsLoading(false)
      }

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
      <TitleCard title="Reading" topMargin="0" TopSideButtons={<TimerApp Active={true} />}>
        <div className="flex items-center">
          <div className='w-1/2'>
            <AssignmentContent paragraph={data?.body?.paragraph} type={'text'} />
          </div>
          <div className="w-1/2">
            <AssignmentQuizz
              form={data?.body?.form}
              onChoiceSelect={handleChoiceSelect}
            />
            <Button type="submit" text="Submit" onClick={handleConfirmQuizz} disabled={isLoading} />
          </div>
        </div></TitleCard>
    </div>
  );
};

export default QuizzReading;
