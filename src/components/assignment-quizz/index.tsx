// AssignmentQuizz.jsx
import React, { useState } from 'react';
import TextAreaInput from '../text-input/text-area-input';
import Quizz from '../quizz';

interface Props {
  form?: Root;
  onSubmission?: (answers: Record<string, string>) => void;
  onChoiceSelect?: (questionIndex: number, choice: string) => void;
  onChoiceTextarea?: (questionIndex: string) => void;
}
type Root = Root2[];
interface Root2 {
  question: string;
  choices: Choices;
  explanation: string;
  answer: string;
}
interface Choices {
  A: string;
  B: string;
  C: string;
  D: string;
}
const AssignmentQuizz: React.FC<Props> = ({
  form,
  onChoiceSelect,
  onChoiceTextarea,
}) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const handleChoiceSelection = (questionIndex: number, choice: string) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: choice,
    }));
    // Gọi hàm callback để thông báo về sự kiện chọn lựa
    if (onChoiceSelect) {
      onChoiceSelect(questionIndex, choice);
    }
    const checkboxes = document.getElementsByName(`group_${questionIndex}`);

    // Loop qua tất cả checkboxes và bỏ chọn hết trước khi chọn checkbox mới
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });

    // Bỏ chọn tất cả các checkboxes trong cùng một nhóm
    document.getElementById(`checkbox_${questionIndex}_${choice}`).checked =
      true;
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = event.target.value;
    setTextAreaValue(value);
    // Gọi hàm callback để thông báo về sự kiện thay đổi giá trị textarea
    if (onChoiceTextarea) {
      // Pass the questionIndex along with the value
      onChoiceTextarea(value);
    }
  };
  if (form) {
    return (
      <div className="overflow-y-auto h-[calc(100vh-20rem)]">
        <div className="p-4 lg:mt-0 sm:mt-[70px]">
          <p className="font-bold bg-base-100 text-[30px]">Question 1-10</p>
          <p className="my-3">Choose the correct letter, A, B, C, or D.</p>


          {form.map((item, index) => (
            <Quizz index={index} question={item.question} choices={item.choices} handleChoiceSelection={handleChoiceSelection} />
          ))}
        </div>
      </div>
    );
  }
  // ... (your existing code for handling "No Questions Available")

  return (
    <div className="lg:mt-0  w-full h-[calc(100vh-20rem)]">
      <TextAreaInput
        id="message"
        containerStyle="w-full text-2xl h-full"
        label="Write your thoughts here..."
        value={textAreaValue}
        onChange={handleTextAreaChange}
      />
    </div>
  );
};

export default AssignmentQuizz;
