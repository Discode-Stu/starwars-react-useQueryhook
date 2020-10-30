import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import Specie from "./Specie";



const fetchSpecies = async (key, page) => {
  const res = await fetch(`http://swapi.dev/api/species/?page=${page}`);
  return res.json();
};

const Species = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["species", page],
    fetchSpecies
  );
  // const { data, status } = useQuery("people", fetchPeople);
  // console.log(data);

  return (
    <div>
      <h2>Species</h2>
      {/* <p> {status} </p> */}
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading data...</div>}
      {status === "success" && (
        <>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Previous page
          </button>
          <span>{page}</span>
          <button
            onClick={() =>
              setPage((old) =>
                !latestData || !latestData.next ? old : old + 1
              )
            }
            disabled={!latestData || !latestData.next}
          >
            Next page
          </button>
          <div>
            {resolvedData.results.map((specie) => (
              <Specie key={specie.name} specie={specie} />
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

export default Species;
