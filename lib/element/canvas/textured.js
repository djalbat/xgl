'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TexturedFacet = require('../../primitive/facet/textured'),
    CanvasElement = require('../../element/canvas');

var TexturedCanvasElement = function (_CanvasElement) {
  _inherits(TexturedCanvasElement, _CanvasElement);

  function TexturedCanvasElement() {
    _classCallCheck(this, TexturedCanvasElement);

    return _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).apply(this, arguments));
  }

  _createClass(TexturedCanvasElement, [{
    key: 'initialise',
    value: function initialise(colourRenderer, textureRenderer) {
      var facets = this.getFacets();

      textureRenderer.addFacets(facets);

      _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'initialise', this).call(this, colourRenderer, textureRenderer);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        remainingArguments[_key - 6] = arguments[_key];
      }

      var texturedCanvasElement = CanvasElement.fromProperties.apply(CanvasElement, [Class, properties].concat(remainingArguments)),
          hidden = properties.hidden;


      if (!hidden) {
        var indexTuples = indexes,
            ///
        facets = indexTuples.map(function (indexTuple, index) {
          var vertexTextureCoordinateTuples = textureCoordinates[index],
              ///
          coordinateTuples = coordinates,
              ///
          texturedFacet = TexturedFacet.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, imageName),
              facet = texturedFacet; ///

          return facet;
        });

        texturedCanvasElement.setFacets(facets);
      }

      return texturedCanvasElement;
    }
  }]);

  return TexturedCanvasElement;
}(CanvasElement);

module.exports = TexturedCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJUZXh0dXJlZEZhY2V0IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImZhY2V0cyIsImdldEZhY2V0cyIsImFkZEZhY2V0cyIsIkNsYXNzIiwicHJvcGVydGllcyIsImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImZyb21Qcm9wZXJ0aWVzIiwiaGlkZGVuIiwiaW5kZXhUdXBsZXMiLCJtYXAiLCJpbmRleFR1cGxlIiwiaW5kZXgiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImNvb3JkaW5hdGVUdXBsZXMiLCJ0ZXh0dXJlZEZhY2V0IiwiZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlQW5kSW1hZ2VOYW1lIiwiZmFjZXQiLCJ0ZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJzZXRGYWNldHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLGdDQUFSLENBQXRCO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLHNCQUFSLENBRHRCOztJQUdNRSxxQjs7Ozs7Ozs7Ozs7K0JBQ09DLGMsRUFBZ0JDLGUsRUFBaUI7QUFDMUMsVUFBTUMsU0FBUyxLQUFLQyxTQUFMLEVBQWY7O0FBRUFGLHNCQUFnQkcsU0FBaEIsQ0FBMEJGLE1BQTFCOztBQUVBLCtJQUFpQkYsY0FBakIsRUFBaUNDLGVBQWpDO0FBQ0Q7OzttQ0FFcUJJLEssRUFBT0MsVSxFQUFZQyxXLEVBQWFDLE8sRUFBU0MsUyxFQUFXQyxrQixFQUEyQztBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFDN0csa0NBQXdCYixjQUFjYyxjQUFkLHVCQUE2QlAsS0FBN0IsRUFBb0NDLFVBQXBDLFNBQW1ESyxrQkFBbkQsRUFBeEI7QUFBQSxVQUNFRSxNQURGLEdBQ2FQLFVBRGIsQ0FDRU8sTUFERjs7O0FBR04sVUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDWCxZQUFNQyxjQUFjTixPQUFwQjtBQUFBLFlBQThCO0FBQ3hCTixpQkFBU1ksWUFBWUMsR0FBWixDQUFnQixVQUFDQyxVQUFELEVBQWFDLEtBQWIsRUFBdUI7QUFDOUMsY0FBTUMsZ0NBQWdDUixtQkFBbUJPLEtBQW5CLENBQXRDO0FBQUEsY0FBaUU7QUFDM0RFLDZCQUFtQlosV0FEekI7QUFBQSxjQUNzQztBQUNoQ2EsMEJBQWdCeEIsY0FBY3lCLGtFQUFkLENBQWlGSCw2QkFBakYsRUFBZ0hDLGdCQUFoSCxFQUFrSUgsVUFBbEksRUFBOElQLFNBQTlJLENBRnRCO0FBQUEsY0FHTWEsUUFBUUYsYUFIZCxDQUQ4QyxDQUloQjs7QUFFOUIsaUJBQU9FLEtBQVA7QUFDRCxTQVBRLENBRGY7O0FBVUFDLDhCQUFzQkMsU0FBdEIsQ0FBZ0N0QixNQUFoQztBQUNEOztBQUVELGFBQU9xQixxQkFBUDtBQUNEOzs7O0VBNUJpQ3pCLGE7O0FBK0JwQzJCLE9BQU9DLE9BQVAsR0FBaUIzQixxQkFBakIiLCJmaWxlIjoidGV4dHVyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkRmFjZXQgPSByZXF1aXJlKCcuLi8uLi9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgaW5pdGlhbGlzZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRGYWNldHMoZmFjZXRzKTtcblxuICAgIHN1cGVyLmluaXRpYWxpc2UoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGV4dHVyZWRDYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICB7IGhpZGRlbiB9ID0gcHJvcGVydGllcztcblxuICAgIGlmICghaGlkZGVuKSB7XG4gICAgICBjb25zdCBpbmRleFR1cGxlcyA9IGluZGV4ZXMsICAvLy9cbiAgICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLm1hcCgoaW5kZXhUdXBsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNbaW5kZXhdLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZVR1cGxlcyA9IGNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldCA9IFRleHR1cmVkRmFjZXQuZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlQW5kSW1hZ2VOYW1lKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBpbWFnZU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICBmYWNldCA9IHRleHR1cmVkRmFjZXQ7ICAvLy9cblxuICAgICAgICAgICAgICByZXR1cm4gZmFjZXQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgdGV4dHVyZWRDYW52YXNFbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4iXX0=