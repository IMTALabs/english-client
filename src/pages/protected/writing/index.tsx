import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import TitleCard from 'src/components/cards/title-card';
import { postWritingContent } from 'src/features/common/writing-slice';
const Writing = () => {
  const dispatch = useAppDispatch();
  const quizz = useAppSelector(state => state.writing?.quizzs?.data || '');
  const { isLoading } = useAppSelector(state => state.writing);
  const [paragraph, setParagraph] = useState('');
  const [toppic, setToppic] = useState('');

  const navigeUrl = useNavigate();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!paragraph) {
      navigeUrl('/writing/quizz', {
        state: { quizz: paragraph },
      });
    }
  };
  const handleSubmitToppic = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(postWritingContent(toppic));
  };
  const [isCardVisible, setCardVisibility] = useState(true);

  const handlePaymentTypeChange = (isCardSelected: boolean) => {
    setCardVisibility(isCardSelected);
  };
  console.log(isLoading, quizz);

  useEffect(() => {
    if (!isLoading && quizz) {
      navigeUrl('/writing/quizz', {
        state: { quizz },
      });
    }
  }, [isLoading, quizz]);
  return (
    <TitleCard title="Profile Settings" topMargin="mt-2">
      <section className="antialiased  min-h-full h-full ">
        <div className=" max-w-screen mx-auto ">
          <div className="flex justify-center mt-2 pt-2">
            <div className=" flex w-full sm:gap-3 md:gap-4 gap-5  rounded">
              <button
                className={` flex-1 text-sm font-medium p-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 ${isCardVisible
                  ? 'bg-[#10B981] text-white rounded-[5px] hover:bg-[#0D7E59]'
                  : 'border-2 border-[#D0D0D0] rounded-[5px] text-gray-400'
                  }`}
                onClick={() => handlePaymentTypeChange(true)}>
                Toppic
              </button>
              <button
                className={` flex-1 text-sm font-medium p-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 ${!isCardVisible
                  ? 'bg-[#10B981] text-white rounded-[5px] hover:bg-[#0D7E59]'
                  : 'border-2 border-[#D0D0D0] rounded-[5px] text-gray-400'
                  }`}
                onClick={() => handlePaymentTypeChange(false)}>
                Quizz
              </button>
            </div>
          </div>

          {isCardVisible ? (
            <div className="space-y-4">
              <p className="font-semibold py-4 sm:text-[24px] text-sm">
                From your essay
              </p>

              <form
                className="min-w-full mx-auto"
                onSubmit={handleSubmitToppic}>
                <div className="flex items-center flex-col mb-2">
                  <textarea
                    value={toppic}
                    onChange={e => setToppic(e.target.value)}
                    className="border resize-none focus:outline-none  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block min-w-full sm:w-[85%] w-full min-h-[30vh]   p-2.5"
                    placeholder="Type or patse the topic here..."></textarea>
                  <button
                    type="submit"
                    className="text-white bg-[#10B981] hover:bg-[#0D7E59] focus:ring-4 mt-5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="font-semibold py-4 sm:text-[24px] text-sm">
                From your essay
              </p>
              <form className="min-w-full mx-auto" onSubmit={handleSubmit}>
                <div className="flex items-center flex-col  mb-2">
                  <textarea
                    value={paragraph}
                    onChange={e => setParagraph(e.target.value)}
                    className=" border  resize-none  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block min-w-full sm:w-[85%] w-full min-h-[30vh] p-2.5"
                    placeholder="Type or patse the topic here..."
                  />
                  <button
                    type="submit"
                    className="text-white bg-[#10B981] hover:bg-[#0D7E59] focus:ring-4 mt-5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </TitleCard>

  );
};

export default Writing;
