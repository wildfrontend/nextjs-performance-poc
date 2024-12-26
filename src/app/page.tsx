import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <div>
        <h2>SVG vs Webp</h2>
        <h3>Default</h3>
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <Link href="/svg-vs-webp/svg-in-image" prefetch={false}>
            Icon svg file import by next/image
          </Link>
          <Link href="/svg-vs-webp/svg" prefetch={false}>
            Icon by svg
          </Link>
          <Link href="/svg-vs-webp/webpx2" prefetch={false}>
            Icon by webp 48x48
          </Link>
        </div>
        <div style={{ height: '16px' }}></div>
        <h3>Load More</h3>
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <Link href="/svg-vs-webp/svg-in-image-loadmore" prefetch={false}>
            Icon svg file import by next/image
          </Link>
          <Link href="/svg-vs-webp/svg-loadmore" prefetch={false}>
            Icon by svg
          </Link>
          <Link href="/svg-vs-webp/webpx2-loadmore" prefetch={false}>
            Icon by webp 48x48
          </Link>
        </div>
        <hr />
      </div>
    </div>
  );
}
