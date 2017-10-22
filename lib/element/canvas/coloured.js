'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mask = require('../../element/canvas/mask'),
    CanvasElement = require('../../element/canvas');

var ColouredCanvasElement = function (_CanvasElement) {
  _inherits(ColouredCanvasElement, _CanvasElement);

  function ColouredCanvasElement(transform, colour) {
    _classCallCheck(this, ColouredCanvasElement);

    var _this = _possibleConstructorReturn(this, (ColouredCanvasElement.__proto__ || Object.getPrototypeOf(ColouredCanvasElement)).call(this, transform));

    _this.colour = colour;
    return _this;
  }

  _createClass(ColouredCanvasElement, [{
    key: 'calculateVertexColours',
    value: function calculateVertexColours(vertexPositions) {
      var vertexPositionsLength = vertexPositions.length,
          vertexColoursLength = vertexPositionsLength,
          ///
      vertexColour = this.colour,
          vertexColours = [];

      for (var index = 0; index < vertexColoursLength; index++) {
        vertexColours.push(vertexColour);
      }

      return vertexColours;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);

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
          vertexColours = this.calculateVertexColours(vertexPositions);

      colourRenderer.addVertexPositions(vertexPositions);
      colourRenderer.addVertexIndexes(vertexIndexes);
      colourRenderer.addVertexNormals(vertexNormals);
      colourRenderer.addVertexColours(vertexColours);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var colour = properties.colour,
          colouredCanvasElement = CanvasElement.fromProperties(Class, properties, colour);


      return colouredCanvasElement;
    }
  }]);

  return ColouredCanvasElement;
}(CanvasElement);

module.exports = ColouredCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJNYXNrIiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJ0cmFuc2Zvcm0iLCJjb2xvdXIiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0ZXhDb2xvdXJzTGVuZ3RoIiwidmVydGV4Q29sb3VyIiwidmVydGV4Q29sb3VycyIsImluZGV4IiwicHVzaCIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwibWFzayIsImZpbmQiLCJjaGlsZEVsZW1lbnQiLCJjaGlsZEVsZW1lbnRNYXNrIiwidW5kZWZpbmVkIiwidmVydGV4SW5kZXhlcyIsImNhbGN1bGF0ZVZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwiY2FsY3VsYXRlVmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleENvbG91cnMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleENvbG91cnMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJjb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLDJCQUFSLENBQWI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsc0JBQVIsQ0FEdEI7O0lBR01FLHFCOzs7QUFDSixpQ0FBWUMsU0FBWixFQUF1QkMsTUFBdkIsRUFBK0I7QUFBQTs7QUFBQSw4SUFDdkJELFNBRHVCOztBQUc3QixVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFINkI7QUFJOUI7Ozs7MkNBRXNCQyxlLEVBQWlCO0FBQ3RDLFVBQU1DLHdCQUF3QkQsZ0JBQWdCRSxNQUE5QztBQUFBLFVBQ01DLHNCQUFzQkYscUJBRDVCO0FBQUEsVUFDb0Q7QUFDOUNHLHFCQUFlLEtBQUtMLE1BRjFCO0FBQUEsVUFHTU0sZ0JBQWdCLEVBSHRCOztBQUtBLFdBQUssSUFBSUMsUUFBUSxDQUFqQixFQUFvQkEsUUFBUUgsbUJBQTVCLEVBQWlERyxPQUFqRCxFQUEwRDtBQUN4REQsc0JBQWNFLElBQWQsQ0FBbUJILFlBQW5CO0FBQ0Q7O0FBRUQsYUFBT0MsYUFBUDtBQUNEOzs7MkJBRU1HLGMsRUFBZ0JDLGUsRUFBaUJDLFUsRUFBWTtBQUNsRCwySUFBYUYsY0FBYixFQUE2QkMsZUFBN0IsRUFBOENDLFVBQTlDOztBQUVBLFVBQU1WLGtCQUFrQixLQUFLVyx3QkFBTCxDQUE4QkQsVUFBOUIsQ0FBeEI7O0FBRUEsVUFBTUUsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCO0FBQUEsVUFDTUMsT0FBT0YsY0FBY0csSUFBZCxDQUFtQixVQUFTQyxZQUFULEVBQXVCO0FBQy9DLFlBQU1DLG1CQUFvQkQsd0JBQXdCdEIsSUFBbEQ7O0FBRUEsZUFBT3VCLGdCQUFQO0FBQ0QsT0FKTSxDQURiOztBQU9BLFVBQUlILFNBQVNJLFNBQWIsRUFBd0I7QUFDdEI7QUFDRDs7QUFFRCxVQUFNQyxnQkFBZ0IsS0FBS0Msc0JBQUwsQ0FBNEJwQixlQUE1QixDQUF0QjtBQUFBLFVBQ01xQixnQkFBZ0IsS0FBS0Msc0JBQUwsQ0FBNEJ0QixlQUE1QixDQUR0QjtBQUFBLFVBRU1LLGdCQUFnQixLQUFLa0Isc0JBQUwsQ0FBNEJ2QixlQUE1QixDQUZ0Qjs7QUFJQVEscUJBQWVnQixrQkFBZixDQUFrQ3hCLGVBQWxDO0FBQ0FRLHFCQUFlaUIsZ0JBQWYsQ0FBZ0NOLGFBQWhDO0FBQ0FYLHFCQUFla0IsZ0JBQWYsQ0FBZ0NMLGFBQWhDO0FBQ0FiLHFCQUFlbUIsZ0JBQWYsQ0FBZ0N0QixhQUFoQztBQUNEOzs7bUNBRXFCdUIsSyxFQUFPQyxVLEVBQVk7QUFDakMsVUFBRTlCLE1BQUYsR0FBYThCLFVBQWIsQ0FBRTlCLE1BQUY7QUFBQSxVQUNBK0IscUJBREEsR0FDd0JsQyxjQUFjbUMsY0FBZCxDQUE2QkgsS0FBN0IsRUFBb0NDLFVBQXBDLEVBQWdEOUIsTUFBaEQsQ0FEeEI7OztBQUdOLGFBQU8rQixxQkFBUDtBQUNEOzs7O0VBbkRpQ2xDLGE7O0FBc0RwQ29DLE9BQU9DLE9BQVAsR0FBaUJwQyxxQkFBakIiLCJmaWxlIjoiY29sb3VyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE1hc2sgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcy9tYXNrJyksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKTtcblxuY2xhc3MgQ29sb3VyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgY29sb3VyKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtKTtcblxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Q29sb3Vycyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHZlcnRleENvbG91cnNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGgsICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLmNvbG91cixcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmVydGV4Q29sb3Vyc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIHN1cGVyLmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcblxuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zKHRyYW5zZm9ybXMpO1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIG1hc2sgPSBjaGlsZEVsZW1lbnRzLmZpbmQoZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZEVsZW1lbnRNYXNrID0gKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIE1hc2spO1xuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGRFbGVtZW50TWFzaztcbiAgICAgICAgICB9KTtcblxuICAgIGlmIChtYXNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhlcyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbHModmVydGV4UG9zaXRpb25zKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91cmVkQ2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvbG91cik7XG5cbiAgICByZXR1cm4gY29sb3VyZWRDYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRDYW52YXNFbGVtZW50O1xuIl19