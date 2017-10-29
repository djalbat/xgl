'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas');

var initialVertexPositions = [[0.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 1.0, 1.0], [0.0, 0.0, 1.0]];

var Mask = function (_CanvasElement) {
  _inherits(Mask, _CanvasElement);

  function Mask() {
    _classCallCheck(this, Mask);

    return _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).apply(this, arguments));
  }

  _createClass(Mask, [{
    key: 'getInitialVertexPositions',
    value: function getInitialVertexPositions() {
      return initialVertexPositions;
    }
  }, {
    key: 'calculateVertexPositions',
    value: function calculateVertexPositions(transform, transforms) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      var vertexPositions = _get(Mask.prototype.__proto__ || Object.getPrototypeOf(Mask.prototype), 'calculateVertexPositions', this).call(this, transforms);

      return vertexPositions;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9tYXNrLmpzIl0sIm5hbWVzIjpbIkNhbnZhc0VsZW1lbnQiLCJyZXF1aXJlIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9ucyIsIk1hc2siLCJ0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1zIiwidmVydGV4UG9zaXRpb25zIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLHNCQUFSLENBQXRCOztBQUVBLElBQU1DLHlCQUF5QixDQUV2QixDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQUZ1QixFQUd2QixDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQUh1QixFQUl2QixDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQUp1QixFQUt2QixDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQUx1QixDQUEvQjs7SUFTTUMsSTs7Ozs7Ozs7Ozs7Z0RBQ3dCO0FBQzFCLGFBQU9ELHNCQUFQO0FBQ0Q7Ozs2Q0FFd0JFLFMsRUFBV0MsVSxFQUFZO0FBQzlDQSxvQkFBYyxLQUFLRCxTQUFuQiw0QkFBaUNDLFVBQWpDLEdBRDhDLENBQ0E7O0FBRTlDLFVBQU1DLHVJQUFpREQsVUFBakQsQ0FBTjs7QUFFQSxhQUFPQyxlQUFQO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUFFLGFBQU9QLGNBQWNRLGNBQWQsQ0FBNkJMLElBQTdCLEVBQW1DSSxVQUFuQyxDQUFQO0FBQXdEOzs7O0VBYjNFUCxhOztBQWdCbkJTLE9BQU9DLE9BQVAsR0FBaUJQLElBQWpCIiwiZmlsZSI6Im1hc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jb25zdCBpbml0aWFsVmVydGV4UG9zaXRpb25zID0gW1xuXG4gICAgICAgIFsgMC4wLCAwLjAsIDAuMCBdLFxuICAgICAgICBbIDAuMCwgMS4wLCAwLjAgXSxcbiAgICAgICAgWyAwLjAsIDEuMCwgMS4wIF0sXG4gICAgICAgIFsgMC4wLCAwLjAsIDEuMCBdLFxuICAgICAgXG4gICAgICBdO1xuXG5jbGFzcyBNYXNrIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnModHJhbnNmb3JtLCB0cmFuc2Zvcm1zKSB7XG4gICAgdHJhbnNmb3JtcyA9IFt0aGlzLnRyYW5zZm9ybSwgLi4udHJhbnNmb3Jtc107IC8vL1xuXG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gc3VwZXIuY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zKHRyYW5zZm9ybXMpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7ICAgIFxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNrO1xuIl19