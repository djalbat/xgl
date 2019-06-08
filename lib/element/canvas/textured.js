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
    key: 'render',
    value: function render(colourRenderer, textureRenderer) {
      var facets = this.getFacets();

      textureRenderer.addFacets(facets);

      _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'render', this).call(this, colourRenderer, textureRenderer);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        remainingArguments[_key - 6] = arguments[_key];
      }

      var texturedCanvasElement = CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, facets].concat(remainingArguments)),
          indexTuples = indexes,
          ///
      facets = indexTuples.map(function (indexTuple, index) {
        var coordinateTuples = coordinates,
            ///
        vertexTextureCoordinateTuples = textureCoordinates[index],
            ///
        texturedFacet = TexturedFacet.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, imageName),
            facet = texturedFacet; ///

        return facet;
      });

      texturedCanvasElement.setFacets(facets);

      return texturedCanvasElement;
    }
  }]);

  return TexturedCanvasElement;
}(CanvasElement);

module.exports = TexturedCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJUZXh0dXJlZEZhY2V0IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImZhY2V0cyIsImdldEZhY2V0cyIsImFkZEZhY2V0cyIsIkNsYXNzIiwicHJvcGVydGllcyIsImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInRleHR1cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwiaW5kZXhUdXBsZXMiLCJtYXAiLCJpbmRleFR1cGxlIiwiaW5kZXgiLCJjb29yZGluYXRlVHVwbGVzIiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJ0ZXh0dXJlZEZhY2V0IiwiZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlQW5kSW1hZ2VOYW1lIiwiZmFjZXQiLCJzZXRGYWNldHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLGdDQUFSLENBQXRCO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLHNCQUFSLENBRHRCOztJQUdNRSxxQjs7Ozs7Ozs7Ozs7MkJBQ0dDLGMsRUFBZ0JDLGUsRUFBaUI7QUFDdEMsVUFBTUMsU0FBUyxLQUFLQyxTQUFMLEVBQWY7O0FBRUFGLHNCQUFnQkcsU0FBaEIsQ0FBMEJGLE1BQTFCOztBQUVBLDJJQUFhRixjQUFiLEVBQTZCQyxlQUE3QjtBQUNEOzs7bUNBRXFCSSxLLEVBQU9DLFUsRUFBWUMsVyxFQUFhQyxPLEVBQVNDLFMsRUFBV0Msa0IsRUFBMkM7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQ25ILFVBQU1DLHdCQUF3QmQsY0FBY2UsY0FBZCx1QkFBNkJSLEtBQTdCLEVBQW9DQyxVQUFwQyxFQUFnREosTUFBaEQsU0FBMkRTLGtCQUEzRCxFQUE5QjtBQUFBLFVBQ01HLGNBQWNOLE9BRHBCO0FBQUEsVUFDOEI7QUFDeEJOLGVBQVNZLFlBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsVUFBRCxFQUFhQyxLQUFiLEVBQXVCO0FBQzlDLFlBQU1DLG1CQUFtQlgsV0FBekI7QUFBQSxZQUFzQztBQUNoQ1ksd0NBQWdDVCxtQkFBbUJPLEtBQW5CLENBRHRDO0FBQUEsWUFDaUU7QUFDM0RHLHdCQUFnQnhCLGNBQWN5QixrRUFBZCxDQUFpRkYsNkJBQWpGLEVBQWdIRCxnQkFBaEgsRUFBa0lGLFVBQWxJLEVBQThJUCxTQUE5SSxDQUZ0QjtBQUFBLFlBR01hLFFBQVFGLGFBSGQsQ0FEOEMsQ0FJaEI7O0FBRTlCLGVBQU9FLEtBQVA7QUFDRCxPQVBRLENBRmY7O0FBV0FWLDRCQUFzQlcsU0FBdEIsQ0FBZ0NyQixNQUFoQzs7QUFFQSxhQUFPVSxxQkFBUDtBQUNEOzs7O0VBeEJpQ2QsYTs7QUEyQnBDMEIsT0FBT0MsT0FBUCxHQUFpQjFCLHFCQUFqQiIsImZpbGUiOiJ0ZXh0dXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGV4dHVyZWRGYWNldCA9IHJlcXVpcmUoJy4uLy4uL3ByaW1pdGl2ZS9mYWNldC90ZXh0dXJlZCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICByZW5kZXIoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCk7XG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5yZW5kZXIoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGV4dHVyZWRDYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgZmFjZXRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGluZGV4VHVwbGVzID0gaW5kZXhlcywgIC8vL1xuICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLm1hcCgoaW5kZXhUdXBsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZXMgPSBjb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlc1tpbmRleF0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldCA9IFRleHR1cmVkRmFjZXQuZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlQW5kSW1hZ2VOYW1lKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBpbWFnZU5hbWUpLFxuICAgICAgICAgICAgICAgICAgZmFjZXQgPSB0ZXh0dXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBmYWNldDtcbiAgICAgICAgICB9KTtcblxuICAgIHRleHR1cmVkQ2FudmFzRWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4iXX0=