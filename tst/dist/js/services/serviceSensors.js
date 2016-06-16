"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2;

var _threerest = require("threerest");

var _sensor = require("../models/sensor");

var _sensor2 = _interopRequireDefault(_sensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ServiceSensors = (_dec = _threerest.Service.path("/sensors"), _dec2 = _threerest.Methods.get("/"), _dec3 = _threerest.Hal.halServiceMethod(), _dec4 = _threerest.Methods.get("/:id"), _dec5 = _threerest.Hal.halServiceMethod(), _dec(_class = (_class2 = function () {
  function ServiceSensors(db) {
    _classCallCheck(this, ServiceSensors);

    this.db = db;
  }

  _createClass(ServiceSensors, [{
    key: "getAll",
    value: function getAll() {
      return this.db.find(null, function (err, sensors) {
        if (err) {
          throw err;
        }
        return sensors;
      });
    }
  }, {
    key: "getSensorId",
    value: function getSensorId(value) {
      var id = value.id;
      this.db.find({ "id": id }, function (err, sensor) {
        if (err) {
          throw err;
        }
        if (!sensor) {
          throw new NotFoundError();
        }
        return sensor;
      });
    }
  }]);

  return ServiceSensors;
}(), (_applyDecoratedDescriptor(_class2.prototype, "getAll", [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "getAll"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getSensorId", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "getSensorId"), _class2.prototype)), _class2)) || _class);
exports.default = ServiceSensors;