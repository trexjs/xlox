import { ReactNode } from "react";
import { TutorFooter } from "./tutor-footer";
import { TutorNavbar } from "./tutor-navbar";
import { ScrollToTopButton } from "@/components/misc/scroll-to-top";

export function TutorLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TutorNavbar />
      {children}
      <ScrollToTopButton />
      <TutorFooter />
    </>
  );
}
