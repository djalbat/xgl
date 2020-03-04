'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AttributeLocations = require('../../locations/attribute'),
    vertexShaderSource = require('../../source/texture/vertexShader');

var textureCoordinateAttributeName = vertexShaderSource.textureCoordinateAttributeName;

var TextureAttributeLocations = /*#__PURE__*/function (_AttributeLocations) {
  _inherits(TextureAttributeLocations, _AttributeLocations);

  function TextureAttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation, textureCoordinateAttributeLocation) {
    var _this;

    _classCallCheck(this, TextureAttributeLocations);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextureAttributeLocations).call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation));
    _this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
    return _this;
  }

  _createClass(TextureAttributeLocations, [{
    key: "getTextureCoordinateAttributeLocation",
    value: function getTextureCoordinateAttributeLocation() {
      return this.textureCoordinateAttributeLocation;
    }
  }], [{
    key: "fromProgram",
    value: function fromProgram(program, canvas) {
      var textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName),
          textureAttributeLocations = AttributeLocations.fromProgram(TextureAttributeLocations, program, canvas, textureCoordinateAttributeLocation);
      return textureAttributeLocations;
    }
  }]);

  return TextureAttributeLocations;
}(AttributeLocations);

module.exports = TextureAttributeLocations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS5qcyJdLCJuYW1lcyI6WyJBdHRyaWJ1dGVMb2NhdGlvbnMiLCJyZXF1aXJlIiwidmVydGV4U2hhZGVyU291cmNlIiwidGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIiwiVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJwcm9ncmFtIiwiY2FudmFzIiwiZ2V0QXR0cmlidXRlTG9jYXRpb24iLCJ0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIiwiZnJvbVByb2dyYW0iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0MsT0FBTyxDQUFDLDJCQUFELENBQWxDO0FBQUEsSUFDTUMsa0JBQWtCLEdBQUdELE9BQU8sQ0FBQyxtQ0FBRCxDQURsQzs7SUFHUUUsOEIsR0FBbUNELGtCLENBQW5DQyw4Qjs7SUFFRkMseUI7OztBQUNKLHFDQUFZQywrQkFBWixFQUE2Q0MsNkJBQTdDLEVBQTRFQyxrQ0FBNUUsRUFBZ0g7QUFBQTs7QUFBQTs7QUFDOUcsbUdBQU1GLCtCQUFOLEVBQXVDQyw2QkFBdkM7QUFFQSxVQUFLQyxrQ0FBTCxHQUEwQ0Esa0NBQTFDO0FBSDhHO0FBSS9HOzs7OzREQUV1QztBQUN0QyxhQUFPLEtBQUtBLGtDQUFaO0FBQ0Q7OztnQ0FFa0JDLE8sRUFBU0MsTSxFQUFRO0FBQ2xDLFVBQU1GLGtDQUFrQyxHQUFHRSxNQUFNLENBQUNDLG9CQUFQLENBQTRCRixPQUE1QixFQUFxQ0wsOEJBQXJDLENBQTNDO0FBQUEsVUFDTVEseUJBQXlCLEdBQUdYLGtCQUFrQixDQUFDWSxXQUFuQixDQUErQlIseUJBQS9CLEVBQTBESSxPQUExRCxFQUFtRUMsTUFBbkUsRUFBMkVGLGtDQUEzRSxDQURsQztBQUdBLGFBQU9JLHlCQUFQO0FBQ0Q7Ozs7RUFoQnFDWCxrQjs7QUFtQnhDYSxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLHlCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi4vLi4vbG9jYXRpb25zL2F0dHJpYnV0ZScpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyJyk7XG5cbmNvbnN0IHsgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIH0gPSB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG5cbmNsYXNzIFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgZXh0ZW5kcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IEF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zO1xuICB9ICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zO1xuIl19