"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.vertexColourAttributeName = exports.default = void 0;
var _lighting = _interopRequireDefault(require("../../source/lighting"));
var _position = _interopRequireDefault(require("../../source/position"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var vertexColourAttributeName = "aVertexColour";
exports.vertexColourAttributeName = vertexColourAttributeName;
var vertexShaderSource = new String("\n    \n        attribute vec4 ".concat(vertexColourAttributeName, ";\n\n        ").concat(_lighting.default, "\n      \n        ").concat(_position.default, "\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ").concat(vertexColourAttributeName, ";                    \n        }\n        \n      "));
var _default = vertexShaderSource;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZW5kZXJlci9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlci5qcyJdLCJuYW1lcyI6WyJsaWdodGluZ1NvdXJjZSIsInBvc2l0aW9uU291cmNlIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSIsInZlcnRleFNoYWRlclNvdXJjZSIsIlN0cmluZyJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFZSxHQUF1QixDQUF2QixTQUF1QjtBQUN2QixHQUF1QixDQUF2QixTQUF1Qjs7Ozs7O0FBRTNDLEdBQUssQ0FBQyx5QkFBeUIsSUFBRyxhQUFlO1FBQTNDLHlCQUF5QixHQUF6Qix5QkFBeUI7QUFFdEMsR0FBSyxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsK0JBRWhCLEVBRWIsTUFBYyxDQUZDLHlCQUF5QixHQUFDLGFBRTNDLEdBRUUsTUFBYyxDQVhHLFNBQXVCLFdBU3pCLGtCQUVqQixHQVdjLE1BQXlCLENBckJwQixTQUF1QixXQVV6QixnUEFXTCxHQUE0QixNQUcxQyxDQUhnQix5QkFBeUIsR0FBQyxrREFHMUM7ZUFFUyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxpZ2h0aW5nU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCBwb3NpdGlvblNvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4Q29sb3VyXCJcblxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuXG4gICAgICAgICAgdkNvbG91ciA9ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG4iXX0=