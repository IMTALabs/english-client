import BandScore from "src/components/assessment/band-score";
import Quizz from "src/components/assessment/quizz";

const ResultReading = () => {


    return (
        <div className="sm:flex flex-1 gap-x-4 ">
            <div className="sm:w-3/5">
                <p className="font-bold text-[30px] mb-[22px]">Reading Quizz</p>
                <p className="text-[30px] mb-[27px]">Your submit</p>
                <form className="quiz-form mb-2">
                    <Quizz index={0} title="What does the lecturer provide for those who are interested in doing extra reading?" answer='Mid-term examination.' explain="C Mid-term examination. Daily rountine is wrong because of..." />
                </form>
            </div>
            <div className="sm:w-2/5 border-l-2 px-4">
                <BandScore />
            </div>
        </div >
    );
};

export default ResultReading;