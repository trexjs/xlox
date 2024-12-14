import { AuthFooter } from "./auth-footer";
import { AuthNavbar } from "./auth-navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-slate-50">
      <AuthNavbar />
      <main className="flex-1">{children}</main>
      <AuthFooter />
    </div>
  );
}
