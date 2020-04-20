"use strict";

var _lighting = _interopRequireDefault(require("../../source/lighting"));

var _position = _interopRequireDefault(require("../../source/position"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var vertexColourAttributeName = "aVertexColour",
    vertexShaderSource = new String("\n    \n        attribute vec4 ".concat(vertexColourAttributeName, ";\n\n        ").concat(_lighting["default"], "\n      \n        ").concat(_position["default"], "\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ").concat(vertexColourAttributeName, ";                    \n        }\n        \n      "));
Object.assign(vertexShaderSource, {
  vertexColourAttributeName: vertexColourAttributeName
});
module.exports = vertexShaderSource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRleFNoYWRlci5qcyJdLCJuYW1lcyI6WyJ2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lIiwidmVydGV4U2hhZGVyU291cmNlIiwiU3RyaW5nIiwibGlnaHRpbmdTb3VyY2UiLCJwb3NpdGlvblNvdXJjZSIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOzs7O0FBRUEsSUFBTUEseUJBQXlCLEdBQUcsZUFBbEM7QUFBQSxJQUNNQyxrQkFBa0IsR0FBRyxJQUFJQyxNQUFKLDBDQUVGRix5QkFGRSwwQkFJakJHLG9CQUppQiwrQkFNakJDLG9CQU5pQiw2UEFpQkxKLHlCQWpCSyx3REFEM0I7QUF1QkFLLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxrQkFBZCxFQUFrQztBQUNoQ0QsRUFBQUEseUJBQXlCLEVBQXpCQTtBQURnQyxDQUFsQztBQUlBTyxNQUFNLENBQUNDLE9BQVAsR0FBaUJQLGtCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbGlnaHRpbmdTb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHBvc2l0aW9uU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleENvbG91clwiLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuXG4gICAgICAgICAgdkNvbG91ciA9ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHZlcnRleFNoYWRlclNvdXJjZSwge1xuICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG4iXX0=