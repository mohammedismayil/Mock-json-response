import axios from 'axios';
var fs = require("fs");
export default {
  // Gets all MockJsons
  getAllMocks: function () {
    return axios.get("/api/MockJsons", {
      headers: {
        "Content-Type": "application/json  ",
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
  getAllMocksWeb: function () {
    return axios.get("http://localhost:5000/api/MockJsons", {
      headers: {
        "Content-Type": "application/json  ",
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
  // Gets the MockJson with the given id
  getMockJson: function (id) {
    return axios.get("/api/MockJsons/" + id);
  },
  // Gets the MockJson with the given id
  updateMockJson: function (id, data) {
    return axios.put("http://localhost:5000/api/mockjsons/" + id, data);
  },
  // Deletes the MockJson with the given id
  deleteMockJson: function (id) {
    return axios.delete("/api/MockJsons/" + id);
  },
  // Saves a MockJson to the database
  saveMockJson: function (MockJsonData) {
    return axios.post("/api/MockJsons", MockJsonData);
  },

  // Deletes all Mocks
  deleteAllMocks: function (id) {
    return axios.get("/api/MockJsons/deleteAllMocks/");
  },
  // Backup all Mocks
  backupAllMocks: function (id) {
    return axios.get("http://localhost:5000/api/MockJsons/backupMocks/");
  },
};
