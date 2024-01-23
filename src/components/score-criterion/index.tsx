import { nameCriterion } from "../criterion"

type Props = {
    name?: 'TA' | 'CC' | 'LR' | 'GRA' | string;
    point?: number
}

const ScoreCriterion = ({ point, name }: Props) => {

    const isValidName = name && Object.keys(nameCriterion).includes(name);
    console.log(point);

    return (
        <div>
            <div className="flex gap-1 mb-2">
                <div className=" w-[30px] h-[30px] bg-green-500 rounded-lg">
                    <p className=" mt-[5px] text-[15px] text-center text-white  font-bold ">{point}</p>
                </div>
                {isValidName && (
                    <>
                        <p className='text-[20px] font-medium mb-2'>{nameCriterion[name as 'TA' | 'CC' | 'LR' | 'GRA']}</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default ScoreCriterion