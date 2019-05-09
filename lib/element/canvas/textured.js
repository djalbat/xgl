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
                  var imageJSON = textureRenderer.getImageJSON(),
                      vertexIndexes = this.getVertexIndexes(),
                      vertexNormals = this.getVertexNormals(),
                      vertexPositions = this.getVertexPositions(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJUZXh0dXJlZEZhY2V0IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJhcnJheVV0aWxpdGllcyIsInRleHR1cmVVdGlsaXRpZXMiLCJwdXNoIiwidGV4dHVyZUNvb3JkaW5hdGVzRnJvbVRleHR1cmVDb29yZGluYXRlc0FuZEluZGV4IiwiVGV4dHVyZWRDYW52YXNFbGVtZW50IiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJpbWFnZUpTT04iLCJnZXRJbWFnZUpTT04iLCJ2ZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwidmVydGV4UG9zaXRpb25zIiwiZ2V0VmVydGV4UG9zaXRpb25zIiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwiZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwiYWRkVmVydGV4UG9zaXRpb25zIiwiYWRkVmVydGV4SW5kZXhlcyIsImFkZFZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMiLCJmYWNldHMiLCJnZXRGYWNldHMiLCJyZWR1Y2UiLCJmYWNldCIsInRleHR1cmVkRmFjZXQiLCJ0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidmVydGV4Q29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiaW1hZ2VOYW1lIiwidGV4dHVyZUNvb3JkaW5hdGVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidGV4dHVyZUNvb3JkaW5hdGVzcyIsInRleHR1cmVkRmFjZXRzIiwibWFwIiwiaW5kZXgiLCJmcm9tVmVydGV4Q29vcmRpbmF0ZXNJbWFnZU5hbWVBbmRUZXh0dXJlQ29vcmRpbmF0ZXMiLCJ0ZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLHNCQUFSLENBQXRCO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLHNCQUFSLENBRHRCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLHVCQUFSLENBRnZCO0FBQUEsSUFHTUcsbUJBQW1CSCxRQUFRLHlCQUFSLENBSHpCOztBQUtNLElBQUVJLElBQUYsR0FBV0YsY0FBWCxDQUFFRSxJQUFGO0FBQUEsSUFDRUMsZ0RBREYsR0FDdURGLGdCQUR2RCxDQUNFRSxnREFERjs7SUFHQUMscUI7Ozs7Ozs7Ozs7O21DQUNHQyxjLEVBQWdCQyxlLEVBQWlCO0FBQ3RDLHNCQUFNQyxZQUFZRCxnQkFBZ0JFLFlBQWhCLEVBQWxCO0FBQUEsc0JBQ0NDLGdCQUFnQixLQUFLQyxnQkFBTCxFQURqQjtBQUFBLHNCQUVNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFGdEI7QUFBQSxzQkFHTUMsa0JBQWtCLEtBQUtDLGtCQUFMLEVBSHhCO0FBQUEsc0JBSU1DLDJCQUEyQixLQUFLQywyQkFBTCxDQUFpQ1QsU0FBakMsQ0FKakM7O0FBTUFELGtDQUFnQlcsa0JBQWhCLENBQW1DSixlQUFuQzs7QUFFQVAsa0NBQWdCWSxnQkFBaEIsQ0FBaUNULGFBQWpDOztBQUVBSCxrQ0FBZ0JhLGdCQUFoQixDQUFpQ1IsYUFBakM7O0FBRUFMLGtDQUFnQmMsMkJBQWhCLENBQTRDTCx3QkFBNUM7QUFDRDs7O3dEQUUyQlIsUyxFQUFXO0FBQ3JDLHNCQUFNYyxTQUFTLEtBQUtDLFNBQUwsRUFBZjtBQUFBLHNCQUNNUCwyQkFBMkJNLE9BQU9FLE1BQVAsQ0FBYyxVQUFDUix3QkFBRCxFQUEyQlMsS0FBM0IsRUFBcUM7QUFDNUUsNEJBQU1DLGdCQUFnQkQsS0FBdEI7QUFBQSw0QkFBOEI7QUFDeEJFLGdFQUF3Q0QsY0FBY1QsMkJBQWQsQ0FBMENULFNBQTFDLENBRDlDOztBQUdBTCw2QkFBS2Esd0JBQUwsRUFBK0JXLHFDQUEvQjs7QUFFQSwrQkFBT1gsd0JBQVA7QUFDRCxtQkFQMEIsRUFPeEIsRUFQd0IsQ0FEakM7O0FBVUEseUJBQU9BLHdCQUFQO0FBQ0Q7OzsyQ0FFcUJZLEssRUFBT0MsVSxFQUFZQyxpQixFQUFtQkMsTyxFQUFTQyxTLEVBQVdDLGtCLEVBQTJDO0FBQUEsb0RBQXBCQyxrQkFBb0I7QUFBcEJBLDBDQUFvQjtBQUFBOztBQUN6SCxzQkFBTUMsc0JBQXNCRixrQkFBNUI7QUFBQSxzQkFBZ0Q7QUFDMUNHLG1DQUFpQkwsUUFBUU0sR0FBUixDQUFZLFVBQUNOLE9BQUQsRUFBVU8sS0FBVixFQUFvQjtBQUFHO0FBQ2xELDRCQUFNTCxxQkFBcUI3QixpREFBaUQrQixtQkFBakQsRUFBc0VHLEtBQXRFLENBQTNCO0FBQUEsNEJBQTBHO0FBQ3BHWix3Q0FBZ0I1QixjQUFjeUMsbURBQWQsQ0FBa0VULGlCQUFsRSxFQUFxRkMsT0FBckYsRUFBOEZDLFNBQTlGLEVBQXlHQyxrQkFBekcsRUFBNkhLLEtBQTdILENBRHRCOztBQUdBLCtCQUFPWixhQUFQO0FBQ0QsbUJBTGdCLENBRHZCO0FBQUEsc0JBT01KLFNBQVNjLGNBUGY7QUFBQSxzQkFPZ0M7QUFDMUJJLDBDQUF3QnhDLGNBQWN5QyxjQUFkLHVCQUE2QmIsS0FBN0IsRUFBb0NDLFVBQXBDLEVBQWdEUCxNQUFoRCxTQUEyRFksa0JBQTNELEVBUjlCOztBQVVBLHlCQUFPTSxxQkFBUDtBQUNEOzs7O0VBM0NpQ3hDLGE7O0FBOENwQzBDLE9BQU9DLE9BQVAsR0FBaUJ0QyxxQkFBakIiLCJmaWxlIjoidGV4dHVyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkRmFjZXQgPSByZXF1aXJlKCcuLi8uLi9mYWNldC90ZXh0dXJlZCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdGV4dHVyZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy90ZXh0dXJlJyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHRleHR1cmVDb29yZGluYXRlc0Zyb21UZXh0dXJlQ29vcmRpbmF0ZXNBbmRJbmRleCB9ID0gdGV4dHVyZVV0aWxpdGllcztcblxuY2xhc3MgVGV4dHVyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIHJlbmRlcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgaW1hZ2VKU09OID0gdGV4dHVyZVJlbmRlcmVyLmdldEltYWdlSlNPTigpLFxuXHRcdFx0XHRcdHZlcnRleEluZGV4ZXMgPSB0aGlzLmdldFZlcnRleEluZGV4ZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMgPSB0aGlzLmdldFZlcnRleFRleHR1cmVDb29yZGluYXRlcyhpbWFnZUpTT04pO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIGdldFZlcnRleFRleHR1cmVDb29yZGluYXRlcyhpbWFnZUpTT04pIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlcyA9IGZhY2V0cy5yZWR1Y2UoKHZlcnRleFRleHR1cmVDb29yZGluYXRlcywgZmFjZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKGltYWdlSlNPTik7XG4gIFxuICAgICAgICAgICAgcHVzaCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMpO1xuICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleFRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNzID0gdGV4dHVyZUNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0cyA9IGluZGV4ZXMubWFwKChpbmRleGVzLCBpbmRleCkgPT4geyAgLy8vXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNGcm9tVGV4dHVyZUNvb3JkaW5hdGVzQW5kSW5kZXgodGV4dHVyZUNvb3JkaW5hdGVzcywgaW5kZXgpLCAgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gVGV4dHVyZWRGYWNldC5mcm9tVmVydGV4Q29vcmRpbmF0ZXNJbWFnZU5hbWVBbmRUZXh0dXJlQ29vcmRpbmF0ZXModmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCBpbmRleCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZhY2V0cyA9IHRleHR1cmVkRmFjZXRzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRDYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgZmFjZXRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4iXX0=