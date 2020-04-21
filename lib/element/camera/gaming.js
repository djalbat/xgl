"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pan = _interopRequireDefault(require("../../miscellaneous/pan"));

var _tilt = _interopRequireDefault(require("../../miscellaneous/tilt"));

var _camera = _interopRequireDefault(require("../camera"));

var _vector = require("../../maths/vector");

var _matrix = require("../../utilities/matrix");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var defaultInitialAngles = (0, _vector.zero2)(),
    defaultInitialPosition = [0, 0, 5];

var GamingCamera = /*#__PURE__*/function (_Camera) {
  _inherits(GamingCamera, _Camera);

  function GamingCamera() {
    _classCallCheck(this, GamingCamera);

    return _possibleConstructorReturn(this, _getPrototypeOf(GamingCamera).apply(this, arguments));
  }

  _createClass(GamingCamera, [{
    key: "update",
    value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback) {
      var pan = this.getPan(),
          tilt = this.getTilt();

      if (false) {///
      } else if (shiftKeyDown) {
        pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
      } else if (mouseWheelDelta !== 0) {
        pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
      } else {
        tilt.updateAngles(relativeMouseCoordinates);
      }

      var angles = tilt.getAngles(),
          offsets = pan.getOffsets(),
          offsetsMatrix = (0, _matrix.offsetsMatrixFromOffsets)(offsets),
          positionMatrix = (0, _matrix.positionMatrixFromNothing)(),
          rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(angles),
          projectionMatrix = (0, _matrix.projectionMatrixFromWidthAndHeight)(width, height),
          normalsMatrix = (0, _matrix.normalsMatrixFromRotationsMatrix)(rotationsMatrix);
      callback(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var _properties$initialAn = properties.initialAngles,
          initialAngles = _properties$initialAn === void 0 ? defaultInitialAngles : _properties$initialAn,
          _properties$initialPo = properties.initialPosition,
          initialPosition = _properties$initialPo === void 0 ? defaultInitialPosition : _properties$initialPo,
          flipped = true,
          pan = _pan["default"].fromInitialPosition(initialPosition),
          tilt = _tilt["default"].fromInitialAnglesAndFlipped(initialAngles, flipped),
          gamingCamera = _camera["default"].fromProperties(GamingCamera, properties, pan, tilt);

      return gamingCamera;
    }
  }]);

  return GamingCamera;
}(_camera["default"]);

exports["default"] = GamingCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWluZy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0SW5pdGlhbEFuZ2xlcyIsImRlZmF1bHRJbml0aWFsUG9zaXRpb24iLCJHYW1pbmdDYW1lcmEiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbGxiYWNrIiwicGFuIiwiZ2V0UGFuIiwidGlsdCIsImdldFRpbHQiLCJ1cGRhdGVPZmZzZXRzIiwidXBkYXRlQW5nbGVzIiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwib2Zmc2V0cyIsImdldE9mZnNldHMiLCJvZmZzZXRzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInByb3BlcnRpZXMiLCJpbml0aWFsQW5nbGVzIiwiaW5pdGlhbFBvc2l0aW9uIiwiZmxpcHBlZCIsIlBhbiIsImZyb21Jbml0aWFsUG9zaXRpb24iLCJUaWx0IiwiZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkIiwiZ2FtaW5nQ2FtZXJhIiwiQ2FtZXJhIiwiZnJvbVByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNQSxvQkFBb0IsR0FBRyxvQkFBN0I7QUFBQSxJQUNNQyxzQkFBc0IsR0FBRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUQvQjs7SUFJcUJDLFk7Ozs7Ozs7Ozs7OzJCQU9aQyx3QixFQUEwQkMsZSxFQUFpQkMsWSxFQUFjQyxLLEVBQU9DLE0sRUFBUUMsUSxFQUFVO0FBQ3ZGLFVBQU1DLEdBQUcsR0FBRyxLQUFLQyxNQUFMLEVBQVo7QUFBQSxVQUNNQyxJQUFJLEdBQUcsS0FBS0MsT0FBTCxFQURiOztBQUdBLFVBQUksS0FBSixFQUFXLENBQ1Q7QUFDRCxPQUZELE1BRU8sSUFBSVAsWUFBSixFQUFrQjtBQUN2QkksUUFBQUEsR0FBRyxDQUFDSSxhQUFKLENBQWtCVix3QkFBbEIsRUFBNENDLGVBQTVDLEVBQTZETyxJQUE3RDtBQUNELE9BRk0sTUFFQSxJQUFJUCxlQUFlLEtBQUssQ0FBeEIsRUFBMkI7QUFDaENLLFFBQUFBLEdBQUcsQ0FBQ0ksYUFBSixDQUFrQlYsd0JBQWxCLEVBQTRDQyxlQUE1QyxFQUE2RE8sSUFBN0Q7QUFDRCxPQUZNLE1BRUE7QUFDTEEsUUFBQUEsSUFBSSxDQUFDRyxZQUFMLENBQWtCWCx3QkFBbEI7QUFDRDs7QUFFRCxVQUFNWSxNQUFNLEdBQUdKLElBQUksQ0FBQ0ssU0FBTCxFQUFmO0FBQUEsVUFDTUMsT0FBTyxHQUFHUixHQUFHLENBQUNTLFVBQUosRUFEaEI7QUFBQSxVQUdNQyxhQUFhLEdBQUcsc0NBQXlCRixPQUF6QixDQUh0QjtBQUFBLFVBSU1HLGNBQWMsR0FBRyx3Q0FKdkI7QUFBQSxVQUtNQyxlQUFlLEdBQUcsdUNBQTBCTixNQUExQixDQUx4QjtBQUFBLFVBTU1PLGdCQUFnQixHQUFHLGdEQUFtQ2hCLEtBQW5DLEVBQTBDQyxNQUExQyxDQU56QjtBQUFBLFVBT01nQixhQUFhLEdBQUcsOENBQWlDRixlQUFqQyxDQVB0QjtBQVNBYixNQUFBQSxRQUFRLENBQUNXLGFBQUQsRUFBZ0JJLGFBQWhCLEVBQStCSCxjQUEvQixFQUErQ0MsZUFBL0MsRUFBZ0VDLGdCQUFoRSxDQUFSO0FBQ0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUFBLGtDQUMyREEsVUFEM0QsQ0FDeEJDLGFBRHdCO0FBQUEsVUFDeEJBLGFBRHdCLHNDQUNSekIsb0JBRFE7QUFBQSxrQ0FDMkR3QixVQUQzRCxDQUNjRSxlQURkO0FBQUEsVUFDY0EsZUFEZCxzQ0FDZ0N6QixzQkFEaEM7QUFBQSxVQUUxQjBCLE9BRjBCLEdBRWhCLElBRmdCO0FBQUEsVUFHMUJsQixHQUgwQixHQUdwQm1CLGdCQUFJQyxtQkFBSixDQUF3QkgsZUFBeEIsQ0FIb0I7QUFBQSxVQUkxQmYsSUFKMEIsR0FJbkJtQixpQkFBS0MsMkJBQUwsQ0FBaUNOLGFBQWpDLEVBQWdERSxPQUFoRCxDQUptQjtBQUFBLFVBTTFCSyxZQU4wQixHQU1YQyxtQkFBT0MsY0FBUCxDQUFzQmhDLFlBQXRCLEVBQW9Dc0IsVUFBcEMsRUFBZ0RmLEdBQWhELEVBQXFERSxJQUFyRCxDQU5XOztBQVFoQyxhQUFPcUIsWUFBUDtBQUNEOzs7O0VBMUN1Q0Msa0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhbiBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy9wYW5cIjtcbmltcG9ydCBUaWx0IGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHRcIjtcblxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vY2FtZXJhXCI7XG5cbmltcG9ydCB7IHplcm8yIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbEFuZ2xlcyA9IHplcm8yKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbFBvc2l0aW9uID0gWyAwLCAwLCA1IF07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtaW5nQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcblxuXG5cblxuXG5cbiAgdXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcGFuID0gdGhpcy5nZXRQYW4oKSxcbiAgICAgICAgICB0aWx0ID0gdGhpcy5nZXRUaWx0KCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICBwYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCk7XG4gICAgfSBlbHNlIGlmIChtb3VzZVdoZWVsRGVsdGEgIT09IDApIHtcbiAgICAgIHBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSBwYW4uZ2V0T2Zmc2V0cygpLFxuXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICBjYWxsYmFjayhvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsQW5nbGVzID0gZGVmYXVsdEluaXRpYWxBbmdsZXMsIGluaXRpYWxQb3NpdGlvbiA9IGRlZmF1bHRJbml0aWFsUG9zaXRpb24gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IHRydWUsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG5cbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQpO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuIl19