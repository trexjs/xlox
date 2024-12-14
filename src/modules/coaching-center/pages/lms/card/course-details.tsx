import { Button } from "@/components/ui/button";
import { Lock, TriangleAlert } from "lucide-react";

function CoursePurchaseBanner() {
  return (
    <div className="bg-yellow-200 flex items-center w-3/6 h-10 p-2">
      <TriangleAlert size={16} />
      <h3 className="ms-2 text-slate-700">
        You need to purchase this course to watch this chapter
      </h3>
    </div>
  );
}

function CourseLock() {
  return (
    <div className="bg-cyan-950 h-4/6 w-3/6 flex flex-col justify-center items-center">
      <Lock size={40} className="text-white" />
      <h3 className="mt-2 text-white">This chapter is locked</h3>
    </div>
  );
}

function CourseDiscription() {
  return (
    <div className="my-5 flex flex-col h-4/6 w-3/6">
      <div className="flex justify-between">
        <h3 className="font-bold text-2xl">Deep Dive</h3>
        <Button variant="xlox">Enroll for $15.00</Button>
      </div>
      <div className="my-5">
        <h3 className="font-medium text-lg">Objectives:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit
          illum inventore voluptatibus iusto, ipsam doloribus accusamus mollitia
          natus, sit, eos cupiditate in distinctio temporibus libero voluptates
          maiores! Recusandae, laboriosam.
        </p>
      </div>
    </div>
  );
}

export function CourseDetails() {
  return (
    <div className="h-screen">
      <CoursePurchaseBanner />
      <CourseLock />
      <CourseDiscription />
    </div>
  );
}
