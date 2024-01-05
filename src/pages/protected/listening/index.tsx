import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/app/store";
import { getListeningContent } from "src/features/common/listening-slice";

const Listening = () => {
    const dispatch = useAppDispatch();
    const [linkUrl, setLinkUrl] = useState('');
    const quizz = useAppSelector((state) => state.listening?.quizzs?.data || "");


    const navigeUrl = useNavigate();
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(getListeningContent(linkUrl));
    };
    const { isLoading } = useAppSelector((state) => state.listening);
    useEffect(() => {
        if (!isLoading && quizz) {
            navigeUrl('/listening/quizz', {
                state: { quizz }
            });
        }
    }, [isLoading, quizz]);

    const [showOverlay, setShowOverlay] = useState(false);

    const handleButtonClick = () => {
        setShowOverlay(true); // Hiển thị overlay khi button được click
    };

    const handleOverlayClick = () => {
        setShowOverlay(false); // Ẩn overlay khi click vào nền trắng
    };
    return (
        <div className="bg-base-100  rounded-lg mt-[10px] h-[92%] p-4">
            <h1 className="text-[30px] font-bold mb-[31px]">Enter <span className="text-[#EA6C6C]">Youtube</span> Video Url</h1>

            {isLoading ? (
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
            ) : (
                <form className="w-[100%] " onSubmit={handleSubmit}>
                    <div className=" items-center  mb-2 ">
                        <div className="w-[100%]">
                            <input
                                type="text"
                                value={linkUrl}
                                onChange={(e) => setLinkUrl(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5"
                                placeholder="Paste your youtube video url here..."
                            />
                        </div>

                        <button
                            onClick={handleButtonClick}
                            type="submit"
                            className="text-white bg-[#10B981] hover:bg-[#0D7E59] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 w-[100%] mt-[34px] relative py-3 btn_generate"
                        >
                            Generate Quizz
                        </button>
                    </div>
                </form>
            )}








            {/* <div className="bg-[#BEECDD] flex rounded-xl justify-around ">
                <p className="font-bold text-black mt-[20px] text-[20px]">Processing generating quizz...</p>
                <div className="inline-block relative w-[80px] h-[80px] lds-ring"><div></div><div></div><div></div><div></div></div>
            </div> */}

            {showOverlay && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-300 z-50 opacity-80 flex justify-center gap-4 items-center" onClick={handleOverlayClick}>
                    <p className="font-bold text-black  text-[20px]">Processing generating quizz...</p>
                    <div className="inline-block relative w-[80px] h-[80px] lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
            )}
        </div>

    );
};

export default Listening;
