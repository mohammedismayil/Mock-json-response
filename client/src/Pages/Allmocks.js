import React, { useState, useEffect } from "react";

import API from "../Utils/API";
import { Link } from "react-router-dom";

export default function Allmocks() {
  const [mocks, setMocks] = useState([]);

  useEffect(() => {
    if (mocks.length == 0) {
      API.getAllMocks()
        .then((res) => {
          console.log(res.data);
          setMocks(res.data);
        })
        .catch((err) => console.log(err));
    }
  });
  //   getAllMocks = () => {
  //     API.getMockJson()
  //       .then((res) => {
  //         setMocks(res.mocks);
  //       })
  //       .catch((err) => console.log(err));
  //   };

  return (
    <div>
      <h1>Mocks</h1>

      {mocks.map((mock, index) => (
        <div>
          <h2>{mock._id}</h2>
          <Link to={"/" + mock._id}>http://localhost:5000/{mock._id}</Link>
          <Link to={"/edit/" + mock._id}>
            <button>Edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
