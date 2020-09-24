import React, { Component } from "react";
import styled from "@emotion/styled";
import axios from "axios";

class NewPet1 extends React.Component {
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

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
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

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div>
        <form
          name="contactform"
          className="contactform"
          onSubmit={this.contactSubmit.bind(this)}
        >
          <div className="col-md-6">
            <fieldset>
              <label>
                {" "}
                Pet Name:
                <input
                  ref="name"
                  type="text"
                  size="30"
                  placeholder="Name"
                  onChange={this.handleChange.bind(this, "name")}
                  value={this.state.fields["name"]}
                />
                <span style={{ color: "red" }}>
                  {this.state.errors["name"]}
                </span>
              </label>
              <br />
              <label>
                {" "}
                Pet Type:
                <input
                  ref="type"
                  type="text"
                  size="30"
                  placeholder="Type"
                  onChange={this.handleChange.bind(this, "type")}
                  value={this.state.fields["type"]}
                />
                <span style={{ color: "red" }}>
                  {this.state.errors["type"]}
                </span>
              </label>
              <br />
              <input
                refs="email"
                type="text"
                size="30"
                placeholder="Email"
                onChange={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
              <br />
              <input
                refs="phone"
                type="text"
                size="30"
                placeholder="Phone"
                onChange={this.handleChange.bind(this, "phone")}
                value={this.state.fields["phone"]}
              />
              <br />
              <input
                refs="address"
                type="text"
                size="30"
                placeholder="Address"
                onChange={this.handleChange.bind(this, "address")}
                value={this.state.fields["address"]}
              />
              <br />
              <br />
              <button type="submit"> Add </button>
            </fieldset>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPet1;
