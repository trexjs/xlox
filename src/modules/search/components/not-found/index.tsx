import NotFound from "@/assets/illustrations/404-error-page.svg";

export default function SchoolNotFound({ term }: any) {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-100">
      <h1>{`${term} not found`}</h1>
      <img src={NotFound} alt="Not Found" className="w-4/6 h-4/6" />
    </div>
  );
}
