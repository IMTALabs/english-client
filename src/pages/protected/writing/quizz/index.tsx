import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/app/store";
import AssignmentContent from "src/components/assignment-content";
import AssignmentQuizz from "src/components/assignment-quizz";
import Button from "src/components/button";
import { postWritingPoint } from "src/features/common/writing-slice";
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
  // const data = "Write an essay about the role of family in your life. Discuss the importance of family relationships and how they have influenced your personal development. Provide examples and explain how your family has shaped your values and beliefs. Consider the impact of family dynamics on your decision-making and future goals."
  const data = useLocation()?.state?.quizzWriting
  const data1 = useLocation()?.state;
  const navigeUrl = useNavigate();
  const questions: string = data
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const quizz = useAppSelector((state) => state.writing?.quizzs?.data || "");
  const { isLoading } = useAppSelector((state) => state.reading);

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
    if (!isLoading && quizz) {
      navigeUrl('/app/writing/result', {
        state: { quizz }
      });
    }
  }, [isLoading, quizz]);
  return (
    <div className="sm:flex flex-1 gap-x-4 bg-white">
      <div className='grid lg:grid-cols-2 '>
        <div>
          <AssignmentContent paragraph={data} />
        </div>
        <div>
          <AssignmentQuizz onChoiceTextarea={handleChoiceTextarea} />
          <Button type='submit' text='Submit' onClick={handleConfirmQuizz} />
        </div>
      </div>
    </div>
  );
};

export default QuizzWriting;
