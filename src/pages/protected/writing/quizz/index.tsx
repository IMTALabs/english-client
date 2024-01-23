import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import AssignmentContent from 'src/components/assignment-content';
import AssignmentQuizz from 'src/components/assignment-quizz';
import Button from 'src/components/button';
import TitleCard from 'src/components/cards/title-card';
import TimerApp from 'src/components/time';
import { showNotification } from 'src/features/common/header-slice';
import {
  clearWritingState,
  postWritingPoint,
} from 'src/features/common/writing-slice';
import {closeModal, openModal} from 'src/features/common/modal-slice';
import {MODAL_BODY_TYPES} from 'src/utils/global-constants';
const QuizzWriting = () => {
  const QuizzWriting = useLocation()?.state?.quizz;
  const textWriting = useLocation()?.state?.text;

  const navigeUrl = useNavigate();
  const questions: string = QuizzWriting;
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const { writingQuizz } = useAppSelector(state => state?.writing);
    const {isOpen} = useAppSelector(state => state.modal);
  const handleChoiceTextarea = (value: string) => {
    setTextAreaValue(value);
  };
  const handleConfirmQuizz = () => {
    if (textAreaValue.length > 0) {
      dispatch(
        postWritingPoint({
          submission: textAreaValue,
          instruction: questions?.body || textWriting?.text,
        }),
      );
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
    if (!isOpen && writingQuizz?.band_score) {
      navigeUrl('/app/writing/result', {
        state: {writingQuizz},
      });
    }
    if (Object.keys(writingQuizz).length > 0) {
      dispatch(clearWritingState());
    }
  }, [isOpen, writingQuizz]);
  return (
    <TitleCard title="Writing" topMargin="0" TopSideButtons={<TimerApp Active={true} />}>

      <div className="flex ">
        <div className="w-1/3">
          {textWriting ? (
            <AssignmentContent paragraph={textWriting} />
          ) : (
            <AssignmentContent paragraph={QuizzWriting?.body} />
          )}
        </div>
        <div className="w-2/3">
          <AssignmentQuizz onChoiceTextarea={handleChoiceTextarea} />
          <Button type="submit" text="Submit" onClick={handleConfirmQuizz} />
        </div>
      </div>
    </TitleCard>

  );
};
export default QuizzWriting;
