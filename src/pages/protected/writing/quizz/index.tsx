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


  const { isLoading, writingQuizz } = useAppSelector((state) => state?.writing)
  const handleChoiceTextarea = (value: string) => {
    setTextAreaValue(value);
  };
  const handleConfirmQuizz = () => {
    if (textAreaValue.length > 0) {
      dispatch(postWritingPoint(
        {
          submission: textAreaValue,
          instruction: questions?.body || textWriting?.text
        }
      ))
    } else {
      console.log('Please answer all questions before submitting.');
    }
  };
  useEffect(() => {

    if (!isLoading && writingQuizz?.band_score) {
      navigeUrl('/app/writing/result', {
        state: { writingQuizz }
      });
    }
    if (Object.keys(writingQuizz).length > 0) {
      dispatch(clearWritingState())
    }
  }, [isLoading, writingQuizz]);
  return (
    <div className='flex '>
      <div className="min-w-[400px]">
        {textWriting ? <AssignmentContent paragraph={textWriting} /> : <AssignmentContent paragraph={QuizzWriting?.body} />}
      </div>
      <div className="min-w-[400px]">
        <AssignmentQuizz onChoiceTextarea={handleChoiceTextarea} />
        <Button type='submit' text='Submit' onClick={handleConfirmQuizz} />
      </div>
    </div>
  );
};
export default QuizzWriting;