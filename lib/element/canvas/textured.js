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
      var imageJSON = textureRenderer.getImageJSON(),
          vertexIndexes = this.getVertexIndexes(),
          vertexNormals = this.getVertexNormals(),
          vertexPositions = this.getVertexPositions(),
          vertexTextureCoordinates = this.getVertexTextureCoordinates(imageJSON);

      textureRenderer.addVertexPositions(vertexPositions);

      textureRenderer.addVertexIndexes(vertexIndexes);

      textureRenderer.addVertexNormals(vertexNormals);

      textureRenderer.addVertexTextureCoordinates(vertexTextureCoordinates);

      _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'render', this).call(this, colourRenderer, textureRenderer);
    }
  }, {
    key: 'getVertexTextureCoordinates',
    value: function getVertexTextureCoordinates(imageJSON) {
      var facets = this.getFacets(),
          vertexTextureCoordinates = facets.reduce(function (vertexTextureCoordinates, facet) {
        var texturedFacet = facet,
            ///
        texturedFacetVertexTextureCoordinates = texturedFacet.getVertexTextureCoordinates(imageJSON);

        push(vertexTextureCoordinates, texturedFacetVertexTextureCoordinates);

        return vertexTextureCoordinates;
      }, []);

      return vertexTextureCoordinates;
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
      textureCoordinateTuples = textureCoordinates,
          ///
      texturedFacets = indexTuples.map(function (indexTuple, index) {
        var textureCoordinateTuple = textureCoordinateTuples[index],
            texturedFacet = TexturedFacet.fromTextureCoordinateTupleCoordinateTuplesIndexTupleAndImageName(textureCoordinateTuple, coordinateTuples, indexTuple, imageName);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJUZXh0dXJlZEZhY2V0IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImltYWdlSlNPTiIsImdldEltYWdlSlNPTiIsInZlcnRleEluZGV4ZXMiLCJnZXRWZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsImdldFZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMiLCJnZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlcyIsImZhY2V0cyIsImdldEZhY2V0cyIsInJlZHVjZSIsImZhY2V0IiwidGV4dHVyZWRGYWNldCIsInRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJjb29yZGluYXRlcyIsImluZGV4ZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJpbmRleFR1cGxlcyIsImNvb3JkaW5hdGVUdXBsZXMiLCJ0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsInRleHR1cmVkRmFjZXRzIiwibWFwIiwiaW5kZXhUdXBsZSIsImluZGV4IiwidGV4dHVyZUNvb3JkaW5hdGVUdXBsZSIsImZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVBbmRJbWFnZU5hbWUiLCJ0ZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsZ0NBQVIsQ0FBdEI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsc0JBQVIsQ0FEdEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsdUJBQVIsQ0FGdkI7O0lBSVFHLEksR0FBU0QsYyxDQUFUQyxJOztJQUVGQyxxQjs7Ozs7Ozs7Ozs7MkJBQ0dDLGMsRUFBZ0JDLGUsRUFBaUI7QUFDdEMsVUFBTUMsWUFBWUQsZ0JBQWdCRSxZQUFoQixFQUFsQjtBQUFBLFVBQ0NDLGdCQUFnQixLQUFLQyxnQkFBTCxFQURqQjtBQUFBLFVBRU1DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUZ0QjtBQUFBLFVBR01DLGtCQUFrQixLQUFLQyxrQkFBTCxFQUh4QjtBQUFBLFVBSU1DLDJCQUEyQixLQUFLQywyQkFBTCxDQUFpQ1QsU0FBakMsQ0FKakM7O0FBTUFELHNCQUFnQlcsa0JBQWhCLENBQW1DSixlQUFuQzs7QUFFQVAsc0JBQWdCWSxnQkFBaEIsQ0FBaUNULGFBQWpDOztBQUVBSCxzQkFBZ0JhLGdCQUFoQixDQUFpQ1IsYUFBakM7O0FBRUFMLHNCQUFnQmMsMkJBQWhCLENBQTRDTCx3QkFBNUM7O0FBRUEsMklBQWFWLGNBQWIsRUFBNkJDLGVBQTdCO0FBQ0Q7OztnREFFMkJDLFMsRUFBVztBQUNyQyxVQUFNYyxTQUFTLEtBQUtDLFNBQUwsRUFBZjtBQUFBLFVBQ01QLDJCQUEyQk0sT0FBT0UsTUFBUCxDQUFjLFVBQUNSLHdCQUFELEVBQTJCUyxLQUEzQixFQUFxQztBQUM1RSxZQUFNQyxnQkFBZ0JELEtBQXRCO0FBQUEsWUFBOEI7QUFDeEJFLGdEQUF3Q0QsY0FBY1QsMkJBQWQsQ0FBMENULFNBQTFDLENBRDlDOztBQUdBSixhQUFLWSx3QkFBTCxFQUErQlcscUNBQS9COztBQUVBLGVBQU9YLHdCQUFQO0FBQ0QsT0FQMEIsRUFPeEIsRUFQd0IsQ0FEakM7O0FBVUEsYUFBT0Esd0JBQVA7QUFDRDs7O21DQUVxQlksSyxFQUFPQyxVLEVBQVlDLFcsRUFBYUMsTyxFQUFTQyxTLEVBQVdDLGtCLEVBQTJDO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUNuSCxVQUFNQyxjQUFjSixPQUFwQjtBQUFBLFVBQThCO0FBQ3hCSyx5QkFBbUJOLFdBRHpCO0FBQUEsVUFDc0M7QUFDaENPLGdDQUEwQkosa0JBRmhDO0FBQUEsVUFFb0Q7QUFDOUNLLHVCQUFpQkgsWUFBWUksR0FBWixDQUFnQixVQUFDQyxVQUFELEVBQWFDLEtBQWIsRUFBdUI7QUFDdEQsWUFBTUMseUJBQXlCTCx3QkFBd0JJLEtBQXhCLENBQS9CO0FBQUEsWUFDTWYsZ0JBQWdCMUIsY0FBYzJDLGdFQUFkLENBQStFRCxzQkFBL0UsRUFBdUdOLGdCQUF2RyxFQUF5SEksVUFBekgsRUFBcUlSLFNBQXJJLENBRHRCOztBQUdBLGVBQU9OLGFBQVA7QUFDRCxPQUxnQixDQUh2QjtBQUFBLFVBU01KLFNBQVNnQixjQVRmO0FBQUEsVUFTZ0M7QUFDMUJNLDhCQUF3QjFDLGNBQWMyQyxjQUFkLHVCQUE2QmpCLEtBQTdCLEVBQW9DQyxVQUFwQyxFQUFnRFAsTUFBaEQsU0FBMkRZLGtCQUEzRCxFQVY5Qjs7QUFZQSxhQUFPVSxxQkFBUDtBQUNEOzs7O0VBL0NpQzFDLGE7O0FBa0RwQzRDLE9BQU9DLE9BQVAsR0FBaUIxQyxxQkFBakIiLCJmaWxlIjoidGV4dHVyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkRmFjZXQgPSByZXF1aXJlKCcuLi8uLi9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgVGV4dHVyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIHJlbmRlcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgaW1hZ2VKU09OID0gdGV4dHVyZVJlbmRlcmVyLmdldEltYWdlSlNPTigpLFxuXHRcdFx0XHRcdHZlcnRleEluZGV4ZXMgPSB0aGlzLmdldFZlcnRleEluZGV4ZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMgPSB0aGlzLmdldFZlcnRleFRleHR1cmVDb29yZGluYXRlcyhpbWFnZUpTT04pO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHN1cGVyLnJlbmRlcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgfVxuXG4gIGdldFZlcnRleFRleHR1cmVDb29yZGluYXRlcyhpbWFnZUpTT04pIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlcyA9IGZhY2V0cy5yZWR1Y2UoKHZlcnRleFRleHR1cmVDb29yZGluYXRlcywgZmFjZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKGltYWdlSlNPTik7XG4gIFxuICAgICAgICAgICAgcHVzaCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMpO1xuICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleFRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBpbmRleFR1cGxlcyA9IGluZGV4ZXMsICAvLy9cbiAgICAgICAgICBjb29yZGluYXRlVHVwbGVzID0gY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0cyA9IGluZGV4VHVwbGVzLm1hcCgoaW5kZXhUdXBsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlVHVwbGUgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gVGV4dHVyZWRGYWNldC5mcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQW5kSW1hZ2VOYW1lKHRleHR1cmVDb29yZGluYXRlVHVwbGUsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGltYWdlTmFtZSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZhY2V0cyA9IHRleHR1cmVkRmFjZXRzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRDYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgZmFjZXRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4iXX0=