import SiteLogo from "./site-logo";
import { NavItems } from "./nav-items";
import { Button } from "@/components/ui/button";

export default function SpringNavbar() {
  return (
    <div className="flex items-center justify-around w-full p-5 pb-0">
      <SiteLogo />
      <NavItems />
      <Button variant="xlox">Contact Us!</Button>
    </div>
  );
}
