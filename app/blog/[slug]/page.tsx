import { getPostSlugs, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  console.log("Static slugs found:", slugs);

  return slugs.map((slug) => ({
    slug: slug.replace(".md", ""),
  }));
}

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params; // ← IMPORTANT
  const post = await getPostBySlug(slug);

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
