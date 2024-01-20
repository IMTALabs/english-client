import React from 'react';
import { Icon } from 'src/assets/icon';


type Props = {
    text: string,
    setText: (text: string) => void,
    wordCount: number,
    mode: string,
    setArticle: (x: string) => void;
};

const TextareaRadio = ({ text, setText, wordCount, mode, setArticle }: Props) => {

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.target.value;
        setText(newText);
    };

    const handleClear = () => {
        const check = window.confirm('Are you sure you want to');
        if (check) {
            setArticle('')
            setText('')
        }
    }
    return (
        <div>
            <div className="mx-auto mt-4">
                {mode === 'gen_topic' ? <div className='flex items-center border justify-between rounded-md'>
                    <input type="text" placeholder="Enter keyword for generation" className="input flex-1 border-none focus:outline-none" onChange={handleTextChange} value={text} />
                    {text === "" ? null  : <button dangerouslySetInnerHTML={{ __html: Icon('cancel') }} className='px-4' onClick={handleClear} ></button>}
                </div> : <div>
                    <textarea
                        onChange={handleTextChange}
                        className="w-full py-2 px-2 h-[203px] border border-gray-300 rounded-md "
                        placeholder="Enter your resource"
                        value={text}

                    ></textarea>
                    <div className="flex justify-between">
                        <p>{wordCount} / 400 words</p>
                    </div>

                </div>

                }

            </div>
        </div >
    );
};

export default TextareaRadio;
