import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, Pencil, SquareArrowOutUpRight } from "lucide-react";
import RouteTab from "./route-tab";
import Overview from "./feature-tabs/overview";
import Jobs from "./feature-tabs/jobs";
import Reviews from "./feature-tabs/reviews";
import About from "./feature-tabs/about";
import Photos from "./feature-tabs/photos";
import Salaries from "./feature-tabs/salaries";

export function TutorDetails() {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-full mx-auto relative">
      <div
        className={`bg-[url("https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1")] min-h-[400px] bg-cover bg-center text-center overflow-hidden`}
        title="Woman holding a mug"
      ></div>
      <div className="flex justify-end w-full top-5 absolute p-5">
        <Button variant={"outline"} className="rounded-full text-blue-600">
          Edit web content
          <SquareArrowOutUpRight size={20} className="ms-2" />
        </Button>
      </div>

      <div className="w-5/6 mx-auto flex flex-col justify-center rounded-lg bg-white relative top-0 -mt-20 p-5 sm:p-10">
        <div className="flex justify-between w-full">
          <img
            className="w-16 h-16 rounded-full"
            src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1"
            alt="logo"
          />
          <div className="">
            <Button variant={"outline"} className="rounded-md ">
              <Pencil size={20} className="me-2" />
              Edit Profile
            </Button>
            <Button variant={"outline"} className="rounded-md ms-2">
              <Link size={20} />
            </Button>
          </div>
        </div>
        <h1 className="text-gray-900 font-bold text-xl mb-2">Recruit</h1>
        <p className="text-gray-700 text-xs mt-2">California, United States</p>
        <p className="text-sm leading-8 my-4">
          UI/UX designers - how would you like to work within a successful SaaS
          based firm in downtown Toranto, building customized tools
        </p>
        <div className="flex gap-2">
          <img
            className="w-8 h-8 rounded-full"
            src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1"
            alt="logo"
          />
          <img
            className="w-8 h-8 rounded-full"
            src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1"
            alt="logo"
          />
          <img
            className="w-8 h-8 rounded-full"
            src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1"
            alt="logo"
          />
          <img
            className="w-8 h-8 rounded-full"
            src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1"
            alt="logo"
          />
        </div>

        {/* Tabs */}
        <div className="mt-10">
          <RouteTab activeTab={activeTab} handleTabClick={handleTabClick} />
        </div>

        <div className="my-5">
          {activeTab === "overview" && (
            <>
              <Overview />
            </>
          )}
          {activeTab === "about" && <About />}
          {activeTab === "salaries" && <Salaries />}
          {activeTab === "experience" && <Jobs />}
          {activeTab === "reviews" && <Reviews />}
          {activeTab === "media" && <Photos title="Photos" />}
        </div>
      </div>
    </div>
  );
}
