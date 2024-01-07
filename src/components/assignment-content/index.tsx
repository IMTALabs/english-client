interface AssignmentContentProps {
    paragraph?: string;
}

const AssignmentContent: React.FC<AssignmentContentProps> = ({ paragraph }) => {
    console.log(paragraph , "assignment");
    
    return (
        <div className=''>
            <div className='border-r border-r-[#E0E0E0] p-4 border-transparent'>
                <p className='my-3'>
                    {paragraph}
                </p>
            </div>
        </div>
    );
}

export default AssignmentContent;
