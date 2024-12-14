import HorizontalAds from "./ads/horizontal";
import SquareAds from "./ads/square";
import VerticalAds from "./ads/vertical";
import { Search } from "./components/search";

export function SearchPage({ term }: any) {
  return (
    <div className="bg-slate-100 gap-5 p-20 flex flex-col items-center h-full w-full">
      <div className="my-5">
        <Search term={term} />
      </div>
      <div className="">
        <h1 className="text-2xl font-bold">Top companies hiring now</h1>
        <p className="text-center font-normal text-gray-500">
          Featured companies actively hiring
        </p>
      </div>
      <div className="my-5 grid grid-cols-5 gap-4 justify-items-center">
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <div className="col-span-1">
              <SquareAds key={index} />
            </div>
          );
        })}
      </div>
      <div className="">
        <h1 className="text-2xl font-bold">Top companies actively hiring</h1>
        <p className="text-center font-normal text-gray-500">
          Featured companies actively hiring
        </p>
      </div>
      <div className="my-5 grid grid-cols-3 gap-4 justify-items-center">
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <div className="col-span-1">
              <HorizontalAds key={index} />
            </div>
          );
        })}
      </div>
      <div className="my-5">
        <VerticalAds />
      </div>
      <div className="">
        <h1 className="text-2xl font-bold">Featured schools actively hiring</h1>
        <p className="text-center font-normal text-gray-500">
          Featured companies actively hiring
        </p>
      </div>
      <div className="my-5 grid grid-cols-3 gap-4 justify-items-center">
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <div className="col-span-1">
              <HorizontalAds key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
