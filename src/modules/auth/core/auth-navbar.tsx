import { Link } from "react-router-dom";
import AuthLogo from "@/assets/illustrations/404-error-page.svg";

export function AuthNavbar() {
  const redirectToXlox = () => {
    window.location.href = "http://localhost:3000";
  };
  return (
    <div className="sticky top-0 bg-white z-40 w-full flex items-center justify-around p-3">
      <div
        onClick={redirectToXlox}
        className="cursor-pointer flex items-center ms-5"
      >
        <img src={AuthLogo} alt="" />
        <span className="font-bold text-lg ms-3">xlox</span>
      </div>

      <div>
        <span className="flex w-full font-medium text-black text-md">
          Already Registered?
          <Link
            to={"/login"}
            className="mx-2 font-medium text-blue-500 text-md"
          >
            Login
          </Link>
          here
        </span>
      </div>
    </div>
  );
}
