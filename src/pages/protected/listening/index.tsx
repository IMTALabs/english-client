import { useEffect, useState } from 'react';
import TitleCard from 'src/components/cards/title-card';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import Button from 'src/components/button';
import listeningApi from 'src/features/services/listening/listening-api';
import { setListeningState } from 'src/features/common/listening-slice';
import Carousel from 'src/components/carousel';
import { showNotification } from 'src/features/common/header-slice';

const Listening = () => {
  const dispatch = useAppDispatch();
  const [linkUrl, setLinkUrl] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [videoRandom, setVideoRandom] = useState<any>([])
  const { listeningQuizz } = useAppSelector(state => state.listening || '');

  const navigeUrl = useNavigate();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setShowOverlay(true);
    setIsLoading(true);
    try {
      const response = await listeningApi.postYoutubeLink(linkUrl);
      dispatch(setListeningState(response));
    } catch (error: any) {
      console.log(error);

      dispatch(showNotification({ message: error.message, status: 0 }));
    } finally {
      setIsLoading(false);
      setShowOverlay(false);
    }
  };

  const handleGetVideo = async () => {
    try {
      const response = await listeningApi.getRandomVideoListening('listeing', 5);
      setVideoRandom(response)

    } catch (error: any) {
      console.log(error.message);
    }
  }


  useEffect(() => {
    if (!isLoading && Object.keys(listeningQuizz).length > 0) {
      navigeUrl('quizz', {
        state: { quizz: listeningQuizz },
      });
    }
    handleGetVideo()
  }, [isLoading]);

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
          {showOverlay && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-300 z-50 opacity-80 flex justify-center gap-4 items-center">
              <div className="fixed top-0 left-0 w-full h-full bg-gray-300 z-50 opacity-80 flex justify-center gap-4 items-center">
                <p className="font-bold text-black  text-[20px]">
                  Processing generating quizz...
                </p>
                <div className="inline-block relative w-[80px] h-[80px] lds-ring"></div>
              </div>
            </div>
          )}
          <Carousel videoRandom={videoRandom} setLinkUrl={setLinkUrl} />
        </div>

        {/* carousel */}
      </TitleCard>
    </>
  );
};

export default Listening;
