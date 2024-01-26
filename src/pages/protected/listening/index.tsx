import { useEffect, useState } from 'react';
import TitleCard from 'src/components/cards/title-card';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import Button from 'src/components/button';
import listeningApi from 'src/features/services/listening/listening-api';
import { setListeningState } from 'src/features/common/listening-slice';
import Carousel from 'src/components/carousel';
import { showNotification } from 'src/features/common/header-slice';
import { MODAL_BODY_TYPES } from 'src/utils/global-constants';
import { closeModal, openModal } from 'src/features/common/modal-slice';
import TextInput from 'src/components/text-input/text-input';

const Listening = () => {
  const dispatch = useAppDispatch();
  const [linkUrl, setLinkUrl] = useState('');
  
  const { isOpen } = useAppSelector(state => state.modal);
  const [isDisabled, setIsDisabled] = useState(true);
  const { youtubeRecommened } = useAppSelector(
    state => state.history,
  );
  const navigeUrl = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      dispatch(
        openModal({
          title: 'Imta Bot is working please wait for 10-30s',
          bodyType: MODAL_BODY_TYPES.LOADING,
        }),
      );
      const response = await listeningApi.postYoutubeLink(linkUrl);
      dispatch(setListeningState(response.data));
    } catch (error: any) {
      dispatch(showNotification({ message: error.message, status: 0 }));
    } finally {
      dispatch(closeModal());
      navigeUrl('quizz')
    }
  };

  const checkValidYoutubeUrl = (url: string) => {
    const regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
  };

  useEffect(() => {
    if (checkValidYoutubeUrl(linkUrl)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [linkUrl]);

  return (
    <>
      <TitleCard title="LISTENING" topMargin="mt-0">
        <div className="">
          <h1 className="text-[24px] font-bold mb-4">
            Enter your <span className="text-[#EA6C6C]">YOUTUBE</span> video url:
          </h1>
          <TextInput
            value={linkUrl}
            onChange={e => setLinkUrl(e.target.value)}
            label="Paste your youtube video url here"
            type="url"
          />
          <Button
            text=" Generate Quizz"
            onClick={handleSubmit}
            disabled={isDisabled}
            containerStyle="mt-4"
          />
          <Carousel
            listVideo={youtubeRecommened}
            onSelectedVideo={setLinkUrl}
          />
        </div>
        {/* carousel */}
      </TitleCard>
    </>
  );
};

export default Listening;
