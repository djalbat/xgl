"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colouredSquare = _interopRequireDefault(require("./colouredSquare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Face = function Face(properties) {
  var colour = properties.colour;
  return React.createElement(_colouredSquare["default"], {
    colour: colour,
    position: [-0.5, -0.5, +0.5]
  });
};

var _default = Face;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY2UuanMiXSwibmFtZXMiOlsiRmFjZSIsInByb3BlcnRpZXMiLCJjb2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxVQUFELEVBQWdCO0FBQUEsTUFDbkJDLE1BRG1CLEdBQ1JELFVBRFEsQ0FDbkJDLE1BRG1CO0FBRzNCLFNBRUUsb0JBQUMsMEJBQUQ7QUFBZ0IsSUFBQSxNQUFNLEVBQUVBLE1BQXhCO0FBQWdDLElBQUEsUUFBUSxFQUFFLENBQUUsQ0FBQyxHQUFILEVBQVEsQ0FBQyxHQUFULEVBQWMsQ0FBQyxHQUFmO0FBQTFDLElBRkY7QUFLRCxDQVJEOztlQVVlRixJIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb2xvdXJlZFNxdWFyZSBmcm9tIFwiLi9jb2xvdXJlZFNxdWFyZVwiO1xuXG5jb25zdCBGYWNlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZFNxdWFyZSBjb2xvdXI9e2NvbG91cn0gcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgKzAuNSBdfSAvPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGYWNlO1xuIl19