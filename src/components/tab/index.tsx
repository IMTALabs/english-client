import { useEffect } from 'react'
import TextareaRadio from '../textarea-radio';
import { useNavigate } from 'react-router-dom';
import Spin from '../spin';
type Props = {
    isLoading?: boolean | false;
    quizz?: any,
    text: string,
    setText: (text: string) => void,
    setMode: (mode: string) => void,
    wordCount: number,
    mode: string,
    text1?: string,
    text2?: string
}

const Tab = ({ isLoading, quizz, text, setText, setMode, wordCount, mode, text1, text2 }: Props) => {
    const navigeUrl = useNavigate();
    useEffect(() => {
        if (!isLoading && Object.keys(quizz).length > 0) {
            navigeUrl('quizz', {
                state: { quizz }
            });
        }
    }, [isLoading, quizz]);
    return (

        <div>
            < div className="grid lg:grid-cols-2 gap-4" >
                <button
                    onClick={() => setMode('gen_topic')}
                    className={`${mode === 'gen_topic' && 'bg-secondary text-white'} text-gray-500 border text-center rounded-md py-2 font-semibold '`} >
                    {text1}
                </button>
                <button
                    onClick={() => setMode('no_gen_topic')}
                    className={`${mode !== 'gen_topic' && 'bg-secondary text-white'} text-gray-500 border text-center rounded-md py-2 font-semibold '`} >
                   {text2}
                </button>
            </div >
            <TextareaRadio text={text} setText={setText} wordCount={wordCount} />
            {!isLoading ? '' : <Spin />}
        </div >
    )
}

export default Tab