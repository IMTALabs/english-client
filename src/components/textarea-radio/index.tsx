import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/app/store';
import Button from 'src/components/button';
import { postReadingContent } from 'src/features/common/reading-slice';
import { postWritingContent } from 'src/features/common/writing-slice';

type Props = {
    option: string;
    mode?: string;
};

const TextareaRadio = ({ option, mode }: Props) => {
    const [text, setText] = useState('');
    const navigateUrl = useNavigate();
    const dispatch = useAppDispatch();

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.target.value;
        setText(newText);
    };

    const handleSubmit = () => {
        if (mode === 'gen_topic') {
            dispatch(
                postReadingContent({
                    mode: mode,
                    topic: text,
                    paragraph: '',
                })
            );
        } else if (mode === 'no_gen_topic') {
            dispatch(
                postReadingContent({
                    mode: mode,
                    topic: '',
                    paragraph: text,
                })
            );
        } else if (mode === 'topic') {
            dispatch(postWritingContent(text));
        } else {
            navigateUrl('quizz', {
                state: { text },
            });
        }
    };

    const countWords = (text: string) => {
        // If there is no text, return 0
        if (!text.trim()) {
            return 0;
        }

        // Split the text into words and return the length
        const words = text.trim().split(/\s+/);
        return words.length;
    };

    const wordCount = countWords(text);
    const isDisabled = wordCount >= 400;

    return (
        <div>
            <div className="mx-auto">
                <p className="text-[24px] font-bold my-3 ">{option}</p>
                <textarea
                    onChange={handleTextChange}
                    className="w-full py-2 px-2 h-[203px] border-2 border-gray-300 rounded "
                    placeholder="Type or paste the topic here..."
                    value={text}

                ></textarea>
                <div className="flex justify-between">
                    <p>{wordCount} / 400 words</p>
                </div>
                <Button type="submit" text="Generate Quizz" onClick={handleSubmit} disabled={isDisabled} />
            </div>
        </div>
    );
};

export default TextareaRadio;
