// MockJsonsControllers.js
const MockJson = require('../models/MockJson');

// Defining all methods and business logic for routes
const path = require('path');
const fs = require('fs');
const { json } = require("express/lib/response");
const { Blob } = require("buffer");
const { URL } = require("url");
module.exports = {
  findAll: function (req, res) {
    MockJson.find(req.query)
      .then((MockJsons) => res.json(MockJsons))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    MockJson.findById(req.params.id)
      .then((MockJson) => res.json(MockJson))
      .catch((err) => res.status(422).json(err));
  },
  findByIdAndReturnJson: function (req, res) {
    MockJson.findById(req.params.id)
      .then((MockJson) => res.json(JSON.parse(MockJson.json)))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    MockJson.create(req.body)
      .then((newMockJson) => res.json(newMockJson))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log("damn these coding");
    console.log(req.params);
    console.log(req.body);

    MockJson.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((MockJson) => res.json(MockJson))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    MockJson.findById({ _id: req.params.id })
      .then((MockJson) => MockJson.remove())
      .then((allMockJsons) => res.json(allMockJsons))
      .catch((err) => res.status(422).json(err));
  },
  removeAllMocks: function (req, res) {
    console.log("inside export method");
    MockJson.find(req.query)
      .then(
        (resp) =>
          fs.writeFile("test.txt", resp, function (err) {
            if (err) {
              console.log(err);
            } else {
              MockJson.collection
                .drop()
                .then(res.json({ message: "deleted successfully" }));
            }
          })
        // res.json(resp),
        // this.exportJSON({ ihji: "fffff" })
      )

      // this.exportJSON(resp))

      .catch((err) => res.status(422).json(err));
  },
  exportJSON: function (req, res) {
    console.log("inside export method");

    const jsonData = JSON.stringify({ uhuh: "oohjo" });
    fs.writeFile("test.txt", jsonData, function (err) {
      if (err) {
        console.log(err);
      } else {
        MockJson.collection
          .drop()
          .then(download(jsonData, "json.txt", "text/plain"));

        // res.json({ message: "deleted successfully" }));
      }
    });
    function download(content, fileName, contentType) {
      var a = Window.document.createElement("a");
      var file = new Blob([content], { type: contentType });
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
    }
    // res.json({ message: "deleted successfully" });
  },
};