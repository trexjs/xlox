import { Route, Routes } from "react-router-dom";
import { CCDetails } from "./pages/cc-details";
import { CCHome } from "./pages/home";
import { CCLayout } from "./core/cc-layout";
import { NotFoundPage } from "@/pages/errors/error-page";
import { CommunityPage } from "./pages/community";
import LMSPage from "./pages/lms";
import { CourseDetails } from "./pages/lms/card/course-details";

export function CCModule() {
  return (
    <CCLayout>
      <Routes>
        <Route path="/" element={<CCHome />} />
        <Route path="/info" element={<CCDetails />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/lms" element={<LMSPage />} />
        <Route path="/lms/:id" element={<CourseDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </CCLayout>
  );
}
