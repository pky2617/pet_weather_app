import React, { Component } from "react";
import styled from "@emotion/styled";
import axios from "axios";

const Container = styled.div`
  margin-top: 15px;
`;
class NewPet extends Component {
  state = {
    name: "",
    type: "",
    breed: "",
    location: "",
    latitude: null,
    longitude: null,
  };
  /* This is where the magic happens
   */
  handleSubmit = (event) => {
    console.log("Handle submit:");
    console.log(this.state);
    event.preventDefault();
    const pet = {
      name: this.state.name,
      type: this.state.type,
      breed: this.state.breed,
      location: this.state.location,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
    };
    axios
      .post(
        "https://pet-shelter-2020.herokuapp.com/pet",
        JSON.parse(JSON.stringify(pet))
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        window.location = "/"; //This line of code will redirect you once the submission is succeed
      });
  };
  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
    console.log("Handle change:");
    console.log(this.state);
  };
  handleChangeType = (event) => {
    this.setState({ type: event.target.value });
    console.log("Handle change:");
    console.log(this.state);
  };
  handleChangeBreed = (event) => {
    this.setState({ breed: event.target.value });
    console.log("Handle change:");
    console.log(this.state);
  };
  handleChangeLocation = (event) => {
    this.setState({ location: event.target.value });
    console.log("Handle change:");
    console.log(this.state);
  };
  handleChangeLatitude = (event) => {
    this.setState({ latitude: event.target.value });
    console.log("Handle change:");
    console.log(this.state);
  };
  handleChangeLongitude = (event) => {
    this.setState({ longitude: event.target.value });
    console.log("Handle change:");
    console.log(this.state);
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}
            Pet Name:
            <input type="text" name="name" onChange={this.handleChangeName} />
          </label>
          <br />
          <label>
            {" "}
            Type:
            <input type="text" name="type" onChange={this.handleChangeType} />
          </label>
          <br />
          <label>
            {" "}
            Breed:
            <input type="text" name="breed" onChange={this.handleChangeBreed} />
          </label>
          <br />
          <label>
            {" "}
            Loacation:
            <input
              type="text"
              name="location"
              onChange={this.handleChangeLocation}
            />
          </label>
          <br />
          <label>
            {" "}
            latitude:
            <input
              type="float"
              name="latitude"
              onChange={this.handleChangeLatitude}
            />
          </label>
          <br />
          <label>
            {" "}
            Longitdue:
            <input
              type="float"
              name="longitude"
              onChange={this.handleChangeLongitude}
            />
          </label>
          <br />
          <button type="submit"> Add </button>
        </form>
      </Container>
    );
  }
}
export default NewPet;
