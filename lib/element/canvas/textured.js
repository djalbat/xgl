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

  function TexturedCanvasElement(transform, facets, mask, hidden, coordinates, indexes, imageName, textureCoordinates) {
    _classCallCheck(this, TexturedCanvasElement);

    var _this = _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).call(this, transform, facets, mask, hidden));

    _this.coordinates = coordinates;

    _this.indexes = indexes;

    _this.imageName = imageName;

    _this.textureCoordinates = textureCoordinates;
    return _this;
  }

  _createClass(TexturedCanvasElement, [{
    key: 'createFacets',
    value: function createFacets(hidden) {
      var _this2 = this;

      hidden = _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'createFacets', this).call(this, hidden); ///

      if (!hidden) {
        var indexTuples = this.indexes,
            ///
        facets = indexTuples.map(function (indexTuple, index) {
          var vertexTextureCoordinateTuples = _this2.textureCoordinates[index],
              ///
          coordinateTuples = _this2.coordinates,
              ///
          texturedFacet = TexturedFacet.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, _this2.imageName),
              facet = texturedFacet; ///

          return facet;
        });

        this.setFacets(facets);
      }
    }
  }, {
    key: 'addFacets',
    value: function addFacets(colourRenderer, textureRenderer) {
      var facets = this.getFacets();

      textureRenderer.addFacets(facets);

      _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'addFacets', this).call(this, colourRenderer, textureRenderer);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        remainingArguments[_key - 6] = arguments[_key];
      }

      return CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, coordinates, indexes, imageName, textureCoordinates].concat(remainingArguments));
    }
  }]);

  return TexturedCanvasElement;
}(CanvasElement);

module.exports = TexturedCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJUZXh0dXJlZEZhY2V0IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJ0cmFuc2Zvcm0iLCJmYWNldHMiLCJtYXNrIiwiaGlkZGVuIiwiY29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiaW1hZ2VOYW1lIiwidGV4dHVyZUNvb3JkaW5hdGVzIiwiaW5kZXhUdXBsZXMiLCJtYXAiLCJpbmRleFR1cGxlIiwiaW5kZXgiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImNvb3JkaW5hdGVUdXBsZXMiLCJ0ZXh0dXJlZEZhY2V0IiwiZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlQW5kSW1hZ2VOYW1lIiwiZmFjZXQiLCJzZXRGYWNldHMiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImdldEZhY2V0cyIsImFkZEZhY2V0cyIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxnQ0FBUixDQUF0QjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxzQkFBUixDQUR0Qjs7SUFHTUUscUI7OztBQUNKLGlDQUFZQyxTQUFaLEVBQXVCQyxNQUF2QixFQUErQkMsSUFBL0IsRUFBcUNDLE1BQXJDLEVBQTZDQyxXQUE3QyxFQUEwREMsT0FBMUQsRUFBbUVDLFNBQW5FLEVBQThFQyxrQkFBOUUsRUFBa0c7QUFBQTs7QUFBQSw4SUFDMUZQLFNBRDBGLEVBQy9FQyxNQUQrRSxFQUN2RUMsSUFEdUUsRUFDakVDLE1BRGlFOztBQUdoRyxVQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjs7QUFFQSxVQUFLQyxPQUFMLEdBQWVBLE9BQWY7O0FBRUEsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7O0FBRUEsVUFBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjtBQVRnRztBQVVqRzs7OztpQ0FFWUosTSxFQUFRO0FBQUE7O0FBQ25CQSwwSkFBNEJBLE1BQTVCLEVBRG1CLENBQ21COztBQUV0QyxVQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNYLFlBQU1LLGNBQWMsS0FBS0gsT0FBekI7QUFBQSxZQUFtQztBQUM3QkosaUJBQVNPLFlBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsVUFBRCxFQUFhQyxLQUFiLEVBQXVCO0FBQzlDLGNBQU1DLGdDQUFnQyxPQUFLTCxrQkFBTCxDQUF3QkksS0FBeEIsQ0FBdEM7QUFBQSxjQUFzRTtBQUNoRUUsNkJBQW1CLE9BQUtULFdBRDlCO0FBQUEsY0FDMkM7QUFDckNVLDBCQUFnQmxCLGNBQWNtQixrRUFBZCxDQUFpRkgsNkJBQWpGLEVBQWdIQyxnQkFBaEgsRUFBa0lILFVBQWxJLEVBQThJLE9BQUtKLFNBQW5KLENBRnRCO0FBQUEsY0FHTVUsUUFBUUYsYUFIZCxDQUQ4QyxDQUloQjs7QUFFOUIsaUJBQU9FLEtBQVA7QUFDRCxTQVBRLENBRGY7O0FBVUEsYUFBS0MsU0FBTCxDQUFlaEIsTUFBZjtBQUNEO0FBQ0Y7Ozs4QkFFU2lCLGMsRUFBZ0JDLGUsRUFBaUI7QUFDekMsVUFBTWxCLFNBQVMsS0FBS21CLFNBQUwsRUFBZjs7QUFFQUQsc0JBQWdCRSxTQUFoQixDQUEwQnBCLE1BQTFCOztBQUVBLDhJQUFnQmlCLGNBQWhCLEVBQWdDQyxlQUFoQztBQUNEOzs7bUNBRXFCRyxLLEVBQU9DLFUsRUFBWW5CLFcsRUFBYUMsTyxFQUFTQyxTLEVBQVdDLGtCLEVBQTJDO0FBQUEsd0NBQXBCaUIsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFBRSxhQUFPMUIsY0FBYzJCLGNBQWQsdUJBQTZCSCxLQUE3QixFQUFvQ0MsVUFBcEMsRUFBZ0RuQixXQUFoRCxFQUE2REMsT0FBN0QsRUFBc0VDLFNBQXRFLEVBQWlGQyxrQkFBakYsU0FBd0dpQixrQkFBeEcsRUFBUDtBQUFxSTs7OztFQXZDMU4xQixhOztBQTBDcEM0QixPQUFPQyxPQUFQLEdBQWlCNUIscUJBQWpCIiwiZmlsZSI6InRleHR1cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXh0dXJlZEZhY2V0ID0gcmVxdWlyZSgnLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkJyksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKTtcblxuY2xhc3MgVGV4dHVyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4sIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcykge1xuICAgIHN1cGVyKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuXG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBjcmVhdGVGYWNldHMoaGlkZGVuKSB7XG4gICAgaGlkZGVuID0gc3VwZXIuY3JlYXRlRmFjZXRzKGhpZGRlbik7ICAvLy9cblxuICAgIGlmICghaGlkZGVuKSB7XG4gICAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMubWFwKChpbmRleFR1cGxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzW2luZGV4XSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldCA9IFRleHR1cmVkRmFjZXQuZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlQW5kSW1hZ2VOYW1lKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmltYWdlTmFtZSksXG4gICAgICAgICAgICAgICAgICAgIGZhY2V0ID0gdGV4dHVyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBmYWNldDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRGYWNldHMoZmFjZXRzKTtcblxuICAgIHN1cGVyLmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkQ2FudmFzRWxlbWVudDtcbiJdfQ==