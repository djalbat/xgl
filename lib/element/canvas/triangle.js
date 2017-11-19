'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('../../facet'),
    ColouredCanvasElement = require('../../element/canvas/coloured');

var defaultVertices = [[0, 0, 0], [1, 0, 0], [0, 1, 0]];

var Triangle = function (_ColouredCanvasElemen) {
  _inherits(Triangle, _ColouredCanvasElemen);

  function Triangle() {
    _classCallCheck(this, Triangle);

    return _possibleConstructorReturn(this, (Triangle.__proto__ || Object.getPrototypeOf(Triangle)).apply(this, arguments));
  }

  _createClass(Triangle, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$vertices = properties.vertices,
          vertices = _properties$vertices === undefined ? defaultVertices : _properties$vertices,
          facet = Facet.fromVertices(vertices),
          facets = [facet],
          triangle = ColouredCanvasElement.fromProperties(Triangle, properties, facets);


      return triangle;
    }
  }]);

  return Triangle;
}(ColouredCanvasElement);

module.exports = Triangle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90cmlhbmdsZS5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJkZWZhdWx0VmVydGljZXMiLCJUcmlhbmdsZSIsInByb3BlcnRpZXMiLCJ2ZXJ0aWNlcyIsImZhY2V0IiwiZnJvbVZlcnRpY2VzIiwiZmFjZXRzIiwidHJpYW5nbGUiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxhQUFSLENBQWQ7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEsK0JBQVIsQ0FEOUI7O0FBR0EsSUFBTUUsa0JBQWtCLENBQ3RCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRHNCLEVBRXRCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRnNCLEVBR3RCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBSHNCLENBQXhCOztJQU1NQyxROzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFBLGlDQUNPQSxVQURQLENBQ3hCQyxRQUR3QjtBQUFBLFVBQ3hCQSxRQUR3Qix3Q0FDYkgsZUFEYTtBQUFBLFVBRTFCSSxLQUYwQixHQUVsQlAsTUFBTVEsWUFBTixDQUFtQkYsUUFBbkIsQ0FGa0I7QUFBQSxVQUcxQkcsTUFIMEIsR0FHakIsQ0FDUEYsS0FETyxDQUhpQjtBQUFBLFVBTTFCRyxRQU4wQixHQU1mUixzQkFBc0JTLGNBQXRCLENBQXFDUCxRQUFyQyxFQUErQ0MsVUFBL0MsRUFBMkRJLE1BQTNELENBTmU7OztBQVFoQyxhQUFPQyxRQUFQO0FBQ0Q7Ozs7RUFWb0JSLHFCOztBQWF2QlUsT0FBT0MsT0FBUCxHQUFpQlQsUUFBakIiLCJmaWxlIjoidHJpYW5nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZhY2V0ID0gcmVxdWlyZSgnLi4vLi4vZmFjZXQnKSxcbiAgICAgIENvbG91cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkJyk7XG5cbmNvbnN0IGRlZmF1bHRWZXJ0aWNlcyA9IFtcbiAgWyAwLCAwLCAwIF0sXG4gIFsgMSwgMCwgMCBdLFxuICBbIDAsIDEsIDAgXVxuXTtcblxuY2xhc3MgVHJpYW5nbGUgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgdmVydGljZXMgPSBkZWZhdWx0VmVydGljZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXModmVydGljZXMpLFxuICAgICAgICAgIGZhY2V0cyA9IFtcbiAgICAgICAgICAgIGZhY2V0XG4gICAgICAgICAgXSxcbiAgICAgICAgICB0cmlhbmdsZSA9IENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUcmlhbmdsZSwgcHJvcGVydGllcywgZmFjZXRzKTtcblxuICAgIHJldHVybiB0cmlhbmdsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyaWFuZ2xlO1xuIl19