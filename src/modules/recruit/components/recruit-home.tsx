import { BlogGrid } from "./blog-grid";
import { BlogHero } from "./blog-hero";
import Newsletter from "@/components/misc/newsletter";
import { SearchRecruit } from "./search-recruit";
import Stats from "./home/stats";
import OSC from "./home/our-services-component";
import CTABlock from "./home/cta-block";
import UserAvatar from "./home/user-avatar";

export function RecruitHome() {
  return (
    <>
      <BlogHero />
      <SearchRecruit />
      <BlogGrid title="Blogs." />
      <Stats />
      <CTABlock />
      <OSC />
      <UserAvatar />
      <Newsletter />
    </>
  );
}
