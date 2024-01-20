interface AssignmentContentProps {
    paragraph?: string;
}

const AssignmentContent: React.FC<AssignmentContentProps> = ({ paragraph }) => {
    console.log(paragraph,"paragraph");
    
    return (
        <div className='overflow-y-auto h-[calc(100vh-14rem)]'>
            <div className='  p-4 border-transparent'>
                <p className='my-3 text-2xl font-bold' dangerouslySetInnerHTML={{ __html: paragraph }}>
                </p>
            </div>
        </div>
    );
}

export default AssignmentContent;
