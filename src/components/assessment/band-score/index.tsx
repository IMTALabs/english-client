import React from 'react';

interface BandScoreProps {
    valueData?: {
        TA?: string;
        CC?: string;
        LR?: string;
        GRA?: string;
        score: string;
    }[];
    bandScore?: number
}

const BandScore: React.FC<BandScoreProps> = ({ valueData, bandScore }) => {
    return (
        <section className="test-panel scroll container sm:w-8/12">
            <div className=" border-l-2 px-2">
                <p className="text-[96px] text-center font-bold text-[#FFA800]">{bandScore}</p>
                <p className="text-[36px] font-normal text-center mb-5">Overall Band Score</p>
                {valueData?.map((value, index) => {
                    return (
                        <div key={index}>
                            <p className="font-bold text-[24px] mb-5">
                                Coherence and cohesion: {value.score}
                            </p>
                            <div className="flex gap-1 mb-4">
                                <div className="w-[40px] h-[40px] bg-[#10B981] rounded-lg">
                                    <p className="mt-[5px] text-[20px] text-center text-white  font-bold ">
                                        {value.score}
                                    </p>
                                </div>
                                <p className="mt-[5px] text-[22px] font-medium">
                                    {value.TA || value.CC || value.LR || value.GRA}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default BandScore;