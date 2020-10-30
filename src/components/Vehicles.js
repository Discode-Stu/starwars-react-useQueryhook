import React, { useState } from "react";
import { usePaginatedQuery, useQuery } from "react-query";
import Vehicle from "./Vehicle";

const fetchVehicles= async (key, page) => {
  const res = await fetch(`http://swapi.dev/api/vehicles/?page=${page}`);
  return res.json();
};

const Vehicles = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["vehicles", page],
    fetchVehicles
  );
  // const { data, status } = useQuery("people", fetchPeople);
  // console.log(data);

  return (
    <div>
      <h2>Vehicles</h2>
      {/* <p> {status} </p> */}
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading data...</div>}
      {status === "success" && (
        <>
          <button
          onClick={()=> setPage(old => Math.max(old -1, 1))}
          disabled={page === 1}
          >Previous page</button>
          <span>{page}</span>
          <button
          onClick={()=> setPage(old => (!latestData || !latestData.next ? old : old + 1))}
          disabled={!latestData || !latestData.next}
          >Next page</button>
          <div>
            {resolvedData.results.map((vehicle) => (
              <Vehicle key={vehicle.name} vehicle={vehicle} />
            ))}
          </div>
        </>


      //   <div>
      //     {data.results.map((person) => (
      //       <Person key={person.name} person={person} />
      //     ))}
      //   </div>
      )}
    </div>
  );
};

export default Vehicles;