import { Route, Routes } from "react-router-dom";
import { LoginForm } from "./pages/login";
import { NotFoundPage } from "@/pages/errors/error-page";
import { AuthPage } from "./auth";

export function AuthModule() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
