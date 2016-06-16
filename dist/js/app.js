"use strict";

var _serviceTwitter = require('./services/serviceTwitter');

var ServiceTwitter = _interopRequireWildcard(_serviceTwitter);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var threerest = require('threerest');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'k1GlOJxECZPvFl3xSxI9yMFpb',
  consumer_secret: 'KunbnSCXEP2YwUiFNGe3bNkTmlzcVSb9FCisYttcIxRgit9cny',
  access_token_key: '561941700-9pHWOyf0pT0IQfzVYkgm32NiHdASXyC7KlIJDx6D',
  access_token_secret: 'niKAMFXCbFuR5f97SgWu6RiCsN9Zs6kpQM8LxA8A4WYX0'
});

var app = (0, _express2.default)();

app.get("/", function (req, res) {
  res.send("hello world");
});

var params = { q: '@SQLI_ENTERPRISE' };
client.get('search/tweets', params, function (error, tweets, response) {
  console.log("Hi");
  console.log(error);
  if (!error) {
    console.log(tweets);
    return tweets;
  }
});

// load the service Test
threerest.ServiceLoader.loadService(app, new ServiceTwitter.default(client));

app.listen(8080, function () {
  console.log("Express start...");
});