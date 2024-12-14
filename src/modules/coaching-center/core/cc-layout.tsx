import { ReactNode } from "react";
import { CCFooter } from "./cc-footer";
import { CCNavbar } from "./cc-navbar";
import { ScrollToTopButton } from "@/components/misc/scroll-to-top";

export function CCLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <CCNavbar />
      {children}
      <ScrollToTopButton />
      <CCFooter />
    </>
  );
}
