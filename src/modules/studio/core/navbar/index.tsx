import SiteLogo from "./site-logo";
import { NavItems } from "./nav-items";
import { Button } from "@/components/ui/button";

export default function StudioNavbar() {
  return (
    <div className="flex items-center justify-around w-full p-5 pb-0">
      {/* <Announcments /> */}
      <SiteLogo />
      <NavItems />
      <Button variant="xlox">Try it out!</Button>
    </div>
  );
}
