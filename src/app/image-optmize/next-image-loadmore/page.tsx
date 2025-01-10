import GosuImage from '@/components/images/gosu-image';
import articles from '@/mocks/articles';
import imageSizes from '@/utils/image-size';

const Page: React.FC = () => {
  let articleCount = 0;
  return (
    <div style={{ margin: '0 auto', maxWidth: '600px' }}>
      {articles.map((item, index) => {
        console.log(index);
        articleCount++;
        return (
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
              fetchPriority={index === 0 ? 'high' : 'low'}
              fill
              loading={articleCount > 4 ? 'lazy' : 'eager'}
              sizes={imageSizes('375px', '600px', '400px')}
              src={item.headlineImagePath}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Page;
