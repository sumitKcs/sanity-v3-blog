import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import PreviewSuspense from "@/components/PreviewSuspense";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
  `;
const fallback = (
  <div role="status">
    <p className="text-center text-lg animate-pulse text-[#f7ab0a]">
      {" "}
      Loading Preview Data...
    </p>
  </div>
);

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={fallback}>
        {/* preview blog list  */}
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  console.log(posts);
  return (
    <BlogList posts={posts} />
  );
}
