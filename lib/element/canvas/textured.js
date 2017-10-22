'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    arrayUtilities = require('../../utilities/array'),
    imageMapUtilities = require('../../utilities/imageMap');

var flatten = arrayUtilities.flatten,
    textureCoordinatesFromImageNames = imageMapUtilities.textureCoordinatesFromImageNames;

var TexturedCanvasElement = function (_CanvasElement) {
      _inherits(TexturedCanvasElement, _CanvasElement);

      function TexturedCanvasElement(transform, imageName) {
            _classCallCheck(this, TexturedCanvasElement);

            var _this = _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).call(this, transform));

            _this.imageName = imageName;
            return _this;
      }

      _createClass(TexturedCanvasElement, [{
            key: 'calculateTextureCoordinates',
            value: function calculateTextureCoordinates(vertexPositions) {
                  var vertexPositionsLength = vertexPositions.length,
                      imageNamesLength = vertexPositionsLength / 4,
                      ///
                  imageNames = [];

                  for (var index = 0; index < imageNamesLength; index++) {
                        imageNames.push(this.imageName);
                  }

                  var textureCoordinates = textureCoordinatesFromImageNames(imageNames);

                  return textureCoordinates;
            }
      }, {
            key: 'create',
            value: function create(colourRenderer, textureRenderer, transforms) {
                  var vertexPositions = this.calculateVertexPositions(transforms),
                      vertexIndexes = this.calculateVertexIndexes(vertexPositions),
                      vertexNormals = this.calculateVertexNormals(vertexPositions),
                      textureCoordinates = this.calculateTextureCoordinates(vertexPositions);

                  var vertexPositionData = flatten(vertexPositions),
                      vertexNormalData = flatten(vertexNormals),
                      textureCoordinateData = flatten(textureCoordinates),
                      vertexIndexData = vertexIndexes;

                  textureRenderer.addVertexPositionData(vertexPositionData);
                  textureRenderer.addVertexIndexData(vertexIndexData);
                  textureRenderer.addVertexNormalData(vertexNormalData);
                  textureRenderer.addTextureCoordinateData(textureCoordinateData);

                  _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);
            }
      }], [{
            key: 'fromProperties',
            value: function fromProperties(Class, properties) {
                  var imageName = properties.imageName,
                      texturedCanvasElement = CanvasElement.fromProperties(Class, properties, imageName);


                  return texturedCanvasElement;
            }
      }]);

      return TexturedCanvasElement;
}(CanvasElement);

module.exports = TexturedCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJmbGF0dGVuIiwidGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXMiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJ0cmFuc2Zvcm0iLCJpbWFnZU5hbWUiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJpbWFnZU5hbWVzTGVuZ3RoIiwiaW1hZ2VOYW1lcyIsImluZGV4IiwicHVzaCIsInRleHR1cmVDb29yZGluYXRlcyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucyIsInZlcnRleEluZGV4ZXMiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbHMiLCJjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZXMiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwiYWRkVmVydGV4UG9zaXRpb25EYXRhIiwiYWRkVmVydGV4SW5kZXhEYXRhIiwiYWRkVmVydGV4Tm9ybWFsRGF0YSIsImFkZFRleHR1cmVDb29yZGluYXRlRGF0YSIsIkNsYXNzIiwicHJvcGVydGllcyIsInRleHR1cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxzQkFBUixDQUF0QjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSx1QkFBUixDQUR2QjtBQUFBLElBRU1FLG9CQUFvQkYsUUFBUSwwQkFBUixDQUYxQjs7QUFJTSxJQUFFRyxPQUFGLEdBQWNGLGNBQWQsQ0FBRUUsT0FBRjtBQUFBLElBQ0VDLGdDQURGLEdBQ3VDRixpQkFEdkMsQ0FDRUUsZ0NBREY7O0lBR0FDLHFCOzs7QUFDSixxQ0FBWUMsU0FBWixFQUF1QkMsU0FBdkIsRUFBa0M7QUFBQTs7QUFBQSxzSkFDMUJELFNBRDBCOztBQUdoQyxrQkFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFIZ0M7QUFJakM7Ozs7d0RBRTJCQyxlLEVBQWlCO0FBQzNDLHNCQUFNQyx3QkFBd0JELGdCQUFnQkUsTUFBOUM7QUFBQSxzQkFDTUMsbUJBQW1CRix3QkFBd0IsQ0FEakQ7QUFBQSxzQkFDcUQ7QUFDL0NHLCtCQUFhLEVBRm5COztBQUlBLHVCQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFGLGdCQUE1QixFQUE4Q0UsT0FBOUMsRUFBdUQ7QUFDckRELG1DQUFXRSxJQUFYLENBQWdCLEtBQUtQLFNBQXJCO0FBQ0Q7O0FBRUQsc0JBQU1RLHFCQUFxQlgsaUNBQWlDUSxVQUFqQyxDQUEzQjs7QUFFQSx5QkFBT0csa0JBQVA7QUFDRDs7O21DQUVNQyxjLEVBQWdCQyxlLEVBQWlCQyxVLEVBQVk7QUFDbEQsc0JBQU1WLGtCQUFrQixLQUFLVyx3QkFBTCxDQUE4QkQsVUFBOUIsQ0FBeEI7QUFBQSxzQkFDTUUsZ0JBQWdCLEtBQUtDLHNCQUFMLENBQTRCYixlQUE1QixDQUR0QjtBQUFBLHNCQUVNYyxnQkFBZ0IsS0FBS0Msc0JBQUwsQ0FBNEJmLGVBQTVCLENBRnRCO0FBQUEsc0JBR01PLHFCQUFxQixLQUFLUywyQkFBTCxDQUFpQ2hCLGVBQWpDLENBSDNCOztBQUtBLHNCQUFNaUIscUJBQXFCdEIsUUFBUUssZUFBUixDQUEzQjtBQUFBLHNCQUNNa0IsbUJBQW1CdkIsUUFBUW1CLGFBQVIsQ0FEekI7QUFBQSxzQkFFTUssd0JBQXdCeEIsUUFBUVksa0JBQVIsQ0FGOUI7QUFBQSxzQkFHTWEsa0JBQWtCUixhQUh4Qjs7QUFLQUgsa0NBQWdCWSxxQkFBaEIsQ0FBc0NKLGtCQUF0QztBQUNBUixrQ0FBZ0JhLGtCQUFoQixDQUFtQ0YsZUFBbkM7QUFDQVgsa0NBQWdCYyxtQkFBaEIsQ0FBb0NMLGdCQUFwQztBQUNBVCxrQ0FBZ0JlLHdCQUFoQixDQUF5Q0wscUJBQXpDOztBQUVBLHVKQUFhWCxjQUFiLEVBQTZCQyxlQUE3QixFQUE4Q0MsVUFBOUM7QUFDRDs7OzJDQUVxQmUsSyxFQUFPQyxVLEVBQVk7QUFDakMsc0JBQUUzQixTQUFGLEdBQWdCMkIsVUFBaEIsQ0FBRTNCLFNBQUY7QUFBQSxzQkFDQTRCLHFCQURBLEdBQ3dCcEMsY0FBY3FDLGNBQWQsQ0FBNkJILEtBQTdCLEVBQW9DQyxVQUFwQyxFQUFnRDNCLFNBQWhELENBRHhCOzs7QUFHTix5QkFBTzRCLHFCQUFQO0FBQ0Q7Ozs7RUE3Q2lDcEMsYTs7QUFnRHBDc0MsT0FBT0MsT0FBUCxHQUFpQmpDLHFCQUFqQiIsImZpbGUiOiJ0ZXh0dXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgaW1hZ2VNYXBVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvaW1hZ2VNYXAnKTtcblxuY29uc3QgeyBmbGF0dGVuIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgdGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXMgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBpbWFnZU5hbWUpIHtcbiAgICBzdXBlcih0cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG4gIH1cblxuICBjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZXModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zTGVuZ3RoID0gdmVydGV4UG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBpbWFnZU5hbWVzTGVuZ3RoID0gdmVydGV4UG9zaXRpb25zTGVuZ3RoIC8gNCwgIC8vL1xuICAgICAgICAgIGltYWdlTmFtZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbWFnZU5hbWVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpbWFnZU5hbWVzLnB1c2godGhpcy5pbWFnZU5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlc0Zyb21JbWFnZU5hbWVzKGltYWdlTmFtZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnModHJhbnNmb3JtcyksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhlcyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbHModmVydGV4UG9zaXRpb25zKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0aGlzLmNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlcyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIFxuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YSA9IGZsYXR0ZW4odmVydGV4UG9zaXRpb25zKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gZmxhdHRlbih2ZXJ0ZXhOb3JtYWxzKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSBmbGF0dGVuKHRleHR1cmVDb29yZGluYXRlcyksXG4gICAgICAgICAgdmVydGV4SW5kZXhEYXRhID0gdmVydGV4SW5kZXhlcztcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodmVydGV4UG9zaXRpb25EYXRhKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4SW5kZXhEYXRhKHZlcnRleEluZGV4RGF0YSk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbERhdGEodmVydGV4Tm9ybWFsRGF0YSk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFRleHR1cmVDb29yZGluYXRlRGF0YSh0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuXG4gICAgc3VwZXIuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZENhbnZhc0VsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBpbWFnZU5hbWUpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4iXX0=