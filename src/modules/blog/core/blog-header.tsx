import { BlogLogo } from "../components/blog-logo";

export default function BlogHeader() {
  return (
    <div className="p-5">
      <div className="fixed z-10 bg-slate-200 p-3 flex items-center rounded-lg">
        <BlogLogo />
        <span className="font-normal text-3xl ms-3">xlox</span>
      </div>
    </div>
  );
}
