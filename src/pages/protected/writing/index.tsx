import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import Button from 'src/components/button';
import TitleCard from 'src/components/cards/title-card';
import Tab from 'src/components/tab';
import {showNotification} from 'src/features/common/header-slice';
import {postReadingState} from 'src/features/common/writing-slice';
import writingApi from 'src/features/services/writing/writing-api';

const Writing = () => {
  const {isLoading, writingQuizz} = useAppSelector(state => state.writing);
  const [text, setText] = useState<string>('');
  const [mode, setMode] = useState<string>('topic');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const navigateUrl = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmit = async () => {
    if (mode === 'topic') {
      try {
        const response = await writingApi.postGenInstructionApi(text);
        dispatch(postReadingState(response));
      } catch (error: any) {
        dispatch(showNotification({message: error.message, status: 0}));
      }
    } else {
      navigateUrl('quizz', {
        state: {text},
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
    return setIsButtonDisabled(false);
  }, [wordCount]);

  return (
    <TitleCard title="Writing" topMargin="0">
      <Tab
        isLoading={isLoading}
        quizz={writingQuizz}
        text={text}
        setText={setText}
        setMode={setMode}
        mode={mode}
        wordCount={wordCount}
      />
      <Button
        type="submit"
        text="Generate Quizz"
        onClick={handleSubmit}
        disabled={isButtonDisabled}
      />
    </TitleCard>
  );
};

export default Writing;
