import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import TitleCard from 'src/components/cards/title-card';
import Quizz from 'src/components/quizz';

interface Question {
  question: string;
  choices: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  explanation: string;
  answer: string;
  user_answer: string;
  is_correct: boolean;
}

const ResultListening = () => {
  const { markListening, video, listeningQuizz } = useLocation()?.state;
  console.log(markListening);

  return (
    <>
      <TitleCard
        title={`Your result : ${markListening?.data?.point}`}
        topMargin="0"
        titleStyle="text-3xl font-bold ">
        <div className="bg-base-100  rounded-lg mt-[10px] flex justify-between gap-3">
          <div className="w-3/5 overflow-y-auto h-[calc(100vh-16rem)] ">
            {markListening?.data?.results?.map((item: Question, index: number) => {
              return (
                <div key={index} className='mx-4'>
                  <Quizz
                    index={index}
                    question={item.question}
                    explanation={item.explanation}
                    user_answer={item?.user_answer}
                    is_correct={item.is_correct}
                    choices={listeningQuizz[index].choices}
                    type={'submission'}
                    answer={item.answer}
                  />

                </div>
              );
            })}
          </div>
          <div className="mx-auto h-[450px] w-2/5 rounded-xl overflow-hidden" >
            <ReactPlayer
              url={video}
              controls
              width="100%"
              playsinline
              height="100%"
              className="sm:w-full sm:h-[500px] flex justify-center aspect-video" config={{
                youtube: {
                  playerVars: { showinfo: 1 }
                },
              }} />
          </div>
        </div>
      </TitleCard>
    </>
  );
};

export default ResultListening;
