export default function RouteTab({ activeTab, handleTabClick }: any) {
  return (
    <div className="flex w-full items-start">
      <nav className="flex overflow-x-auto items-center p-1 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-gray-500/5 rounded-xl dark:bg-gray-500/20">
        <button
          role="tab"
          type="button"
          className={`flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset ${
            activeTab === "overview"
              ? "text-yellow-600 shadow bg-white dark:text-white dark:bg-yellow-600"
              : "hover:text-gray-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400"
          }`}
          onClick={() => handleTabClick("overview")}
        >
          Overview
        </button>
        <button
          role="tab"
          type="button"
          className={`flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset ${
            activeTab === "about"
              ? "text-yellow-600 shadow bg-white dark:text-white dark:bg-yellow-600"
              : "hover:text-gray-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400"
          }`}
          onClick={() => handleTabClick("about")}
        >
          About
        </button>
        <button
          role="tab"
          type="button"
          className={`flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset ${
            activeTab === "jobs"
              ? "text-yellow-600 shadow bg-white dark:text-white dark:bg-yellow-600"
              : "hover:text-gray-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400"
          }`}
          onClick={() => handleTabClick("jobs")}
        >
          Jobs
        </button>
        <button
          role="tab"
          type="button"
          className={`flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset ${
            activeTab === "reviews"
              ? "text-yellow-600 shadow bg-white dark:text-white dark:bg-yellow-600"
              : "hover:text-gray-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400"
          }`}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews
        </button>
        <button
          role="tab"
          type="button"
          className={`flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset ${
            activeTab === "salaries"
              ? "text-yellow-600 shadow bg-white dark:text-white dark:bg-yellow-600"
              : "hover:text-gray-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400"
          }`}
          onClick={() => handleTabClick("salaries")}
        >
          Salaries
        </button>
        <button
          role="tab"
          type="button"
          className={`flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset ${
            activeTab === "photos"
              ? "text-yellow-600 shadow bg-white dark:text-white dark:bg-yellow-600"
              : "hover:text-gray-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400"
          }`}
          onClick={() => handleTabClick("photos")}
        >
          Photos
        </button>
      </nav>
    </div>
  );
}
