
export interface DataProps {
    id?: number;
    iconPath: string;
    contend?: string;

}
export const Data = [
    {
        id: 1,
        iconPath: "M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 12.25V12h1v3.25a.75.75 0 0 0 1.5 0V12h1l-1-5v-.215a.285.285 0 0 1 .56-.078l.793 2.777a.711.711 0 1 0 1.364-.405l-1.065-3.461A3 3 0 0 0 8.784 3.5H7.216a3 3 0 0 0-2.868 2.118L3.283 9.079a.711.711 0 1 0 1.365.405l.793-2.777a.285.285 0 0 1 .56.078V7l-1 5h1v3.25a.75.75 0 0 0 1.5 0Z",
        contend: ['Phụ nữ xinh đẹp']
    },
    {
        id: 2,
        iconPath: "M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z",
        contend: "Nhà đẹp "
    }

];

type Props = {
    obj: DataProps
}
const TextareaImage = ({ obj }: Props) => {

    return (
        <div>
            <div>
                <textarea className="w-full resize-none py-2 px-2 h-[100px] border-none outline-none border-gray-300 rounded " placeholder="Mô tả ngắn gọn hình ảnh bạn muốn tạo ..." ></textarea>
                <div className='flex justify-between'>
                    <div className="flex gap-2">


                        <p className='inline-block mr-2'>ví dụ.</p>
                        {
                            obj.map(item => {
                                return (
                                    <div key={item.id}>
                                        <div className='rounded-sm p-1  mr-2 bg-[#f5f5f5] inline-block'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-person-standing-dress inline-block mb-[4px] mr-[5px]" viewBox="0 0 16 16">
                                                <path d={item.iconPath} />
                                            </svg>
                                            <p className='inline-block'>{item.contend}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>



                    <div className='rounded-2xl px-3 py-1 bg-gradient-to-r from-[#fb992d] to-[#c438e6] text-white inline-block'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stars inline-block mb-[4px] mr-[5px]" viewBox="0 0 16 16">
                            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                        </svg>
                        <p className='inline-block'><b>Phát ra</b> (chi phí 4 truy vấn hình ảnh)</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TextareaImage