"use strict";

var _serviceSensors = require('./services/serviceSensors');

var ServiceSensors = _interopRequireWildcard(_serviceSensors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var threerest = require('threerest');
//Ajout de la base de donnée
var mongoose = require('mongoose');
//import * as ServiceRooms from "./services/serviceRooms";

var app = (0, _express2.default)();

// Connexion à la base de donnée mongo local
mongoose.connect('mongodb://localhost/connectedagency', function (err) {
    if (err) {
        throw err;
    }
});

// Create a mongoose model 'Sensor'
var SensorSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true }
});

// Create a mongoose model 'Room'
var RoomSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true }
});

var Sensor = mongoose.model('sensor', SensorSchema);
var Room = mongoose.model('room', RoomSchema);

app.get("/", function (req, res) {
    res.send("hello world");
});

// load the service Test
threerest.ServiceLoader.loadService(app, new ServiceSensors.default(Sensor));
//threerest.ServiceLoader.loadService(app, new ServiceRooms.default(Room));

app.listen(8080, function () {
    console.log("Express start...");
});