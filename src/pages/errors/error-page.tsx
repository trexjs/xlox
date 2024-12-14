import NotFound from "../../assets/illustrations/404-error-page.svg";

// 404 page
function NotFoundPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-100">
      <img src={NotFound} alt="Not Found" className="w-4/6 h-4/6" />
    </div>
  );
}

// change the image
function InternalErrorPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-100">
      <img src={NotFound} alt="Not Found" className="w-4/6 h-4/6" />
    </div>
  );
}

export { NotFoundPage, InternalErrorPage };
