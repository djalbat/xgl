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
            value: function render(colourRenderer, textureRenderer) {
                  var vertexPositions = this.getVertexPositions(),
                      vertexIndexes = this.getVertexIndexes(),
                      vertexNormals = this.getVertexNormals(),
                      vertexTextureCoordinates = this.getVertexTextureCoordinates();

                  textureRenderer.addVertexPositions(vertexPositions);
                  textureRenderer.addVertexIndexes(vertexIndexes);
                  textureRenderer.addVertexNormals(vertexNormals);
                  textureRenderer.addVertexTextureCoordinates(vertexTextureCoordinates);
            }
      }, {
            key: 'getVertexTextureCoordinates',
            value: function getVertexTextureCoordinates() {
                  var facets = this.getFacets(),
                      vertexTextureCoordinates = facets.reduce(function (vertexTextureCoordinates, facet) {
                        var texturedFacet = facet,
                            ///
                        texturedFacetVertexTextureCoordinates = texturedFacet.getVertexTextureCoordinates();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJUZXh0dXJlZEZhY2V0IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJhcnJheVV0aWxpdGllcyIsInRleHR1cmVVdGlsaXRpZXMiLCJwdXNoIiwidGV4dHVyZUNvb3JkaW5hdGVzRnJvbVRleHR1cmVDb29yZGluYXRlc0FuZEluZGV4IiwiVGV4dHVyZWRDYW52YXNFbGVtZW50IiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwiZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwiYWRkVmVydGV4UG9zaXRpb25zIiwiYWRkVmVydGV4SW5kZXhlcyIsImFkZFZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMiLCJmYWNldHMiLCJnZXRGYWNldHMiLCJyZWR1Y2UiLCJmYWNldCIsInRleHR1cmVkRmFjZXQiLCJ0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidmVydGV4Q29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiaW1hZ2VOYW1lIiwidGV4dHVyZUNvb3JkaW5hdGVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidGV4dHVyZUNvb3JkaW5hdGVzcyIsInRleHR1cmVkRmFjZXRzIiwibWFwIiwiaW5kZXgiLCJmcm9tVmVydGV4Q29vcmRpbmF0ZXNJbWFnZU5hbWVBbmRUZXh0dXJlQ29vcmRpbmF0ZXMiLCJ0ZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLHNCQUFSLENBQXRCO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLHNCQUFSLENBRHRCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLHVCQUFSLENBRnZCO0FBQUEsSUFHTUcsbUJBQW1CSCxRQUFRLHlCQUFSLENBSHpCOztBQUtNLElBQUVJLElBQUYsR0FBV0YsY0FBWCxDQUFFRSxJQUFGO0FBQUEsSUFDRUMsZ0RBREYsR0FDdURGLGdCQUR2RCxDQUNFRSxnREFERjs7SUFHQUMscUI7Ozs7Ozs7Ozs7O21DQUNHQyxjLEVBQWdCQyxlLEVBQWlCO0FBQ3RDLHNCQUFNQyxrQkFBa0IsS0FBS0Msa0JBQUwsRUFBeEI7QUFBQSxzQkFDTUMsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBRHRCO0FBQUEsc0JBRU1DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUZ0QjtBQUFBLHNCQUdNQywyQkFBMkIsS0FBS0MsMkJBQUwsRUFIakM7O0FBS0FSLGtDQUFnQlMsa0JBQWhCLENBQW1DUixlQUFuQztBQUNBRCxrQ0FBZ0JVLGdCQUFoQixDQUFpQ1AsYUFBakM7QUFDQUgsa0NBQWdCVyxnQkFBaEIsQ0FBaUNOLGFBQWpDO0FBQ0FMLGtDQUFnQlksMkJBQWhCLENBQTRDTCx3QkFBNUM7QUFDRDs7OzBEQUU2QjtBQUM1QixzQkFBTU0sU0FBUyxLQUFLQyxTQUFMLEVBQWY7QUFBQSxzQkFDTVAsMkJBQTJCTSxPQUFPRSxNQUFQLENBQWMsVUFBU1Isd0JBQVQsRUFBbUNTLEtBQW5DLEVBQTBDO0FBQ2pGLDRCQUFNQyxnQkFBZ0JELEtBQXRCO0FBQUEsNEJBQThCO0FBQ3hCRSxnRUFBd0NELGNBQWNULDJCQUFkLEVBRDlDOztBQUdBWiw2QkFBS1csd0JBQUwsRUFBK0JXLHFDQUEvQjs7QUFFQSwrQkFBT1gsd0JBQVA7QUFDRCxtQkFQMEIsRUFPeEIsRUFQd0IsQ0FEakM7O0FBVUEseUJBQU9BLHdCQUFQO0FBQ0Q7OzsyQ0FFcUJZLEssRUFBT0MsVSxFQUFZQyxpQixFQUFtQkMsTyxFQUFTQyxTLEVBQVdDLGtCLEVBQTJDO0FBQUEsb0RBQXBCQyxrQkFBb0I7QUFBcEJBLDBDQUFvQjtBQUFBOztBQUN6SCxzQkFBTUMsc0JBQXNCRixrQkFBNUI7QUFBQSxzQkFBZ0Q7QUFDMUNHLG1DQUFpQkwsUUFBUU0sR0FBUixDQUFZLFVBQVNOLE9BQVQsRUFBa0JPLEtBQWxCLEVBQXlCO0FBQUc7QUFDdkQsNEJBQU1MLHFCQUFxQjNCLGlEQUFpRDZCLG1CQUFqRCxFQUFzRUcsS0FBdEUsQ0FBM0I7QUFBQSw0QkFBMEc7QUFDcEdaLHdDQUFnQjFCLGNBQWN1QyxtREFBZCxDQUFrRVQsaUJBQWxFLEVBQXFGQyxPQUFyRixFQUE4RkMsU0FBOUYsRUFBeUdDLGtCQUF6RyxFQUE2SEssS0FBN0gsQ0FEdEI7O0FBR0EsK0JBQU9aLGFBQVA7QUFDRCxtQkFMZ0IsQ0FEdkI7QUFBQSxzQkFPTUosU0FBU2MsY0FQZjtBQUFBLHNCQU9nQztBQUMxQkksMENBQXdCdEMsY0FBY3VDLGNBQWQsdUJBQTZCYixLQUE3QixFQUFvQ0MsVUFBcEMsRUFBZ0RQLE1BQWhELFNBQTJEWSxrQkFBM0QsRUFSOUI7O0FBVUEseUJBQU9NLHFCQUFQO0FBQ0Q7Ozs7RUF2Q2lDdEMsYTs7QUEwQ3BDd0MsT0FBT0MsT0FBUCxHQUFpQnBDLHFCQUFqQiIsImZpbGUiOiJ0ZXh0dXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGV4dHVyZWRGYWNldCA9IHJlcXVpcmUoJy4uLy4uL2ZhY2V0L3RleHR1cmVkJyksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB0ZXh0dXJlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3RleHR1cmUnKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgdGV4dHVyZUNvb3JkaW5hdGVzRnJvbVRleHR1cmVDb29yZGluYXRlc0FuZEluZGV4IH0gPSB0ZXh0dXJlVXRpbGl0aWVzO1xuXG5jbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgcmVuZGVyKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSB0aGlzLmdldFZlcnRleEluZGV4ZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzID0gdGhpcy5nZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMoKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlcyk7XG4gIH1cblxuICBnZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMgPSBmYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleFRleHR1cmVDb29yZGluYXRlcywgZmFjZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKCk7XG4gIFxuICAgICAgICAgICAgcHVzaCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMpO1xuICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleFRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNzID0gdGV4dHVyZUNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0cyA9IGluZGV4ZXMubWFwKGZ1bmN0aW9uKGluZGV4ZXMsIGluZGV4KSB7ICAvLy9cbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlc0Zyb21UZXh0dXJlQ29vcmRpbmF0ZXNBbmRJbmRleCh0ZXh0dXJlQ29vcmRpbmF0ZXNzLCBpbmRleCksICAvLy9cbiAgICAgICAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBUZXh0dXJlZEZhY2V0LmZyb21WZXJ0ZXhDb29yZGluYXRlc0ltYWdlTmFtZUFuZFRleHR1cmVDb29yZGluYXRlcyh2ZXJ0ZXhDb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIGluZGV4KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmFjZXRzID0gdGV4dHVyZWRGYWNldHMsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlZENhbnZhc0VsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBmYWNldHMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVkQ2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkQ2FudmFzRWxlbWVudDtcbiJdfQ==