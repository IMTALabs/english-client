import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import Button from 'src/components/button';
import TitleCard from 'src/components/cards/title-card';
import Suggest from 'src/components/suggest';
import Tab from 'src/components/tab';
import TextAreaInput from 'src/components/text-input/text-area-input';
import TextInput from 'src/components/text-input/text-input';
import { showNotification } from 'src/features/common/header-slice';
import { closeModal, openModal } from 'src/features/common/modal-slice';
import { postReadingState } from 'src/features/common/writing-slice';
import writingApi from 'src/features/services/writing/writing-api';
import { MODAL_BODY_TYPES } from 'src/utils/global-constants';

const Writing = () => {
  const [text, setText] = useState<string>('');
  const [mode, setMode] = useState<string>('gen_topic');
  const navigateUrl = useNavigate();
  const dispatch = useAppDispatch();

  const { suggest } = useAppSelector(state => state.writing);
  const handleSubmit = async () => {
    if (mode === 'gen_topic') {
      try {
        dispatch(
          openModal({
            title: 'Imta Bot is working please wait for 10-30s',
            bodyType: MODAL_BODY_TYPES.LOADING,
          }),
        );
        const response = await writingApi.postGenInstructionApi(text);
        dispatch(postReadingState(response.data));
        if (response.data) {
          navigateUrl('quizz');
        }
      } catch (error: any) {
        dispatch(showNotification({ message: error.message, status: 0 }));
      } finally {
        dispatch(closeModal());

      }
    } else {
      navigateUrl('quizz', {
        state: { text },
      });
    }
  };

  const handleInputChange = (e: any) => {
    const inputText = e.target.value;
    // Limit the input to 500 characters
    const limitedText =
      inputText.length <= 3000 ? inputText : inputText.substring(0, 2996) + '...';
    setText(limitedText);
  };

  return (
    <TitleCard title="WRITING" topMargin="0">
      <Tab
        setMode={setMode}
        mode={mode}
        title={['Generate Prompt', 'Your Prompt']}
      />
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
            value={text}
            onChange={handleInputChange}
            label="Enter your prompt"
            containerStyle="mt-4 h-[300px]"
          />
          {text.length > 0 && (
            <div className="px-2">
              <p className="text-md">{text.length} / 3000 characters</p>
            </div>
          )}
        </div>
      )}

      <Button
        type="submit"
        text="Generate Quizz"
        onClick={handleSubmit}
        disabled={text.length === 0}
        containerStyle="mt-4"
      />

      {
        mode === 'gen_topic' && <Suggest data={suggest} setParagraphText={setText} />
      }
    </TitleCard>
  );
};

export default Writing;
