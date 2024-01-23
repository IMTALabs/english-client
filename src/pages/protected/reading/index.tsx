import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import Button from 'src/components/button';
import TitleCard from 'src/components/cards/title-card';
import Tab from 'src/components/tab';
import {showNotification} from 'src/features/common/header-slice';
import {setReadingState} from 'src/features/common/reading-slice';
import readingApi from 'src/features/services/reading/reading-api';
import {closeModal, openModal} from 'src/features/common/modal-slice';
import {MODAL_BODY_TYPES} from 'src/utils/global-constants';

const Reading = () => {
  const {isOpen} = useAppSelector(state => state.modal);
  const {readingQuizz} = useAppSelector(state => state.reading);
  const [text, setText] = useState<string>('');
  const [mode, setMode] = useState<string>('gen_topic');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [article, setArticle] = useState<string>('');

  const dispatch = useAppDispatch();
  const handleSubmit = async () => {
    //reading gen
    setIsButtonDisabled(!isButtonDisabled);
    const paragraph = article !== '' ? article : text;
    try {
      dispatch(
        openModal({
          title: 'Imta Bot is working please wait for 10-30s',
          bodyType: MODAL_BODY_TYPES.LOADING,
        }),
      );
      const response = await readingApi.postArticleReading({
        mode: mode,
        topic: '',
        paragraph: paragraph,
      });
      dispatch(setReadingState(response));
    } catch (error: any) {
      dispatch(
        showNotification({
          message: error.response.data.errors.message,
          status: 0,
        }),
      );
    } finally {
      setIsButtonDisabled(false);
      dispatch(closeModal());
    }
  };

  const handleGenTopic = async () => {
    
    if (article !== '') {
      setMode('no_gen_topic');
      handleSubmit();
    } else {
      try {
        dispatch(
          openModal({
            title: 'Imta Bot is working please wait for 10-30s',
            bodyType: MODAL_BODY_TYPES.LOADING,
          }),
        );
        const response = await readingApi.postTopicReading({
          topic: text,
        });
        setArticle(response);
      } catch (error: any) {
        dispatch(
          showNotification({
            message: error.response.data.errors.message,
            status: 0,
          }),
        );
      } finally {
        setIsButtonDisabled(false);
        dispatch(closeModal());
      }
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
    setArticle('');
    if (wordCount >= 400) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [wordCount, mode]);
  return (
    <div>
      <TitleCard title="Reading" topMargin="0">
        <Tab
          isLoading={isOpen}
          quizz={readingQuizz}
          text={text}
          setText={setText}
          setMode={setMode}
          setArticle={setArticle}
          mode={mode}
          wordCount={wordCount}
          title={['Generate Article', 'Your Article']}
        />

        {article !== '' && (
          <div className="overflow-y-auto h-[calc(100vh-26rem)] border rounded mt-4 p-2">
            <p className="my-3 " dangerouslySetInnerHTML={{__html: article}} />
          </div>
        )}
        <div className='mt-4'>
          <Button
            type="submit"
            text={
              mode === 'gen_topic'
                ? article !== ''
                  ? 'Generate Quizz'
                  : 'Generate Article'
                : 'Generate Quizz'
            }
            onClick={mode === 'gen_topic' ? handleGenTopic : handleSubmit}
            disabled={isButtonDisabled}
          />
        </div>
      </TitleCard>
    </div>
  );
};

export default Reading;
