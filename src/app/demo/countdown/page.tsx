"use client"
import { parseISO } from 'date-fns';

import useCountdown from '@/hooks/count-down';

const Page = () => {
  const target = parseISO(new Date('2025-05-29T23:59:59').toISOString());
  const { days, hours, minutes, seconds, isInThreeDays, isExpired } =
    useCountdown(target);
  return (
    <div>
      {isExpired ? (
        <p>已過期</p>
      ) : (
        <p>
          倒數 {days} 天 {hours} 時 {minutes} 分 {seconds} 秒
        </p>
      )}
      {isInThreeDays && <p>🔥 目標在 3 天內</p>}
    </div>
  );
};

export default Page;
