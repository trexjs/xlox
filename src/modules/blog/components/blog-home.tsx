import { BlogGrid } from "./blog-grid";
import { BlogHero } from "./blog-hero";
import Newsletter from "@/components/misc/newsletter";
import { SearchBlog } from "./search-blog";

export function BlogHome() {
  return (
    <>
      <BlogHero />
      <SearchBlog />
      <BlogGrid title="Blogs." />
      <Newsletter />
    </>
  );
}
