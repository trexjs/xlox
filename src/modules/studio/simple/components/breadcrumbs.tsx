import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Crumb {
  path: string;
  breadcrumb: string;
}

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbs: Crumb[] = [
    { path: "/", breadcrumb: "Home" }, // Add a default home breadcrumb
  ];

  pathnames.forEach((_, index) => {
    const url = `/${pathnames.slice(0, index + 1).join("/")}`;
    const breadcrumb =
      pathnames[index].charAt(0).toUpperCase() + pathnames[index].slice(1); // Capitalize breadcrumb

    breadcrumbs.push({ path: url, breadcrumb });
  });

  return (
    <nav className="p-4 border-dashed border border-zinc-500 w-full h-12 rounded-lg flex items-center">
      <ol className="flex list-none p-0">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index < breadcrumbs.length - 1 ? ( // Render link for all but the last breadcrumb
              <Link
                to={crumb.path}
                className="text-blue-600 hover:text-blue-800"
              >
                {crumb.breadcrumb}
              </Link>
            ) : (
              <span className="text-gray-600">{crumb.breadcrumb}</span> // Render plain text for the last breadcrumb
            )}
            {index < breadcrumbs.length - 1 && ( // Render separator for all but the last breadcrumb
              <span className="mx-2">&#x3e;</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
