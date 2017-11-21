'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
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
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms, mask) {
      _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);

      if (!mask) {
        this.render(textureRenderer);
      }
    }
  }, {
    key: 'render',
    value: function render(textureRenderer) {
      var vertexPositions = this.calculateVertexPositions(),
          vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          textureCoordinates = this.calculateTextureCoordinates(vertexPositions);

      textureRenderer.addVertexPositions(vertexPositions);
      textureRenderer.addVertexIndexes(vertexIndexes);
      textureRenderer.addVertexNormals(vertexNormals);
      textureRenderer.addTextureCoordinates(textureCoordinates);
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsImltYWdlTWFwVXRpbGl0aWVzIiwidGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXMiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJ0cmFuc2Zvcm0iLCJpbWFnZU5hbWUiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInRyYW5zZm9ybXMiLCJtYXNrIiwicmVuZGVyIiwidmVydGV4UG9zaXRpb25zIiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zIiwidmVydGV4SW5kZXhlcyIsImNhbGN1bGF0ZVZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwiY2FsY3VsYXRlVmVydGV4Tm9ybWFscyIsInRleHR1cmVDb29yZGluYXRlcyIsImNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlcyIsImFkZFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleEluZGV4ZXMiLCJhZGRWZXJ0ZXhOb3JtYWxzIiwiYWRkVGV4dHVyZUNvb3JkaW5hdGVzIiwidmVydGV4UG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiaW1hZ2VOYW1lc0xlbmd0aCIsImltYWdlTmFtZXMiLCJpbmRleCIsInB1c2giLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ0ZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsc0JBQVIsQ0FBdEI7QUFBQSxJQUNNQyxvQkFBb0JELFFBQVEsMEJBQVIsQ0FEMUI7O0lBR1FFLGdDLEdBQXFDRCxpQixDQUFyQ0MsZ0M7O0lBRUZDLHFCOzs7QUFDSixpQ0FBWUMsU0FBWixFQUF1QkMsU0FBdkIsRUFBa0M7QUFBQTs7QUFBQSw4SUFDMUJELFNBRDBCOztBQUdoQyxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUhnQztBQUlqQzs7OzsyQkFFTUMsYyxFQUFnQkMsZSxFQUFpQkMsVSxFQUFZQyxJLEVBQU07QUFDeEQsMklBQWFILGNBQWIsRUFBNkJDLGVBQTdCLEVBQThDQyxVQUE5Qzs7QUFFQSxVQUFJLENBQUNDLElBQUwsRUFBVztBQUNULGFBQUtDLE1BQUwsQ0FBWUgsZUFBWjtBQUNEO0FBQ0Y7OzsyQkFFTUEsZSxFQUFpQjtBQUN0QixVQUFNSSxrQkFBa0IsS0FBS0Msd0JBQUwsRUFBeEI7QUFBQSxVQUNNQyxnQkFBZ0IsS0FBS0Msc0JBQUwsQ0FBNEJILGVBQTVCLENBRHRCO0FBQUEsVUFFTUksZ0JBQWdCLEtBQUtDLHNCQUFMLENBQTRCTCxlQUE1QixDQUZ0QjtBQUFBLFVBR01NLHFCQUFxQixLQUFLQywyQkFBTCxDQUFpQ1AsZUFBakMsQ0FIM0I7O0FBS0FKLHNCQUFnQlksa0JBQWhCLENBQW1DUixlQUFuQztBQUNBSixzQkFBZ0JhLGdCQUFoQixDQUFpQ1AsYUFBakM7QUFDQU4sc0JBQWdCYyxnQkFBaEIsQ0FBaUNOLGFBQWpDO0FBQ0FSLHNCQUFnQmUscUJBQWhCLENBQXNDTCxrQkFBdEM7QUFDRDs7O2dEQUUyQk4sZSxFQUFpQjtBQUMzQyxVQUFNWSx3QkFBd0JaLGdCQUFnQmEsTUFBOUM7QUFBQSxVQUNNQyxtQkFBbUJGLHdCQUF3QixDQURqRDtBQUFBLFVBQ3FEO0FBQy9DRyxtQkFBYSxFQUZuQjs7QUFJQSxXQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFGLGdCQUE1QixFQUE4Q0UsT0FBOUMsRUFBdUQ7QUFDckRELG1CQUFXRSxJQUFYLENBQWdCLEtBQUt2QixTQUFyQjtBQUNEOztBQUVELFVBQU1ZLHFCQUFxQmYsaUNBQWlDd0IsVUFBakMsQ0FBM0I7O0FBRUEsYUFBT1Qsa0JBQVA7QUFDRDs7O21DQUVxQlksSyxFQUFPQyxVLEVBQVk7QUFDakMsVUFBRXpCLFNBQUYsR0FBZ0J5QixVQUFoQixDQUFFekIsU0FBRjtBQUFBLFVBQ0EwQixxQkFEQSxHQUN3QmhDLGNBQWNpQyxjQUFkLENBQTZCSCxLQUE3QixFQUFvQ0MsVUFBcEMsRUFBZ0R6QixTQUFoRCxDQUR4Qjs7O0FBR04sYUFBTzBCLHFCQUFQO0FBQ0Q7Ozs7RUE5Q2lDaEMsYTs7QUFpRHBDa0MsT0FBT0MsT0FBUCxHQUFpQi9CLHFCQUFqQiIsImZpbGUiOiJ0ZXh0dXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IHRleHR1cmVDb29yZGluYXRlc0Zyb21JbWFnZU5hbWVzIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY2xhc3MgVGV4dHVyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgaW1hZ2VOYW1lKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMsIG1hc2spIHtcbiAgICBzdXBlci5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcyk7XG4gICAgXG4gICAgaWYgKCFtYXNrKSB7XG4gICAgICB0aGlzLnJlbmRlcih0ZXh0dXJlUmVuZGVyZXIpO1xuICAgIH1cbiAgfVxuICBcbiAgcmVuZGVyKHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhlcyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbHModmVydGV4UG9zaXRpb25zKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0aGlzLmNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlcyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRUZXh0dXJlQ29vcmRpbmF0ZXModGV4dHVyZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlcyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGltYWdlTmFtZXNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGggLyA0LCAgLy8vXG4gICAgICAgICAgaW1hZ2VOYW1lcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGltYWdlTmFtZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGltYWdlTmFtZXMucHVzaCh0aGlzLmltYWdlTmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXMoaW1hZ2VOYW1lcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRDYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgaW1hZ2VOYW1lKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZWRDYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRDYW52YXNFbGVtZW50O1xuIl19