import { BlogGrid } from "../../components/blog-grid";
import { TutorHero } from "../../components/tutor-hero";
import Newsletter from "@/components/misc/newsletter";
import { TutorSearch } from "../../components/tutor-search";
import Stats from "./components/stats";
import OSC from "./components/our-services-component";
import CTABlock from "./components/cta-block";
import UserAvatar from "./components/user-avatar";

export function TutorHome() {
  return (
    <>
      <TutorHero />
      <TutorSearch />
      <BlogGrid title="Blogs." />
      <Stats />
      <CTABlock />
      <OSC />
      <UserAvatar />
      <Newsletter />
    </>
  );
}
