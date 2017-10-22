'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas');

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
      var vertexPositions = this.calculateVertexPositions(transforms),
          vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          vertexColours = this.calculateVertexColours(vertexPositions);

      colourRenderer.addVertexPositions(vertexPositions);
      colourRenderer.addVertexIndexes(vertexIndexes);
      colourRenderer.addVertexNormals(vertexNormals);
      colourRenderer.addVertexColours(vertexColours);

      _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsInRyYW5zZm9ybSIsImNvbG91ciIsInZlcnRleFBvc2l0aW9ucyIsInZlcnRleFBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInZlcnRleENvbG91cnNMZW5ndGgiLCJ2ZXJ0ZXhDb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJzIiwiaW5kZXgiLCJwdXNoIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ0cmFuc2Zvcm1zIiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zIiwidmVydGV4SW5kZXhlcyIsImNhbGN1bGF0ZVZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwiY2FsY3VsYXRlVmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleENvbG91cnMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleENvbG91cnMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJjb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsc0JBQVIsQ0FBdEI7O0lBRU1DLHFCOzs7QUFDSixpQ0FBWUMsU0FBWixFQUF1QkMsTUFBdkIsRUFBK0I7QUFBQTs7QUFBQSw4SUFDdkJELFNBRHVCOztBQUc3QixVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFINkI7QUFJOUI7Ozs7MkNBRXNCQyxlLEVBQWlCO0FBQ3RDLFVBQU1DLHdCQUF3QkQsZ0JBQWdCRSxNQUE5QztBQUFBLFVBQ01DLHNCQUFzQkYscUJBRDVCO0FBQUEsVUFDb0Q7QUFDOUNHLHFCQUFlLEtBQUtMLE1BRjFCO0FBQUEsVUFHTU0sZ0JBQWdCLEVBSHRCOztBQUtBLFdBQUssSUFBSUMsUUFBUSxDQUFqQixFQUFvQkEsUUFBUUgsbUJBQTVCLEVBQWlERyxPQUFqRCxFQUEwRDtBQUN4REQsc0JBQWNFLElBQWQsQ0FBbUJILFlBQW5CO0FBQ0Q7O0FBRUQsYUFBT0MsYUFBUDtBQUNEOzs7MkJBRU1HLGMsRUFBZ0JDLGUsRUFBaUJDLFUsRUFBWTtBQUNsRCxVQUFNVixrQkFBa0IsS0FBS1csd0JBQUwsQ0FBOEJELFVBQTlCLENBQXhCO0FBQUEsVUFDTUUsZ0JBQWdCLEtBQUtDLHNCQUFMLENBQTRCYixlQUE1QixDQUR0QjtBQUFBLFVBRU1jLGdCQUFnQixLQUFLQyxzQkFBTCxDQUE0QmYsZUFBNUIsQ0FGdEI7QUFBQSxVQUdNSyxnQkFBZ0IsS0FBS1csc0JBQUwsQ0FBNEJoQixlQUE1QixDQUh0Qjs7QUFLQVEscUJBQWVTLGtCQUFmLENBQWtDakIsZUFBbEM7QUFDQVEscUJBQWVVLGdCQUFmLENBQWdDTixhQUFoQztBQUNBSixxQkFBZVcsZ0JBQWYsQ0FBZ0NMLGFBQWhDO0FBQ0FOLHFCQUFlWSxnQkFBZixDQUFnQ2YsYUFBaEM7O0FBRUEsMklBQWFHLGNBQWIsRUFBNkJDLGVBQTdCLEVBQThDQyxVQUE5QztBQUNEOzs7bUNBRXFCVyxLLEVBQU9DLFUsRUFBWTtBQUNqQyxVQUFFdkIsTUFBRixHQUFhdUIsVUFBYixDQUFFdkIsTUFBRjtBQUFBLFVBQ0F3QixxQkFEQSxHQUN3QjVCLGNBQWM2QixjQUFkLENBQTZCSCxLQUE3QixFQUFvQ0MsVUFBcEMsRUFBZ0R2QixNQUFoRCxDQUR4Qjs7O0FBR04sYUFBT3dCLHFCQUFQO0FBQ0Q7Ozs7RUF2Q2lDNUIsYTs7QUEwQ3BDOEIsT0FBT0MsT0FBUCxHQUFpQjdCLHFCQUFqQiIsImZpbGUiOiJjb2xvdXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGNvbG91cikge1xuICAgIHN1cGVyKHRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleENvbG91cnModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zTGVuZ3RoID0gdmVydGV4UG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzTGVuZ3RoID0gdmVydGV4UG9zaXRpb25zTGVuZ3RoLCAgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VyID0gdGhpcy5jb2xvdXIsXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZlcnRleENvbG91cnNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZlcnRleENvbG91cnMucHVzaCh2ZXJ0ZXhDb2xvdXIpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucyh0cmFuc2Zvcm1zKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKHZlcnRleFBvc2l0aW9ucyksXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Tm9ybWFscyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleENvbG91cnModmVydGV4UG9zaXRpb25zKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpO1xuXG4gICAgc3VwZXIuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyZWRDYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29sb3VyKTtcblxuICAgIHJldHVybiBjb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4iXX0=