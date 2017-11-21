'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas');

var ColouredCanvasElement = function (_CanvasElement) {
  _inherits(ColouredCanvasElement, _CanvasElement);

  function ColouredCanvasElement(facets, transform, colour) {
    _classCallCheck(this, ColouredCanvasElement);

    var _this = _possibleConstructorReturn(this, (ColouredCanvasElement.__proto__ || Object.getPrototypeOf(ColouredCanvasElement)).call(this, facets, transform));

    _this.colour = colour;
    return _this;
  }

  _createClass(ColouredCanvasElement, [{
    key: 'getColour',
    value: function getColour() {
      return this.colour;
    }
  }, {
    key: 'calculateVertexColours',
    value: function calculateVertexColours() {
      var facets = this.getFacets(),
          vertexColour = this.colour,
          vertexColours = facets.reduce(function (vertexColours, facet) {
        vertexColours.push(vertexColour);
        vertexColours.push(vertexColour);
        vertexColours.push(vertexColour);

        return vertexColours;
      }, []);

      return vertexColours;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);

      var vertexPositions = this.calculateVertexPositions(),
          vertexIndexes = this.calculateVertexIndexes(),
          vertexNormals = this.calculateVertexNormals(),
          vertexColours = this.calculateVertexColours();

      colourRenderer.addVertexPositions(vertexPositions);
      colourRenderer.addVertexIndexes(vertexIndexes);
      colourRenderer.addVertexNormals(vertexNormals);
      colourRenderer.addVertexColours(vertexColours);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, vertices, indexes) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        remainingArguments[_key - 4] = arguments[_key];
      }

      var colour = properties.colour,
          colouredCanvasElement = CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, vertices, indexes, colour].concat(remainingArguments));


      return colouredCanvasElement;
    }
  }]);

  return ColouredCanvasElement;
}(CanvasElement);

module.exports = ColouredCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsImZhY2V0cyIsInRyYW5zZm9ybSIsImNvbG91ciIsImdldEZhY2V0cyIsInZlcnRleENvbG91ciIsInZlcnRleENvbG91cnMiLCJyZWR1Y2UiLCJmYWNldCIsInB1c2giLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInRyYW5zZm9ybXMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhJbmRleGVzIiwiY2FsY3VsYXRlVmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxzIiwiY2FsY3VsYXRlVmVydGV4Q29sb3VycyIsImFkZFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleEluZGV4ZXMiLCJhZGRWZXJ0ZXhOb3JtYWxzIiwiYWRkVmVydGV4Q29sb3VycyIsIkNsYXNzIiwicHJvcGVydGllcyIsInZlcnRpY2VzIiwiaW5kZXhlcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNvbG91cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxzQkFBUixDQUF0Qjs7SUFFTUMscUI7OztBQUNKLGlDQUFZQyxNQUFaLEVBQW9CQyxTQUFwQixFQUErQkMsTUFBL0IsRUFBdUM7QUFBQTs7QUFBQSw4SUFDL0JGLE1BRCtCLEVBQ3ZCQyxTQUR1Qjs7QUFHckMsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBSHFDO0FBSXRDOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQSxNQUFaO0FBQ0Q7Ozs2Q0FFd0I7QUFDdkIsVUFBTUYsU0FBUyxLQUFLRyxTQUFMLEVBQWY7QUFBQSxVQUNNQyxlQUFlLEtBQUtGLE1BRDFCO0FBQUEsVUFFTUcsZ0JBQWdCTCxPQUFPTSxNQUFQLENBQWMsVUFBU0QsYUFBVCxFQUF3QkUsS0FBeEIsRUFBK0I7QUFDM0RGLHNCQUFjRyxJQUFkLENBQW1CSixZQUFuQjtBQUNBQyxzQkFBY0csSUFBZCxDQUFtQkosWUFBbkI7QUFDQUMsc0JBQWNHLElBQWQsQ0FBbUJKLFlBQW5COztBQUVBLGVBQU9DLGFBQVA7QUFDRCxPQU5lLEVBTWIsRUFOYSxDQUZ0Qjs7QUFVQSxhQUFPQSxhQUFQO0FBQ0Q7OzsyQkFFTUksYyxFQUFnQkMsZSxFQUFpQkMsVSxFQUFZO0FBQ2xELDJJQUFhRixjQUFiLEVBQTZCQyxlQUE3QixFQUE4Q0MsVUFBOUM7O0FBRUEsVUFBTUMsa0JBQWtCLEtBQUtDLHdCQUFMLEVBQXhCO0FBQUEsVUFDTUMsZ0JBQWdCLEtBQUtDLHNCQUFMLEVBRHRCO0FBQUEsVUFFTUMsZ0JBQWdCLEtBQUtDLHNCQUFMLEVBRnRCO0FBQUEsVUFHTVosZ0JBQWdCLEtBQUthLHNCQUFMLEVBSHRCOztBQUtBVCxxQkFBZVUsa0JBQWYsQ0FBa0NQLGVBQWxDO0FBQ0FILHFCQUFlVyxnQkFBZixDQUFnQ04sYUFBaEM7QUFDQUwscUJBQWVZLGdCQUFmLENBQWdDTCxhQUFoQztBQUNBUCxxQkFBZWEsZ0JBQWYsQ0FBZ0NqQixhQUFoQztBQUNEOzs7bUNBRXFCa0IsSyxFQUFPQyxVLEVBQVlDLFEsRUFBVUMsTyxFQUFnQztBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFDM0UsVUFBRXpCLE1BQUYsR0FBYXNCLFVBQWIsQ0FBRXRCLE1BQUY7QUFBQSxVQUNBMEIscUJBREEsR0FDd0IvQixjQUFjZ0MsY0FBZCx1QkFBNkJOLEtBQTdCLEVBQW9DQyxVQUFwQyxFQUFnREMsUUFBaEQsRUFBMERDLE9BQTFELEVBQW1FeEIsTUFBbkUsU0FBOEV5QixrQkFBOUUsRUFEeEI7OztBQUdOLGFBQU9DLHFCQUFQO0FBQ0Q7Ozs7RUE1Q2lDL0IsYTs7QUErQ3BDaUMsT0FBT0MsT0FBUCxHQUFpQmhDLHFCQUFqQiIsImZpbGUiOiJjb2xvdXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihmYWNldHMsIHRyYW5zZm9ybSwgY29sb3VyKSB7XG4gICAgc3VwZXIoZmFjZXRzLCB0cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBnZXRDb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleENvbG91ciA9IHRoaXMuY29sb3VyLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBmYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleENvbG91cnMsIGZhY2V0KSB7XG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzLnB1c2godmVydGV4Q29sb3VyKTtcbiAgICAgICAgICAgIHZlcnRleENvbG91cnMucHVzaCh2ZXJ0ZXhDb2xvdXIpO1xuICAgICAgICAgICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpIHtcbiAgICBzdXBlci5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcyk7XG4gICAgXG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleENvbG91cnMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB2ZXJ0aWNlcywgaW5kZXhlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBjb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyZWRDYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4iXX0=