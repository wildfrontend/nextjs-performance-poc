'use client';

import React, { useEffect, useState } from 'react';

const TimerCountdown: React.FC = () => {
  const [count, setCount] = useState<number>(60);

  useEffect(() => {
    if (count <= 0) return;
    const countdown = setInterval(() => {
      setCount((state) => state - 1);
    }, 1000);
    return () => {
      clearInterval(countdown);
    };
  }, [count]);

  return (
    <div className="flex gap-5">
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ '--value': 15 }}></span>
        </span>
        days
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ '--value': 10 }}></span>
        </span>
        hours
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ '--value': 24 }}></span>
        </span>
        min
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ '--value': count }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default TimerCountdown;
