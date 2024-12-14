import { schoolDB, tutorDB, ccDB } from "@/modules/db";

// Parse subdomain from URL
export const subdomain = window.location.hostname.split(".")[0];
export const routeIndentifer = window.location.hostname.split(".")[1];

export const zenCondition =
  subdomain === "zen" &&
  (routeIndentifer === undefined || routeIndentifer === "localhost");

export const blogCondition =
  subdomain === "blog" &&
  (routeIndentifer === undefined || routeIndentifer === "localhost");

export const studioCondition =
  subdomain === "studio" &&
  (routeIndentifer === undefined || routeIndentifer === "localhost");

export const recruitCondition =
  subdomain === "recruit" &&
  (routeIndentifer === undefined || routeIndentifer === "localhost");

export const siteCondition = routeIndentifer === undefined;

export const schoolCondition = routeIndentifer === "sc";
export const schoolSearchPage = subdomain === "sc";
export const schoolNotFound =
  schoolCondition && schoolDB.every((school) => school.username !== subdomain);

export const ccCondition = routeIndentifer === "cc";
export const ccSearchPage = subdomain === "cc";
export const ccNotFound =
  ccCondition && ccDB.every((cc) => cc.username !== subdomain);

export const tutorCondition = routeIndentifer === "tu";
export const tutorSearchPage = subdomain === "tu";
export const tutorNotFound =
  tutorCondition && tutorDB.every((tutor) => tutor.username !== subdomain);

console.log("indentifer", routeIndentifer);
console.log("subdomain", subdomain);
