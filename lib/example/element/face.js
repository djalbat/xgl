"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colouredSquare = _interopRequireDefault(require("./colouredSquare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Face = function Face(properties) {
  var colour = properties.colour;
  return /*#__PURE__*/React.createElement(_colouredSquare["default"], {
    colour: colour,
    position: [-0.5, -0.5, +0.5]
  });
};

var _default = Face;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY2UuanMiXSwibmFtZXMiOlsiRmFjZSIsInByb3BlcnRpZXMiLCJjb2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxVQUFELEVBQWdCO0FBQUEsTUFDbkJDLE1BRG1CLEdBQ1JELFVBRFEsQ0FDbkJDLE1BRG1CO0FBRzNCLHNCQUVFLG9CQUFDLDBCQUFEO0FBQWdCLElBQUEsTUFBTSxFQUFFQSxNQUF4QjtBQUFnQyxJQUFBLFFBQVEsRUFBRSxDQUFFLENBQUMsR0FBSCxFQUFRLENBQUMsR0FBVCxFQUFjLENBQUMsR0FBZjtBQUExQyxJQUZGO0FBS0QsQ0FSRDs7ZUFVZUYsSSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3QgRmFjZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtjb2xvdXJ9IHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsICswLjUgXX0gLz5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmFjZTtcbiJdfQ==