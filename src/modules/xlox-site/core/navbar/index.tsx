import SiteLogo from "./site-logo";
import { NavItems } from "./nav-items";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function XloxNavbar() {
  // Redirect to the desired website
  const redirectToWebsite = () => {
    window.location.href = "https://calendly.com/vlockn/chat?month=2024-04";
  };
  const redirectToAuthStudio = () => {
    window.location.href = "http://studio.localhost:3000";
  };
  return (
    <div className="flex items-center justify-between w-full p-5 pb-0">
      <SiteLogo />
      <div className="flex">
        <span className="me-5">
          <NavItems />
        </span>
        <Button variant="outline" className="me-5" onClick={redirectToWebsite}>
          Schedule a Demo
        </Button>
        <Button variant="xlox" onClick={redirectToAuthStudio}>
          {/* Try it out! */}
          Sign in / Register
        </Button>
      </div>
    </div>
  );
}
