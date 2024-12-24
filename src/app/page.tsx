import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div style={{
        display:'flex',
        gap:"8px"
      }}>
        <Link href="/images" prefetch={false}>Icon by webp</Link>
        <Link href="/svg" prefetch={false}>Icon by svg</Link>
      </div>

    </div>
  );
}
