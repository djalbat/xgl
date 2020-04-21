"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../../index");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

///
var coordinates = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0]],
    indexes = [[0, 1, 3], [3, 2, 0]],
    defaultImageName = "plaster.jpg",
    defaultTextureCoordinates = [[[0, 0], [2, 0], [2, 2]], [[2, 2], [0, 2], [0, 0]]];

var TexturedQuadrangle = /*#__PURE__*/function (_TexturedCanvasElemen) {
  _inherits(TexturedQuadrangle, _TexturedCanvasElemen);

  function TexturedQuadrangle() {
    _classCallCheck(this, TexturedQuadrangle);

    return _possibleConstructorReturn(this, _getPrototypeOf(TexturedQuadrangle).apply(this, arguments));
  }

  _createClass(TexturedQuadrangle, null, [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var _properties$imageName = properties.imageName,
          imageName = _properties$imageName === void 0 ? defaultImageName : _properties$imageName,
          _properties$textureCo = properties.textureCoordinates,
          textureCoordinates = _properties$textureCo === void 0 ? defaultTextureCoordinates : _properties$textureCo,
          texturedQuadrangle = _index.TexturedCanvasElement.fromProperties(TexturedQuadrangle, properties, coordinates, indexes, imageName, textureCoordinates);

      return texturedQuadrangle;
    }
  }]);

  return TexturedQuadrangle;
}(_index.TexturedCanvasElement);

exports["default"] = TexturedQuadrangle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHR1cmVkUXVhZHJhbmdsZS5qcyJdLCJuYW1lcyI6WyJjb29yZGluYXRlcyIsImluZGV4ZXMiLCJkZWZhdWx0SW1hZ2VOYW1lIiwiZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyIsIlRleHR1cmVkUXVhZHJhbmdsZSIsInByb3BlcnRpZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJ0ZXh0dXJlZFF1YWRyYW5nbGUiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFFckQsSUFBTUEsV0FBVyxHQUFHLENBRVosQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FGWSxFQUdaLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBSFksRUFJWixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUpZLEVBS1osQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FMWSxDQUFwQjtBQUFBLElBUU1DLE9BQU8sR0FBRyxDQUVSLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRlEsRUFHUixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUhRLENBUmhCO0FBQUEsSUFjTUMsZ0JBQWdCLEdBQUcsYUFkekI7QUFBQSxJQWVNQyx5QkFBeUIsR0FBRyxDQUUxQixDQUFFLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBRixFQUFZLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBWixFQUFzQixDQUFFLENBQUYsRUFBSyxDQUFMLENBQXRCLENBRjBCLEVBRzFCLENBQUUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxDQUFGLEVBQVksQ0FBRSxDQUFGLEVBQUssQ0FBTCxDQUFaLEVBQXNCLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBdEIsQ0FIMEIsQ0FmbEM7O0lBc0JxQkMsa0I7Ozs7Ozs7Ozs7O21DQUNHQyxVLEVBQVk7QUFBQSxrQ0FDeURBLFVBRHpELENBQ3hCQyxTQUR3QjtBQUFBLFVBQ3hCQSxTQUR3QixzQ0FDWkosZ0JBRFk7QUFBQSxrQ0FDeURHLFVBRHpELENBQ01FLGtCQUROO0FBQUEsVUFDTUEsa0JBRE4sc0NBQzJCSix5QkFEM0I7QUFBQSxVQUUxQkssa0JBRjBCLEdBRUxDLDZCQUFzQkMsY0FBdEIsQ0FBcUNOLGtCQUFyQyxFQUF5REMsVUFBekQsRUFBcUVMLFdBQXJFLEVBQWtGQyxPQUFsRixFQUEyRkssU0FBM0YsRUFBc0dDLGtCQUF0RyxDQUZLOztBQUloQyxhQUFPQyxrQkFBUDtBQUNEOzs7O0VBTjZDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICBbIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLCAxLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgWyAzLCAyLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJwbGFzdGVyLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDIsIDAgXSwgWyAyLCAyIF0gXSxcbiAgICAgICAgWyBbIDIsIDIgXSwgWyAwLCAyIF0sIFsgMCwgMCBdIF0sXG5cbiAgICAgIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkUXVhZHJhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkUXVhZHJhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFF1YWRyYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRRdWFkcmFuZ2xlO1xuICB9XG59XG4iXX0=