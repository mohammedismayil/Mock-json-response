import React, { useState, useEffect } from "react";

import API from "../Utils/API";
import { Link } from "react-router-dom";

export default function Allmocks() {
  const [mocks, setMocks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:5000/api/MockJsons")
        .then((response) => {
          // handle the response
          console.log(response);
          setMocks(response.data);
        })
        .catch((error) => {
          // handle the error
        });
    }

    fetchData();
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

      {/* {mocks.map((mock, index) => (
        <div>
          <h2>{mock.id}</h2>
        </div>
      ))} */}
    </div>
  );
}
