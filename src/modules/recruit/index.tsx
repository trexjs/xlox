import { Route, Routes } from "react-router-dom";
import { RecruitDetails } from "./components/recruit-details";
import { RecruitHome } from "./components/recruit-home";
import { RecruitLayout } from "./core/layout";
import { NotFoundPage } from "@/pages/errors/error-page";
import JobSearchPage from "./pages/jobs-search";

export default function RecruitModule() {
  return (
    <RecruitLayout>
      <Routes>
        <Route path="/" element={<RecruitHome />} />
        <Route path="/jobs" element={<JobSearchPage />} />
        <Route path="/jobs/:recruitId" element={<RecruitDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </RecruitLayout>
  );
}
