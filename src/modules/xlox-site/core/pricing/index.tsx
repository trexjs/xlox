import PricingPlan from "./components/pricing-plans";
import ExclusiveOffer from "./components/banners/exclusive-offer";

export default function PricingPage() {
  return (
    <>
      <section className="mt-10 lg:mt-16">
        <div className="bg-gray-800 text-white -skew-y-1">
          <div className="container mx-auto skew-y-1">
            <div className="flex flex-col items-center py-10 text-center lg:py-20">
              <div className="w-full px-4 lg:w-1/2 lg:px-0">
                <h2 className="text-3xl lg:text-6xl font-bold mb-3">
                  Choose Your Plan
                </h2>
                <p className="text-lg lg:text-xl opacity-80">
                  Search the forum for the answer to your question
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <PricingPlan />
      {/* Exclusive Offers */}
      <ExclusiveOffer />
    </>
  );
}
