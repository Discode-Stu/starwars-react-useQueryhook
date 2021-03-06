import React, { Component } from "react";
import axios from "axios";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeworld: "",
      species: [],
      starships: [],
      vehicles: []
    };
  }

  fetchHomeworld = () => {
    const { person } = this.props;
    axios.get(person.homeworld).then((results) => {
      this.setState({
        homeworld: results.data.name,
      });
    });
  };

  fetchSpecies = () => {
    const { person } = this.props;
    axios.get(person.species).then((results) => {
      this.setState({
        species: results.data.name,
      });
    });
  };

  fetchStarships = () => {
    const { person } = this.props;
    person.starships.map((starship) => {
      axios.get(starship).then((results) => {
        this.setState({
          starships: this.state.starships.concat(results.data.name),
        });
        // console.log(person, ":", this.state.starships);
      });
    });
  };

  fetchVehicles = () => {
    const { person } = this.props;
    person.vehicles.map((vehicle) => {
      axios.get(vehicle).then((results) => {
        this.setState({
          vehicles: this.state.vehicles.concat(results.data.name),
        });
        console.log(person, ":", this.state.vehicles);
      });
    });
  };

  

  componentDidMount() {
    this.fetchHomeworld();
    this.fetchSpecies();
    this.fetchStarships();
    this.fetchVehicles();
  }

  render() {
    const { person } = this.props;
    const { homeworld, species, starships, vehicles } = this.state;
    const formattedStarship = starships.join(", ");
    const formattedVehicle = vehicles.join(", ");
    return (
      <div className="card">
        <h3>{person.name}</h3>
        <p>Gender - {person.gender} </p>
        <p>Birth year - {person.birth_year}</p>
        <p>Eye color - {person.eye_color}</p>
        <p>Hair color - {person.hair_color}</p>
        <p>Height - {person.height} cm</p>
        <p>Mass - {person.mass} kg</p>
        <div>
          {homeworld ? (
            <p>Homeworld -{homeworld}</p>
          ) : (
            <p>Homeworld - unkown </p>
          )}
        </div>
        <div>{species ? <p>Species -{species}</p> : null}</div>
        <div>
          {person.starships == "" ? null : (
            <p>Starships - {formattedStarship}</p>
          )}
        </div>
        <div>
          {person.vehicles == "" ? null : (
            <p>Vehicles - {formattedVehicle}</p>
          )}
        </div>
      </div>
    );
  }
}

export default Person;
