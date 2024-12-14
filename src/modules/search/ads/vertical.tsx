import { Button } from "@/components/ui/button";

export default function VerticalAds() {
  return (
    <div
      className="bg-gradient-to-r from-green-100 to-green-900 bg-white shadow-lg
    flex items-center justify-around w-full p-5 rounded-2xl"
    >
      <span className="flex items-center w-full">
        <img
          src="https://static.naukimg.com/s/0/0/i/registerLock.svg"
          alt="registerLock"
        />
        <p className="w-3/6 ms-5">
          Create your job profile for free on Naukri to explore top jobs applied
          by your peers!
        </p>
      </span>
      <Button variant="xlox" className="rounded-full">
        Register now
      </Button>
    </div>
  );
}
