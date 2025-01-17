import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "@/scenes/home";

// Lets you declare a set of collections of related constants as a single type
// that can be passed in

function App() {
  // react useState hook will auto infer the type,
  // as the intial value will set the type, in this case "home" is a string as the intial value
  // setSelectedPage will will update the selectedPage variable as needed
  // can also pass in an object as a type
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home 
      setSelectedPage={setSelectedPage} 
      />
    </div>
  );
}

export default App;
