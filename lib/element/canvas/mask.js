'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas');

var colour = [1, 1, 1, 1],
    initialVertexPositions = [[0.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 1.0, 1.0], [0.0, 0.0, 1.0]];

var Mask = function (_CanvasElement) {
  _inherits(Mask, _CanvasElement);

  function Mask() {
    _classCallCheck(this, Mask);

    return _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).apply(this, arguments));
  }

  _createClass(Mask, [{
    key: 'calculateVertexColours',
    value: function calculateVertexColours(vertexPositions) {
      var vertexPositionsLength = vertexPositions.length,
          vertexColoursLength = vertexPositionsLength,
          ///
      vertexColour = colour,
          vertexColours = [];

      for (var index = 0; index < vertexColoursLength; index++) {
        vertexColours.push(vertexColour);
      }

      return vertexColours;
    }
  }, {
    key: 'getInitialVertexPositions',
    value: function getInitialVertexPositions() {
      return initialVertexPositions;
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

      _get(Mask.prototype.__proto__ || Object.getPrototypeOf(Mask.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Mask, properties);
    }
  }]);

  return Mask;
}(CanvasElement);

module.exports = Mask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9tYXNrLmpzIl0sIm5hbWVzIjpbIkNhbnZhc0VsZW1lbnQiLCJyZXF1aXJlIiwiY29sb3VyIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9ucyIsIk1hc2siLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0ZXhDb2xvdXJzTGVuZ3RoIiwidmVydGV4Q29sb3VyIiwidmVydGV4Q29sb3VycyIsImluZGV4IiwicHVzaCIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucyIsInZlcnRleEluZGV4ZXMiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbHMiLCJjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzIiwiYWRkVmVydGV4UG9zaXRpb25zIiwiYWRkVmVydGV4SW5kZXhlcyIsImFkZFZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhDb2xvdXJzIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxzQkFBUixDQUF0Qjs7QUFFQSxJQUFNQyxTQUFTLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUFmO0FBQUEsSUFDTUMseUJBQXlCLENBRXZCLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLENBRnVCLEVBR3ZCLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLENBSHVCLEVBSXZCLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLENBSnVCLEVBS3ZCLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLENBTHVCLENBRC9COztJQVVNQyxJOzs7Ozs7Ozs7OzsyQ0FDbUJDLGUsRUFBaUI7QUFDdEMsVUFBTUMsd0JBQXdCRCxnQkFBZ0JFLE1BQTlDO0FBQUEsVUFDTUMsc0JBQXNCRixxQkFENUI7QUFBQSxVQUNvRDtBQUM5Q0cscUJBQWVQLE1BRnJCO0FBQUEsVUFHTVEsZ0JBQWdCLEVBSHRCOztBQUtBLFdBQUssSUFBSUMsUUFBUSxDQUFqQixFQUFvQkEsUUFBUUgsbUJBQTVCLEVBQWlERyxPQUFqRCxFQUEwRDtBQUN4REQsc0JBQWNFLElBQWQsQ0FBbUJILFlBQW5CO0FBQ0Q7O0FBRUQsYUFBT0MsYUFBUDtBQUNEOzs7Z0RBRTJCO0FBQzFCLGFBQU9QLHNCQUFQO0FBQ0Q7OzsyQkFFTVUsYyxFQUFnQkMsZSxFQUFpQkMsVSxFQUFZO0FBQ2xELFVBQU1WLGtCQUFrQixLQUFLVyx3QkFBTCxDQUE4QkQsVUFBOUIsQ0FBeEI7QUFBQSxVQUNNRSxnQkFBZ0IsS0FBS0Msc0JBQUwsQ0FBNEJiLGVBQTVCLENBRHRCO0FBQUEsVUFFTWMsZ0JBQWdCLEtBQUtDLHNCQUFMLENBQTRCZixlQUE1QixDQUZ0QjtBQUFBLFVBR01LLGdCQUFnQixLQUFLVyxzQkFBTCxDQUE0QmhCLGVBQTVCLENBSHRCOztBQUtBUSxxQkFBZVMsa0JBQWYsQ0FBa0NqQixlQUFsQztBQUNBUSxxQkFBZVUsZ0JBQWYsQ0FBZ0NOLGFBQWhDO0FBQ0FKLHFCQUFlVyxnQkFBZixDQUFnQ0wsYUFBaEM7QUFDQU4scUJBQWVZLGdCQUFmLENBQWdDZixhQUFoQzs7QUFFQSx5R0FBYUcsY0FBYixFQUE2QkMsZUFBN0IsRUFBOENDLFVBQTlDO0FBQ0Q7OzttQ0FFcUJXLFUsRUFBWTtBQUFFLGFBQU8xQixjQUFjMkIsY0FBZCxDQUE2QnZCLElBQTdCLEVBQW1Dc0IsVUFBbkMsQ0FBUDtBQUF3RDs7OztFQWhDM0UxQixhOztBQW1DbkI0QixPQUFPQyxPQUFQLEdBQWlCekIsSUFBakIiLCJmaWxlIjoibWFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNvbnN0IGNvbG91ciA9IFsgMSwgMSwgMSwgMSBdLFxuICAgICAgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyA9IFtcblxuICAgICAgICBbIDAuMCwgMC4wLCAwLjAgXSxcbiAgICAgICAgWyAwLjAsIDEuMCwgMC4wIF0sXG4gICAgICAgIFsgMC4wLCAxLjAsIDEuMCBdLFxuICAgICAgICBbIDAuMCwgMC4wLCAxLjAgXSxcbiAgICAgIFxuICAgICAgXTtcblxuY2xhc3MgTWFzayBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgdmVydGV4Q29sb3Vyc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9uc0xlbmd0aCwgIC8vL1xuICAgICAgICAgIHZlcnRleENvbG91ciA9IGNvbG91cixcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmVydGV4Q29sb3Vyc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBnZXRJbml0aWFsVmVydGV4UG9zaXRpb25zKCkge1xuICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucyh0cmFuc2Zvcm1zKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKHZlcnRleFBvc2l0aW9ucyksXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Tm9ybWFscyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleENvbG91cnModmVydGV4UG9zaXRpb25zKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpO1xuXG4gICAgc3VwZXIuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNrO1xuIl19