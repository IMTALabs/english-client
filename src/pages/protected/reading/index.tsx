import { useState } from "react";
import { useAppDispatch, useAppSelector } from "src/app/store";
import TitleCard from "src/components/cards/title-card";
import Tab from "src/components/tab";
import { setErrorReadingState, setReadingState } from "src/features/common/reading-slice";
import readingApi from "src/features/services/reading/reading-api";

const Reading = () => {
    const { isLoading, readingQuizz, error } = useAppSelector((state) => state.reading);
    const [text, setText] = useState<string>('')
    const dispatch = useAppDispatch()
    const handleSubmitGen = async (mode: string) => {
        //reading gen
        try {
            const response = await readingApi.postTopicReading({
                mode: mode,
                topic: text,
                paragraph: '',
            })
            dispatch(setReadingState(response))
        } catch (errors: any) {
            dispatch(setErrorReadingState(errors.message))
        }

    };

    const handleSubmitNoGen = async (mode: string) => {
        try {
            const response = await readingApi.postTopicReading({
                mode: mode,
                topic: '',
                paragraph: text,
            })
            dispatch(setReadingState(response))
        } catch (errors: any) {
            dispatch(setErrorReadingState(errors.message))
        }
    };
    console.log(text , "text reading");
    

    return (
        <div >
            <TitleCard title="Reading" topMargin="0">
                <Tab isLoading={isLoading} quizz={readingQuizz} text={text} setText={setText} />
            </TitleCard>
        </div>

    );
};

export default Reading;
