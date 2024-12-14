/**
 * https://saasblocks.app/docs/components/social-proof
 * @see "Trusted by - monotone (PRO)"
 */

import { MoonIcon, MailIcon, ShareIcon } from "lucide-react";

export default function TutorialPage() {
  return (
    <section className="py-18">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-semibold text-heading md:text-3xl">
          Get it done in 3 easy steps
        </h2>
        <p className="mt-4 text-center text-lg font-medium">
          Getting started takes only minutes.
        </p>
        <div className="mx-auto mt-14 max-w-xl space-y-16 px-5">
          <div className="flex items-start space-x-6">
            <div className="inline-grid place-content-center rounded-3xl bg-layer-2 p-4 dark:bg-layer-3">
              <MoonIcon className="h-8 w-8 stroke-gradient gradient-lime" />
            </div>
            <div className="space-y-3">
              <span className="block text-sm font-semibold uppercase tracking-wide">
                Step 1
              </span>
              <h3 className="text-xl font-semibold text-heading">
                A simple heading
              </h3>
              <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                condimentum vehicula massa pretium.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="inline-grid place-content-center rounded-3xl bg-layer-2 p-4 dark:bg-layer-3">
              <MailIcon className="h-8 w-8 stroke-gradient gradient-dusk" />
            </div>
            <div className="space-y-3">
              <span className="block text-sm font-semibold uppercase tracking-wide">
                Step 2
              </span>
              <h3 className="text-xl font-semibold text-heading">
                A simple heading
              </h3>
              <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                condimentum vehicula massa pretium.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="inline-grid place-content-center rounded-3xl bg-layer-2 p-4 dark:bg-layer-3">
              <ShareIcon className="h-8 w-8 stroke-gradient gradient-peach" />
            </div>
            <div className="space-y-3">
              <span className="block text-sm font-semibold uppercase tracking-wide">
                Step 3
              </span>
              <h3 className="text-xl font-semibold text-heading">
                A simple heading
              </h3>
              <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                condimentum vehicula massa pretium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
