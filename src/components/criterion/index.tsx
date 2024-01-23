type Props = {
    name?: 'TA' | 'CC' | 'LR' | 'GRA' | string;
    text?: any;
};

export const nameCriterion = {
    TA: 'Task Achievement',
    CC: 'Coherence and Cohesion',
    LR: 'Lexical Resource',
    GRA: 'Grammatical Range and Accuracy'
};

const Criterion = ({ text, name }: Props) => {
    return (
        <div className='my-6'>
            <div className={`border border-gray-300  shadow-lg p-2  border-l-[10px] ${text.excerpt ? 'border-l-red-500' : 'border-l-yellow-300'}`}>
                {text?.excerpt ? <div>
                    <p className='text-[20px] font-medium mb-2'>Problem</p>
                    <div >
                        <span className="font-bold">Excerpt</span> : {
                            text?.excerpt
                        }
                    </div>

                  
                    <div >
                        <span className="font-bold">Issue</span> : {
                            text?.issue
                        }
                    </div>
                     <div >
                        <span className="font-bold">Idea</span> : {
                            text?.idea
                        }
                    </div>
                </div> :

                    <>
                        <p className='text-[20px] font-medium mb-2'>{nameCriterion[name as 'TA' | 'CC' | 'LR' | 'GRA']}</p>
                        <p>{text[name]}</p>
                    </>
                }
            </div>
        </div>
    );
};

export default Criterion;
