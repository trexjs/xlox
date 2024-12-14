import { useState } from "react";
import { FaCommentAlt, FaRegTimesCircle } from "react-icons/fa";
import AppointmentBookinghtmlForm from "@/components/misc/appointment-booking-form";

export default function CTA() {
  const [showBtn, setShowBtn] = useState(false);
  return (
    <div>
      {showBtn && (
        <div className="fixed flex flex-col z-50 bottom-[100px] top-0 right-0 h-auto left-0 sm:top-auto sm:right-5 sm:left-auto h-[calc(100%-95px)] w-full sm:w-[350px] overflow-auto min-h-[250px] sm:h-[600px] border border-gray-300 bg-white shadow-2xl rounded-md">
          <AppointmentBookinghtmlForm />
        </div>
      )}

      <button
        onClick={() => setShowBtn(!showBtn)}
        className="fixed z-40 right-5 bottom-5 shadow-lg flex justify-center items-center w-14 h-14 bg-indigo-500 rounded-full focus:outline-none hover:bg-indigo-600 focus:bg-indigo-600 transition duration-300 ease"
        style={{
          transitionDuration: showBtn ? "0.5s" : "0.7s",
          transitionTimingFunction: "ease",
        }} // Adjust the duration here
      >
        {showBtn ? (
          <FaRegTimesCircle className="w-6 h-6 text-white" />
        ) : (
          <FaCommentAlt className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}
