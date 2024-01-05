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
    const [isCardVisible, setCardVisibility] = useState(true);

    const handlePaymentTypeChange = (isCardSelected: boolean) => {
        setCardVisibility(isCardSelected);
    };
    const [text, setText] = useState('');
  
    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newText = event.target.value;
      setText(newText);
    };
  
    const characterCount = text.length;
   

    return (
        // <div>
        //     <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">
        //         Select an option
        //     </label>

        //     <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        //         <select
        //             id="countries"
        //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        //             value={mode}
        //             onChange={handleModeChange}
        //         >
        //             <option value="gen_topic">Gen Toppic</option>
        //             <option value="no_gen_topic">No Gen Toppic</option>
        //         </select>

        //         <input
        //             type="text"
        //             value={topic}
        //             onChange={handleToppicChange}
        //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        //             placeholder="toppic"
        //         />

        //         {mode === "no_gen_topic" && (
        //             <input
        //                 type="text"
        //                 value={paragraph}
        //                 onChange={handleParagraphChange}
        //                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        //                 placeholder="paragraph"
        //             />
        //         )}

        //         <button
        //             type="submit"
        //             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        //         >
        //             Gửi
        //         </button>
        //     </form>
        // </div>
        <div>
             <div className="grid lg:grid-cols-2 gap-4">
                        <button onClick={() => handlePaymentTypeChange(false)} className={`${isCardVisible ? 'text-[#D0D0D0] border border-2 ' : 'border-[#D0D0D0] border-[#10B981] bg-[#10B981] text-white'} hover:bg-[#0D7E59] hover:border-[#0D7E59] transition-colors duration-300 text-center rounded py-2 `}>From Your Essay</button>
                        <button onClick={() => handlePaymentTypeChange(true)} className={`${isCardVisible ?  'border-[#D0D0D0] border-[#10B981] bg-[#10B981] text-white' : 'text-[#D0D0D0] border border-2 '} hover:bg-[#0D7E59] hover:border-[#0D7E59] transition-colors duration-300 text-center rounded py-2 `}>Generate Topic</button>
                </div>
            {isCardVisible ? (
                <div className="mx-auto" >
               
                <p className=" bg-base-100 text-[24px]  font-bold my-3 ">Choose Topic</p>
                <textarea  onChange={handleTextChange} name="" id="" className="  w-full  bg-white  py-2 px-2 h-[203px] border border-2 border-gray-300 rounded " placeholder="Type or patse the topic here..." ></textarea>
                    <div className="flex justify-between">
                        <p></p>
                        <p  >{characterCount}/500</p>
                    </div>
                <p className=" bg-base-100 text-[24px] font-semibold my-4">Length</p>
                <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    value={mode}
                    onChange={handleModeChange}
                >
                    <option value="gen_topic">200-350</option>
                    <option value="no_gen_topic">350-400</option>
                </select>
                <button className=" p-2 hover:bg-[#0D7E59] hover:border-[#0D7E59] transition-colors duration-300 border border-[#10B981] bg-[#10B981] text-center text-white w-full mt-4 mt-4 rounded font-medium">Generate Quizz</button>
               </div>
            ) : (
                <div className="">
                    <p className=" font-bold text-[24px] my-3 bg-base-100">From Your Essay</p>
                    <textarea  onChange={handleTextChange} name="" id="" className="  w-full  bg-white  py-2 px-2 h-[203px] border border-2 border-gray-300 rounded " placeholder="Type or patse the topic here..." ></textarea>
                    <div className="flex justify-between">
                        <p></p>
                        <p >{characterCount}/500</p>
                    </div>
                    
                    <p className=" bg-base-100 text-[24px] font-semibold my-4">Length</p>
                    <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        value={mode}
                        onChange={handleModeChange}
                    >
                        <option value="gen_topic">200-350</option>
                        <option value="no_gen_topic">350-400</option>
                    </select>
                    <button className= " p-2 hover:bg-[#0D7E59] hover:border-[#0D7E59] transition-colors duration-300 border border-[#10B981] bg-[#10B981] text-center text-white w-full  sm:mx-auto mt-4 rounded font-medium">Generate Quizz</button>
                </div>
            )}
            
        </div>

    );
};

export default Reading;
