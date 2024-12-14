import { useState, useEffect } from "react";

// Define the type for the selected segment
type LayoutSegment = string | null;

// Implement the useSelectedLayoutSegment hook
const useSelectedLayoutSegment = (): LayoutSegment => {
  // State to store the selected segment
  const [selectedSegment, setSelectedSegment] = useState<LayoutSegment>(null);

  useEffect(() => {
    // Function to handle route change
    const handleRouteChange = () => {
      // Logic to get the active segment from the route
      const activeSegment = window.location.pathname.split("/")[1]; // Assuming the segment is the first part of the path
      setSelectedSegment(activeSegment || null);
    };

    // Add event listener for route change
    window.addEventListener("popstate", handleRouteChange);

    // Initial call to set the selected segment on component mount
    handleRouteChange();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return selectedSegment;
};

export default useSelectedLayoutSegment;
