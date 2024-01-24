interface AssignmentContentProps {
    paragraph?: string;
    type?: string | null;
}

const AssignmentContent: React.FC<AssignmentContentProps> = ({ paragraph, type }) => {

    return (
        <div className='overflow-y-auto h-[calc(100vh-14rem)]'>
            <div className='p-4 border-transparent'>
                <p className={`my-3 text-xl ${!type && 'font-bold'}`} dangerouslySetInnerHTML={{ __html: paragraph }}>
                </p>
            </div>
        </div>
    );
}

export default AssignmentContent;
