import CardAds from "./components/card-ads";
import { RegisterForm } from "./pages/register";

export function AuthPage() {
  return (
    <div className="p-5 flex w-full bg-slate-100 h-full justify-evenly items-center">
      <div className="w-5/12 flex items-center justify-center">
        <CardAds />
      </div>
      <div className="w-9/12">
        <RegisterForm />
      </div>
    </div>
  );
}
