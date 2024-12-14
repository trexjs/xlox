import { useState } from "react";

export function Search({ term }: { term: string }) {
  const [item, setItem] = useState("");
  const identifer = term === "school" ? "sc" : term === "tutor" ? "tu" : "cc";

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Encode the school name to ensure URL safety
    const encodedItem = encodeURIComponent(item.trim()).replace(/%20/g, "-");
    // Construct the new URL with the encoded school name
    const newUrl = `http://${encodedItem}.${identifer}.localhost:3000`;
    // Redirect to the new URL
    window.location.href = newUrl;
  };

  const handleInputChange = (event: any) => {
    setItem(event.target.value);
  };

  return (
    // <div className="p-40 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <>
      <div className="relative isolate overflow-hidden px-6 pb-10 text-center sm:px-16 sm:shadow-sm">
        <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {`Didn't find ${term} you were looking for?`}
        </p>

        <form onSubmit={handleSubmit}>
          {/* Call handleSubmit on form submission */}
          <label className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300">
            <input
              id="search-bar"
              placeholder={`your ${term} name`}
              name="q"
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
              value={item}
              onChange={handleInputChange} // Call handleInputChange on input change
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
            >
              <div className="flex items-center transition-all opacity-1">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Search
                </span>
              </div>
            </button>
          </label>
        </form>

        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          {/* Corrected from fill-opacity */}
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.7"
          ></circle>
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#3b82f6"></stop>{" "}
              {/* Corrected from stop-color */}
              <stop offset="1" stopColor="#1d4ed8"></stop>{" "}
              {/* Corrected from stop-color */}
            </radialGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
