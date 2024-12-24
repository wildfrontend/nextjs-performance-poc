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
      </div>
    </div>
  );
}
