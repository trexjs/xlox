import { Route, Routes } from "react-router-dom";
import { XloxHomePage } from "./components/xlox-home-page";
import { NotFoundPage } from "@/pages/errors/error-page";
import PricingPage from "./core/pricing";
import { XloxLayout } from "./core/layout";

export function XloxModule() {
  return (
    <XloxLayout>
      <Routes>
        <Route path="/" element={<XloxHomePage />} />
        <Route path="/plans" element={<PricingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </XloxLayout>
  );
}
