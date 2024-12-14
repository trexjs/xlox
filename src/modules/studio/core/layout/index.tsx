import SiteFooter from "../footer";
import SiteToolbar from "../toolbar";
import SiteNavbar from "../navbar";
import SiteSidebar from "../siderbar";

export function StudioLayout({ children }: any) {
  return (
    <>
      <SiteNavbar />
      <SiteToolbar />

      <div className="flex h-full w-full items-center justify-center p-6">
        <SiteSidebar />
      </div>

      <div className="flex h-full w-full items-center justify-center p-6">
        {children}
      </div>
      <SiteFooter />
    </>
  );
}
