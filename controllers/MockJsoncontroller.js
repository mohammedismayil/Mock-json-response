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
    MockJson.collection
      .drop()
      .then(res.json({ message: "deleted successfully" }));
  },

  getAll: async function () {
    await MockJson.find().then((MockJsons) => {
      return MockJsons;
    });
  },
  exportJSON: async function (req, res) {
    MockJson.find()
      .lean()
      .exec(function (err, users) {
        fs.writeFile("test.txt", JSON.stringify(users), function (err) {
          if (err) {
            console.log(err);
          } else {
            // MockJson.collection
            //   .drop()
            //   .then(res.json({ message: "deleted successfully" }));
            //
          }
        });
        // });
      });

    // const jsonData = json;

    // function download(content, fileName, contentType) {
    //   var a = Window.document.createElement("a");
    //   var file = new Blob([content], { type: contentType });
    //   a.href = URL.createObjectURL(file);
    //   a.download = fileName;
    //   a.click();
    // }
    // res.json({ message: "deleted successfully" });
  },
};