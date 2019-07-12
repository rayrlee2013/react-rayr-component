(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./button", "./icon"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./button"), require("./icon"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.button, global.icon);
    global.index = mod.exports;
  }
})(this, function (_exports, _button, _icon) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Button", {
    enumerable: true,
    get: function get() {
      return _button["default"];
    }
  });
  Object.defineProperty(_exports, "Icon", {
    enumerable: true,
    get: function get() {
      return _icon["default"];
    }
  });
  _button = _interopRequireDefault(_button);
  _icon = _interopRequireDefault(_icon);
});