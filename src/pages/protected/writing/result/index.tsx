import { useLocation } from "react-router-dom";
import BandScore from "src/components/assessment/band-score";

const ResultWriting = () => {
  const { writingQuizz } = useLocation()?.state;

  return (
    <div className="sm:flex flex-1 gap-x-4">
      <div className="w-full min-h-screen rounded-[24px] p-4">
        <div className="flex items-center justify-center gap-4">
          <p className="font-bold text-3xl pb-2">Writing Quiz</p>
          <div className="sm:hidden">
            <p className="sm:text-[96px] text-[30px] text-center font-bold">
              {writingQuizz?.band_score}
            </p>
            <p className="sm:text-[24px] text-center">Overall Band Score</p>
          </div>
        </div>

        {writingQuizz?.bad_part?.map((item: any, index: string) => {
          return <div key={index} className="text-xl font-bold">
            <p className="">{index + 1} .{item.excerpt}</p>
            <p className="">{index + 1} .{item.idea}</p>
            <p className="">{index + 1} .{item.issue}</p>
            <p className="">{index + 1} .{item.new_version}</p>
          </div>
        })}
      </div>
      <BandScore valueData={writingQuizz?.criteria} bandScore={writingQuizz?.band_score} />
    </div>
  );
};

export default ResultWriting;
