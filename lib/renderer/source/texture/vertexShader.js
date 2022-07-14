"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    textureCoordinateAttributeName: function() {
        return textureCoordinateAttributeName;
    },
    default: function() {
        return _default;
    }
});
var _lighting = /*#__PURE__*/ _interopRequireDefault(require("../../source/lighting"));
var _position = /*#__PURE__*/ _interopRequireDefault(require("../../source/position"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var textureCoordinateAttributeName = "aTextureCoordinate";
var vertexShaderSource = new String("\n        \n        attribute vec2 ".concat(textureCoordinateAttributeName, ";\n        \n        ").concat(_lighting.default, "\n      \n        ").concat(_position.default, "\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ").concat(textureCoordinateAttributeName, ";\n        }\n        \n      "));
var _default = vertexShaderSource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBsaWdodGluZ1NvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5pbXBvcnQgcG9zaXRpb25Tb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lID0gXCJhVGV4dHVyZUNvb3JkaW5hdGVcIjtcblxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMiAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIFxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdlRleHR1cmVDb29yZGluYXRlID0gJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcnRleFNoYWRlclNvdXJjZTtcbiJdLCJuYW1lcyI6WyJ0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJTdHJpbmciLCJsaWdodGluZ1NvdXJjZSIsInBvc2l0aW9uU291cmNlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBS0FBLDhCQUE4QjtlQUE5QkEsOEJBQThCOztJQXdCM0MsT0FBa0M7ZUFBbEMsUUFBa0M7Ozs2REEzQlAsdUJBQXVCOzZEQUN2Qix1QkFBdUI7Ozs7OztBQUUzQyxJQUFNQSw4QkFBOEIsR0FBRyxvQkFBb0IsQUFBQztBQUVuRSxJQUFNQyxrQkFBa0IsR0FBRyxJQUFJQyxNQUFNLENBQUMsQUFBQyxxQ0FFaEIsQ0FFYkMsTUFBYyxDQUZDSCw4QkFBOEIsRUFBQyx1QkFFaEQsQ0FBaUIsQ0FFZkksTUFBYyxDQUZkRCxTQUFjLFFBQUEsRUFBQyxvQkFFakIsQ0FBaUIsQ0FXUUgsTUFBOEIsQ0FYckRJLFNBQWMsUUFBQSxFQUFDLHlSQVdNLENBQWlDLENBQUEsTUFHMUQsQ0FIMkJKLDhCQUE4QixFQUFDLGdDQUcxRCxDQUFDLENBQUMsQUFBQztJQUVULFFBQWtDLEdBQW5CQyxrQkFBa0IifQ==