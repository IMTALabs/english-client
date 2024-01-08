import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/app/store';
import Button from 'src/components/button';
import { postReadingContent } from 'src/features/common/reading-slice';
import { postWritingContent } from 'src/features/common/writing-slice';
type Props = {
    option: string,
    mode?: string
}
const TextareaRadio = ({ option, mode }: Props) => {
    const [text, setText] = useState('');
    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.target.value;
        setText(newText);
    };
    const navigeUrl = useNavigate()
    const dispatch = useAppDispatch()
    const handleSubmit = () => {
        console.log(mode, "Submit");
        if (mode == "gen_topic") {
            dispatch(postReadingContent(
                {
                    mode: mode,
                    topic: text,
                    paragraph: ""
                }));
        } else if (mode == "no_gen_topic") {
            dispatch(postReadingContent(
                {
                    mode: mode,
                    topic: "",
                    paragraph: text
                }));
        } else if (mode == 'topic') {
            dispatch(postWritingContent(text))
        } else {
            navigeUrl('quizz', {
                state: { text }
            });
        }
    }
    const characterCount = text.length;
    return (
        <div>
            <div className="mx-auto" >
                <p className="text-[24px] font-bold my-3 ">{option}</p>
                <textarea onChange={handleTextChange} className="w-full py-2 px-2 h-[203px] border-2 border-gray-300 rounded " placeholder="Type or patse the topic here..." ></textarea>
                <div className="flex justify-between">
                    <p>{characterCount}/500</p>
                </div>
                <Button type="submit" text='Generate Quizz' onClick={handleSubmit} />
            </div>
        </div>
    )
}

export default TextareaRadio