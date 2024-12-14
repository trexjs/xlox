import {
  CircleCheckBig,
  CircleDollarSign,
  CirclePlus,
  Clock,
  CloudUpload,
  File,
  GripVertical,
  LayoutDashboard,
  ListChecks,
  Pencil,
  Trash,
  X,
} from "lucide-react";
import { CourseCard } from "./card/course-card";
import { Button } from "@/components/ui/button";

const standards = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
];

export function CourseBrowse() {
  return (
    <div className="w-full flex flex-col p-5">
      <div className="">
        <ul className="flex w-full gap-2 overflow-x-auto">
          {standards.map((standard) => {
            return (
              <li className="border border-3 w-36 rounded-full p-2 text-center">
                {standard} Standard
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-5 grid grid-cols-4 justify-items-center gap-8 ">
        {Array.from({ length: 5 }).map((_, idx) => {
          return (
            <div className="col-span-1">
              <CourseCard />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function CourseDashboardPage() {
  return (
    <div className="w-full flex flex-col p-5">
      <CourseOverview />
      <div className="my-5 grid grid-cols-4 justify-items-center gap-8 ">
        {Array.from({ length: 5 }).map((_, idx) => {
          return (
            <div className="col-span-1">
              <CourseCard />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function CourseOverview() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <span>
          <Clock
            size={28}
            className="me-2 bg-sky-300 text-sky-600 rounded-xl"
          />
        </span>
        <div className="ms-2">
          <h2 className="text-xl font-medium">In Progress</h2>
          <h4 className="">3 Courses</h4>
        </div>
      </div>
      <div className="flex items-center">
        <span>
          <CircleCheckBig
            size={28}
            className="me-2 bg-green-300 text-green-700 rounded-xl"
          />
        </span>
        <div className="ms-2">
          <h2 className="text-xl font-medium">Completed</h2>
          <h4 className="">4 Courses</h4>
        </div>
      </div>
    </div>
  );
}

// new file
export function CourseCreationHeader() {
  return (
    <div className="w-full flex justify-between items-center p-5">
      <div className="flex flex-col">
        <h1 className="font-medium text-2xl">Course setup</h1>
        <h3>Complete all fields (6/6)</h3>
      </div>
      <div className="">
        <Button variant="outline">Unpublish</Button>
        <Button className="ms-2">
          <Trash size={18} />
        </Button>
      </div>
    </div>
  );
}

export function CourseCreationBody() {
  return (
    <div className="w-full flex flex-col p-5 gap-5">
      <div className="flex">
        <LayoutDashboard />
        <h1 className="ms-2 font-medium text-2xl">Customize your course</h1>
      </div>
      <div className="bg-gray-200 w-[500px] h-[100px] rounded-lg p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium">Course title</h3>
          </div>
          <div className="flex items-center">
            <Pencil size={16} />
            <h3 className="ms-2 text-sm font-semibold">Edit title</h3>
          </div>
        </div>
        <h3 className="my-4 text-sm font-medium text-gray-600">
          Cinematic Techniques
        </h3>
      </div>
      {/* Description */}
      <div className="bg-gray-200 w-[500px] h-[100px] rounded-lg p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium">Course description</h3>
          </div>
          <div className="flex items-center">
            <Pencil size={16} />
            <h3 className="ms-2 text-sm font-semibold">Edit description</h3>
          </div>
        </div>
        <h3 className="my-4 text-sm font-medium text-gray-600">
          This is a course on Cinematic Techniques
        </h3>
      </div>
      {/* Image */}
      <div className="bg-gray-200 w-[500px] h-[300px] rounded-lg p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium">Course image</h3>
          </div>
          <div className="flex items-center">
            <Pencil size={16} />
            <h3 className="ms-2 text-sm font-semibold">Edit image</h3>
          </div>
        </div>
        <div className="my-5 p-2 w-full h-4/6 border border-5 border-black border-dotted flex flex-col justify-center items-center rounded-lg">
          <div className="text-center">
            <span className="flex justify-center items-center w-full">
              <CloudUpload />
            </span>
            <h3 className="text-md font-medium text-blue-600">
              Choose files or drag and drop
            </h3>
            <p className="text-sm font-medium text-gray-600">image (4MB)</p>
          </div>
        </div>
        <h3 className="my-4 text-sm font-medium text-gray-600">
          16:9 aspect ratio recommended
        </h3>
      </div>
      {/* Category */}
      <div className="bg-gray-200 w-[500px] h-[100px] rounded-lg p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium">Course category</h3>
          </div>
          <div className="flex items-center">
            <Pencil size={16} />
            <h3 className="ms-2 text-sm font-semibold">edit category</h3>
          </div>
        </div>
        <h3 className="my-4 text-sm font-medium text-gray-600">Computer</h3>
      </div>
    </div>
  );
}
export function CourseChapters() {
  return (
    <div className="w-full flex flex-col p-5 gap-5">
      <div className="flex">
        <ListChecks />
        <h1 className="ms-2 font-medium text-2xl">Course chapters</h1>
      </div>
      {/* Image */}
      <div className="bg-gray-200 w-[500px] min-h-300 h-auto rounded-lg p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium">Course chapters</h3>
          </div>
          <div className="flex items-center">
            <CirclePlus size={16} />
            <h3 className="ms-2 text-sm font-semibold">Add a chapter</h3>
          </div>
        </div>
        <div className="my-5 gap-5 flex flex-col items-center">
          <div className="p-4 w-full flex justify-between bg-blue-200">
            <span className="flex items-center">
              <GripVertical size={16} className="text-blue-500" />
              <h3 className="ms-2 text-blue-500">Outro</h3>
            </span>
            <div className="flex gap-3 items-center">
              <h3 className="p-1 bg-black text-white text-center w-[40px] rounded-full h-6 text-xs">
                Free
              </h3>
              <h3 className="p-1 bg-blue-700 text-white text-center w-[80px] rounded-full h-6 text-xs">
                Published
              </h3>
              <Pencil size={16} />
            </div>
          </div>
          {/* Extra */}
          <div className="p-4 w-full flex justify-between bg-blue-200">
            <span className="flex items-center">
              <GripVertical size={16} className="text-blue-500" />
              <h3 className="ms-2 text-blue-500">Introduction</h3>
            </span>
            <div className="flex gap-3 items-center">
              <h3 className="p-1 bg-black text-white text-center w-[50px] rounded-full h-6 text-xs">
                Draft
              </h3>
              <Pencil size={16} />
            </div>
          </div>
          {/* Extra */}
          <div className="p-4 w-full flex justify-between bg-blue-200">
            <span className="flex items-center">
              <GripVertical size={16} className="text-blue-500" />
              <h3 className="ms-2 text-blue-500">Outro</h3>
            </span>
            <div className="flex gap-3 items-center">
              <h3 className="p-1 bg-blue-700 text-white text-center w-[80px] rounded-full h-6 text-xs">
                Published
              </h3>
              <Pencil size={16} />
            </div>
          </div>
          {/* Extra */}
          <div className="p-4 w-full flex justify-between bg-blue-200">
            <span className="flex items-center">
              <GripVertical size={16} className="text-blue-500" />
              <h3 className="ms-2 text-blue-500">Outro</h3>
            </span>
            <div className="flex gap-3 items-center">
              <h3 className="p-1 bg-blue-700 text-white text-center w-[80px] rounded-full h-6 text-xs">
                Published
              </h3>
              <Pencil size={16} />
            </div>
          </div>
        </div>
        <h3 className="text-sm font-medium text-gray-600">
          Drag and drop to reorder chapters
        </h3>
      </div>
    </div>
  );
}
export function SellYourCourse() {
  return (
    <div className="w-full flex flex-col p-5 gap-5">
      <div className="flex items-center">
        <CircleDollarSign size={30} />
        <h1 className="ms-2 font-medium text-2xl">Sell your course</h1>
      </div>
      <div className="bg-gray-200 w-[500px] h-[100px] rounded-lg p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-bold">Course price</h3>
          </div>
          <div className="flex items-center">
            <Pencil size={16} />
            <h3 className="ms-2 text-sm font-semibold">Edit price</h3>
          </div>
        </div>
        <h3 className="my-4 text-sm font-bold text-gray-600">$93.50</h3>
      </div>
    </div>
  );
}
export function CourseAttachments() {
  return (
    <div className="w-full flex flex-col p-5 gap-5">
      <div className="flex items-center">
        <File size={30} />
        <h1 className="ms-2 font-medium text-2xl">Resources & Attachments</h1>
      </div>
      <div className="bg-gray-200 w-[500px] min-h-[50px] h-auto rounded-lg p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-bold">Course attachments</h3>
          </div>
          <div className="flex items-center">
            <CirclePlus size={16} />
            <h3 className="ms-2 text-sm font-semibold">Add a file</h3>
          </div>
        </div>
        {/* Extra */}
        <div className="mt-5 mb-0 p-4 w-full flex justify-between items-center bg-blue-200">
          <span className="flex items-center text-blue-500">
            <File size={16} />
            <h3 className="ms-2">Sample Attachment</h3>
          </span>
          <span className="text-blue-500">
            <X size={16} />
          </span>
        </div>
      </div>
    </div>
  );
}

// Not in use
export function EditCourseCategory() {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="bg-gray-200 w-[500px] min-h-[50px] h-auto rounded-lg p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-bold">Course category</h3>
          </div>
          <div className="flex items-center">
            <Pencil size={16} />
            <h3 className="ms-2 text-sm font-semibold">edit category</h3>
          </div>
          <h3 className="ms-2 text-sm font-semibold">computer</h3>
        </div>
      </div>
    </div>
  );
}

export default function LMSPage() {
  return (
    <div className="w-full gap-5">
      <CourseCreationHeader />
      <div className="p-5 flex flex-wrap items-center justify-center gap-5">
        <CourseCreationBody />
        {/* new block to right side */}
        <CourseChapters />
        <SellYourCourse />
        <CourseAttachments />
      </div>
    </div>
  );
}
