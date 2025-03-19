'use client';

import DefaultModal from '@/components/modal/default';
import '@/styles/tailwind.css';

const Page: React.FC = () => {
  return (
    <div
      style={{
        width: '1200px',
        margin: '0 auto',
      }}
    >
      <pre>進頁面會開啟modal，這邊在測試是否影響效能。</pre>
      <DefaultModal />
    </div>
  );
};

export default Page;
