import { useAppSelector } from "src/app/store";
import TitleCard from "src/components/cards/title-card";
import Tab from "src/components/tab";

const Writing = () => {
  const { isLoading } = useAppSelector((state) => state.writing);
  const quizz = useAppSelector((state) => state.writing?.WritingQuizz || "");
  
  return (
    <TitleCard title="Writing" topMargin="0">
      <Tab option1=" From Your Essay" option2='Generate Topic' mode1="topic" mode2="" isLoading={isLoading} quizz={quizz} />
    </TitleCard>
  );
};

export default Writing;
