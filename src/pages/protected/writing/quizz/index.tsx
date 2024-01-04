import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "src/app/store";
import { postWritingPoint } from "src/features/common/writing-slice";

const QuizzWriting = () => {
    const data = useLocation()?.state?.quizz
    const [paragraph, setParagraph] = useState('')
    const dispatch = useAppDispatch();
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formWriting = {
            "instruction": data,
            "submission": paragraph
        }
        dispatch(postWritingPoint(formWriting))
    };
    return (
        <div className="flex flex-1 gap-x-4">
            <div className="w-[760px] h-[450px] rounded-[24px] p-4" >
                {data}
            </div>
            <section className="test-panel scroll container w-4/12" >

                <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <div className="flex items-center space-x-2 mb-2">
                        <textarea
                            defaultValue={'paragraph'}
                            onChange={(e) => setParagraph(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Đoạn văn"
                        />
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Gửi
                        </button>
                    </div>
                </form>
            </section>
        </div >
    );
};

export default QuizzWriting;
