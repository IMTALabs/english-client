import { useState } from "react";
import { useAppDispatch } from "src/app/store";
import { postReadingConten } from "src/features/common/reading-slice";

const Reading = () => {
    const [mode, setMode] = useState("gen_topic");
    const [topic, setToppic] = useState("");
    const [paragraph, setParagraph] = useState("");
    const dispatch = useAppDispatch();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Do something with the selected mode, toppic, and paragraph
        console.log("Selected Mode:", mode);
        console.log("Toppic:", topic);
        console.log("Paragraph:", paragraph);
        const formReading = {
            mode, topic, paragraph
        }
        dispatch(postReadingConten(formReading));
    };

    const handleModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMode(event.target.value);
    };

    const handleToppicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToppic(event.target.value);
    };

    const handleParagraphChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParagraph(event.target.value);
    };

    return (
        <div>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">
                Select an option
            </label>

            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    value={mode}
                    onChange={handleModeChange}
                >
                    <option value="gen_topic">Gen Toppic</option>
                    <option value="no_gen_topic">No Gen Toppic</option>
                </select>

                <input
                    type="text"
                    value={topic}
                    onChange={handleToppicChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="toppic"
                />

                {mode === "no_gen_topic" && (
                    <input
                        type="text"
                        value={paragraph}
                        onChange={handleParagraphChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="paragraph"
                    />
                )}

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                    Gửi
                </button>
            </form>
        </div>
    );
};

export default Reading;
