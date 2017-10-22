'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../element/canvas');

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
    value: function fromProperties(Class, properties) {
      return CanvasElement.fromProperties(Class, properties);
    }
  }]);

  return Mask;
}(CanvasElement);

module.exports = Mask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L21hc2suanMiXSwibmFtZXMiOlsiQ2FudmFzRWxlbWVudCIsInJlcXVpcmUiLCJjb2xvdXIiLCJpbml0aWFsVmVydGV4UG9zaXRpb25zIiwiTWFzayIsInZlcnRleFBvc2l0aW9ucyIsInZlcnRleFBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInZlcnRleENvbG91cnNMZW5ndGgiLCJ2ZXJ0ZXhDb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJzIiwiaW5kZXgiLCJwdXNoIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ0cmFuc2Zvcm1zIiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zIiwidmVydGV4SW5kZXhlcyIsImNhbGN1bGF0ZVZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwiY2FsY3VsYXRlVmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleENvbG91cnMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleENvbG91cnMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsbUJBQVIsQ0FBdEI7O0FBRUEsSUFBTUMsU0FBUyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBZjtBQUFBLElBQ01DLHlCQUF5QixDQUV2QixDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQUZ1QixFQUd2QixDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQUh1QixFQUl2QixDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQUp1QixFQUt2QixDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQUx1QixDQUQvQjs7SUFVTUMsSTs7Ozs7Ozs7Ozs7MkNBQ21CQyxlLEVBQWlCO0FBQ3RDLFVBQU1DLHdCQUF3QkQsZ0JBQWdCRSxNQUE5QztBQUFBLFVBQ01DLHNCQUFzQkYscUJBRDVCO0FBQUEsVUFDb0Q7QUFDOUNHLHFCQUFlUCxNQUZyQjtBQUFBLFVBR01RLGdCQUFnQixFQUh0Qjs7QUFLQSxXQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFILG1CQUE1QixFQUFpREcsT0FBakQsRUFBMEQ7QUFDeERELHNCQUFjRSxJQUFkLENBQW1CSCxZQUFuQjtBQUNEOztBQUVELGFBQU9DLGFBQVA7QUFDRDs7O2dEQUUyQjtBQUMxQixhQUFPUCxzQkFBUDtBQUNEOzs7MkJBRU1VLGMsRUFBZ0JDLGUsRUFBaUJDLFUsRUFBWTtBQUNsRCxVQUFNVixrQkFBa0IsS0FBS1csd0JBQUwsQ0FBOEJELFVBQTlCLENBQXhCO0FBQUEsVUFDTUUsZ0JBQWdCLEtBQUtDLHNCQUFMLENBQTRCYixlQUE1QixDQUR0QjtBQUFBLFVBRU1jLGdCQUFnQixLQUFLQyxzQkFBTCxDQUE0QmYsZUFBNUIsQ0FGdEI7QUFBQSxVQUdNSyxnQkFBZ0IsS0FBS1csc0JBQUwsQ0FBNEJoQixlQUE1QixDQUh0Qjs7QUFLQVEscUJBQWVTLGtCQUFmLENBQWtDakIsZUFBbEM7QUFDQVEscUJBQWVVLGdCQUFmLENBQWdDTixhQUFoQztBQUNBSixxQkFBZVcsZ0JBQWYsQ0FBZ0NMLGFBQWhDO0FBQ0FOLHFCQUFlWSxnQkFBZixDQUFnQ2YsYUFBaEM7O0FBRUEseUdBQWFHLGNBQWIsRUFBNkJDLGVBQTdCLEVBQThDQyxVQUE5QztBQUNEOzs7bUNBRXFCVyxLLEVBQU9DLFUsRUFBWTtBQUFFLGFBQU8zQixjQUFjNEIsY0FBZCxDQUE2QkYsS0FBN0IsRUFBb0NDLFVBQXBDLENBQVA7QUFBeUQ7Ozs7RUFoQ25GM0IsYTs7QUFtQ25CNkIsT0FBT0MsT0FBUCxHQUFpQjFCLElBQWpCIiwiZmlsZSI6Im1hc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jb25zdCBjb2xvdXIgPSBbIDEsIDEsIDEsIDEgXSxcbiAgICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSBbXG5cbiAgICAgICAgWyAwLjAsIDAuMCwgMC4wIF0sXG4gICAgICAgIFsgMC4wLCAxLjAsIDAuMCBdLFxuICAgICAgICBbIDAuMCwgMS4wLCAxLjAgXSxcbiAgICAgICAgWyAwLjAsIDAuMCwgMS4wIF0sXG4gICAgICBcbiAgICAgIF07XG5cbmNsYXNzIE1hc2sgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2FsY3VsYXRlVmVydGV4Q29sb3Vycyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHZlcnRleENvbG91cnNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGgsICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXIgPSBjb2xvdXIsXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZlcnRleENvbG91cnNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZlcnRleENvbG91cnMucHVzaCh2ZXJ0ZXhDb2xvdXIpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gaW5pdGlhbFZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnModHJhbnNmb3JtcyksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhlcyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbHModmVydGV4UG9zaXRpb25zKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcblxuICAgIHN1cGVyLmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNrO1xuIl19