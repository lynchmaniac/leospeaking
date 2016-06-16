"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _author = require("../models/author");

var _author2 = _interopRequireDefault(_author);

var _serie = require("../models/serie");

var _serie2 = _interopRequireDefault(_serie);

var _title = require("../models/title");

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assert = require("assert");

var db = require('../database/database');

var BdHelper = function () {
  function BdHelper() {
    _classCallCheck(this, BdHelper);
  }

  _createClass(BdHelper, null, [{
    key: "getAuthors",


    /*
     * Traitement de l'ensemble des données pour transformer les entrées
     * auteur de la base de donnée en suite d'objet Author
     */
    value: function getAuthors(json) {
      var arr = [];
      var len = json["authors"].length;
      for (var i = 0; i < len; i++) {
        arr.push(BdHelper.getAuthor(json["authors"][i], i));
      }
      return arr;
    }

    /*
     * A partir des données d'un auteur, on crée un objet Author.
     * Chaque objet Serie est crée et ajouté à l'Author.
     */

  }, {
    key: "getAuthor",
    value: function getAuthor(json, id) {
      var series = [];
      for (var i = 0; i < json["series"].length; i++) {
        series.push(BdHelper.getSerie(json["series"][i]));
      }
      return new _author2.default(id, json["first_name"], json["last_name"], series);
    }

    /*
     * Traitement de l'ensemble des données pour transformer les entrées
     * series de la base de donnée en suite d'objet Serie
     */

  }, {
    key: "getSeries",
    value: function getSeries(json) {
      var arr = [];
      var len = json["series"].length;
      for (var i = 0; i < len; i++) {
        arr.push(BdHelper.getSerie(json["series"][i]));
      }
      return arr;
    }

    /*
     * A partir des données d'une série, on crée un objet Serie.
     */

  }, {
    key: "getSerie",
    value: function getSerie(json) {
      return new _serie2.default(json["id"], json["name"], json["author"]);
    }

    /*
     * Traitement de l'ensemble des données pour transformer les entrées
     * titres de la base de donnée en suite d'objet Titre
     */

  }, {
    key: "getTitles",
    value: function getTitles(json) {
      var arr = [];
      var len = json["titles"].length;
      for (var i = 0; i < len; i++) {
        arr.push(BdHelper.getTitle(json["titles"][i], i));
      }
      return arr;
    }

    /*
     * A partir des données d'un titre, on crée un objet Title.
     */

  }, {
    key: "getTitle",
    value: function getTitle(json, id) {
      return new _title2.default(id, json["name"], json["author"]);
    }

    /*
     * Renvoie l'objet json correspondant à la catégorie, au critère voulue
     */

  }, {
    key: "searchParams",
    value: function searchParams(json, categoryField, searchField, searchVal) {
      for (var i = 0; i < json[categoryField].length; i++) {
        if (json[categoryField][i][searchField] == searchVal) {
          return json[categoryField][i];
        }
      }
    }
  }]);

  return BdHelper;
}();

exports.default = BdHelper;