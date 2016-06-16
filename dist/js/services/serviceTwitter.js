"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

var _threerest = require("threerest");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var ServiceTwitter = (_dec = _threerest.Service.path("/statuses"), _dec2 = _threerest.Methods.get("/user_timeline"), _dec3 = _threerest.Hal.halServiceMethod(), _dec(_class = (_class2 = function () {
  function ServiceTwitter(client) {
    _classCallCheck(this, ServiceTwitter);

    this.client = client;
  }

  _createClass(ServiceTwitter, [{
    key: "getStatusesUserTimeline",
    value: function getStatusesUserTimeline() {

      var Promise = require('promise');
      var params = { q: '@SQLI_ENTERPRISE' };

      var pSendRequest = Promise.denodeify(client.get('search/tweets', params, function (error, tweets, response) {
        console.log("Hi");
        console.log(error);
        if (!error) {
          console.log(tweets);
          return tweets;
        }
      }));
      pSendRequest.done(function pReadFileFulfilled(data) {
        return data;
      }, function pReadFileRejected(err) {
        throw err;
      });

      /*return client.get('search/tweets', params, function(error, tweets, response){
        console.log("Hi");
        console.log(error);
        if (!error) {
           console.log(tweets);
          return tweets;
        }
      });*/
    }
  }]);

  return ServiceTwitter;
}(), (_applyDecoratedDescriptor(_class2.prototype, "getStatusesUserTimeline", [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "getStatusesUserTimeline"), _class2.prototype)), _class2)) || _class);
exports.default = ServiceTwitter;