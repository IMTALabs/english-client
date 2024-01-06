import TitleCard from "src/components/cards/title-card";
import Tab from "src/components/tab";

const Writing = () => {

  return (
    <TitleCard title="Profile Settings" topMargin="mt-2">
      <Tab option1="Generate Topic" option2='From Your Essay' />
    </TitleCard>
  );
};

export default Writing;
