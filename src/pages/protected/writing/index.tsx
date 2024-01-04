import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/app/store";
import { postWritingContent } from "src/features/common/writing-slice";


const Writing = () => {
    const dispatch = useAppDispatch();
    const quizz = useAppSelector((state) => state.writing?.quizzs?.data || "");
    const { isLoading } = useAppSelector((state) => state.writing);
    const [paragraph, setParagraph] = useState('')
    const [toppic, setToppic] = useState('')

    const navigeUrl = useNavigate();
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!paragraph) {
            navigeUrl('/writing/quizz', {
                state: { quizz: paragraph }
            })
        }
    };
    const handleSubmitToppic = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(postWritingContent(toppic))
    };
    const [isCardVisible, setCardVisibility] = useState(true);

    const handlePaymentTypeChange = (isCardSelected: boolean) => {
        setCardVisibility(isCardSelected);
    };
    console.log(isLoading ,quizz );
    
    useEffect(() => {
        if (!isLoading && quizz) {
            navigeUrl('/writing/quizz', {
                state: { quizz }
            });
        }
    }, [isLoading, quizz]);
    return (
        <div>

            <section className="antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
                <div className="h-full">
                    <div className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto">
                        <div className="bg-white px-8 pb-6 rounded-b shadow-lg">
                            <div className="flex justify-center mb-6">
                                <div className="relative flex w-full p-1 bg-gray-50 rounded">
                                    <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                                        <span className={`absolute inset-0 w-1/2 bg-white rounded border border-gray-200 shadow-sm transform transition duration-150 ease-in-out ${isCardVisible ? 'translate-x-0' : 'translate-x-full'}`}></span>
                                    </span>
                                    <button
                                        className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 ${isCardVisible ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-300'}`}
                                        onClick={() => handlePaymentTypeChange(true)}
                                    >
                                        Toppic
                                    </button>
                                    <button
                                        className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 ${!isCardVisible ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-300'}`}
                                        onClick={() => handlePaymentTypeChange(false)}
                                    >
                                        Quizz
                                    </button>
                                </div>
                            </div>

                            {isCardVisible ? (
                                <div className="space-y-4">
                                    <form className="max-w-sm mx-auto" onSubmit={handleSubmitToppic}>
                                        <div className="flex items-center space-x-2 mb-2">
                                            <input
                                                type="text"
                                                value={toppic}
                                                onChange={(e) => setToppic(e.target.value)}
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
                                </div>
                            ) : (
                                <div>
                                    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                                        <div className="flex items-center space-x-2 mb-2">
                                            <textarea
                                                value={paragraph}
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
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Writing