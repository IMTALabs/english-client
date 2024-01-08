
export interface VideoProps {
    id?: number;
    contentVideo: string;
    titleVideo: string;
}
export const VideoData = [
    {
        id: 1,
        contentVideo: 'https://www.youtube.com/embed/21vR7Xm_LVc?si=P2vVersHm030pqM-',
        titleVideo: 'Vinfast VF3',
    }

];


type Props = {
    item: VideoProps
}

const VideoListening = ({ item }: Props) => {

    return (
        <div key={item.id} className="sm:flex gap-2 justify-between mt-32">
            <div>
                <iframe className="rounded-lg" width="230" height="135" src={item.contentVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <p>{item.titleVideo}</p>
            </div>
            <div>
                <iframe className="rounded-lg" width="230" height="135" src={item.contentVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <p>{item.titleVideo}</p>
            </div>
            <div>
                <iframe className="rounded-lg" width="230" height="135" src={item.contentVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <p>{item.titleVideo}</p>
            </div>

        </div>
    )
}

export default VideoListening