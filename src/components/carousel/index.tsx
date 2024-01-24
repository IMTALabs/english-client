import {useState, useRef, useEffect} from 'react';

// Data
import {recommendedVideo} from 'src/features/common/history-slice';

export interface CarouselProps {
  listVideo: recommendedVideo[];
  onSelectedVideo : (s: string) => void
}

const Carousel = ({listVideo, onSelectedVideo}: CarouselProps) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="relative">
      <div
        ref={carousel}
        className="carousel rounded-box mt-4 w-full bg-base-200 py-2">
        {listVideo?.map((item, index) => (
          <div
            onClick={()=> onSelectedVideo(item.videoLink)}
            key={index}
            className={`carousel-item w-[45%] pl-2 max-h-[80%]`}>
            <div className="card card-side bg-base-100 w-full px-2 flex-col">
              <figure className="mt-2">
                <img src={item.thumbnails} alt="Movie" className="rounded-xl" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">{item.duration}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
          <button
            disabled={isDisabled('prev')}
            onClick={movePrev}
            className="btn btn-circle">
            ❮
          </button>
          <button
            disabled={isDisabled('next')}
            onClick={moveNext}
            className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
