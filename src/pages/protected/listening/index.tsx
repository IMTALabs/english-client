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

const Listening = () => {
  const dispatch = useAppDispatch();
  const [linkUrl, setLinkUrl] = useState('');
  const { listeningQuizz } = useAppSelector(state => state.listening || '');
  const {isOpen} = useAppSelector(state => state.modal)

  const navigeUrl = useNavigate();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
        dispatch(
          openModal({
            title: 'Imta Bot is working please wait for 10-30s',
            bodyType: MODAL_BODY_TYPES.LOADING,
          }),
        );
      const response = await listeningApi.postYoutubeLink(linkUrl);
      dispatch(setListeningState(response));
    } catch (error: any) {
      dispatch(showNotification({ message: error.message, status: 0 }));
    } finally {
      dispatch(closeModal())
    }
  };

  useEffect(() => {
    if (!isOpen && Object.keys(listeningQuizz).length > 0) {
      navigeUrl('quizz', {
        state: {quizz: listeningQuizz},
      });
    }
  }, [isOpen]);

  return (
    <>
      <TitleCard title="Listening" topMargin="mt-0">
        <div className="">
          <h1 className="text-[24px] font-bold mb-[31px]">
            Enter <span className="text-[#EA6C6C]">Youtube</span> Video Url
          </h1>
          <form className="w-[100%] " onSubmit={handleSubmit}>
            <div className=" items-center  mb-2 ">
              <div className="w-[100%] mb-4">
                <input
                  type="url"
                  value={linkUrl}
                  onChange={e => setLinkUrl(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5"
                  placeholder="Paste your youtube video url here..."
                />
              </div>
              <Button type="submit" text=" Generate Quizz" />
            </div>
          </form>
          <Carousel  />
        </div>
        {/* carousel */}
      </TitleCard>
    </>
  );
};

export default Listening;
