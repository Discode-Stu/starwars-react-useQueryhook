import React from "react";

const Person = ({ person }) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>Gender - {person.gender} </p>
      <p>Birth year - {person.birth_year}</p>
      <p>Eye color - {person.eye_color}</p>
      <p>Hair color - {person.hair_color}</p>
      <p>Height - {person.height} cm</p>
      <p>Mass - {person.mass} kg</p>
    </div>
  );
};

export default Person;
