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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsImZhY2V0cyIsInRyYW5zZm9ybSIsImNvbG91ciIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsIm1hc2tpbmciLCJyZW5kZXIiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhJbmRleGVzIiwiY2FsY3VsYXRlVmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxzIiwidmVydGV4Q29sb3VycyIsImNhbGN1bGF0ZVZlcnRleENvbG91cnMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleENvbG91cnMiLCJnZXRGYWNldHMiLCJ2ZXJ0ZXhDb2xvdXIiLCJyZWR1Y2UiLCJmYWNldCIsInB1c2giLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ2ZXJ0aWNlcyIsImluZGV4ZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJjb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsc0JBQVIsQ0FBdEI7O0lBRU1DLHFCOzs7QUFDSixpQ0FBWUMsTUFBWixFQUFvQkMsU0FBcEIsRUFBK0JDLE1BQS9CLEVBQXVDO0FBQUE7O0FBQUEsOElBQy9CRixNQUQrQixFQUN2QkMsU0FEdUI7O0FBR3JDLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUhxQztBQUl0Qzs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsTUFBWjtBQUNEOzs7MkJBRU1DLGMsRUFBZ0JDLGUsRUFBaUJDLFUsRUFBWUMsTyxFQUFTO0FBQzNELDJJQUFhSCxjQUFiLEVBQTZCQyxlQUE3QixFQUE4Q0MsVUFBOUM7O0FBRUEsVUFBSSxDQUFDQyxPQUFMLEVBQWM7QUFDWixhQUFLQyxNQUFMLENBQVlKLGNBQVo7QUFDRDtBQUNGOzs7MkJBRU1BLGMsRUFBZ0I7QUFDckIsVUFBTUssa0JBQWtCLEtBQUtDLHdCQUFMLEVBQXhCO0FBQUEsVUFDTUMsZ0JBQWdCLEtBQUtDLHNCQUFMLEVBRHRCO0FBQUEsVUFFTUMsZ0JBQWdCLEtBQUtDLHNCQUFMLEVBRnRCO0FBQUEsVUFHTUMsZ0JBQWdCLEtBQUtDLHNCQUFMLEVBSHRCOztBQUtBWixxQkFBZWEsa0JBQWYsQ0FBa0NSLGVBQWxDO0FBQ0FMLHFCQUFlYyxnQkFBZixDQUFnQ1AsYUFBaEM7QUFDQVAscUJBQWVlLGdCQUFmLENBQWdDTixhQUFoQztBQUNBVCxxQkFBZWdCLGdCQUFmLENBQWdDTCxhQUFoQztBQUNEOzs7NkNBRXdCO0FBQ3ZCLFVBQU1kLFNBQVMsS0FBS29CLFNBQUwsRUFBZjtBQUFBLFVBQ01DLGVBQWUsS0FBS25CLE1BRDFCO0FBQUEsVUFFTVksZ0JBQWdCZCxPQUFPc0IsTUFBUCxDQUFjLFVBQVNSLGFBQVQsRUFBd0JTLEtBQXhCLEVBQStCO0FBQzNEVCxzQkFBY1UsSUFBZCxDQUFtQkgsWUFBbkI7QUFDQVAsc0JBQWNVLElBQWQsQ0FBbUJILFlBQW5CO0FBQ0FQLHNCQUFjVSxJQUFkLENBQW1CSCxZQUFuQjs7QUFFQSxlQUFPUCxhQUFQO0FBQ0QsT0FOZSxFQU1iLEVBTmEsQ0FGdEI7O0FBVUEsYUFBT0EsYUFBUDtBQUNEOzs7bUNBRXFCVyxLLEVBQU9DLFUsRUFBWUMsUSxFQUFVQyxPLEVBQWdDO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUMzRSxVQUFFM0IsTUFBRixHQUFhd0IsVUFBYixDQUFFeEIsTUFBRjtBQUFBLFVBQ0E0QixxQkFEQSxHQUN3QmpDLGNBQWNrQyxjQUFkLHVCQUE2Qk4sS0FBN0IsRUFBb0NDLFVBQXBDLEVBQWdEQyxRQUFoRCxFQUEwREMsT0FBMUQsRUFBbUUxQixNQUFuRSxTQUE4RTJCLGtCQUE5RSxFQUR4Qjs7O0FBR04sYUFBT0MscUJBQVA7QUFDRDs7OztFQWxEaUNqQyxhOztBQXFEcENtQyxPQUFPQyxPQUFQLEdBQWlCbEMscUJBQWpCIiwiZmlsZSI6ImNvbG91cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKTtcblxuY2xhc3MgQ29sb3VyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGZhY2V0cywgdHJhbnNmb3JtLCBjb2xvdXIpIHtcbiAgICBzdXBlcihmYWNldHMsIHRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIGdldENvbG91cigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvdXI7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2luZykge1xuICAgIHN1cGVyLmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcblxuICAgIGlmICghbWFza2luZykge1xuICAgICAgdGhpcy5yZW5kZXIoY29sb3VyUmVuZGVyZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihjb2xvdXJSZW5kZXJlcikge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhlcygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzKCk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleENvbG91cnMoKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLmNvbG91cixcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhDb2xvdXJzLCBmYWNldCkge1xuICAgICAgICAgICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzLnB1c2godmVydGV4Q29sb3VyKTtcbiAgICAgICAgICAgIHZlcnRleENvbG91cnMucHVzaCh2ZXJ0ZXhDb2xvdXIpO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91cmVkQ2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHZlcnRpY2VzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRDYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRDYW52YXNFbGVtZW50O1xuIl19