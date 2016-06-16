"use strict";

var threerest = require('threerest');
var Twitter = require('twitter');

import * as ServiceTwitter from "./services/serviceTwitter";

import express from "express";


var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});


var app = express();

app.get("/", function(req, res){
  res.send("hello world");
});

var params = {q: '@SQLI_ENTERPRISE'};
client.get('search/tweets', params, function(error, tweets, response){
  console.log("Hi");
  console.log(error);
  if (!error) {
     console.log(tweets);
    return tweets;
  }
});

// load the service Test
threerest.ServiceLoader.loadService(app, new ServiceTwitter.default(client));

app.listen(8080, () => {console.log("Express start...");});
