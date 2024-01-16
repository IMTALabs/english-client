import React from 'react';


type Props = {
    text: string,
    setText: (text: string) => void,
    wordCount: number
};

const TextareaRadio = ({ text, setText, wordCount }: Props) => {

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.target.value;
        setText(newText);
    };

    return (
        <div>
            <div className="mx-auto mt-4">
                <textarea
                    onChange={handleTextChange}
                    className="w-full py-2 px-2 h-[203px] border border-gray-300 rounded-md "
                    placeholder="Type or paste the topic here..."
                    value={text}

                ></textarea>
                <div className="flex justify-between">
                    <p>{wordCount} / 400 words</p>
                </div>
            </div>
        </div>
    );
};

export default TextareaRadio;
