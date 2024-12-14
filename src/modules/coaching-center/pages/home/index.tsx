import { BlogGrid } from "../../components/blog-grid";
import { CCHero } from "../../components/cc-hero";
import Newsletter from "@/components/misc/newsletter";
import { CCSearch } from "../../components/cc-search";
import Stats from "./components/stats";
import OSC from "./components/our-services-component";
import CTABlock from "./components/cta-block";
import UserAvatar from "./components/user-avatar";

export function CCHome() {
  return (
    <>
      <CCHero />
      <CCSearch />
      <BlogGrid title="Blogs." />
      <Stats />
      <CTABlock />
      <OSC />
      <UserAvatar />
      <Newsletter />
    </>
  );
}
