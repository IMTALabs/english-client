import { useLocation } from "react-router-dom";
import { useAppSelector } from "src/app/store";
import TitleCard from "src/components/cards/title-card";
import Criterion from "src/components/criterion";
import ScoreCriterion from "src/components/score-criterion";

const ResultWriting = () => {
  const { textAreaValue, instruction } = useLocation()?.state;



  const { writingQuizz } = useAppSelector(state => state?.writing);
  const keysArray = writingQuizz?.data?.criteria?.map((feedback: any) => Object.keys(feedback)[0]) as ('TA' | 'CC' | 'LR' | 'GRA')[];


  return (
    <div>
      <TitleCard title="Evaluation" topMargin="mt-0">
        <div className='grid grid-cols-8 gap-4 overflow-y-auto md:pt-4 pt-4 px-6 h-full w-full'>
          <div className='col-span-full lg:col-span-6 overflow-y-auto h-[calc(100vh-16rem)]'>
            <h2>Instruction :  <span>{instruction}</span></h2>
            <p >{textAreaValue}</p>

            {
              writingQuizz?.data?.bad_parts?.map((item, index) => {
                return <Criterion text={item} name={keysArray[index]} />
              })
            }
            {
              writingQuizz?.data?.criteria?.map((item, index) => {
                return <Criterion text={item} name={keysArray[index]} />
              })
            }
          </div>
          <div className=' col-span-full lg:col-span-2'>
            <div className=" px-2">
              <p className="text-[96px] text-center font-bold text-green-400 my-4 ">{writingQuizz?.data?.band_score}</p>
              <p className="text-[36px] font-normal text-center mb-[90px]">Overall Band Score</p>
              <div>
                {
                  writingQuizz?.data?.criteria?.map((item, index) => {
                    return <ScoreCriterion name={keysArray[index]} point={item.score} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </TitleCard>
    </div>
  );
};

export default ResultWriting;
