import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import AssignmentContent from 'src/components/assignment-content';
import AssignmentQuizz from 'src/components/assignment-quizz';
import Button from 'src/components/button';
import TitleCard from 'src/components/cards/title-card';
import TimerApp from 'src/components/time';
import { showNotification } from 'src/features/common/header-slice';
import { updateCharge } from 'src/features/common/user-slice';
import readingApi from 'src/features/services/reading/reading-api';
import { MODAL_BODY_TYPES } from 'src/utils/global-constants';
import { closeModal, openModal } from 'src/features/common/modal-slice';

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

  const { readingQuizz } = useAppSelector(state => state.reading);

  const navigeUrl = useNavigate();
  const dispatch = useAppDispatch();
  const questions: Question[] = readingQuizz?.data?.body?.form;
  const [selectedChoices, setSelectedChoices] = useState<
    Record<string, string>
  >({});
  const handleChoiceSelect = (questionIndex: number, choice: string) => {
    setSelectedChoices(prevChoices => ({
      ...prevChoices,
      [questionIndex]: choice,
    }));
  };
  const { isOpen } = useAppSelector(
    state => state.modal,
  );

  const handleConfirmQuizz = async () => {
    const allQuestionsAnswered =
      Object.keys(selectedChoices).length === questions?.length;
    if (allQuestionsAnswered) {
      dispatch(
        openModal({
          bodyType: MODAL_BODY_TYPES.LOADING,
        }),
      );
      const formChoices = {
        submit: selectedChoices,
        hash: readingQuizz?.data?.hash,
      };
      try {
        const response = await readingApi.postMarkReading(formChoices);
        if (response) {
          navigeUrl(`/app/reading/result/id=${readingQuizz?.data?.hash}`, {
            state: {
              markReading: response.data,
              article: readingQuizz?.data?.body?.paragraph,
            },
          });
        }
      } catch (error: any) {
        dispatch(showNotification({ message: error.message, status: 0 }));
      } finally {
        dispatch(closeModal());
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
    dispatch(updateCharge(readingQuizz?.remaining_accounting_charge));
  }, []);
  console.log(readingQuizz);


  return (
    <div>
      <TitleCard
        title="Reading"
        topMargin="0"
        skill='reading'
        hash={readingQuizz?.data?.hash}
        TopSideButtons={<TimerApp Active={true} />}>
        <div className="flex items-center">
          <div className="w-1/2">
            <AssignmentContent
              paragraph={readingQuizz?.data?.body?.paragraph}
              type={'text'}
            />
          </div>
          <div className="w-1/2">
            <AssignmentQuizz
              form={readingQuizz?.data?.body?.form}
              onChoiceSelect={handleChoiceSelect}
            />
            <Button
              containerStyle='mt-4'
              type="submit"
              text="Submit"
              onClick={handleConfirmQuizz}
              disabled={isOpen}
            />
          </div>
        </div>
      </TitleCard>
    </div>
  );
};

export default QuizzReading;
