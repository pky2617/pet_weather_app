import React, { Component } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import getLocations from "../api/Api";
import { getCityLocation } from "../api/Api";
const Container = styled.div`
  margin-top: 15px;
`;
class Location extends Component {
  state = {
    fields: {},
    errors: {},
    location: "",
    latitude: null,
    longitude: null,
    location_key: null,
    locdetails: null,
  };

  /* This is where the magic happens
   */

  searchCityLoc = (e) => {
    e.preventDefault();
    let fields = this.state.fields;
    console.log("Inside search CityLoc");
    this.setState({ location: fields["location"] });
    getCityLocation(this.state.location).then((res) => {
      console.log(res);
      console.log(res[0].Key);
      console.log(res[0].GeoPosition.Latitude);
      console.log(res[0].GeoPosition.Longitude);
      this.setState({ latitude: res[0].GeoPosition.Latitude });
      this.setState({ longitude: res[0].GeoPosition.Longitude });
      this.setState({ location_key: res[0].Key });
      this.setState({ location: res[0].EnglishName });
      fields["latitude"] = res[0].GeoPosition.Latitude;
      fields["longitude"] = res[0].GeoPosition.Longitude;
      fields["location_key"] = res[0].Key;
      fields["location"] = res[0].EnglishName;
      this.setState({ fields });
      console.log(this.state);
      // console.log(res.Key);
      // console.log(res.GeoPosition.Latitude);
      // console.log(res.GeoPosition.Longitude);
    });
  };

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.searchCityLoc.bind(this)}>
          <div className="col-md-6">
            <fieldset>
              <label>
                {" "}
                City Name:
                <input
                  ref="location"
                  type="text"
                  size="30"
                  placeholder="City Name"
                  onChange={this.handleChange.bind(this, "location")}
                  value={this.state.fields["location"]}
                />
                <button type="submit"> Search City </button>
              </label>
              <br />
              <label>
                {" "}
                Latitude:
                <input
                  ref="latitude"
                  type="text"
                  size="30"
                  onChange={this.handleChange.bind(this, "latitude")}
                  value={this.state.fields["latitude"]}
                />
                <span style={{ color: "red" }}>
                  {this.state.errors["latitude"]}
                </span>
              </label>
              <br />
              <label>
                {" "}
                Longitude:
                <input
                  ref="longitude"
                  type="text"
                  size="30"
                  onChange={this.handleChange.bind(this, "longitude")}
                  value={this.state.fields["longitude"]}
                />
                <span style={{ color: "red" }}>
                  {this.state.errors["longitude"]}
                </span>
              </label>
            </fieldset>
          </div>
        </form>
      </Container>
    );
  }
}
export default Location;
