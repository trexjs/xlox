import WinsonLogo from "@/assets/overview.png";

export default function HorizontalImageContent() {
  return (
    <>
      <div className="flex flex-col items-center w-full bg-yellow-50">
        <div className="flex w-full h-1/6">
          <div className="w-6/12 flex justify-center items-center">
            <img src={WinsonLogo} alt="Login Logo" className="w-5/6 h-4/6" />
          </div>
          <div className="w-6/12 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bolder">Complete metrics</h1>
            <p className="text-md font-medium text-slate-700">
              Every data point you may need
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
