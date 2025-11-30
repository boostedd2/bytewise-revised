import { getPostSlugs, getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  console.log("Static slugs found:", slugs);

  return slugs.map((slug) => ({
    slug: slug.replace(".md", ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description || post.frontmatter.excerpt,
    keywords: post.frontmatter.tags ?? [],
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
    },
  };
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
