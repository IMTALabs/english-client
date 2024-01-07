const Spin = () => {
    return (
        <div><div className="fixed top-0 left-0 w-full h-full bg-gray-300 z-50 opacity-80 flex justify-center gap-4 items-center" >
            <p className="font-bold text-black  text-[20px]">Processing generating quizz...</p>
            <div className="inline-block relative w-[80px] h-[80px] lds-ring"><div></div><div></div><div></div><div></div></div>
        </div></div>
    )
}

export default Spin