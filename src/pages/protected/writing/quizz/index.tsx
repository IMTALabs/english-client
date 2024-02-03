import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import AssignmentContent from 'src/components/assignment-content';
import AssignmentQuizz from 'src/components/assignment-quizz';
import Button from 'src/components/button';
import TitleCard from 'src/components/cards/title-card';
import TimerApp from 'src/components/time';
import { showNotification } from 'src/features/common/header-slice';
import { closeModal, openModal } from 'src/features/common/modal-slice';
import { postReadingState, } from 'src/features/common/writing-slice';
import writingApi from 'src/features/services/writing/writing-api';
import { MODAL_BODY_TYPES } from 'src/utils/global-constants';




const QuizzWriting = () => {
  const textWriting = useLocation()?.state?.text;

  const navigeUrl = useNavigate();
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const { writingQuizz } = useAppSelector(state => state?.writing);

  const { isOpen } = useAppSelector(state => state.modal);
  const handleChoiceTextarea = (value: string) => {
    setTextAreaValue(value);
  };



  const handleConfirmQuizz = async () => {
    if (textAreaValue.length > 0) {
      try {
        dispatch(
          openModal({
            title: 'Imta Bot is working please wait for 10-30s',
            bodyType: MODAL_BODY_TYPES.LOADING,
          }),
        );
        const response = await writingApi.postInstructionApi({
          submission: textAreaValue,
          instruction: textWriting || writingQuizz?.data?.body.instruction,
        })
        dispatch(postReadingState(response.data));
      } catch (error: any) {
        dispatch(showNotification({ message: error.message, status: 0 }));
      } finally {
        dispatch(closeModal());
        navigeUrl('/writing/result', {
          state: { textAreaValue, instruction: textWriting || writingQuizz?.data?.body.instruction },
        });
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


  return (
    <TitleCard
      title="Writing"
      topMargin="0"
      skill='writing'
      hash={writingQuizz?.hash}
      TopSideButtons={<TimerApp Active={true} />}>
      <div className="flex flex-1">
        <div className="w-1/3">
          {textWriting ? (
            <AssignmentContent paragraph={textWriting} />
          ) : (
            <AssignmentContent paragraph={writingQuizz?.data?.body} />
          )}
        </div>
        <div className="w-2/3">
          <AssignmentQuizz onChoiceTextarea={handleChoiceTextarea} />
          <Button containerStyle='mt-4' type="submit" text="Submit" onClick={handleConfirmQuizz} />
        </div>
      </div>
    </TitleCard>
  );
};
export default QuizzWriting;
