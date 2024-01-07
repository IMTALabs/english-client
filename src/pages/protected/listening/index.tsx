import { useEffect, useState } from 'react';
import TitleCard from 'src/components/cards/title-card';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { getListeningContent } from 'src/features/common/listening-slice';
import Button from "src/components/button";

const Listening = () => {
    const dispatch = useAppDispatch();
    const [linkUrl, setLinkUrl] = useState('');
    const quizz = useAppSelector((state) => state.listening?.quizzs || "");
    const navigeUrl = useNavigate();
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(getListeningContent(linkUrl));
    };
    const { isLoading } = useAppSelector((state) => state.listening);
    if (!isLoading && quizz && quizz.body && quizz.body.form && Array.isArray(quizz.body.form) && quizz.body.form.length > 0) {
        navigeUrl('quizz', {
            state: { quizz: quizz }
        });
    }
    const [showOverlay, setShowOverlay] = useState(false);
    const handleOverlayClick = () => {
        setShowOverlay(true); // Ẩn overlay khi click vào nền trắng
    };

    return (
        <>
            <TitleCard title="Listening" topMargin="mt-2">
                <div className="">
                    <h1 className="text-[30px] font-bold mb-[31px]">Enter <span className="text-[#EA6C6C]">Youtube</span> Video Url</h1>
                    <form className="w-[100%] " onSubmit={handleSubmit}>
                        <div className=" items-center  mb-2 ">
                            <div className="w-[100%]">
                                <input
                                    type="url"
                                    value={linkUrl}
                                    onChange={(e) => setLinkUrl(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5"
                                    placeholder="Paste your youtube video url here..."
                                />
                            </div>
                            <Button type='submit' text=' Generate Quizz' onClick={handleOverlayClick} />
                        </div>
                    </form>
                    {showOverlay && (
                        <div className="fixed top-0 left-0 w-full h-full bg-gray-300 z-50 opacity-80 flex justify-center gap-4 items-center" onClick={handleOverlayClick}>
                            <p className="font-bold text-black  text-[20px]">Processing generating quizz...</p>
                            <div className="inline-block relative w-[80px] h-[80px] lds-ring"><div></div><div></div><div></div><div></div></div>
                        </div>
                    )}
                </div>
            </TitleCard>
        </>


    );
};

export default Listening;
