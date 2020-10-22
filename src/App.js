import React, {useState} from "react";
import Navbar from "./components/navbar";
import People from "./components/people";
import Planets from "./components/planets";


function App() {
  const [page, setPage] = useState('planets')


  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        { page === 'planets' ? <Planets /> : <People />}
      </div>
      
    </div>
  );
}

export default App;
