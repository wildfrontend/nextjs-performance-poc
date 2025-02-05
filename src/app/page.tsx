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
      {/* Svg vs webp load */}
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
      {/* ANCHOR Image */}
      <div>
        <h2>Image Optmize</h2>
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <Link href="/image-optmize/next-image" prefetch={false}>
            Next Image
          </Link>
          <Link href="/image-optmize/next-image-loadmore" prefetch={false}>
            Next Image Load More
          </Link>
        </div>
      </div>
      {/* ANCHOR Third party optmize */}
      <div>
        <h2>Third party optmize </h2>
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <Link href="/third-party-optmize/origin" prefetch={false}>
            Default Third party
          </Link>
          <Link href="/third-party-optmize/lazy-load" prefetch={false}>
            Lazy onload
          </Link>
        </div>
      </div>
      {/* ANCHOR Ui framwork */}
      <div>
        <h2> Ui framwork </h2>
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <Link href="/ui-framework/mui" prefetch={false}>
            MUI
          </Link>
          <Link href="/ui-framework/tailwind" prefetch={false}>
            Tailwindcss
          </Link>
        </div>
      </div>
      {/* ANCHOR fetch ssr */}
      <div>
        <h2>React-Query</h2>
        <hr />
        <h3>Products</h3>
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <Link href="/react-query/products" prefetch={false}>
            React-Query Client - Products
          </Link>
        </div>
      </div>
    </div>
  );
}
