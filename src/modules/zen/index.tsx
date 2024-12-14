import FAQWithDropdown from "./components/faq-with-dropdown";
import { ZenFeatureList } from "./components/feature-list";
import { ZenSegments } from "./components/segments";
import { ZenServices } from "./components/services";
import ZenLayout from "./core/layout";

export function ZenModule() {
  return (
    <>
      <ZenLayout>
        <ZenFeatureList />
        <ZenSegments />
        <ZenServices />
        <FAQWithDropdown />
      </ZenLayout>
    </>
  );
}
