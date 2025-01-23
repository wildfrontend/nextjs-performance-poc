import React from 'react';

import BasicCountdown from './basic';
import TimerCountdown from './timer';

const CountdownExample: React.FC = () => {
  return (
    <div className="flex items-center gap-8">
      <BasicCountdown defaultValue={5} />
      <TimerCountdown />
    </div>
  );
};

export default CountdownExample;
