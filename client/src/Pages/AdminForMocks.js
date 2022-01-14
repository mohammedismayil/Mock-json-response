import React from "react";
import Modal from "../Components/Modal";
import API from "../Utils/API";
export default function AdminForMocks() {
  function deleteAllMocks() {
    console.log("pro logging-- deleting the entire collection");

    API.deleteAllMocks()
      .then((res) => console.log("deleting all mocks"))
      .catch((err) => console.log(err));
  }
  return (
    <div className=" flex content-center justify-center rounded-2xl w-1/4 container p-10 bg-gray-300 m-auto mt-10">
      <div className="content-center justify-center">
        <h1 className="font-bold text-3xl text-center">Admin</h1>
        <div className="">
          <div>
            <button
              className="bg-purple-500 pl-5 pr-5 pt-2 pb-2 mt-5 rounded-lg text-white w-full"
              onClick={deleteAllMocks}
            >
              Download Backup
            </button>
          </div>

          <div>
            <button
              className="bg-white pl-5 pr-5 pt-2 pb-2 mt-5 rounded-lg text-purple-500 w-full"
              onClick={deleteAllMocks}
            >
              Delete all mocks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
