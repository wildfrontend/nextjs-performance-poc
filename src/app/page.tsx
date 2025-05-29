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
            Products
          </Link>
          <Link
            href="/react-query/products/categories/smartphones/stories"
            prefetch={false}
          >
            Products - smartphones story
          </Link>
        </div>
      </div>
      {/* ANCHOR ANTD  */}
      <div>
        <h2>Ant-Design</h2>
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <Link href="/antd" prefetch={false}>
            Antd - Dashboard
          </Link>
        </div>
      </div>
      {/* ANCHOR Slider LCP  */}
      <div>
        <h2> Slider LCP Performance</h2>
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <Link href="/swiper" prefetch={false}>
            Swiper - default
          </Link>
          <Link href="/swiper/performance" prefetch={false}>
            Swiper - performance
          </Link>
        </div>
      </div>
      {/* ANCHOR Media LCP  */}
      <div>
        <h2> Embeds Performance</h2>
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <Link href="/media" prefetch={false}>
            Media - default
          </Link>
          <Link href="/media/capture" prefetch={false}>
            Media - Capture
          </Link>
        </div>
      </div>
      {/* ANCHOR Demo - Countdown */}
      <div>
        <h2>Demo</h2>
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <Link href="/demo/countdown" prefetch={false}>
            Countdown 測試頁
          </Link>
        </div>
        <hr />
      </div>
    </div>
  );
}
