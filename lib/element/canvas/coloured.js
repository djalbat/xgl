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
    value: function create(colourRenderer, textureRenderer, transforms, masked) {
      _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);

      if (!masked) {
        this.render(colourRenderer);
      }
    }
  }, {
    key: 'render',
    value: function render(colourRenderer) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsImZhY2V0cyIsInRyYW5zZm9ybSIsImNvbG91ciIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsIm1hc2tlZCIsInJlbmRlciIsInZlcnRleFBvc2l0aW9ucyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucyIsInZlcnRleEluZGV4ZXMiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhDb2xvdXJzIiwiY2FsY3VsYXRlVmVydGV4Q29sb3VycyIsImFkZFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleEluZGV4ZXMiLCJhZGRWZXJ0ZXhOb3JtYWxzIiwiYWRkVmVydGV4Q29sb3VycyIsImdldEZhY2V0cyIsInZlcnRleENvbG91ciIsInJlZHVjZSIsImZhY2V0IiwicHVzaCIsIkNsYXNzIiwicHJvcGVydGllcyIsInZlcnRpY2VzIiwiaW5kZXhlcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNvbG91cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxzQkFBUixDQUF0Qjs7SUFFTUMscUI7OztBQUNKLGlDQUFZQyxNQUFaLEVBQW9CQyxTQUFwQixFQUErQkMsTUFBL0IsRUFBdUM7QUFBQTs7QUFBQSw4SUFDL0JGLE1BRCtCLEVBQ3ZCQyxTQUR1Qjs7QUFHckMsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBSHFDO0FBSXRDOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQSxNQUFaO0FBQ0Q7OzsyQkFFTUMsYyxFQUFnQkMsZSxFQUFpQkMsVSxFQUFZQyxNLEVBQVE7QUFDMUQsMklBQWFILGNBQWIsRUFBNkJDLGVBQTdCLEVBQThDQyxVQUE5Qzs7QUFFQSxVQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNYLGFBQUtDLE1BQUwsQ0FBWUosY0FBWjtBQUNEO0FBQ0Y7OzsyQkFFTUEsYyxFQUFnQjtBQUNyQixVQUFNSyxrQkFBa0IsS0FBS0Msd0JBQUwsRUFBeEI7QUFBQSxVQUNNQyxnQkFBZ0IsS0FBS0Msc0JBQUwsRUFEdEI7QUFBQSxVQUVNQyxnQkFBZ0IsS0FBS0Msc0JBQUwsRUFGdEI7QUFBQSxVQUdNQyxnQkFBZ0IsS0FBS0Msc0JBQUwsRUFIdEI7O0FBS0FaLHFCQUFlYSxrQkFBZixDQUFrQ1IsZUFBbEM7QUFDQUwscUJBQWVjLGdCQUFmLENBQWdDUCxhQUFoQztBQUNBUCxxQkFBZWUsZ0JBQWYsQ0FBZ0NOLGFBQWhDO0FBQ0FULHFCQUFlZ0IsZ0JBQWYsQ0FBZ0NMLGFBQWhDO0FBQ0Q7Ozs2Q0FFd0I7QUFDdkIsVUFBTWQsU0FBUyxLQUFLb0IsU0FBTCxFQUFmO0FBQUEsVUFDTUMsZUFBZSxLQUFLbkIsTUFEMUI7QUFBQSxVQUVNWSxnQkFBZ0JkLE9BQU9zQixNQUFQLENBQWMsVUFBU1IsYUFBVCxFQUF3QlMsS0FBeEIsRUFBK0I7QUFDM0RULHNCQUFjVSxJQUFkLENBQW1CSCxZQUFuQjtBQUNBUCxzQkFBY1UsSUFBZCxDQUFtQkgsWUFBbkI7QUFDQVAsc0JBQWNVLElBQWQsQ0FBbUJILFlBQW5COztBQUVBLGVBQU9QLGFBQVA7QUFDRCxPQU5lLEVBTWIsRUFOYSxDQUZ0Qjs7QUFVQSxhQUFPQSxhQUFQO0FBQ0Q7OzttQ0FFcUJXLEssRUFBT0MsVSxFQUFZQyxRLEVBQVVDLE8sRUFBZ0M7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQzNFLFVBQUUzQixNQUFGLEdBQWF3QixVQUFiLENBQUV4QixNQUFGO0FBQUEsVUFDQTRCLHFCQURBLEdBQ3dCakMsY0FBY2tDLGNBQWQsdUJBQTZCTixLQUE3QixFQUFvQ0MsVUFBcEMsRUFBZ0RDLFFBQWhELEVBQTBEQyxPQUExRCxFQUFtRTFCLE1BQW5FLFNBQThFMkIsa0JBQTlFLEVBRHhCOzs7QUFHTixhQUFPQyxxQkFBUDtBQUNEOzs7O0VBbERpQ2pDLGE7O0FBcURwQ21DLE9BQU9DLE9BQVAsR0FBaUJsQyxxQkFBakIiLCJmaWxlIjoiY29sb3VyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCB0cmFuc2Zvcm0sIGNvbG91cikge1xuICAgIHN1cGVyKGZhY2V0cywgdHJhbnNmb3JtKTtcblxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgZ2V0Q29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91cjtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNrZWQpIHtcbiAgICBzdXBlci5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcyk7XG5cbiAgICBpZiAoIW1hc2tlZCkge1xuICAgICAgdGhpcy5yZW5kZXIoY29sb3VyUmVuZGVyZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihjb2xvdXJSZW5kZXJlcikge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhlcygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzKCk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleENvbG91cnMoKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLmNvbG91cixcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhDb2xvdXJzLCBmYWNldCkge1xuICAgICAgICAgICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzLnB1c2godmVydGV4Q29sb3VyKTtcbiAgICAgICAgICAgIHZlcnRleENvbG91cnMucHVzaCh2ZXJ0ZXhDb2xvdXIpO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91cmVkQ2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHZlcnRpY2VzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRDYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRDYW52YXNFbGVtZW50O1xuIl19