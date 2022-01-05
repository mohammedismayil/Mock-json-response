import { React, useState, useEffect } from "react";

import API from "../Utils/API";
import { Link, useParams } from "react-router-dom";
import { withRouter } from "react-router";

//   componentDidMount() {
//     // Runs after the first render() lifecycle((
//     console.log("cunt");
//     console.log(this.props);
//     if (this.state.isFromEdit) {
//       this.getMockDataForID();
//     }
//   }

export default function MockJson(props) {
  let { id } = useParams();
  const [count, setCount] = useState(0);
  const [createdID, setcreatedID] = useState("");
  const [json, setjson] = useState("");
  const [isFromEdit, setisFromEdit] = useState(props.isFromEdit);
  useEffect(() => {
    if (count < 1) {
      setTimeout(() => {
        setCount(count + 1);
        getMockDataForID(id);
      }, 1000);
    }
  });

  function handleInputChange(event) {
    setjson(event.target.value);
  }
  function reloadInputs(data) {
    console.log("reloading inputs");
    setjson("");
    setcreatedID(data._id);
  }

  function IsJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  function getMockDataForID(id) {
    console.log(id);
    if (id) {
      API.getMockJson(id)
        .then((res) => {
          console.log(res.data);
          setjson(JSON.stringify(res.data.json));
          setcreatedID(res.data._id);
          console.log(JSON.parse(res.data.json));
        })
        .catch((err) => console.log(err));
    }
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form submitted");
    if (json) {
      if (IsJsonString(json)) {
        if (isFromEdit) {
          API.updateMockJson(id, { json: json })
            .then((res) => reloadInputs(res.data))
            .catch((err) => console.log(err));
        } else {
          API.saveMockJson({
            json: json,
          })
            .then((res) => reloadInputs(res.data))
            .catch((err) => console.log(err));
        }
      } else {
        alert("enter a valid json");
      }
    }
  }

  // const createdID = this.state.createdID;
  return (
    <div className="content-center justify-center pt-10">
      {isFromEdit ? (
        <h1 className="font-bold text-center text-2xl">Edit the json mock</h1>
      ) : (
        <h1 className="font-bold text-center text-2xl">Add a new json mock</h1>
      )}

      <div className="m-auto w-1/2 content-center justify-center flex-col pt-10">
        <div>
          <textarea
            value={json}
            onChange={handleInputChange}
            name="json"
            placeholder="JSON (required)"
            className="h-40 w-full border border-green-800 px-2 py-2"
          />
        </div>
        <div className="flex content-center justify-center">
          <div className="content-center justify-center">
            {isFromEdit ? (
              <button
                disabled={!json}
                onClick={handleFormSubmit}
                className="bg-blue-700 rounded-sm text-white px-5 py-2 content-center justify-center w-24 mt-10"
              >
                Edit
              </button>
            ) : (
              <button
                disabled={!json}
                onClick={handleFormSubmit}
                className="bg-blue-700 rounded-sm text-white px-5 py-2 content-center justify-center w-24 mt-10"
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>

      {
        createdID.length > 0 ? (
          <div>
            <h2>Check out your mock json here:</h2>
            <Link to={"/" + createdID}>http://localhost:3000/{createdID}</Link>
          </div>
        ) : (
          <div></div>
        )
        // href={"http:localhost:3000/"+this.state.createdID
      }
    </div>
  );
}
// /