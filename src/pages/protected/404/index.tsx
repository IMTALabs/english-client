import { useState, useEffect } from 'react';
import { setPageTitle } from 'src/features/common/header-slice';
import { useAppDispatch } from 'src/app/store';

function InternalPage() {
  const dispatch = useAppDispatch();
  const [countdown, setCountdown] = useState({
    days: 15,
    hours: 10,
    minutes: 24,
    seconds: 50,
  });

  useEffect(() => {
    dispatch(setPageTitle({ title: '' }));

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const newCountdown = { ...prevCountdown };

        if (newCountdown.seconds > 0) {
          newCountdown.seconds -= 1;
        } else {
          if (newCountdown.minutes > 0) {
            newCountdown.minutes -= 1;
            newCountdown.seconds = 59;
          } else {
            if (newCountdown.hours > 0) {
              newCountdown.hours -= 1;
              newCountdown.minutes = 59;
              newCountdown.seconds = 59;
            } else {
              if (newCountdown.days > 0) {
                newCountdown.days -= 1;
                newCountdown.hours = 23;
                newCountdown.minutes = 59;
                newCountdown.seconds = 59;
              } else {
                // Countdown has reached zero, do something if needed
                clearInterval(interval);
              }
            }
          }
        }

        return newCountdown;
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="hero h-4/5 my-4">
      <div className="hero-content text-accent text-center">
        <div className="max-w-md">
          <div className='text-center'>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">{countdown.days}</span>
                days
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">{countdown.hours}</span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">{countdown.minutes}</span>
                min
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">{countdown.seconds}</span>
                sec
              </div>
            </div>
          </div>

          <h1 className="text-5xl font-bold text-primary my-4">Coming soon</h1>
        </div>
      </div>
    </div>
  );
}

export default InternalPage;
