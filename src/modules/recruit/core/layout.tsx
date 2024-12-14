import { ReactNode } from "react";
import RecruitFooter from "./recruit-footer";
import RecruitHeader from "./recruit-header";
import { ScrollToTopButton } from "@/components/misc/scroll-to-top";

export function RecruitLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <RecruitHeader />
      {children}
      <ScrollToTopButton />
      <RecruitFooter />
    </>
  );
}
