import React from "react";

const Starship = ({ starship }) => {
  return (
    <div className="card">
      <h3>{starship.name}</h3>
      <p>Passengers - {starship.passengers} </p>
      <p>Crew - {starship.crew} </p>
      <p>Starship Class - {starship.starship_class} </p>
      <p>Manufacturer - {starship.manufacturer} </p>
    </div>
  );
};

export default Starship;