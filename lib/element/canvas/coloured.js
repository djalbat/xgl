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
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms, masking) {
      _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);

      if (!masking) {
        this.render(colourRenderer);
      }
    }
  }, {
    key: 'render',
    value: function render(colourRenderer) {
      console.log(this.facets.length);

      var vertexPositions = this.calculateVertexPositions(),
          vertexIndexes = this.calculateVertexIndexes(),
          vertexNormals = this.calculateVertexNormals(),
          vertexColours = this.calculateVertexColours();

      colourRenderer.addVertexPositions(vertexPositions);
      colourRenderer.addVertexIndexes(vertexIndexes);
      colourRenderer.addVertexNormals(vertexNormals);
      colourRenderer.addVertexColours(vertexColours);
    }
  }, {
    key: 'calculateVertexColours',
    value: function calculateVertexColours() {
      var facets = this.getFacets(),
          vertexColour = this.colour,
          vertexColours = facets.reduce(function (vertexColours, facet) {
        var vertexColour = [Math.random(), Math.random(), Math.random(), 1];

        vertexColours.push(vertexColour);
        vertexColours.push(vertexColour);
        vertexColours.push(vertexColour);

        return vertexColours;
      }, []);

      return vertexColours;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsImZhY2V0cyIsInRyYW5zZm9ybSIsImNvbG91ciIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsIm1hc2tpbmciLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwidmVydGV4UG9zaXRpb25zIiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zIiwidmVydGV4SW5kZXhlcyIsImNhbGN1bGF0ZVZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwiY2FsY3VsYXRlVmVydGV4Tm9ybWFscyIsInZlcnRleENvbG91cnMiLCJjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzIiwiYWRkVmVydGV4UG9zaXRpb25zIiwiYWRkVmVydGV4SW5kZXhlcyIsImFkZFZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhDb2xvdXJzIiwiZ2V0RmFjZXRzIiwidmVydGV4Q29sb3VyIiwicmVkdWNlIiwiZmFjZXQiLCJNYXRoIiwicmFuZG9tIiwicHVzaCIsIkNsYXNzIiwicHJvcGVydGllcyIsInZlcnRpY2VzIiwiaW5kZXhlcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNvbG91cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxzQkFBUixDQUF0Qjs7SUFFTUMscUI7OztBQUNKLGlDQUFZQyxNQUFaLEVBQW9CQyxTQUFwQixFQUErQkMsTUFBL0IsRUFBdUM7QUFBQTs7QUFBQSw4SUFDL0JGLE1BRCtCLEVBQ3ZCQyxTQUR1Qjs7QUFHckMsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBSHFDO0FBSXRDOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQSxNQUFaO0FBQ0Q7OzsyQkFFTUMsYyxFQUFnQkMsZSxFQUFpQkMsVSxFQUFZQyxPLEVBQVM7QUFDM0QsMklBQWFILGNBQWIsRUFBNkJDLGVBQTdCLEVBQThDQyxVQUE5Qzs7QUFFQSxVQUFJLENBQUNDLE9BQUwsRUFBYztBQUNaLGFBQUtDLE1BQUwsQ0FBWUosY0FBWjtBQUNEO0FBQ0Y7OzsyQkFFTUEsYyxFQUFnQjtBQUNyQkssY0FBUUMsR0FBUixDQUFZLEtBQUtULE1BQUwsQ0FBWVUsTUFBeEI7O0FBRUEsVUFBTUMsa0JBQWtCLEtBQUtDLHdCQUFMLEVBQXhCO0FBQUEsVUFDTUMsZ0JBQWdCLEtBQUtDLHNCQUFMLEVBRHRCO0FBQUEsVUFFTUMsZ0JBQWdCLEtBQUtDLHNCQUFMLEVBRnRCO0FBQUEsVUFHTUMsZ0JBQWdCLEtBQUtDLHNCQUFMLEVBSHRCOztBQUtBZixxQkFBZWdCLGtCQUFmLENBQWtDUixlQUFsQztBQUNBUixxQkFBZWlCLGdCQUFmLENBQWdDUCxhQUFoQztBQUNBVixxQkFBZWtCLGdCQUFmLENBQWdDTixhQUFoQztBQUNBWixxQkFBZW1CLGdCQUFmLENBQWdDTCxhQUFoQztBQUNEOzs7NkNBRXdCO0FBQ3ZCLFVBQU1qQixTQUFTLEtBQUt1QixTQUFMLEVBQWY7QUFBQSxVQUNNQyxlQUFlLEtBQUt0QixNQUQxQjtBQUFBLFVBRU1lLGdCQUFnQmpCLE9BQU95QixNQUFQLENBQWMsVUFBU1IsYUFBVCxFQUF3QlMsS0FBeEIsRUFBK0I7QUFDM0QsWUFBTUYsZUFBZSxDQUFFRyxLQUFLQyxNQUFMLEVBQUYsRUFBaUJELEtBQUtDLE1BQUwsRUFBakIsRUFBZ0NELEtBQUtDLE1BQUwsRUFBaEMsRUFBK0MsQ0FBL0MsQ0FBckI7O0FBRUFYLHNCQUFjWSxJQUFkLENBQW1CTCxZQUFuQjtBQUNBUCxzQkFBY1ksSUFBZCxDQUFtQkwsWUFBbkI7QUFDQVAsc0JBQWNZLElBQWQsQ0FBbUJMLFlBQW5COztBQUVBLGVBQU9QLGFBQVA7QUFDRCxPQVJlLEVBUWIsRUFSYSxDQUZ0Qjs7QUFZQSxhQUFPQSxhQUFQO0FBQ0Q7OzttQ0FFcUJhLEssRUFBT0MsVSxFQUFZQyxRLEVBQVVDLE8sRUFBZ0M7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQzNFLFVBQUVoQyxNQUFGLEdBQWE2QixVQUFiLENBQUU3QixNQUFGO0FBQUEsVUFDQWlDLHFCQURBLEdBQ3dCdEMsY0FBY3VDLGNBQWQsdUJBQTZCTixLQUE3QixFQUFvQ0MsVUFBcEMsRUFBZ0RDLFFBQWhELEVBQTBEQyxPQUExRCxFQUFtRS9CLE1BQW5FLFNBQThFZ0Msa0JBQTlFLEVBRHhCOzs7QUFHTixhQUFPQyxxQkFBUDtBQUNEOzs7O0VBdERpQ3RDLGE7O0FBeURwQ3dDLE9BQU9DLE9BQVAsR0FBaUJ2QyxxQkFBakIiLCJmaWxlIjoiY29sb3VyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCB0cmFuc2Zvcm0sIGNvbG91cikge1xuICAgIHN1cGVyKGZhY2V0cywgdHJhbnNmb3JtKTtcblxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgZ2V0Q29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91cjtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNraW5nKSB7XG4gICAgc3VwZXIuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpO1xuXG4gICAgaWYgKCFtYXNraW5nKSB7XG4gICAgICB0aGlzLnJlbmRlcihjb2xvdXJSZW5kZXJlcik7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKGNvbG91clJlbmRlcmVyKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5mYWNldHMubGVuZ3RoKTtcbiAgICBcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleEluZGV4ZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Q29sb3VycygpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycyk7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyID0gdGhpcy5jb2xvdXIsXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IGZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4Q29sb3VycywgZmFjZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleENvbG91ciA9IFsgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgMSBdO1xuXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzLnB1c2godmVydGV4Q29sb3VyKTtcbiAgICAgICAgICAgIHZlcnRleENvbG91cnMucHVzaCh2ZXJ0ZXhDb2xvdXIpO1xuICAgICAgICAgICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB2ZXJ0aWNlcywgaW5kZXhlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBjb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyZWRDYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4iXX0=