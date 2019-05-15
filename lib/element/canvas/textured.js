'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TexturedFacet = require('../../primitive/facet/textured'),
    CanvasElement = require('../../element/canvas'),
    arrayUtilities = require('../../utilities/array');

var push = arrayUtilities.push;

var TexturedCanvasElement = function (_CanvasElement) {
  _inherits(TexturedCanvasElement, _CanvasElement);

  function TexturedCanvasElement() {
    _classCallCheck(this, TexturedCanvasElement);

    return _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).apply(this, arguments));
  }

  _createClass(TexturedCanvasElement, [{
    key: 'render',
    value: function render(colourRenderer, textureRenderer) {
      var imageMapJSON = textureRenderer.getImageMapJSON(),
          vertexIndexes = this.getVertexIndexes(),
          vertexNormals = this.getVertexNormals(),
          vertexPositions = this.getVertexPositions(),
          vertexTextureCoordinatesTuples = this.getVertexTextureCoordinatesTuples(imageMapJSON);

      textureRenderer.addVertexPositions(vertexPositions);

      textureRenderer.addVertexIndexes(vertexIndexes);

      textureRenderer.addVertexNormals(vertexNormals);

      textureRenderer.addVertexTextureCoordinates(vertexTextureCoordinatesTuples);

      _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'render', this).call(this, colourRenderer, textureRenderer);
    }
  }, {
    key: 'getVertexTextureCoordinatesTuples',
    value: function getVertexTextureCoordinatesTuples(imageMapJSON) {
      var facets = this.getFacets(),
          vertexTextureCoordinatesTuples = facets.reduce(function (vertexTextureCoordinatesTuples, facet) {
        var texturedFacet = facet,
            ///
        texturedFacetVertexTextureCoordinatesTuples = texturedFacet.getVertexTextureCoordinatesTuple(imageMapJSON);

        push(vertexTextureCoordinatesTuples, texturedFacetVertexTextureCoordinatesTuples);

        return vertexTextureCoordinatesTuples;
      }, []);

      return vertexTextureCoordinatesTuples;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        remainingArguments[_key - 6] = arguments[_key];
      }

      var indexTuples = indexes,
          ///
      coordinateTuples = coordinates,
          ///
      textureCoordinatesTuples = textureCoordinates,
          ///
      texturedFacets = indexTuples.map(function (indexTuple, index) {
        var textureCoordinatesTuple = textureCoordinatesTuples[index],
            texturedFacet = TexturedFacet.fromTextureCoordinateTupleCoordinatesTuplesIndexTupleAndImageName(textureCoordinatesTuple, coordinateTuples, indexTuple, imageName);

        return texturedFacet;
      }),
          facets = texturedFacets,
          ///
      texturedCanvasElement = CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, facets].concat(remainingArguments));

      return texturedCanvasElement;
    }
  }]);

  return TexturedCanvasElement;
}(CanvasElement);

module.exports = TexturedCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJUZXh0dXJlZEZhY2V0IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImltYWdlTWFwSlNPTiIsImdldEltYWdlTWFwSlNPTiIsInZlcnRleEluZGV4ZXMiLCJnZXRWZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsImdldFZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZXMiLCJnZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZXMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlcyIsImZhY2V0cyIsImdldEZhY2V0cyIsInJlZHVjZSIsImZhY2V0IiwidGV4dHVyZWRGYWNldCIsInRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZXMiLCJnZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZSIsIkNsYXNzIiwicHJvcGVydGllcyIsImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImluZGV4VHVwbGVzIiwiY29vcmRpbmF0ZVR1cGxlcyIsInRleHR1cmVDb29yZGluYXRlc1R1cGxlcyIsInRleHR1cmVkRmFjZXRzIiwibWFwIiwiaW5kZXhUdXBsZSIsImluZGV4IiwidGV4dHVyZUNvb3JkaW5hdGVzVHVwbGUiLCJmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZUNvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUFuZEltYWdlTmFtZSIsInRleHR1cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxnQ0FBUixDQUF0QjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxzQkFBUixDQUR0QjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSx1QkFBUixDQUZ2Qjs7SUFJUUcsSSxHQUFTRCxjLENBQVRDLEk7O0lBRUZDLHFCOzs7Ozs7Ozs7OzsyQkFDR0MsYyxFQUFnQkMsZSxFQUFpQjtBQUN0QyxVQUFNQyxlQUFlRCxnQkFBZ0JFLGVBQWhCLEVBQXJCO0FBQUEsVUFDQ0MsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBRGpCO0FBQUEsVUFFTUMsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBRnRCO0FBQUEsVUFHTUMsa0JBQWtCLEtBQUtDLGtCQUFMLEVBSHhCO0FBQUEsVUFJTUMsaUNBQWlDLEtBQUtDLGlDQUFMLENBQXVDVCxZQUF2QyxDQUp2Qzs7QUFNQUQsc0JBQWdCVyxrQkFBaEIsQ0FBbUNKLGVBQW5DOztBQUVBUCxzQkFBZ0JZLGdCQUFoQixDQUFpQ1QsYUFBakM7O0FBRUFILHNCQUFnQmEsZ0JBQWhCLENBQWlDUixhQUFqQzs7QUFFQUwsc0JBQWdCYywyQkFBaEIsQ0FBNENMLDhCQUE1Qzs7QUFFQSwySUFBYVYsY0FBYixFQUE2QkMsZUFBN0I7QUFDRDs7O3NEQUVpQ0MsWSxFQUFjO0FBQzlDLFVBQU1jLFNBQVMsS0FBS0MsU0FBTCxFQUFmO0FBQUEsVUFDTVAsaUNBQWlDTSxPQUFPRSxNQUFQLENBQWMsVUFBQ1IsOEJBQUQsRUFBaUNTLEtBQWpDLEVBQTJDO0FBQ3hGLFlBQU1DLGdCQUFnQkQsS0FBdEI7QUFBQSxZQUE4QjtBQUN4QkUsc0RBQThDRCxjQUFjRSxnQ0FBZCxDQUErQ3BCLFlBQS9DLENBRHBEOztBQUdBSixhQUFLWSw4QkFBTCxFQUFxQ1csMkNBQXJDOztBQUVBLGVBQU9YLDhCQUFQO0FBQ0QsT0FQZ0MsRUFPOUIsRUFQOEIsQ0FEdkM7O0FBVUEsYUFBT0EsOEJBQVA7QUFDRDs7O21DQUVxQmEsSyxFQUFPQyxVLEVBQVlDLFcsRUFBYUMsTyxFQUFTQyxTLEVBQVdDLGtCLEVBQTJDO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUNuSCxVQUFNQyxjQUFjSixPQUFwQjtBQUFBLFVBQThCO0FBQ3hCSyx5QkFBbUJOLFdBRHpCO0FBQUEsVUFDc0M7QUFDaENPLGlDQUEyQkosa0JBRmpDO0FBQUEsVUFFcUQ7QUFDL0NLLHVCQUFpQkgsWUFBWUksR0FBWixDQUFnQixVQUFDQyxVQUFELEVBQWFDLEtBQWIsRUFBdUI7QUFDdEQsWUFBTUMsMEJBQTBCTCx5QkFBeUJJLEtBQXpCLENBQWhDO0FBQUEsWUFDTWhCLGdCQUFnQjFCLGNBQWM0QyxpRUFBZCxDQUFnRkQsdUJBQWhGLEVBQXlHTixnQkFBekcsRUFBMkhJLFVBQTNILEVBQXVJUixTQUF2SSxDQUR0Qjs7QUFHQSxlQUFPUCxhQUFQO0FBQ0QsT0FMZ0IsQ0FIdkI7QUFBQSxVQVNNSixTQUFTaUIsY0FUZjtBQUFBLFVBU2dDO0FBQzFCTSw4QkFBd0IzQyxjQUFjNEMsY0FBZCx1QkFBNkJqQixLQUE3QixFQUFvQ0MsVUFBcEMsRUFBZ0RSLE1BQWhELFNBQTJEYSxrQkFBM0QsRUFWOUI7O0FBWUEsYUFBT1UscUJBQVA7QUFDRDs7OztFQS9DaUMzQyxhOztBQWtEcEM2QyxPQUFPQyxPQUFQLEdBQWlCM0MscUJBQWpCIiwiZmlsZSI6InRleHR1cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXh0dXJlZEZhY2V0ID0gcmVxdWlyZSgnLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkJyksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICByZW5kZXIoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGltYWdlTWFwSlNPTiA9IHRleHR1cmVSZW5kZXJlci5nZXRJbWFnZU1hcEpTT04oKSxcblx0XHRcdFx0XHR2ZXJ0ZXhJbmRleGVzID0gdGhpcy5nZXRWZXJ0ZXhJbmRleGVzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzVHVwbGVzID0gdGhpcy5nZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZXMoaW1hZ2VNYXBKU09OKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlc1R1cGxlcyk7XG5cbiAgICBzdXBlci5yZW5kZXIoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBnZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZXMoaW1hZ2VNYXBKU09OKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZXMgPSBmYWNldHMucmVkdWNlKCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZXMsIGZhY2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0LmdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc1R1cGxlKGltYWdlTWFwSlNPTik7XG4gIFxuICAgICAgICAgICAgcHVzaCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZXMpO1xuICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleFRleHR1cmVDb29yZGluYXRlc1R1cGxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBpbmRleFR1cGxlcyA9IGluZGV4ZXMsICAvLy9cbiAgICAgICAgICBjb29yZGluYXRlVHVwbGVzID0gY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlc1R1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgdGV4dHVyZWRGYWNldHMgPSBpbmRleFR1cGxlcy5tYXAoKGluZGV4VHVwbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZSA9IHRleHR1cmVDb29yZGluYXRlc1R1cGxlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gVGV4dHVyZWRGYWNldC5mcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZUNvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUFuZEltYWdlTmFtZSh0ZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZSwgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgaW1hZ2VOYW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmFjZXRzID0gdGV4dHVyZWRGYWNldHMsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlZENhbnZhc0VsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBmYWNldHMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVkQ2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkQ2FudmFzRWxlbWVudDtcbiJdfQ==