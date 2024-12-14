import SpringHero from "../../components/hero";
import SpringNavbar from "../navbar";
import { SpringFooter } from "../footer";
import Announcments from "../../components/announcments";

function SpringLayout({ children }: any) {
  return (
    <>
      <Announcments />
      <SpringNavbar />
      <SpringHero />
      {children}
      <SpringFooter />
    </>
  );
}

export default SpringLayout;
