import BandScore from "src/components/assessment/band-score";

const ResultWriting = () => {
  return (
    <div className="sm:flex flex-1 gap-x-4 bg-white">
      <div className="w-full min-h-screen rounded-[24px] p-4">
        <div className="flex items-center justify-center gap-4">
          <p className="font-bold text-3xl pb-2">Writing Quizz</p>
          <div className="sm:hidden">
            <p className="sm:text-[96px] text-[30px] text-center font-bold">
              7.0
            </p>
            <p className="sm:text-[24px] text-center">Overall Band Score</p>
          </div>
        </div>
        <p className="">Your writing</p>
        <p className="font-normal sm:text-[20px] sm:leading-8 leading-6">
          These days, educational facilities have been known as the best place
          to take into account for team teaching. Some say that playing sports
          in a community is indispensable to training pupils to collaborate at
          school. Besides, physical exercises as a group have a positive impact;
          I believe the approach method stimulates only minor communities. On
          the one hand, sports learning is designed to open diverse ways for
          children to communicate more with their friends to create robust
          relationships. learning is designed to open diverse ways for children
          to communicate more with their friends to create robust relationships.
          These days, educational facilities have been known as the best place
          to take into account for team teaching. Some say that playing sports
          in a community is indispensable to training pupils to collaborate at
          school. Besides, physical exercises as a group have a positive impact;
          I believe the approach method stimulates only minor communities. On
          the one hand, sports... Besides, physical exercises as a group have a
          positive impact; I believe the approach method stimulates only minor
          communities.On the one hand, sports...</p>
      </div>
      <div>
        <BandScore />
      </div>
    </div>
  );
};

export default ResultWriting;
