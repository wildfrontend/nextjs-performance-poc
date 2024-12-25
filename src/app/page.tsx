import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div style={{
        display: 'flex',
        gap: "8px"
      }}>
        <Link href="/svg-in-image" prefetch={false}>Icon svg file import by next/image</Link>
        <Link href="/svg" prefetch={false}>Icon by svg</Link>
        <Link href="/webpx2" prefetch={false}>Icon by webp 48x48</Link>
      </div>
      <div style={{ height: "16px" }}></div>
      <div style={{
        display: 'flex',
        gap: "8px"
      }}>
        <Link href="/svg-in-image-loadmore" prefetch={false}>Icon svg file import by next/image Load More</Link>
        <Link href="/svg-loadmore" prefetch={false}>Icon by svg Load More</Link>
        <Link href="/webpx2-loadmore" prefetch={false}>Icon by webp 48x48 Load More</Link>
      </div>
    </div>
  );
}
