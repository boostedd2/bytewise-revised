import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Bytewise: Blog",
  description: "Modern Software Development",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
