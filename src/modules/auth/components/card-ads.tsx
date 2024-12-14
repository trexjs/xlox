import LoginLogo from "@/assets/illustrations/tablet-login.svg";
import { CircleCheck } from "lucide-react";

export default function CardAds() {
  return (
    <>
      <div className="p-5 w-[300px] h-5/6 border border-3 flex flex-col justify-center items-center bg-white rounded-xl">
        <img
          src={LoginLogo}
          alt="Login Logo"
          className="w-36 h-36 rounded-full"
        />
        <h1 className="flex text-lg font-medium">On registering, you can</h1>
        <div>
          <span className="my-2 flex text-sm text-slate-500 font-medium">
            <CircleCheck size={36} fill="green" className="text-white me-2" />
            Build your website and let people find you
          </span>
          <span className="my-2 flex text-sm text-slate-500 font-medium">
            <CircleCheck size={36} fill="green" className="text-white me-2" />
            Create a profile to let communites find you
          </span>
          <span className="my-2 flex text-sm text-slate-500 font-medium">
            <CircleCheck size={30} fill="green" className="text-white me-2" />
            Find a job and grow your career
          </span>
        </div>
      </div>
    </>
  );
}
