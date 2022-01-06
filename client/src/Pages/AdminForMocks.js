import React from "react";
import API from "../Utils/API";
export default function AdminForMocks() {
  function deleteAllMocks() {
    console.log("pro logging-- deleting the entire collection");

    API.deleteAllMocks()
      .then((res) => console.log("deleting all mocks"))
      .catch((err) => console.log(err));
  }
  return (
    <div className=" flex content-center justify-center rounded-2xl w-1/4 container p-10 bg-gray-200 m-auto mt-10">
      <div className="content-center justify-center">
        <h1 className="font-bold text-3xl text-center">Admin</h1>

        <button
          className="bg-purple-500 pl-5 pr-5 pt-2 pb-2 mt-5 rounded-lg text-white"
          onClick={deleteAllMocks}
        >
          Delete all mocks
        </button>
      </div>
    </div>
  );
}
