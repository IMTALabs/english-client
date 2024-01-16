import { useAppSelector } from "src/app/store";
import TitleCard from "src/components/cards/title-card";
import Tab from "src/components/tab";

const Writing = () => {
  const { isLoading , writingQuizz } = useAppSelector((state) => state.writing);
  
  return (
    <TitleCard title="Writing" topMargin="0">
      <Tab  isLoading={isLoading} quizz={writingQuizz} />
    </TitleCard>
  );
};

export default Writing;
