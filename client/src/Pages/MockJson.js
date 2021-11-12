import React, { Component } from "react";

import API from "../Utils/API";
import { Link } from "react-router-dom";
class MockJson extends Component {
  state = {
    json: "",
    createdID: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  reloadInputs = (data) => {
    console.log("reloading inputs");
    this.setState({
      json: "",
      createdID: data._id,
    });
    console.log(this.state.createdID);
  };

  IsJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
    if (this.state.json) {
      if (this.IsJsonString(this.state.json)) {
        API.saveMockJson({
          json: this.state.json,
        })
          .then((res) => this.reloadInputs(res.data))
          .catch((err) => console.log(err));
      } else {
        alert("enter a valid json");
      }
    }
  };

  render() {
    const createdID = this.state.createdID;
    return (
      <div className="content-center justify-center pt-10">
        <h1 className="font-bold text-center text-2xl">Add a new json mock</h1>

        <div className="m-auto w-1/2 content-center justify-center flex-col pt-10">
          <div>
            <textarea
              value={this.state.json}
              onChange={this.handleInputChange}
              name="json"
              placeholder="JSON (required)"
              className="h-40 w-full border border-green-800 px-2 py-2"
            />
          </div>
          <div className="flex content-center justify-center">
            <div className="content-center justify-center">
              <button
                disabled={!this.state.json}
                onClick={this.handleFormSubmit}
                className="bg-blue-700 rounded-sm text-white px-5 py-2 content-center justify-center w-24 mt-10"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {
          createdID.length > 0 ? (
            <div>
              <h2>Check out your mock json here:</h2>
              <Link to={"/" + this.state.createdID}>
                http://localhost:3000/{this.state.createdID}
              </Link>
            </div>
          ) : (
            <div></div>
          )
          // href={"http:localhost:3000/"+this.state.createdID
        }
      </div>
    );
  }
}

export default MockJson;
