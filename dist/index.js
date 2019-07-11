(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.button);
    global.index = mod.exports;
  }
})(this, function (_exports, _button) {
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
  _button = _interopRequireDefault(_button);
});