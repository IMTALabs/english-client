import { useAppSelector } from "src/app/store";
import TitleCard from "src/components/cards/title-card";
import Tab from "src/components/tab";

const Writing = () => {
  const { isLoading } = useAppSelector((state) => state.writing);
  const quizz = useAppSelector((state) => state.writing?.quizzs || "");
  return (
    <TitleCard title="Writing" topMargin="mt-2">
      <Tab option1="Generate Topic" option2='From Your Essay' mode1="topic" mode2="" isLoading={isLoading} quizz={quizz} />
    </TitleCard>
  );
};

export default Writing;
