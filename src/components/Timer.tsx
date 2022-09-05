import React, { useCallback, useEffect, useState } from 'react';
import { formatTime } from '../services/sudokuService';

interface TimerProp {
  handleTimerReset: boolean;
}

export function Timer({ handleTimerReset }: TimerProp): JSX.Element {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isPaused, setPause] = useState(false);

  useEffect(() => {
    setMinutes(0);
    setSeconds(0);
  }, [handleTimerReset]);

  useEffect(() => {
    if (!isPaused) {
      const myInterval = setInterval(() => {
        let newSeconds = seconds + 1;
        let newMinutes = minutes;

        if (newSeconds == 60) {
          newSeconds = 0;
          newMinutes++;
        }

        if (newMinutes == 60) {
          newMinutes = 0;
        }

        setSeconds(newSeconds);
        setMinutes(newMinutes);
      }, 1000);

      return () => {
        clearInterval(myInterval);
      };
    }
  }, [isPaused, seconds, minutes]);

  const handleTimerPause = useCallback(() => {
    setPause(true);
  }, []);

  const handleTimerPlay = useCallback(() => {
    setPause(false);
  }, []);

  return (
    <div className="timer">
      <button
        className={`play-btn ${!isPaused ? 'inactive' : ''}`}
        onClick={handleTimerPlay}
      ></button>
      <button
        className={`pause-btn ${isPaused ? 'inactive' : ''}`}
        onClick={handleTimerPause}
      ></button>
      <span>{formatTime(minutes, seconds)}</span>
    </div>
  );
}
