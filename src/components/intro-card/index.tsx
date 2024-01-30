import { Link } from "react-router-dom";

type Props = {
    title: string;
    paragraph: string;
    image: string;
}

const IntroCard = ({ title, paragraph, image }: Props) => {
    return (
        <Link to={`/${title}`}>
            <article className="rounded-2xl border-2 col-span-1 p-5 md:block flex flex-col items-center transform transition-transform hover:scale-105 hover:bg-primary hover:text-white">
                <div className="flex items-center md:items-start md:space-x-0 space-x-2 gap-4">
                    <img className="w-12" src={image} alt="Video bài giảng chất lượng cao" />
                    <h4 className="font-bold text-lg text-left md:mt-4 mt-0"> {title}</h4>
                </div>
                <p className="font-medium md:mt-6 mt-2 text-left  line-clamp-3">
                    {paragraph}
                </p>
            </article>
        </Link>

    )
}

export default IntroCard