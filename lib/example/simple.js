"use strict";

var _index = require("../../index");

var _colouredSquare = _interopRequireDefault(require("./element/colouredSquare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var canvas = new _index.Canvas();

var simpleExample = function simpleExample() {
  return React.createElement(_index.Scene, {
    canvas: canvas
  }, React.createElement(_index.Part, null, React.createElement(_colouredSquare["default"], {
    colour: [0, 0, 1]
  })), React.createElement(_index.DesignCamera, null));
};

module.exports = simpleExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS5qcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJDYW52YXMiLCJzaW1wbGVFeGFtcGxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7Ozs7QUFGa0U7QUFJbEUsSUFBTUEsTUFBTSxHQUFHLElBQUlDLGFBQUosRUFBZjs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsU0FFcEIsb0JBQUMsWUFBRDtBQUFPLElBQUEsTUFBTSxFQUFFRjtBQUFmLEtBQ0Usb0JBQUMsV0FBRCxRQUNFLG9CQUFDLDBCQUFEO0FBQWdCLElBQUEsTUFBTSxFQUFFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSO0FBQXhCLElBREYsQ0FERixFQUlFLG9CQUFDLG1CQUFELE9BSkYsQ0FGb0I7QUFBQSxDQUF0Qjs7QUFXQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCRixhQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZVwiO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IHNpbXBsZUV4YW1wbGUgPSAoKSA9PlxuXG4gIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgPFBhcnQ+XG4gICAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtbIDAsIDAsIDEgXX0gLz5cbiAgICA8L1BhcnQ+XG4gICAgPERlc2lnbkNhbWVyYSAvPlxuICA8L1NjZW5lPlxuXG47XG5cbm1vZHVsZS5leHBvcnRzID0gc2ltcGxlRXhhbXBsZTtcbiJdfQ==