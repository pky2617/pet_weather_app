import React, { Component } from "react";
import styled from "@emotion/styled";
import axios from "axios";

const Container = styled.div`
  margin-top: 15px;
`;
class NewPet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }
    if (!fields["type"]) {
      formIsValid = false;
      errors["type"] = "Cannot be empty";
    }

    if (typeof fields["type"] !== "undefined") {
      if (!fields["type"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["type"] = "Only letters";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      console.log(this.state.fields);
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  }
  handleSubmit = (event) => {
    console.log("Handle submit:");
    console.log(this.state);
    event.preventDefault();
    if (this.handleValidation()) {
      let fields = this.state.fields;
      const pet = {
        name: fields["name"],
        type: fields["type"],
        breed: fields["breed"],
        location: fields["location"],
        latitude: fields["latitude"],
        longitude: fields["longitude"],
      };
      axios
        .post("http://localhost:3003/pet", JSON.parse(JSON.stringify(pet)))
        .then((res) => {
          console.log(res);
          console.log(res.data);
          window.location = "/"; //This line of code will redirect you once the submission is succeed
        })
        .catch(console.error());
    } else {
      console.log("Form has validation errors");
      return;
    }
  };

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

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
