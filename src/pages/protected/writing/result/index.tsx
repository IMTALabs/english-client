import { useLocation } from "react-router-dom";
import BandScore from "src/components/assessment/band-score";

const ResultWriting = () => {
  const data = useLocation()?.state;
  console.log(data);

  return (
    <div className="sm:flex flex-1 gap-x-4 bg-white">
      <div className="w-full min-h-screen rounded-[24px] p-4">
        <div className="flex items-center justify-center gap-4">
          <p className="font-bold text-3xl pb-2">Writing Quiz</p>
          <div className="sm:hidden">
            <p className="sm:text-[96px] text-[30px] text-center font-bold">
              7.0
            </p>
            <p className="sm:text-[24px] text-center">Overall Band Score</p>
          </div>
        </div>
        <p className="">Your writing</p>
        <p className="font-normal sm:text-[20px] sm:leading-8 leading-6">
          communities. On the one hand, sports...
        </p>
        {data?.quizz?.bad_part?.map((item: any, index: string) => {
          return <div key={index}>
            <p className="">{index + 1} .{item.excerpt}</p>
            <p className="">{index + 1} .{item.idea}</p>
            <p className="">{index + 1} .{item.issue}</p>
            <p className="">{index + 1} .{item.new_version}</p>
          </div>
        })}
      </div>
      <BandScore valueData={data?.quizz?.criteria} bandScore={data?.quizz?.band_score} />
    </div>
  );
};

export default ResultWriting;
