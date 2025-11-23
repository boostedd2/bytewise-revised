import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "content");

export function getPostSlugs() {
  return fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));
}

export async function getPostBySlug(slug: string) {
  console.log("SLUG RECEIVED:", slug);

  const realSlug = slug.replace(/\.md$/, "");
  const filePath = path.join(postsDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug: realSlug,
    frontmatter: data,
    html: contentHtml,
  };
}

export async function getAllPosts() {
  const slugs = getPostSlugs();
  return Promise.all(
    slugs.map((slug) => getPostBySlug(slug.replace(".md", ""))),
  );
}
