import Navbar from "@/scenes/navbar";
import { useState } from "react";
import { SelectedPage } from "./shared/types";

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

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
