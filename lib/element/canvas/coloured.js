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
          facetsLength = facets.length,
          vertexColoursLength = facetsLength * 3,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsImZhY2V0cyIsInRyYW5zZm9ybSIsImNvbG91ciIsImdldEZhY2V0cyIsImZhY2V0c0xlbmd0aCIsImxlbmd0aCIsInZlcnRleENvbG91cnNMZW5ndGgiLCJ2ZXJ0ZXhDb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJzIiwiaW5kZXgiLCJwdXNoIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ0cmFuc2Zvcm1zIiwidmVydGV4UG9zaXRpb25zIiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zIiwidmVydGV4SW5kZXhlcyIsImNhbGN1bGF0ZVZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwiY2FsY3VsYXRlVmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleENvbG91cnMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleENvbG91cnMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ2ZXJ0aWNlcyIsImluZGV4ZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJjb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsc0JBQVIsQ0FBdEI7O0lBRU1DLHFCOzs7QUFDSixpQ0FBWUMsTUFBWixFQUFvQkMsU0FBcEIsRUFBK0JDLE1BQS9CLEVBQXVDO0FBQUE7O0FBQUEsOElBQy9CRixNQUQrQixFQUN2QkMsU0FEdUI7O0FBR3JDLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUhxQztBQUl0Qzs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsTUFBWjtBQUNEOzs7NkNBRXdCO0FBQ3ZCLFVBQU1GLFNBQVMsS0FBS0csU0FBTCxFQUFmO0FBQUEsVUFDTUMsZUFBZUosT0FBT0ssTUFENUI7QUFBQSxVQUVNQyxzQkFBc0JGLGVBQWUsQ0FGM0M7QUFBQSxVQUUrQztBQUN6Q0cscUJBQWUsS0FBS0wsTUFIMUI7QUFBQSxVQUlNTSxnQkFBZ0IsRUFKdEI7O0FBTUEsV0FBSyxJQUFJQyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRSCxtQkFBNUIsRUFBaURHLE9BQWpELEVBQTBEO0FBQ3hERCxzQkFBY0UsSUFBZCxDQUFtQkgsWUFBbkI7QUFDRDs7QUFFRCxhQUFPQyxhQUFQO0FBQ0Q7OzsyQkFFTUcsYyxFQUFnQkMsZSxFQUFpQkMsVSxFQUFZO0FBQ2xELDJJQUFhRixjQUFiLEVBQTZCQyxlQUE3QixFQUE4Q0MsVUFBOUM7O0FBRUEsVUFBTUMsa0JBQWtCLEtBQUtDLHdCQUFMLEVBQXhCO0FBQUEsVUFDTUMsZ0JBQWdCLEtBQUtDLHNCQUFMLEVBRHRCO0FBQUEsVUFFTUMsZ0JBQWdCLEtBQUtDLHNCQUFMLEVBRnRCO0FBQUEsVUFHTVgsZ0JBQWdCLEtBQUtZLHNCQUFMLEVBSHRCOztBQUtBVCxxQkFBZVUsa0JBQWYsQ0FBa0NQLGVBQWxDO0FBQ0FILHFCQUFlVyxnQkFBZixDQUFnQ04sYUFBaEM7QUFDQUwscUJBQWVZLGdCQUFmLENBQWdDTCxhQUFoQztBQUNBUCxxQkFBZWEsZ0JBQWYsQ0FBZ0NoQixhQUFoQztBQUNEOzs7bUNBRXFCaUIsSyxFQUFPQyxVLEVBQVlDLFEsRUFBVUMsTyxFQUFnQztBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFDM0UsVUFBRTNCLE1BQUYsR0FBYXdCLFVBQWIsQ0FBRXhCLE1BQUY7QUFBQSxVQUNBNEIscUJBREEsR0FDd0JqQyxjQUFja0MsY0FBZCx1QkFBNkJOLEtBQTdCLEVBQW9DQyxVQUFwQyxFQUFnREMsUUFBaEQsRUFBMERDLE9BQTFELEVBQW1FMUIsTUFBbkUsU0FBOEUyQixrQkFBOUUsRUFEeEI7OztBQUdOLGFBQU9DLHFCQUFQO0FBQ0Q7Ozs7RUE1Q2lDakMsYTs7QUErQ3BDbUMsT0FBT0MsT0FBUCxHQUFpQmxDLHFCQUFqQiIsImZpbGUiOiJjb2xvdXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihmYWNldHMsIHRyYW5zZm9ybSwgY29sb3VyKSB7XG4gICAgc3VwZXIoZmFjZXRzLCB0cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBnZXRDb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIGZhY2V0c0xlbmd0aCA9IGZhY2V0cy5sZW5ndGgsXG4gICAgICAgICAgdmVydGV4Q29sb3Vyc0xlbmd0aCA9IGZhY2V0c0xlbmd0aCAqIDMsICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLmNvbG91cixcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmVydGV4Q29sb3Vyc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIHN1cGVyLmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcbiAgICBcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleEluZGV4ZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Q29sb3VycygpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHZlcnRpY2VzLCBpbmRleGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJlZENhbnZhc0VsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB2ZXJ0aWNlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkQ2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkQ2FudmFzRWxlbWVudDtcbiJdfQ==