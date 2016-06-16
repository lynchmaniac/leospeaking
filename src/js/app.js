"use strict";

var threerest = require('threerest');

import ServiceTwitter from "./services/serviceTwitter";

import express from "express";

var app = express();

app.get("/", function(req, res){
  res.send("hello world");
});

// load the service Test
threerest.ServiceLoader.loadService(app, new ServiceTwitter());

app.listen(8080, () => {console.log("Express start...");});
