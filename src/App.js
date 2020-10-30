import React, { useState } from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import Species from "./components/Species";
// import Specie from "./components/Specie";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";

function App() {
  const [page, setPage] = useState("planets");

  return (
    <>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {(() => {
            switch (page) {
              case "planets":
                return <Planets />;
              case "people":
                return <People />;
              case "starships":
                return <Starships />;
              case "vehicles":
                return <Vehicles />;
              case "species":
                return <Species />;
                // return <Specie />;

              default:
                return <People />;
            }
          })()}

          {/* {page === "planets" ? <Planets /> : <People />} */}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
