import { useRef } from "react";
import TitleCard from "../cards/title-card"

type Props = {}

const Recommendation = (props: Props) => {

    const dataRecommenation = [
        [
            {
                title: 'Daily life Frozen Land | Winter in Sweden',
                image: 'https://i.ytimg.com/vi/dBF65_kHdNg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyOBSeEJasrRWHaXfs1Be2D2bA7w',
                imageChannel: 'https://yt3.ggpht.com/ytc/AIf8zZRbJmH6zzvB2-oOsaPykz6FmCOnneOROiRtcgFMsw=s68-c-k-c0x00ffffff-no-rj',
                nameChannel: 'Jonna Jinton',
                description: "The coldest time of the year is here and lately we've had extreme cold temperatures. In this video I share some moments from the ..."
            },
            {
                title: 'Daily life Frozen Land | Winter in Sweden',
                image: 'https://i.ytimg.com/vi/dBF65_kHdNg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyOBSeEJasrRWHaXfs1Be2D2bA7w',
                imageChannel: 'https://yt3.ggpht.com/ytc/AIf8zZRbJmH6zzvB2-oOsaPykz6FmCOnneOROiRtcgFMsw=s68-c-k-c0x00ffffff-no-rj',
                nameChannel: 'Jonna Jinton',
                description: "The coldest time of the year is here and lately we've had extreme cold temperatures. In this video I share some moments from the ..."
            },
            {
                title: 'Daily life Frozen Land | Winter in Sweden',
                image: 'https://i.ytimg.com/vi/dBF65_kHdNg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyOBSeEJasrRWHaXfs1Be2D2bA7w',
                imageChannel: 'https://yt3.ggpht.com/ytc/AIf8zZRbJmH6zzvB2-oOsaPykz6FmCOnneOROiRtcgFMsw=s68-c-k-c0x00ffffff-no-rj',
                nameChannel: 'Jonna Jinton',
                description: "The coldest time of the year is here and lately we've had extreme cold temperatures. In this video I share some moments from the ..."
            }
        ],
        [
            {
                title: 'Daily life Frozen Land | Winter in Sweden',
                image: 'https://i.ytimg.com/vi/dBF65_kHdNg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyOBSeEJasrRWHaXfs1Be2D2bA7w',
                imageChannel: 'https://yt3.ggpht.com/ytc/AIf8zZRbJmH6zzvB2-oOsaPykz6FmCOnneOROiRtcgFMsw=s68-c-k-c0x00ffffff-no-rj',
                nameChannel: 'Jonna Jinton',
                description: "The coldest time of the year is here and lately we've had extreme cold temperatures. In this video I share some moments from the ..."
            },
            {
                title: 'Daily life Frozen Land | Winter in Sweden',
                image: 'https://i.ytimg.com/vi/dBF65_kHdNg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyOBSeEJasrRWHaXfs1Be2D2bA7w',
                imageChannel: 'https://yt3.ggpht.com/ytc/AIf8zZRbJmH6zzvB2-oOsaPykz6FmCOnneOROiRtcgFMsw=s68-c-k-c0x00ffffff-no-rj',
                nameChannel: 'Jonna Jinton',
                description: "The coldest time of the year is here and lately we've had extreme cold temperatures. In this video I share some moments from the ..."
            },
            {
                title: 'Daily life Frozen Land | Winter in Sweden',
                image: 'https://i.ytimg.com/vi/dBF65_kHdNg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyOBSeEJasrRWHaXfs1Be2D2bA7w',
                imageChannel: 'https://yt3.ggpht.com/ytc/AIf8zZRbJmH6zzvB2-oOsaPykz6FmCOnneOROiRtcgFMsw=s68-c-k-c0x00ffffff-no-rj',
                nameChannel: 'Jonna Jinton',
                description: "The coldest time of the year is here and lately we've had extreme cold temperatures. In this video I share some moments from the ..."
            }
        ]
    ];

    const carouselRef = useRef();

    const scrollToIndex = (groupIndex) => {
        const element = carouselRef.current;
        const scrollAmount = groupIndex * element.clientWidth;
        element.scrollTo({
            left: scrollAmount,
            behavior: 'smooth',
        });
        console.log(element);

    };
    return (
        <div>
            <TitleCard title="" topMargin={'mt-4'}>
                <div className="carousel w-full" ref={carouselRef}>
                    {dataRecommenation?.map((items, groupIndex) => (
                        <div id={`slide${groupIndex + 1}`} className="carousel-item relative w-full" key={groupIndex}>
                            <div className="flex items-center justify-between gap-4">
                                {items.map((item, itemIndex) => (
                                    <div className="card bg-base-100 shadow-xl w-1/3" key={itemIndex}>
                                        <figure>
                                            {itemIndex}
                                            <img
                                                className="h-full w-full"
                                                src={item.image}
                                                alt="Shoes" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{item.title}</h2>
                                            <div className="flex items-center gap-2">
                                                <img
                                                    className="w-6 h-6 rounded-full"
                                                    src={item.imageChannel} alt="Shoes" />
                                                <strong>J{item.nameChannel}</strong>
                                            </div>
                                            <p className="max-line-2">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <button onClick={() => scrollToIndex(groupIndex)} className="btn btn-circle">❮</button>
                                <button onClick={() => scrollToIndex(groupIndex)} className="btn btn-circle">❯</button>
                            </div>
                        </div>
                    ))}
                </div>
            </TitleCard>
        </div>
    )
}

export default Recommendation