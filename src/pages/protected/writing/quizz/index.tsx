import AssignmentContent from "src/components/assignment-content";
import AssignmentQuizz from "src/components/assignment-quizz";


const QuizzWriting = () => {
  const data = "Write an essay about the role of family in your life. Discuss the importance of family relationships and how they have influenced your personal development. Provide examples and explain how your family has shaped your values and beliefs. Consider the impact of family dynamics on your decision-making and future goals."

  return (
    <div className="sm:flex flex-1 gap-x-4 bg-white">
      <div className='grid lg:grid-cols-2 '>
        <div>
          <AssignmentContent paragraph={data} />
        </div>
        <div>
          <AssignmentQuizz />
        </div>
      </div>
    </div>
  );
};

export default QuizzWriting;
