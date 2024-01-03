import { useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { renQuizz, uploadFileRenQuizz } from 'src/features/common/ren-quizz-slice';

const RenQuizz = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.renquizz?.file || "")
    const [formData, setFormData] = useState({
        fileType: 'plain',
        query: '',
        questionCount: 0,
        file: null
    });
    const fileInputRef = useRef(null);
    const handleFileTypeChange = (event: any) => {
        setFormData({ ...formData, fileType: event.target.value });
    };
    const handleEmailChange = (event: any) => {
        setFormData({ ...formData, query: event.target.value });
    };
    const handleSliderChange = (event: any) => {
        setFormData({ ...formData, questionCount: event.target.value });
    };
    const handleFileChange = (event: any) => {
        setFormData({ ...formData, file: event.target.files[0] });
    };



    const add = () => {
        const formDataA = new FormData();
        formDataA.append('file_quizz', formData.file);
        dispatch(uploadFileRenQuizz(formData.file))
    }
    const add1 = () => {
        const dataJson = JSON.parse(data.path);
        const filename = dataJson.filename;
        const formDataA = new FormData();
        formDataA.append('upload_id', data.upload_id);
        formDataA.append('name', filename);
        formDataA.append('query', formData.query);
        formDataA.append('num_quizz', formData.questionCount);
        formDataA.append('type', formData.fileType);
        formDataA.append('mode', "part");
        dispatch(renQuizz(formDataA))
    }

    return (
        <div className='className="max-w-2xl mx-auto p-8'>
            <div className='mb-5'>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">
                    Lựa chọn kiểu dạng file
                </label>
                <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    value={formData.fileType}
                    onChange={handleFileTypeChange}
                >
                    <option value='plain'>PDF</option>
                    <option value="ocr">PDF vip</option>
                </select>
            </div>
            <div className="flex gap-5">
                <div className="flex-grow">
                    <input
                        type="text"
                        id="email"
                        className="w-full px-4 py-2 mb-4 border rounded-md shadow-sm focus:ring focus:border-blue-500"
                        placeholder="Nhập chủ đề"
                        required
                        value={formData.query}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="flex-grow">
                    <label htmlFor="steps-range-slider-usage" className="block text-sm font-medium text-gray-700">
                        Sô lượng câu hỏi
                    </label>
                    <div className="flex items-center mt-1">
                        <input
                            type="range"
                            className="w-full h-8 bg-green-500 rounded-full border border-green-600 focus:outline-none focus:border-green-800"
                            id="steps-range-slider-usage"
                            min="1"
                            max="20"
                            step="1"
                            value={formData.questionCount}
                            onChange={handleSliderChange}
                        />

                        <span className="ml-2 text-gray-700">{formData.questionCount}</span>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-64 mb-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center h-full"
                >
                    <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                </label>
                <input
                    id="dropzone-file"
                    type="file"
                    className="absolute hidden"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                />
            </div>
            <button onClick={() => add()}>Gửi 1 </button>
            <button onClick={() => add1()}>Gửi 2 </button>
        </div>
    )
}

export default RenQuizz