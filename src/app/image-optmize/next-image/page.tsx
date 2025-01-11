import GosuImage from '@/components/images/gosu-image';
import articles from '@/mocks/articles';
import imageSizes from '@/utils/image-size';

const item = articles[0];

const Page: React.FC = () => {
  return (
    <div style={{ margin: '0 auto', maxWidth: '600px' }}>
      <div
        key={item.id}
        style={{
          position: 'relative',
          width: '100%',
          height: '270px',
        }}
      >
        <GosuImage
          alt={item.headlineImageText}
          fetchPriority="high"
          fill
          loading="eager"
          sizes={imageSizes('375px', '600px', '400px')}
          src={item.headlineImagePath}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default Page;
