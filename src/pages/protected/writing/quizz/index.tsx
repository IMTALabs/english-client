import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/app/store";
import AssignmentContent from "src/components/assignment-content";
import AssignmentQuizz from "src/components/assignment-quizz";
import Button from "src/components/button";
import { clearWritingState, postWritingPoint } from "src/features/common/writing-slice";
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

const QuizzWriting = () => {
  const data = useLocation()?.state?.quizz
  const data1 = useLocation()?.state?.text;
  console.log(data, data1);

  const navigeUrl = useNavigate();
  const questions: string = data
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
          instruction: questions || data1?.text
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
        {data1 ? <AssignmentContent paragraph={data1} /> : <AssignmentContent paragraph={data} />}
      </div>
      <div className="min-w-[400px]">
        <AssignmentQuizz onChoiceTextarea={handleChoiceTextarea} />
        <Button type='submit' text='Submit' onClick={handleConfirmQuizz} />
      </div>
    </div>
  );
};

export default QuizzWriting;
