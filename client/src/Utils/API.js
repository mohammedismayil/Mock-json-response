import axios from 'axios';

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
  // Gets the MockJson with the given id
  getMockJson: function (id) {
    return axios.get("/api/MockJsons/" + id);
  },
  // Gets the MockJson with the given id
  updateMockJson: function (id, json) {
    return axios.put("/api/MockJsons/" + id + json);
  },
  // Deletes the MockJson with the given id
  deleteMockJson: function (id) {
    return axios.delete("/api/MockJsons/" + id);
  },
  // Saves a MockJson to the database
  saveMockJson: function (MockJsonData) {
    return axios.post("/api/MockJsons", MockJsonData);
  },
};
