import { JobOpeningsPage } from "./job-openings";

export default function Overview() {
  return (
    <>
      <h1 className="text-base font-bold">About Recruit</h1>
      <p className="text-sm leading-8">
        UI/UX designers - how would you like to work within a successful SaaS
        based firm in downtown Toronto, building customized tools for on of the
        largest geonomics sequencing projects in the world? UI/UX designers -
        how would you like to work within a successful SaaS based firm in
        downtown Toronto, building customized tools for on of the largest
        geonomics sequencing projects in the world?
      </p>

      <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </blockquote>

      <JobOpeningsPage />
    </>
  );
}
