import { Route, Routes } from "react-router-dom";
import { TutorDetails } from "./components/tutor-details";
import { TutorHome } from "./pages/home";
import { TutorLayout } from "./core/tutor-layout";
import { NotFoundPage } from "@/pages/errors/error-page";
import { CommunityPage } from "./pages/community";

export function TutorModule() {
  return (
    <TutorLayout>
      <Routes>
        <Route path="/" element={<TutorHome />} />
        <Route path="/info" element={<TutorDetails />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </TutorLayout>
  );
}
