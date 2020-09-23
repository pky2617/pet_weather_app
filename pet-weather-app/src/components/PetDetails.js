import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class PetDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      pets: [],
      petid: props.match.params.id,
    };
  }

  callAPI() {
    fetch(`https://pet-shelter-2020.herokuapp.com/pets/${this.state.petid}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) =>
        this.setState({
          isLoaded: true,
          pets: JSON.parse(JSON.stringify(result)),
          error: null,
        })
      )
      .then((result) => console.log("res", result));
  }

  componentWillMount() {
    console.log("Before calling API");
    console.log(this.state);
    this.callAPI();
    console.log(this.state.pets);
    // this.console.log("after calling api");
    //this.console.log(this.state.apiResponse);
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table" width="300px">
          <TableHead>
            <TableRow>
              <TableCell width="50px">Pet Name</TableCell>
              <TableCell align="right" width="50px">
                Type
              </TableCell>
              <TableCell align="right" width="50px">
                Breed
              </TableCell>
              <TableCell align="right" width="50px">
                Location
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.pets.map((pet) => (
              <TableRow key={pet.id}>
                <TableCell component="th" scope="row">
                  {pet.name}
                </TableCell>
                <TableCell align="right">{pet.type}</TableCell>
                <TableCell align="right">{pet.breed}</TableCell>
                <TableCell align="right">{pet.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default PetDetails;
