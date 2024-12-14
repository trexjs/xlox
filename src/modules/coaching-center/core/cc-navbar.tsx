import { Link } from "react-router-dom";
import { BadgeInfo, BookType, MessageSquareMore } from "lucide-react";
import { CCLogo } from "../components/cc-logo";

export function CCNavbar() {
  return (
    <div className="sticky top-0 z-40 bg-slate-100 w-6/6 flex items-center justify-around p-3">
      <Link to={"/"} className="flex items-center ms-5">
        <CCLogo />
        <span className="font-bold text-lg ms-3">coach</span>
      </Link>
      <div className="flex gap-5">
        <Link to={"/info"} className="flex">
          <BadgeInfo size={18} />
          <span className="font-medium text-gray-500 text-xs ms-2">Info</span>
        </Link>
        <Link to={"/community"} className="flex">
          <MessageSquareMore size={18} />
          <span className="font-medium text-gray-500 text-xs ms-2">
            Community
          </span>
        </Link>
        <Link to={"/lms"} className="flex">
          <BookType size={18} />
          <span className="font-medium text-gray-500 text-xs ms-2">LMS</span>
        </Link>
      </div>
    </div>
  );
}
