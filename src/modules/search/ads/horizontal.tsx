import { ChevronRight, Star } from "lucide-react";

export default function HorizontalAds() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newUrl = `http://tpps.sc.localhost:3000`;
    // Redirect to the new URL
    window.location.href = newUrl;
  };
  return (
    <div
      onClick={handleSubmit}
      className="bg-white z-50 rounded-2xl w-[425px] h-[100px] flex items-center justify-around"
    >
      <div className="flex items-center">
        <img
          src="https://img.naukimg.com/logo_images/groups/v1/429962.gif"
          alt="company_logo"
          className="rounded-md border border-1 h-16"
        />
        <div className="ms-3 flex flex-col items-start">
          <h3 className="font-semibold text-xl text-black">Leap</h3>
          <span className="flex items-center my-2">
            <Star className="text-orange-400" size={10} fill="orange" />
            <h3 className="ms-2 font-normal text-xs text-gray-500">
              <b className="me-1">4.1</b> | 453 reviews
            </h3>
          </span>
          <div className="flex items-center gap-2">
            <span className="border border-1 p-1 rounded-full font-normal text-xs text-gray-500">
              CBSE
            </span>
            <span className="border border-1 p-1 rounded-full font-normal text-xs text-gray-500">
              Founded 1997
            </span>
            <span className="border border-1 p-1 rounded-full font-normal text-xs text-gray-500">
              1001-5000 emp.
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <ChevronRight />
      </div>
    </div>
  );
}
