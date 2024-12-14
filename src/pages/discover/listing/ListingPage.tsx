import { Button } from "@/components/ui/button";

const TutorHeader = () => {
  return (
    <div>
      <div>
        {/* Profile */}
        Tutor
      </div>
      <div>
        {/* Book btn */}
        <Button variant="destructive">Button</Button>
      </div>
      <div>{/* Tabs */}</div>
    </div>
  );
};

const TutorFooter = () => {
  return (
    <div>
      <div>2024 @ Mohan LLP</div>
    </div>
  );
};

const TutorContent = () => {
  return (
    <div>
      <div>TutorContent</div>
    </div>
  );
};

const TutorPage = () => {
  return (
    <div className="">
      <TutorHeader />
      <TutorContent />
      <TutorFooter />
    </div>
  );
};

export default TutorPage;
