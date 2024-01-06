import TitleCard from "src/components/cards/title-card";
import TextareaRadio from "src/components/textarea-radio";

const Writing = () => {

  return (
    <TitleCard title="Profile Settings" topMargin="mt-2">
      <TextareaRadio option1="Generate Topic" option2='From Your Essay' />
    </TitleCard>
  );
};

export default Writing;
