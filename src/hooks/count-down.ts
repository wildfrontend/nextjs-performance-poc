import {
  addDays,
  differenceInSeconds,
  intervalToDuration,
  isAfter,
  isBefore,
} from 'date-fns';
import { useEffect, useState } from 'react';

function calculateDuration(targetDate: Date) {
  const now = new Date();
  const duration = intervalToDuration({ start: now, end: targetDate });

  return {
    days: padZero(duration.days ?? 0),
    hours: padZero(duration.hours ?? 0),
    minutes: padZero(duration.minutes ?? 0),
    seconds: padZero(duration.seconds ?? 0),
  };
}

function padZero(num: number): string {
  return num.toString().padStart(2, '0');
}

function useCountdown(targetDate: Date) {
  const [remaining, setRemaining] = useState(() =>
    calculateDuration(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(calculateDuration(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const now = new Date();
  const threeDaysLater = addDays(now, 3);

  const isInThreeDays =
    isAfter(targetDate, now) && isBefore(targetDate, threeDaysLater);
  const isExpired = differenceInSeconds(targetDate, now) <= 0;

  return {
    ...remaining,
    isInThreeDays,
    isExpired,
  };
}

export default useCountdown;
