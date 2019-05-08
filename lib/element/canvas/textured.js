'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TexturedFacet = require('../../facet/textured'),
    CanvasElement = require('../../element/canvas'),
    arrayUtilities = require('../../utilities/array'),
    textureUtilities = require('../../utilities/texture');

var push = arrayUtilities.push,
    textureCoordinatesFromTextureCoordinatesAndIndex = textureUtilities.textureCoordinatesFromTextureCoordinatesAndIndex;

var TexturedCanvasElement = function (_CanvasElement) {
  _inherits(TexturedCanvasElement, _CanvasElement);

  function TexturedCanvasElement() {
    _classCallCheck(this, TexturedCanvasElement);

    return _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).apply(this, arguments));
  }

  _createClass(TexturedCanvasElement, [{
    key: 'render',
    value: function render(textureRenderer, colourRenderer) {
      var imageJSON = textureRenderer.getImageJSON(),
          vertexPositions = this.getVertexPositions(),
          vertexIndexes = this.getVertexIndexes(),
          vertexNormals = this.getVertexNormals(),
          vertexTextureCoordinates = this.getVertexTextureCoordinates(imageJSON);

      textureRenderer.addVertexPositions(vertexPositions);
      textureRenderer.addVertexIndexes(vertexIndexes);
      textureRenderer.addVertexNormals(vertexNormals);
      textureRenderer.addVertexTextureCoordinates(vertexTextureCoordinates);
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
    value: function fromProperties(Class, properties, vertexCoordinates, indexes, imageName, textureCoordinates) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        remainingArguments[_key - 6] = arguments[_key];
      }

      var textureCoordinatess = textureCoordinates,
          ///
      texturedFacets = indexes.map(function (indexes, index) {
        ///
        var textureCoordinates = textureCoordinatesFromTextureCoordinatesAndIndex(textureCoordinatess, index),
            ///
        texturedFacet = TexturedFacet.fromVertexCoordinatesImageNameAndTextureCoordinates(vertexCoordinates, indexes, imageName, textureCoordinates, index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJUZXh0dXJlZEZhY2V0IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJhcnJheVV0aWxpdGllcyIsInRleHR1cmVVdGlsaXRpZXMiLCJwdXNoIiwidGV4dHVyZUNvb3JkaW5hdGVzRnJvbVRleHR1cmVDb29yZGluYXRlc0FuZEluZGV4IiwiVGV4dHVyZWRDYW52YXNFbGVtZW50IiwidGV4dHVyZVJlbmRlcmVyIiwiY29sb3VyUmVuZGVyZXIiLCJpbWFnZUpTT04iLCJnZXRJbWFnZUpTT04iLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwiZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwiYWRkVmVydGV4UG9zaXRpb25zIiwiYWRkVmVydGV4SW5kZXhlcyIsImFkZFZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMiLCJmYWNldHMiLCJnZXRGYWNldHMiLCJyZWR1Y2UiLCJmYWNldCIsInRleHR1cmVkRmFjZXQiLCJ0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidmVydGV4Q29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiaW1hZ2VOYW1lIiwidGV4dHVyZUNvb3JkaW5hdGVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidGV4dHVyZUNvb3JkaW5hdGVzcyIsInRleHR1cmVkRmFjZXRzIiwibWFwIiwiaW5kZXgiLCJmcm9tVmVydGV4Q29vcmRpbmF0ZXNJbWFnZU5hbWVBbmRUZXh0dXJlQ29vcmRpbmF0ZXMiLCJ0ZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLHNCQUFSLENBQXRCO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLHNCQUFSLENBRHRCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLHVCQUFSLENBRnZCO0FBQUEsSUFHTUcsbUJBQW1CSCxRQUFRLHlCQUFSLENBSHpCOztBQUtNLElBQUVJLElBQUYsR0FBV0YsY0FBWCxDQUFFRSxJQUFGO0FBQUEsSUFDRUMsZ0RBREYsR0FDdURGLGdCQUR2RCxDQUNFRSxnREFERjs7SUFHQUMscUI7Ozs7Ozs7Ozs7OzJCQUNHQyxlLEVBQWlCQyxjLEVBQWdCO0FBQ3RDLFVBQU1DLFlBQVlGLGdCQUFnQkcsWUFBaEIsRUFBbEI7QUFBQSxVQUNDQyxrQkFBa0IsS0FBS0Msa0JBQUwsRUFEbkI7QUFBQSxVQUVNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFGdEI7QUFBQSxVQUdNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFIdEI7QUFBQSxVQUlDQywyQkFBMkIsS0FBS0MsMkJBQUwsQ0FBaUNULFNBQWpDLENBSjVCOztBQU1BRixzQkFBZ0JZLGtCQUFoQixDQUFtQ1IsZUFBbkM7QUFDQUosc0JBQWdCYSxnQkFBaEIsQ0FBaUNQLGFBQWpDO0FBQ0FOLHNCQUFnQmMsZ0JBQWhCLENBQWlDTixhQUFqQztBQUNBUixzQkFBZ0JlLDJCQUFoQixDQUE0Q0wsd0JBQTVDO0FBQ0Q7OztnREFFMkJSLFMsRUFBVztBQUNyQyxVQUFNYyxTQUFTLEtBQUtDLFNBQUwsRUFBZjtBQUFBLFVBQ01QLDJCQUEyQk0sT0FBT0UsTUFBUCxDQUFjLFVBQVNSLHdCQUFULEVBQW1DUyxLQUFuQyxFQUEwQztBQUNqRixZQUFNQyxnQkFBZ0JELEtBQXRCO0FBQUEsWUFBOEI7QUFDeEJFLGdEQUF3Q0QsY0FBY1QsMkJBQWQsQ0FBMENULFNBQTFDLENBRDlDOztBQUdBTCxhQUFLYSx3QkFBTCxFQUErQlcscUNBQS9COztBQUVBLGVBQU9YLHdCQUFQO0FBQ0QsT0FQMEIsRUFPeEIsRUFQd0IsQ0FEakM7O0FBVUEsYUFBT0Esd0JBQVA7QUFDRDs7O21DQUVxQlksSyxFQUFPQyxVLEVBQVlDLGlCLEVBQW1CQyxPLEVBQVNDLFMsRUFBV0Msa0IsRUFBMkM7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQ3pILFVBQU1DLHNCQUFzQkYsa0JBQTVCO0FBQUEsVUFBZ0Q7QUFDMUNHLHVCQUFpQkwsUUFBUU0sR0FBUixDQUFZLFVBQVNOLE9BQVQsRUFBa0JPLEtBQWxCLEVBQXlCO0FBQUc7QUFDdkQsWUFBTUwscUJBQXFCN0IsaURBQWlEK0IsbUJBQWpELEVBQXNFRyxLQUF0RSxDQUEzQjtBQUFBLFlBQTBHO0FBQ3BHWix3QkFBZ0I1QixjQUFjeUMsbURBQWQsQ0FBa0VULGlCQUFsRSxFQUFxRkMsT0FBckYsRUFBOEZDLFNBQTlGLEVBQXlHQyxrQkFBekcsRUFBNkhLLEtBQTdILENBRHRCOztBQUdBLGVBQU9aLGFBQVA7QUFDRCxPQUxnQixDQUR2QjtBQUFBLFVBT01KLFNBQVNjLGNBUGY7QUFBQSxVQU9nQztBQUMxQkksOEJBQXdCeEMsY0FBY3lDLGNBQWQsdUJBQTZCYixLQUE3QixFQUFvQ0MsVUFBcEMsRUFBZ0RQLE1BQWhELFNBQTJEWSxrQkFBM0QsRUFSOUI7O0FBVUEsYUFBT00scUJBQVA7QUFDRDs7OztFQXhDaUN4QyxhOztBQTJDcEMwQyxPQUFPQyxPQUFQLEdBQWlCdEMscUJBQWpCIiwiZmlsZSI6InRleHR1cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXh0dXJlZEZhY2V0ID0gcmVxdWlyZSgnLi4vLi4vZmFjZXQvdGV4dHVyZWQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHRleHR1cmVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvdGV4dHVyZScpO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0ZXh0dXJlQ29vcmRpbmF0ZXNGcm9tVGV4dHVyZUNvb3JkaW5hdGVzQW5kSW5kZXggfSA9IHRleHR1cmVVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICByZW5kZXIodGV4dHVyZVJlbmRlcmVyLCBjb2xvdXJSZW5kZXJlcikge1xuICAgIGNvbnN0IGltYWdlSlNPTiA9IHRleHR1cmVSZW5kZXJlci5nZXRJbWFnZUpTT04oKSxcblx0XHRcdFx0XHR2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSB0aGlzLmdldFZlcnRleEluZGV4ZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxzKCksXG5cdFx0XHRcdFx0dmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzID0gdGhpcy5nZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMoaW1hZ2VKU09OKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlcyk7XG4gIH1cblxuICBnZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMoaW1hZ2VKU09OKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMgPSBmYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleFRleHR1cmVDb29yZGluYXRlcywgZmFjZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKGltYWdlSlNPTik7XG4gIFxuICAgICAgICAgICAgcHVzaCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMpO1xuICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleFRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNzID0gdGV4dHVyZUNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0cyA9IGluZGV4ZXMubWFwKGZ1bmN0aW9uKGluZGV4ZXMsIGluZGV4KSB7ICAvLy9cbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlc0Zyb21UZXh0dXJlQ29vcmRpbmF0ZXNBbmRJbmRleCh0ZXh0dXJlQ29vcmRpbmF0ZXNzLCBpbmRleCksICAvLy9cbiAgICAgICAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBUZXh0dXJlZEZhY2V0LmZyb21WZXJ0ZXhDb29yZGluYXRlc0ltYWdlTmFtZUFuZFRleHR1cmVDb29yZGluYXRlcyh2ZXJ0ZXhDb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIGluZGV4KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmFjZXRzID0gdGV4dHVyZWRGYWNldHMsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlZENhbnZhc0VsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBmYWNldHMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVkQ2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkQ2FudmFzRWxlbWVudDtcbiJdfQ==