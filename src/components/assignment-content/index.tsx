interface AssignmentContentProps {
    paragraph?: string;
}

const AssignmentContent: React.FC<AssignmentContentProps> = ({ paragraph }) => {
    return (
        <div className=''>
            <div className='border-r border-r-[#E0E0E0] p-4 border-transparent'>
                <p className='font-bold bg-base-100 text-[30px]'>Reading Quizz</p>
                <p className='font-regular my-3 bg-base-100 text-[16px]'>You should spend 20 minutes on this task.</p>
                <p className='font-bold bg-base-100 text-[22px]'>Topic: The Vikings Wayfaring Way</p>
                <p className='my-3'>
                    {paragraph}
                </p>
            </div>
        </div>
    );
}

export default AssignmentContent;
