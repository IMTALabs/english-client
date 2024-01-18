import {useState, useRef, useEffect} from 'react';

// Data
import data from './data.json';

const Carousel = () => {
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
        {data.resources.map((item, index) => (
          <div key={index} className={`carousel-item w-1/2 pl-2`}>
            <div className="card card-side bg-base-100 w-full px-2">
              <figure>
                <img src={item.imageUrl} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
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
