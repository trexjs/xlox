import XloxNavbar from "../navbar";
import XloxFooter from "../footer";
import CTA from "../../components/cta";
import Announcments from "@/modules/zen/components/announcments";

export function XloxLayout({ children }: any) {
  return (
    <>
      <Announcments />
      <XloxNavbar />
      {children}
      <CTA />
      <XloxFooter />
    </>
  );
}
