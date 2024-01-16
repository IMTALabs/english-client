import React from 'react';
import Button from 'src/components/button';

type Props = {
    handleSubmit?: () => void;
    text: string,
    setText: (text: string) => void
};

const TextareaRadio = ({ handleSubmit, text, setText }: Props) => {

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.target.value;
        setText(newText);
    };

    // const handleSubmit = async () => {
    //     if (mode === 'gen_topic') {
    //         //reading gen
    //         try {
    //             const response = await readingApi.postTopicReading({
    //                 mode: mode,
    //                 topic: text,
    //                 paragraph: '',
    //             })
    //             dispatch(setReadingState(response))
    //         } catch (error: any) {
    //             dispatch(setErrorReadingState(error.message))
    //         }
    //     } else if (mode === 'no_gen_topic') {
    //         //reading no gen
    //         try {
    //             const response = await readingApi.postTopicReading({
    //                 mode: mode,
    //                 topic: '',
    //                 paragraph: text,
    //             })
    //             dispatch(setReadingState(response))
    //         } catch (error: any) {
    //             dispatch(setErrorReadingState(error.message))
    //         }
    //     } else if (mode === 'topic') {
    //         //writing
    //         try {
    //             const response = await writingApi.postGenInstructionApi(text)
    //             dispatch(postReadingState(response))
    //         } catch (error: any) {
    //             dispatch(setErrorReading(error.message))
    //         }
    //     } else {
    //         navigateUrl('quizz', {
    //             state: { text },
    //         });
    //     }
    // };

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
                <p className="text-[24px] font-bold my-3 ">option</p>
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
