import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/app/store";
import AssignmentContent from "src/components/assignment-content";
import AssignmentQuizz from "src/components/assignment-quizz";
import Button from "src/components/button";
import { clearWritingState, postWritingPoint } from "src/features/common/writing-slice";
const QuizzWriting = () => {
  const QuizzWriting = useLocation()?.state?.quizz
  const textWriting = useLocation()?.state?.text;
  const navigeUrl = useNavigate();
  const questions: string = QuizzWriting
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const quizz = useAppSelector((state) => state.writing?.quizzs || "");
  const { isLoading } = useAppSelector((state) => state?.writing)
  const handleChoiceTextarea = (value: string) => {
    setTextAreaValue(value);
  };
  const handleConfirmQuizz = () => {
    if (textAreaValue.length > 0) {
      dispatch(postWritingPoint(
        {
          submission: textAreaValue,
          instruction: questions || textWriting?.text
        }
      ))
    } else {
      console.log('Please answer all questions before submitting.');
    }
  };
  useEffect(() => {
    if (!isLoading && quizz?.band_score) {
      navigeUrl('/app/writing/result', {
        state: { quizz }
      });
    }
    if (quizz.length > 0) {
      dispatch(clearWritingState())
    }
  }, [isLoading, quizz]);
  return (
    <div className='flex '>
      <div className="min-w-[400px]">
        {textWriting ? <AssignmentContent paragraph={textWriting} /> : <AssignmentContent paragraph={QuizzWriting} />}
      </div>
      <div className="min-w-[400px]">
        <AssignmentQuizz onChoiceTextarea={handleChoiceTextarea} />
        <Button type='submit' text='Submit' onClick={handleConfirmQuizz} />
      </div>
    </div>
  );
};
export default QuizzWriting;