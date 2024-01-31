import { suggestState } from "src/features/common/reading-slice"


type suggestProg = {
    data: suggestState[]
    setParagraphText: (e: string) => void
}
const Suggest = ({ data, setParagraphText }: suggestProg) => {

    return (
        <div>
            {data?.map((item: suggestState) => {
                return <span className="badge h-10 rounded-md mx-2 bg-primary text-white" onClick={() => setParagraphText(item.topic)}>{item.topic}</span>
            })}
        </div>
    )
}

export default Suggest