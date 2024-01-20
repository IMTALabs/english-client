import { useState, useEffect } from 'react';

type Prop = {
    Active: boolean;
};

const TimerApp = ({ Active }: Prop) => {
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        let interval;

        if (Active) {
            interval = setInterval(() => {
                setTime((prevTime) => {
                    const newSeconds = prevTime.seconds + 1;

                    if (newSeconds === 60) {
                        const newMinutes = prevTime.minutes + 1;

                        if (newMinutes === 60) {
                            return { hours: prevTime.hours + 1, minutes: 0, seconds: 0 };
                        }

                        return { ...prevTime, minutes: newMinutes, seconds: 0 };
                    }

                    return { ...prevTime, seconds: newSeconds };
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [Active]);

    return <p>{`Time: ${time.hours}h ${time.minutes}m ${time.seconds}s`}</p>;
};

export default TimerApp;
