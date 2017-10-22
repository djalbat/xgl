'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    arrayUtilities = require('../../utilities/array');

var flatten = arrayUtilities.flatten,
    colour = [1, 1, 1, 0.5],
    initialVertexPositionData = [0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0];

var MaskCanvasElement = function (_CanvasElement) {
  _inherits(MaskCanvasElement, _CanvasElement);

  function MaskCanvasElement() {
    _classCallCheck(this, MaskCanvasElement);

    return _possibleConstructorReturn(this, (MaskCanvasElement.__proto__ || Object.getPrototypeOf(MaskCanvasElement)).apply(this, arguments));
  }

  _createClass(MaskCanvasElement, [{
    key: 'calculateVertexColours',
    value: function calculateVertexColourData(vertexPositionData) {
      var vertexPositionDataLength = vertexPositionData.length,
          vertexColoursLength = vertexPositionDataLength / 3,
          ///
      vertexColour = colour,
          vertexColours = [];

      for (var index = 0; index < vertexColoursLength; index++) {
        vertexColours.push(vertexColour);
      }

      var vertexColourData = flatten(vertexColours); ///

      return vertexColourData;
    }
  }, {
    key: 'getInitialVertexPositionData',
    value: function getInitialVertexPositionData() {
      return initialVertexPositionData;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      var vertexPositionData = this.calculateVertexPositionData(transforms),
          vertexIndexData = this.calculateVertexIndexes(vertexPositionData),
          vertexNormalData = this.calculateVertexNormals(vertexPositionData),
          vertexColourData = this.calculateVertexColourData(vertexPositionData);

      colourRenderer.addVertexPositions(vertexPositionData);
      colourRenderer.addVertexIndexes(vertexIndexData);
      colourRenderer.addVertexNormals(vertexNormalData);
      colourRenderer.addVertexColours(vertexColourData);

      _get(MaskCanvasElement.prototype.__proto__ || Object.getPrototypeOf(MaskCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(MaskCanvasElement, properties);
    }
  }]);

  return MaskCanvasElement;
}(CanvasElement);

module.exports = MaskCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9tYXNrLmpzIl0sIm5hbWVzIjpbIkNhbnZhc0VsZW1lbnQiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmbGF0dGVuIiwiY29sb3VyIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsIk1hc2tDYW52YXNFbGVtZW50IiwidmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoIiwibGVuZ3RoIiwidmVydGV4Q29sb3Vyc0xlbmd0aCIsInZlcnRleENvbG91ciIsInZlcnRleENvbG91cnMiLCJpbmRleCIsInB1c2giLCJ2ZXJ0ZXhDb2xvdXJEYXRhIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ0cmFuc2Zvcm1zIiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4SW5kZXhEYXRhIiwiY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhIiwidmVydGV4Tm9ybWFsRGF0YSIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhIiwiYWRkVmVydGV4UG9zaXRpb25EYXRhIiwiYWRkVmVydGV4SW5kZXhEYXRhIiwiYWRkVmVydGV4Tm9ybWFsRGF0YSIsImFkZFZlcnRleENvbG91ckRhdGEiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLHNCQUFSLENBQXRCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLHVCQUFSLENBRHZCOztBQUdNLElBQUVFLE9BQUYsR0FBY0QsY0FBZCxDQUFFQyxPQUFGO0FBQUEsSUFDQUMsTUFEQSxHQUNTLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsR0FBWCxDQURUO0FBQUEsSUFFQUMseUJBRkEsR0FFNEIsQ0FFMUIsR0FGMEIsRUFFckIsR0FGcUIsRUFFaEIsR0FGZ0IsRUFHMUIsR0FIMEIsRUFHckIsR0FIcUIsRUFHaEIsR0FIZ0IsRUFJMUIsR0FKMEIsRUFJckIsR0FKcUIsRUFJaEIsR0FKZ0IsRUFLMUIsR0FMMEIsRUFLckIsR0FMcUIsRUFLaEIsR0FMZ0IsQ0FGNUI7O0lBV0FDLGlCOzs7Ozs7Ozs7Ozs4Q0FDc0JDLGtCLEVBQW9CO0FBQzVDLFVBQU1DLDJCQUEyQkQsbUJBQW1CRSxNQUFwRDtBQUFBLFVBQ01DLHNCQUFzQkYsMkJBQTJCLENBRHZEO0FBQUEsVUFDMkQ7QUFDckRHLHFCQUFlUCxNQUZyQjtBQUFBLFVBR01RLGdCQUFnQixFQUh0Qjs7QUFLQSxXQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFILG1CQUE1QixFQUFpREcsT0FBakQsRUFBMEQ7QUFDeERELHNCQUFjRSxJQUFkLENBQW1CSCxZQUFuQjtBQUNEOztBQUVELFVBQU1JLG1CQUFtQlosUUFBUVMsYUFBUixDQUF6QixDQVY0QyxDQVVNOztBQUVsRCxhQUFPRyxnQkFBUDtBQUNEOzs7bURBRThCO0FBQzdCLGFBQU9WLHlCQUFQO0FBQ0Q7OzsyQkFFTVcsYyxFQUFnQkMsZSxFQUFpQkMsVSxFQUFZO0FBQ2xELFVBQU1YLHFCQUFxQixLQUFLWSwyQkFBTCxDQUFpQ0QsVUFBakMsQ0FBM0I7QUFBQSxVQUNNRSxrQkFBa0IsS0FBS0Msd0JBQUwsQ0FBOEJkLGtCQUE5QixDQUR4QjtBQUFBLFVBRU1lLG1CQUFtQixLQUFLQyx5QkFBTCxDQUErQmhCLGtCQUEvQixDQUZ6QjtBQUFBLFVBR01RLG1CQUFtQixLQUFLUyx5QkFBTCxDQUErQmpCLGtCQUEvQixDQUh6Qjs7QUFLQVMscUJBQWVTLHFCQUFmLENBQXFDbEIsa0JBQXJDO0FBQ0FTLHFCQUFlVSxrQkFBZixDQUFrQ04sZUFBbEM7QUFDQUoscUJBQWVXLG1CQUFmLENBQW1DTCxnQkFBbkM7QUFDQU4scUJBQWVZLG1CQUFmLENBQW1DYixnQkFBbkM7O0FBRUEsbUlBQWFDLGNBQWIsRUFBNkJDLGVBQTdCLEVBQThDQyxVQUE5QztBQUNEOzs7bUNBRXFCVyxVLEVBQVk7QUFBRSxhQUFPN0IsY0FBYzhCLGNBQWQsQ0FBNkJ4QixpQkFBN0IsRUFBZ0R1QixVQUFoRCxDQUFQO0FBQXFFOzs7O0VBbEMzRTdCLGE7O0FBcUNoQytCLE9BQU9DLE9BQVAsR0FBaUIxQixpQkFBakIiLCJmaWxlIjoibWFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgY29sb3VyID0gWyAxLCAxLCAxLCAwLjUgXSxcbiAgICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgPSBbXG5cbiAgICAgICAgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgIFxuICAgICAgXTtcblxuY2xhc3MgTWFza0NhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbkRhdGEubGVuZ3RoLFxuICAgICAgICAgIHZlcnRleENvbG91cnNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggLyAzLCAgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VyID0gY29sb3VyLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2ZXJ0ZXhDb2xvdXJzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2ZXJ0ZXhDb2xvdXJzLnB1c2godmVydGV4Q29sb3VyKTtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJEYXRhID0gZmxhdHRlbih2ZXJ0ZXhDb2xvdXJzKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckRhdGE7XG4gIH1cblxuICBnZXRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKCkge1xuICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSh0cmFuc2Zvcm1zKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleERhdGEgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEodmVydGV4UG9zaXRpb25EYXRhKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJEYXRhID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodmVydGV4UG9zaXRpb25EYXRhKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleE5vcm1hbERhdGEpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleENvbG91ckRhdGEodmVydGV4Q29sb3VyRGF0YSk7XG5cbiAgICBzdXBlci5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXNrQ2FudmFzRWxlbWVudCwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNrQ2FudmFzRWxlbWVudDtcbiJdfQ==