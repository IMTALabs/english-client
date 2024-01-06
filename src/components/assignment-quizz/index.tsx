import Button from '../button';

type Root = Root2[];

interface Root2 {
    question: string;
    choices: Choices;
    explanation: string;
    answer: string;
}

interface Choices {
    A: string;
    B: string;
    C: string;
    D: string;
}

const AssignmentQuizz = ({ form }: { form?: Root }) => {
    if (form) {
        return (
            <div>
                <div className='p-4 lg:mt-0 sm:mt-[70px]'>
                    <p className='font-bold bg-base-100 text-[30px]'>Question 1-10</p>
                    <p className='my-3'>Choose the correct letter, A, B, С, or D.</p>
                    {form.map((item, index) => (
                        <div key={index}>
                            <p className='bg-base-100 text-[15px] font-bold'>{index + 1}. {item.question}</p>
                            <ul>
                                {Object.entries(item.choices).map(([key, choice]) => (
                                    <li key={key} className='my-3 flex justify-start'>
                                        <span className='w-[-10px]'>{key}.</span>
                                        <div className='border border-gray-400 rounded-full w-6 h-6 mx-2'></div>
                                        {choice}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <Button type="submit" text='submit' />
                </div>
            </div>
        );
    }
    return (
        <div className='p-4 lg:mt-0 sm:mt-[70px]'>
            <p className='font-bold bg-base-100 text-[30px]'>No Questions Available</p>
            <textarea
                placeholder="Type your answer here..."
                rows={6}
                cols={50}
                className='border p-2 my-3'
            />
            <Button type="submit" text='submit' />
        </div>
    );
};

export default AssignmentQuizz;
