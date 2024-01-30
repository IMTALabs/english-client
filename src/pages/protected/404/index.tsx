import { useState, useEffect } from 'react';
// import { formatDistance, differenceInMilliseconds } from 'date-fns';
import CustomCheckbox from 'src/components/checkbox';

function InternalPage() {
  const targetDate = new Date('2024-06-01T00:00:00'); // Ngày cần ddeesm
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);


  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const now = new Date();
  //     const distance = differenceInMilliseconds(targetDate, now);

  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //     setDays(days);
  //     setHours(hours);
  //     setMinutes(minutes);
  //     setSeconds(seconds);
  //   }, 1000);


  //   return () => clearInterval(intervalId);
  // }, [targetDate]);

  return (
    <div className="hero h-4/5 my-4">
      <div className="hero-content text-accent text-center">
        <div className="max-w-md">
          <div className='text-center'>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content min-w-[70px] ">
                <span className="countdown font-mono text-5xl text-center m-auto">{days}</span>
                days
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content min-w-[70px]">
                <span className="countdown font-mono text-5xl m-auto">{hours}</span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content min-w-[70px]">
                <span className="countdown font-mono text-5xl m-auto">{minutes}</span>
                min
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content min-w-[70px]">
                <span className="countdown font-mono text-5xl m-auto">{seconds}</span>
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
