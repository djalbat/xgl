'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mask = require('../../element/canvas/mask'),
    CanvasElement = require('../../element/canvas'),
    imageMapUtilities = require('../../utilities/imageMap');

var textureCoordinatesFromImageNames = imageMapUtilities.textureCoordinatesFromImageNames;

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
      _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);

      var vertexPositions = this.calculateVertexPositions(transforms);

      var childElements = this.getChildElements(),
          mask = childElements.find(function (childElement) {
        var childElementMask = childElement instanceof Mask;

        return childElementMask;
      });

      if (mask !== undefined) {
        debugger;
      }

      var vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          textureCoordinates = this.calculateTextureCoordinates(vertexPositions);

      textureRenderer.addVertexPositions(vertexPositions);
      textureRenderer.addVertexIndexes(vertexIndexes);
      textureRenderer.addVertexNormals(vertexNormals);
      textureRenderer.addTextureCoordinates(textureCoordinates);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJNYXNrIiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJpbWFnZU1hcFV0aWxpdGllcyIsInRleHR1cmVDb29yZGluYXRlc0Zyb21JbWFnZU5hbWVzIiwiVGV4dHVyZWRDYW52YXNFbGVtZW50IiwidHJhbnNmb3JtIiwiaW1hZ2VOYW1lIiwidmVydGV4UG9zaXRpb25zIiwidmVydGV4UG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiaW1hZ2VOYW1lc0xlbmd0aCIsImltYWdlTmFtZXMiLCJpbmRleCIsInB1c2giLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInRyYW5zZm9ybXMiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnMiLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsIm1hc2siLCJmaW5kIiwiY2hpbGRFbGVtZW50IiwiY2hpbGRFbGVtZW50TWFzayIsInVuZGVmaW5lZCIsInZlcnRleEluZGV4ZXMiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbHMiLCJjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZXMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFRleHR1cmVDb29yZGluYXRlcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInRleHR1cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsMkJBQVIsQ0FBYjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxzQkFBUixDQUR0QjtBQUFBLElBRU1FLG9CQUFvQkYsUUFBUSwwQkFBUixDQUYxQjs7SUFJUUcsZ0MsR0FBcUNELGlCLENBQXJDQyxnQzs7SUFFRkMscUI7OztBQUNKLGlDQUFZQyxTQUFaLEVBQXVCQyxTQUF2QixFQUFrQztBQUFBOztBQUFBLDhJQUMxQkQsU0FEMEI7O0FBR2hDLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBSGdDO0FBSWpDOzs7O2dEQUUyQkMsZSxFQUFpQjtBQUMzQyxVQUFNQyx3QkFBd0JELGdCQUFnQkUsTUFBOUM7QUFBQSxVQUNNQyxtQkFBbUJGLHdCQUF3QixDQURqRDtBQUFBLFVBQ3FEO0FBQy9DRyxtQkFBYSxFQUZuQjs7QUFJQSxXQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFGLGdCQUE1QixFQUE4Q0UsT0FBOUMsRUFBdUQ7QUFDckRELG1CQUFXRSxJQUFYLENBQWdCLEtBQUtQLFNBQXJCO0FBQ0Q7O0FBRUQsVUFBTVEscUJBQXFCWCxpQ0FBaUNRLFVBQWpDLENBQTNCOztBQUVBLGFBQU9HLGtCQUFQO0FBQ0Q7OzsyQkFFTUMsYyxFQUFnQkMsZSxFQUFpQkMsVSxFQUFZO0FBQ2xELDJJQUFhRixjQUFiLEVBQTZCQyxlQUE3QixFQUE4Q0MsVUFBOUM7O0FBRUEsVUFBTVYsa0JBQWtCLEtBQUtXLHdCQUFMLENBQThCRCxVQUE5QixDQUF4Qjs7QUFFQSxVQUFNRSxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7QUFBQSxVQUNNQyxPQUFPRixjQUFjRyxJQUFkLENBQW1CLFVBQVNDLFlBQVQsRUFBdUI7QUFDL0MsWUFBTUMsbUJBQW9CRCx3QkFBd0J4QixJQUFsRDs7QUFFQSxlQUFPeUIsZ0JBQVA7QUFDRCxPQUpNLENBRGI7O0FBT0EsVUFBSUgsU0FBU0ksU0FBYixFQUF3QjtBQUN0QjtBQUNEOztBQUVELFVBQU1DLGdCQUFnQixLQUFLQyxzQkFBTCxDQUE0QnBCLGVBQTVCLENBQXRCO0FBQUEsVUFDTXFCLGdCQUFnQixLQUFLQyxzQkFBTCxDQUE0QnRCLGVBQTVCLENBRHRCO0FBQUEsVUFFTU8scUJBQXFCLEtBQUtnQiwyQkFBTCxDQUFpQ3ZCLGVBQWpDLENBRjNCOztBQUlBUyxzQkFBZ0JlLGtCQUFoQixDQUFtQ3hCLGVBQW5DO0FBQ0FTLHNCQUFnQmdCLGdCQUFoQixDQUFpQ04sYUFBakM7QUFDQVYsc0JBQWdCaUIsZ0JBQWhCLENBQWlDTCxhQUFqQztBQUNBWixzQkFBZ0JrQixxQkFBaEIsQ0FBc0NwQixrQkFBdEM7QUFDRDs7O21DQUVxQnFCLEssRUFBT0MsVSxFQUFZO0FBQ2pDLFVBQUU5QixTQUFGLEdBQWdCOEIsVUFBaEIsQ0FBRTlCLFNBQUY7QUFBQSxVQUNBK0IscUJBREEsR0FDd0JwQyxjQUFjcUMsY0FBZCxDQUE2QkgsS0FBN0IsRUFBb0NDLFVBQXBDLEVBQWdEOUIsU0FBaEQsQ0FEeEI7OztBQUdOLGFBQU8rQixxQkFBUDtBQUNEOzs7O0VBcERpQ3BDLGE7O0FBdURwQ3NDLE9BQU9DLE9BQVAsR0FBaUJwQyxxQkFBakIiLCJmaWxlIjoidGV4dHVyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE1hc2sgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcy9tYXNrJyksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgdGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXMgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBpbWFnZU5hbWUpIHtcbiAgICBzdXBlcih0cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG4gIH1cblxuICBjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZXModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zTGVuZ3RoID0gdmVydGV4UG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBpbWFnZU5hbWVzTGVuZ3RoID0gdmVydGV4UG9zaXRpb25zTGVuZ3RoIC8gNCwgIC8vL1xuICAgICAgICAgIGltYWdlTmFtZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbWFnZU5hbWVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpbWFnZU5hbWVzLnB1c2godGhpcy5pbWFnZU5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlc0Zyb21JbWFnZU5hbWVzKGltYWdlTmFtZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7XG4gICAgc3VwZXIuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpO1xuXG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnModHJhbnNmb3Jtcyk7XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgbWFzayA9IGNoaWxkRWxlbWVudHMuZmluZChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudE1hc2sgPSAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgTWFzayk7XG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZEVsZW1lbnRNYXNrO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKG1hc2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKHZlcnRleFBvc2l0aW9ucyksXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Tm9ybWFscyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlcyA9IHRoaXMuY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRUZXh0dXJlQ29vcmRpbmF0ZXModGV4dHVyZUNvb3JkaW5hdGVzKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRDYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgaW1hZ2VOYW1lKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZWRDYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRDYW52YXNFbGVtZW50O1xuIl19