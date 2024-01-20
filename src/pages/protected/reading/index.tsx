import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/app/store";
import Button from "src/components/button";
import TitleCard from "src/components/cards/title-card";
import Tab from "src/components/tab";
import { setErrorReadingState, setReadingState } from "src/features/common/reading-slice";
import readingApi from "src/features/services/reading/reading-api";

const Reading = () => {
    const { readingQuizz, error } = useAppSelector((state) => state.reading);
    const [text, setText] = useState<string>('')
    const [mode, setMode] = useState<string>('gen_topic')
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const handleSubmit = async () => {
        setIsLoading(true)
        //reading gen
        try {
            const response = await readingApi.postTopicReading({
                mode: mode,
                topic: mode === "gen_topic" ? text : '',
                paragraph: mode !== "gen_topic" ? text : '',
            })
            dispatch(setReadingState(response))
        } catch (errors: any) {
            dispatch(setErrorReadingState(errors.message))
        } finally {
            setIsLoading(false)
        }

    };

    const countWords = (text: string) => {
        // If there is no text, return 0
        if (!text.trim()) {
            return 0;
        }
        // Split the text into words and return the length
        const words = text.trim().split(/\s+/);
        return words.length;
    };

    const wordCount = countWords(text);

    useEffect(() => {
        if (wordCount >= 400) {
            setIsButtonDisabled(!isButtonDisabled);
        }
        return setIsButtonDisabled(false)
    }, [wordCount])

    return (
        <div >
            <TitleCard title="Reading" topMargin="0">
                <Tab isLoading={isLoading} quizz={readingQuizz} text={text} setText={setText} setMode={setMode} mode={mode} wordCount={wordCount} text1={'Generate Article'} text2={'Your Article'}/>
                <Button type="submit" text="Generate Quizz" onClick={handleSubmit} disabled={isButtonDisabled} />
            </TitleCard>
        </div>

    );
};

export default Reading;
