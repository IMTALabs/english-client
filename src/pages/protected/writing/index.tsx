import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/app/store";
import { Error } from "src/components/alert";
import Button from "src/components/button";
import TitleCard from "src/components/cards/title-card";
import Tab from "src/components/tab";
import { postReadingState } from "src/features/common/writing-slice";
import writingApi from "src/features/services/writing/writing-api";

const Writing = () => {
  const { isLoading, writingQuizz } = useAppSelector((state) => state.writing);
  const [text, setText] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [mode, setMode] = useState<string>('topic')
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)
  const navigateUrl = useNavigate()
  const dispatch = useAppDispatch()
  const handleSubmit = async () => {
    if (mode === 'topic') {
      try {
        const response = await writingApi.postGenInstructionApi(text)
        dispatch(postReadingState(response))
      } catch (error: any) {
        setErrorMessage(error.message)
      }
    } else {
      navigateUrl('quizz', {
        state: { text },
      });
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

  console.log(errorMessage);
  

  return (
    <TitleCard title="Writing" topMargin="0">
      {<Error text={errorMessage} setErrorMessage={setErrorMessage} type={'error'} />}
      <Tab isLoading={isLoading} quizz={writingQuizz} text={text} setText={setText} setMode={setMode} mode={mode} wordCount={wordCount} />
      <Button type="submit" text="Generate Quizz" onClick={handleSubmit} disabled={isButtonDisabled} />
    </TitleCard>
  );
};

export default Writing;
