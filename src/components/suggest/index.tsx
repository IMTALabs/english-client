type suggestProg = {
    data: string[]
    setParagraphText: (e: string) => void
}
const Suggest = ({ data, setParagraphText }: suggestProg) => {

    return (
        <div className="gap-2 flex flex-wrap">
            {data?.map((item: string) => {
                return <span className="badge h-10 rounded-md mx-2 bg-primary text-white cursor-pointer" onClick={() => setParagraphText(item)}>{item}</span>
            })}
        </div>
    )
}

export default Suggest