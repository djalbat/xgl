"use strict";

var _quaternion = require("../utilities/quaternion");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function rotatePosition(position, rotationQuaternion) {
  var imaginaryQuaternion = imaginaryQuaternionFromPosition(position),
      inverseRotationQuaternion = (0, _quaternion.calculateInverseRotationQuaternion)(rotationQuaternion),
      rotatedImaginaryQuaternion = (0, _quaternion.rotateImaginaryQuaternion)(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);
  position = positionFromImaginaryQuaternion(rotatedImaginaryQuaternion);
  return position;
}

module.exports = {
  rotatePosition: rotatePosition
};

function imaginaryQuaternionFromPosition(position) {
  return [0].concat(_toConsumableArray(position));
} ///


function positionFromImaginaryQuaternion(imaginaryQuaternion) {
  return imaginaryQuaternion.slice(1);
} ///
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdGF0aW9uLmpzIl0sIm5hbWVzIjpbInJvdGF0ZVBvc2l0aW9uIiwicG9zaXRpb24iLCJyb3RhdGlvblF1YXRlcm5pb24iLCJpbWFnaW5hcnlRdWF0ZXJuaW9uIiwiaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbiIsImludmVyc2VSb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbiIsInBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24iLCJtb2R1bGUiLCJleHBvcnRzIiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDQyxrQkFBbEMsRUFBc0Q7QUFDcEQsTUFBTUMsbUJBQW1CLEdBQUdDLCtCQUErQixDQUFDSCxRQUFELENBQTNEO0FBQUEsTUFDTUkseUJBQXlCLEdBQUcsb0RBQW1DSCxrQkFBbkMsQ0FEbEM7QUFBQSxNQUVNSSwwQkFBMEIsR0FBRywyQ0FBMEJILG1CQUExQixFQUErQ0Qsa0JBQS9DLEVBQW1FRyx5QkFBbkUsQ0FGbkM7QUFJQUosRUFBQUEsUUFBUSxHQUFHTSwrQkFBK0IsQ0FBQ0QsMEJBQUQsQ0FBMUM7QUFFQSxTQUFPTCxRQUFQO0FBQ0Q7O0FBRURPLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmVCxFQUFBQSxjQUFjLEVBQWRBO0FBRGUsQ0FBakI7O0FBSUEsU0FBU0ksK0JBQVQsQ0FBeUNILFFBQXpDLEVBQW1EO0FBQUUsVUFBUSxDQUFSLDRCQUFjQSxRQUFkO0FBQTBCLEMsQ0FBRTs7O0FBRWpGLFNBQVNNLCtCQUFULENBQXlDSixtQkFBekMsRUFBOEQ7QUFBRSxTQUFPQSxtQkFBbUIsQ0FBQ08sS0FBcEIsQ0FBMEIsQ0FBMUIsQ0FBUDtBQUFzQyxDLENBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbiwgY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuXG5mdW5jdGlvbiByb3RhdGVQb3NpdGlvbihwb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGltYWdpbmFyeVF1YXRlcm5pb24gPSBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgcm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24gPSByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgcG9zaXRpb24gPSBwb3NpdGlvbkZyb21JbWFnaW5hcnlRdWF0ZXJuaW9uKHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uKTtcblxuICByZXR1cm4gcG9zaXRpb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByb3RhdGVQb3NpdGlvblxufTtcblxuZnVuY3Rpb24gaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gWzAsIC4uLnBvc2l0aW9uXTsgfSAgLy8vXG5cbmZ1bmN0aW9uIHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbikgeyByZXR1cm4gaW1hZ2luYXJ5UXVhdGVybmlvbi5zbGljZSgxKTsgfSAgLy8vXG4iXX0=