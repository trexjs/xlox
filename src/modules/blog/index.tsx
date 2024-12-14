import { Route, Routes } from "react-router-dom";
import { BlogDetails } from "./components/blog-details";
import { BlogHome } from "./components/blog-home";
import BlogLayout from "./core/layout";
import { NotFoundPage } from "@/pages/errors/error-page";

export default function BlogModule() {
  return (
    <BlogLayout>
      <Routes>
        <Route path="/" element={<BlogHome />} />
        <Route path="/:blogId" element={<BlogDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BlogLayout>
  );
}
