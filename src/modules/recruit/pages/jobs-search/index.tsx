import { SearchRecruit } from "../../components/search-recruit";
import SchoolJobCard from "./components/school-job-card";
import VerticalAds from "./components/vertical-ads";

export default function JobSearchPage() {
  return (
    <div className="bg-slate-100 p-5 mx-10">
      <div className="mb-10 text-xl font-bold">
        <h1>Top schools hiring now</h1>
      </div>
      <div className="my-16">
        <SearchRecruit />
      </div>
      <div className="flex w-full">
        <div className="flex flex-col gap-2 w-2/6">
          <div className="bg-white w-full h-3/5 rounded-2xl"></div>
        </div>
        <div className="flex flex-col gap-2 w-4/6">
          <p className="text-sm font-medium ms-5 mb-5">
            Showing 6760 companies
          </p>
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <div className="col-span-1">
                  <SchoolJobCard key={index} />
                </div>
              );
            })}
          </div>
          <div className="p-8">
            <VerticalAds />
          </div>
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            {Array.from({ length: 7 }).map((_, index) => {
              return (
                <div className="col-span-1">
                  <SchoolJobCard key={index} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
