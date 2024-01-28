
type Props = {
    title: string;
    paragraph: string;
    image: string;
}

const IntroCard = ({ title, paragraph, image }: Props) => {
    return (
        <article className="rounded-2xl shadow-xl col-span-1 p-10 md:block flex flex-col items-center">
            <div className="flex md:flex-col flex-row justify-center md:items-start items-center md:space-x-0 space-x-2">
                <img className="w-20" src={image} alt="Video bài giảng chất lượng cao" />
                <h4 className="font-bold text-lg text-left md:mt-8 mt-0"> {title}</h4>
            </div>
            <p className="font-medium mt-4 md:mt-6 mt-2 text-left text-gray-500">
                {paragraph}
            </p>
        </article>
    )
}

export default IntroCard