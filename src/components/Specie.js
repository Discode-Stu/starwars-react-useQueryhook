import React, { Component } from "react";
import axios from "axios";


class Specie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeWorld: "",
    };
  }
  fetchStarWars = () => {
    const { specie } = this.props;
    axios.get(specie.homeworld).then((results) => {
      console.log("results", results.data.name);

      this.setState( {
        homeWorld: results.data.name,
      });
      // console.log('state: ', this.state.homeWorld)
    });
  };

  componentDidMount() {
    this.fetchStarWars()
  }

  render() {
    const { specie } = this.props;
    const { homeWorld } = this.state;
    return (
      <div className="card">
        <h3>{specie.name}</h3>
        <p>Language - {specie.language} </p>
        <p>Average height - {specie.average_height} cm</p>
        <p>Average lifespan - {specie.average_lifespan} years</p>
        <p>Classification - {specie.classification} </p>
        <p>Designation - {specie.designation}</p>
        <p>Eye colors - {specie.eye_colors}</p>
        <p>Hair colors - {specie.hair_colors}</p>
        <p>Skin colors - {specie.skin_colors}</p>
        <p>Homeworld -{homeWorld}</p>
        {console.log('state:', homeWorld)}
      </div>
    );
  }
}

export default Specie;

