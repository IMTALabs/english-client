import { useLocation } from "react-router-dom";
import TitleCard from "src/components/cards/title-card";
import Criterion from "src/components/criterion";
import ScoreCriterion from "src/components/score-criterion";

const ResultWriting = () => {
  const { writingQuizz, textAreaValue, instruction } = useLocation()?.state;
  console.log(writingQuizz);
  const keysArray = writingQuizz?.criteria?.map((feedback: any) => Object.keys(feedback)[0]) as ('TA' | 'CC' | 'LR' | 'GRA')[];



  return (
    <div>
      <TitleCard title="Evaluation" topMargin="mt-0">
        <div className='grid grid-cols-8 gap-4 overflow-y-auto md:pt-4 pt-4 px-6 h-full w-full'>
          <div className='col-span-full lg:col-span-6 overflow-y-auto h-[calc(100vh-15rem)]'>
            <h2>Instruction :  <span>{instruction}</span></h2>
            <p >{textAreaValue}</p>

            {
              writingQuizz?.bad_parts?.map((item, index) => {
                console.log(item);

                return <Criterion text={item} name={keysArray[index]} />
              })
            }
            {
              writingQuizz?.criteria?.map((item, index) => {
                return <Criterion text={item} name={keysArray[index]} />
              })
            }
          </div>
          {/* 2 */}
          <div className=' col-span-full lg:col-span-2'>
            <div className=" px-2">
              <p className="text-[96px] text-center font-bold text-green-400 my-4 ">{writingQuizz?.band_score}</p>
              <p className="text-[36px] font-normal text-center mb-[90px]">Overall Band Score</p>
              <div>
                {
                  writingQuizz?.criteria?.map((item, index) => {
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
