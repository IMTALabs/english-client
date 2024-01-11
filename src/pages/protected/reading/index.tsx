import { useAppSelector } from "src/app/store";
import TitleCard from "src/components/cards/title-card";
import Tab from "src/components/tab";

const Reading = () => {
    const { isLoading } = useAppSelector((state) => state.reading);
    const quizz = useAppSelector((state) => state.reading?.readingQuizz || "");
    return (
        <div >
            <TitleCard title="Reading" topMargin="0">
                <Tab option1="From Your Essay " option2='Generate Topic' mode1="gen_topic" mode2="no_gen_topic" isLoading={isLoading} quizz={quizz} />
            </TitleCard>
        </div>

    );
};

export default Reading;
