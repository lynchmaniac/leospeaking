 
 
var params = {screen_name: 'nodejs'};

client.get('directmessages/show', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});


"use strict";

var threerest = require('threerest');
var Twitter = require('twitter');

import * as ServiceTwitter from "./services/serviceTwitter";

import express from "express";


var client = new Twitter({
  consumer_key: 'k1GlOJxECZPvFl3xSxI9yMFpb',
  consumer_secret: 'KunbnSCXEP2YwUiFNGe3bNkTmlzcVSb9FCisYttcIxRgit9cny',
  access_token_key: '561941700-9pHWOyf0pT0IQfzVYkgm32NiHdASXyC7KlIJDx6D',
  access_token_secret: 'niKAMFXCbFuR5f97SgWu6RiCsN9Zs6kpQM8LxA8A4WYX0'
});


var app = express();

app.get("/", function(req, res){
  res.send("hello world");
});


// load the service Test
threerest.ServiceLoader.loadService(app, new ServiceTwitter.default());

app.listen(8080, () => {console.log("Express start...");});
