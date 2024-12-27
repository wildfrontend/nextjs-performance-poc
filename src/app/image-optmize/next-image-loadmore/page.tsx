import GosuImage from '@/components/images/gosu-image';
import articles from '@/mocks/articles';
import imageSizes from '@/utils/image-size';

const Page: React.FC = () => {
  let articleCount = 0;
  return (
    <div>
      {articles.map((item) => {
        articleCount++;
        return (
          <div
            key={item.id}
            style={{ position: 'relative', aspectRatio: '16 / 9 auto' }}
          >
            <GosuImage
              loading={articleCount > 4 ? 'lazy' : 'eager'}
              src={item.headlineImagePath}
              fill
              sizes={imageSizes('90vw', '90vw', '360px')}
              alt={item.headlineImageText}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Page;
