import CaptureMedia from '@/components/media/capture';

const Page: React.FC = () => {
  return (
    <div
      style={{
        width: '1200px',
        margin: '0 auto',
      }}
    >
      <CaptureMedia />
      <pre>優化iframe youtube 效能</pre>
    </div>
  );
};

export default Page;
