import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>My Site</h1>
      <p>Welcome.</p>
      <Link href="/blog">Go to blog</Link>
    </div>
  );
}
