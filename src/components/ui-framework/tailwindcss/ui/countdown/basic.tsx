'use client';

import React, { useEffect, useState } from 'react';

// https://codepen.io/saadeghi/pen/jOazxMz?editors=1010
const BasicCountdown: React.FC<{ defaultValue?: number }> = ({
  defaultValue,
}) => {
  const [count, setCount] = useState<number>(defaultValue ?? 0);

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
    <span className="countdown font-mono text-6xl">
      <span style={{ '--value': count }}></span>
    </span>
  );
};

export default BasicCountdown;
