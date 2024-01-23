import { useState, useRef, useEffect } from 'react';

// Data


export interface Root2 {
  videoLink: string
  title: string
  description: string
  thumbnails: string
  duration: string
}

type videoRandomProps = {
  videoRandom: Root2[],
  setLinkUrl: (x: string) => void
}

const Carousel = ({ videoRandom, setLinkUrl }: videoRandomProps) => {

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
        className="carousel rounded-box w-full bg-base-200 max-h-[360px] min-h-[360px] py-2 ">
        {videoRandom?.map((item, index) => (
          <div key={index} className={`carousel-item w-1/2 h-[calc(360px-24px)]] p-2`}>
            <div className="card w-full h-full bg-base-100 shadow-xl ">
              <figure><img src={item.thumbnails} alt="Shoes" className='object-fill' /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.title}
                  <div className="badge badge-secondary ">{item.duration}</div>
                </h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline"><button
                    onClick={() => setLinkUrl(item.videoLink)}
                  >Watch</button></div>
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
