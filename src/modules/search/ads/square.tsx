import { ChevronRight } from "lucide-react";

export default function SquareAds() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newUrl = `http://tpps.sc.localhost:3000`;
    // Redirect to the new URL
    window.location.href = newUrl;
  };
  return (
    <div
      onClick={handleSubmit}
      className="bg-white hover:shadow-md border bottom-2 rounded-xl w-[225px] h-[150px] flex items-center justify-around"
    >
      <div className="flex flex-col items-start">
        <div className="flex items-center">
          <h3 className="font-semibold text-xl text-black">Leap</h3>
          <ChevronRight scale="1" className="text-gray-400" />
        </div>
        <span className="flex items-center mt-2 mb-5">
          <h3 className="font-medium text-xs text-gray-500">
            902 are actively tutoring
          </h3>
        </span>
        <div className="flex items-center gap-2">
          <div className="">
            <img
              src="https://img.naukimg.com/logo_images/groups/v1/429962.gif"
              alt="company_logo"
              className="rounded-md border border-1 h-11"
            />
          </div>
          <div className="">
            <img
              src="https://img.naukimg.com/logo_images/groups/v1/429962.gif"
              alt="company_logo"
              className="rounded-md border border-1 h-11"
            />
          </div>
          <div className="">
            <img
              src="https://img.naukimg.com/logo_images/groups/v1/429962.gif"
              alt="company_logo"
              className="rounded-md border border-1 h-11"
            />
          </div>
          <div className="">
            <img
              src="https://img.naukimg.com/logo_images/groups/v1/429962.gif"
              alt="company_logo"
              className="rounded-md border border-1 h-11"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
