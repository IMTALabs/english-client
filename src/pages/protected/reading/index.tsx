import { useState} from 'react';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import Button from 'src/components/button';
import TitleCard from 'src/components/cards/title-card';
import Tab from 'src/components/tab';
import {showNotification} from 'src/features/common/header-slice';
import {setReadingState} from 'src/features/common/reading-slice';
import readingApi from 'src/features/services/reading/reading-api';
import {closeModal, openModal} from 'src/features/common/modal-slice';
import {MODAL_BODY_TYPES} from 'src/utils/global-constants';
import TextInput from 'src/components/text-input/text-input';
import TextAreaInput from 'src/components/text-input/text-area-input';
import {useNavigate} from 'react-router-dom';

const Reading = () => {
  const {readingQuizz} = useAppSelector(state => state.reading);
  const [text, setText] = useState<string>('');
  const [mode, setMode] = useState<string>('gen_topic');
  const [article, setArticle] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmit = async () => {
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
      dispatch(closeModal());
      navigate('quizz', {
        state: {readingQuizz},
      });
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
        dispatch(closeModal());
      }
    }
  };


   const handleInputChange = (e: any) => {
     const inputText = e.target.value;

     // Limit the input to 500 characters
     const limitedText =
       inputText.length <= 500
         ? inputText
         : inputText.substring(0, 497) + '...';

     setArticle(limitedText);
   };

  return (
    <div>
      <TitleCard title="READING" topMargin="0">
        <Tab
          setMode={setMode}
          mode={mode}
          title={['Generate Article', 'Your Article']}
        />

        {/* {article !== '' && (
          <div className="overflow-y-auto h-[calc(100vh-26rem)] border rounded mt-4 p-2">
            <p className="my-3 " dangerouslySetInnerHTML={{__html: article}} />
          </div>
        )} */}

        {mode === 'gen_topic' ? (
          <TextInput
            value={text}
            onChange={e => setText(e.target.value)}
            label="Enter keyword for generation"
            containerStyle="mt-4"
          />
        ) : (
          <div>
            <TextAreaInput
              value={article}
              onChange={handleInputChange}
              label="Enter your article"
              containerStyle="mt-4"
            />
            {article.length > 0 && (
              <div className="px-2">
                <p className="text-md">{article.length} / 500 words</p>
              </div>
            )}
          </div>
        )}

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
          disabled={mode === 'gen_topic' ? text === '' : article === ''}
          containerStyle="mt-4"
        />
      </TitleCard>
    </div>
  );
};

export default Reading;
