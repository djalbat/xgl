"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../index");

var _pyramid = _interopRequireDefault(require("./element/pyramid"));

var _configuration = _interopRequireDefault(require("../miscellaneous/configuration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var canvas = new _index.Canvas();

var pyramidExample = function pyramidExample() {
  preloadImageMap(function (imageMap) {
    var imageMapJSON = _configuration["default"].imageMapJSON;
    return React.createElement(_index.Scene, {
      canvas: canvas
    }, React.createElement(_index.Part, {
      imageMap: imageMap,
      imageMapJSON: imageMapJSON
    }, React.createElement(_pyramid["default"], null)), React.createElement(_index.GamingCamera, null));
  });
};

var _default = pyramidExample;
exports["default"] = _default;

function preloadImageMap(callback) {
  var imageMapURI = _configuration["default"].imageMapURI,
      imageMap = new Image(),
      src = imageMapURI; ///

  Object.assign(imageMap, {
    src: src,
    onload: onload
  });

  function onload(event) {
    callback(imageMap);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB5cmFtaWQuanMiXSwibmFtZXMiOlsiY2FudmFzIiwiQ2FudmFzIiwicHlyYW1pZEV4YW1wbGUiLCJwcmVsb2FkSW1hZ2VNYXAiLCJpbWFnZU1hcCIsImltYWdlTWFwSlNPTiIsImNvbmZpZ3VyYXRpb24iLCJjYWxsYmFjayIsImltYWdlTWFwVVJJIiwiSW1hZ2UiLCJzcmMiLCJPYmplY3QiLCJhc3NpZ24iLCJvbmxvYWQiLCJldmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7OztBQUgrRDtBQUsvRCxJQUFNQSxNQUFNLEdBQUcsSUFBSUMsYUFBSixFQUFmOztBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQkMsRUFBQUEsZUFBZSxDQUFDLFVBQUNDLFFBQUQsRUFBYztBQUFBLFFBQ3BCQyxZQURvQixHQUNIQyx5QkFERyxDQUNwQkQsWUFEb0I7QUFHNUIsV0FFRSxvQkFBQyxZQUFEO0FBQU8sTUFBQSxNQUFNLEVBQUVMO0FBQWYsT0FDRSxvQkFBQyxXQUFEO0FBQU0sTUFBQSxRQUFRLEVBQUVJLFFBQWhCO0FBQTBCLE1BQUEsWUFBWSxFQUFFQztBQUF4QyxPQUNFLG9CQUFDLG1CQUFELE9BREYsQ0FERixFQUlFLG9CQUFDLG1CQUFELE9BSkYsQ0FGRjtBQVVELEdBYmMsQ0FBZjtBQWNELENBZkQ7O2VBaUJlSCxjOzs7QUFFZixTQUFTQyxlQUFULENBQXlCSSxRQUF6QixFQUFtQztBQUMzQixNQUFFQyxXQUFGLEdBQWtCRix5QkFBbEIsQ0FBRUUsV0FBRjtBQUFBLE1BQ0FKLFFBREEsR0FDVyxJQUFJSyxLQUFKLEVBRFg7QUFBQSxNQUVBQyxHQUZBLEdBRU1GLFdBRk4sQ0FEMkIsQ0FHUDs7QUFFMUJHLEVBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUixRQUFkLEVBQXdCO0FBQ3RCTSxJQUFBQSxHQUFHLEVBQUhBLEdBRHNCO0FBRXRCRyxJQUFBQSxNQUFNLEVBQU5BO0FBRnNCLEdBQXhCOztBQUtBLFdBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ3JCUCxJQUFBQSxRQUFRLENBQUNILFFBQUQsQ0FBUjtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgR2FtaW5nQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFB5cmFtaWQgZnJvbSBcIi4vZWxlbWVudC9weXJhbWlkXCI7XG5pbXBvcnQgY29uZmlndXJhdGlvbiBmcm9tIFwiLi4vbWlzY2VsbGFuZW91cy9jb25maWd1cmF0aW9uXCI7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3QgcHlyYW1pZEV4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+IHtcbiAgICBjb25zdCB7IGltYWdlTWFwSlNPTiB9ID0gY29uZmlndXJhdGlvbjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxQYXJ0IGltYWdlTWFwPXtpbWFnZU1hcH0gaW1hZ2VNYXBKU09OPXtpbWFnZU1hcEpTT059PlxuICAgICAgICAgIDxQeXJhbWlkIC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPEdhbWluZ0NhbWVyYSAvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHlyYW1pZEV4YW1wbGU7XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZU1hcChjYWxsYmFjaykge1xuICBjb25zdCB7IGltYWdlTWFwVVJJIH0gPSBjb25maWd1cmF0aW9uLFxuICAgICAgICBpbWFnZU1hcCA9IG5ldyBJbWFnZSgpLFx0Ly8vXG4gICAgICAgIHNyYyA9IGltYWdlTWFwVVJJOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZU1hcCwge1xuICAgIHNyYyxcbiAgICBvbmxvYWRcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25sb2FkKGV2ZW50KSB7XG4gICAgY2FsbGJhY2soaW1hZ2VNYXApO1xuICB9XG59XG4iXX0=