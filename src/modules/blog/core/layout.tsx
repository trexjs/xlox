import { ReactNode } from "react";
import BlogFooter from "./blog-footer";
import BlogHeader from "./blog-header";
import { ScrollToTopButton } from "@/components/misc/scroll-to-top";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <BlogHeader />
      {children}
      <ScrollToTopButton />
      <BlogFooter />
    </div>
  );
}
