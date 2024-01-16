interface AssignmentContentProps {
    paragraph?: string;
}

const AssignmentContent: React.FC<AssignmentContentProps> = ({ paragraph }) => {
    return (
        <div className='overflow-y-auto h-[calc(100vh-8rem)]'>
            <div className='border-r border-r-[#E0E0E0] p-4 border-transparent'>
                <p className='my-3' dangerouslySetInnerHTML={{ __html: paragraph }}>
                </p>
            </div>
        </div>
    );
}

export default AssignmentContent;
