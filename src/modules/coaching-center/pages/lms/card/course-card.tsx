import { Progress } from "@/components/ui/progress";
import { BookOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function CourseCard() {
  const enrolled = !false;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/lms/1")}
      className="w-[300px] flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80"
          alt=""
        />
      </div>
      <div className="flex flex-col items-start bg-white py-5 px-2">
        <p className="text-xl font-medium hover:text-indigo-600">
          <a href="#" className="hover:underline">
            Cinematic Techinques
          </a>
        </p>
        <Link to={"/"} className="block">
          <p className="text-sm font-semibold text-gray-500">Filming</p>
          <span className="mt-6 flex">
            <BookOpen
              size={26}
              className="me-2 bg-green-300 text-green-700 rounded-xl"
            />
            <p className="text-gray-500">4 Chapters</p>
          </span>
        </Link>

        {enrolled ? (
          <div className="w-full my-3">
            <Progress value={33} className="bg-teal-700" />
            <p className="text-teal-700 mt-2">100 % Complete</p>
          </div>
        ) : (
          <p className="text-black my-3 font-bold">$92.00</p>
        )}
        <div className="mt-2 flex items-center">
          <div className="flex-shrink-0">
            <a href="#">
              <span className="sr-only">Roel Aufderehar</span>
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt=""
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a href="#" className="hover:underline">
                Roel Aufderehar
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime="2020-03-16">Mar 16, 2020</time>
              <span aria-hidden="true">·</span>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
