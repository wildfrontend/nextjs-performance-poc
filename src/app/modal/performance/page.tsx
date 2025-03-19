'use client';

import PerformanceModal from '@/components/modal/performance';

const Page: React.FC = () => {
  return (
    <div
      style={{
        width: '1200px',
        margin: '0 auto',
      }}
    >
      <PerformanceModal />
      <pre>這邊在測試如果有影響效能的話可以怎麼優化</pre>
    </div>
  );
};

export default Page;
