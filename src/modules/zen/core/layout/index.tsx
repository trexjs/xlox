import { ZenHero } from "../../components/hero";
import { ZenFooter } from "../footer";
import Announcments from "../../components/announcments";

export default function ZenLayout({ children }: any) {
  return (
    <>
      <Announcments />
      <ZenHero />
      {children}
      <ZenFooter />
    </>
  );
}
