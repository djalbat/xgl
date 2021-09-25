"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.textureCoordinateAttributeName = void 0;
var _lighting = _interopRequireDefault(require("../../source/lighting"));
var _position = _interopRequireDefault(require("../../source/position"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var textureCoordinateAttributeName = "aTextureCoordinate";
exports.textureCoordinateAttributeName = textureCoordinateAttributeName;
var vertexShaderSource = new String("\n        \n        attribute vec2 ".concat(textureCoordinateAttributeName, ";\n        \n        ").concat(_lighting.default, "\n      \n        ").concat(_position.default, "\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ").concat(textureCoordinateAttributeName, ";\n        }\n        \n      "));
var _default = vertexShaderSource;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXIuanMiXSwibmFtZXMiOlsibGlnaHRpbmdTb3VyY2UiLCJwb3NpdGlvblNvdXJjZSIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSIsInZlcnRleFNoYWRlclNvdXJjZSIsIlN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZSxHQUF1QixDQUF2QixTQUF1QjtBQUN2QixHQUF1QixDQUF2QixTQUF1Qjs7Ozs7O0FBRTNDLEdBQUssQ0FBQyw4QkFBOEIsR0FBRyxDQUFvQjtRQUFyRCw4QkFBOEIsR0FBOUIsOEJBQThCO0FBRTNDLEdBQUssQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBRWhCLHFDQUViLE1BQWMsQ0FGQyw4QkFBOEIsRUFBQyxDQUVoRCx3QkFFRSxNQUFjLENBWEcsU0FBdUIsVUFTekIsQ0FFakIscUJBV3lCLE1BQThCLENBckJwQyxTQUF1QixVQVV6QixDQVdNLDBSQUFpQyxNQUcxRCxDQUgyQiw4QkFBOEIsRUFBQyxDQUcxRDtlQUVTLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbGlnaHRpbmdTb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHBvc2l0aW9uU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSA9IFwiYVRleHR1cmVDb29yZGluYXRlXCI7XG5cbmNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICBcbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9ICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG4iXX0=