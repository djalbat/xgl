"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rotatePosition = rotatePosition;
var _quaternion = require("../utilities/quaternion");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function rotatePosition(position, rotationQuaternion) {
    var imaginaryQuaternion = imaginaryQuaternionFromPosition(position), inverseRotationQuaternion = (0, _quaternion).calculateInverseRotationQuaternion(rotationQuaternion), rotatedImaginaryQuaternion = (0, _quaternion).rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);
    position = positionFromImaginaryQuaternion(rotatedImaginaryQuaternion);
    return position;
}
function imaginaryQuaternionFromPosition(position) {
    return [
        0
    ].concat(_toConsumableArray(position));
} ///
function positionFromImaginaryQuaternion(imaginaryQuaternion) {
    return imaginaryQuaternion.slice(1);
} ///

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcm90YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24sIGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgaW1hZ2luYXJ5UXVhdGVybmlvbiA9IGltYWdpbmFyeVF1YXRlcm5pb25Gcm9tUG9zaXRpb24ocG9zaXRpb24pLFxuICAgICAgICBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICByb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbiA9IHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbiwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICBwb3NpdGlvbiA9IHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24ocm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gWzAsIC4uLnBvc2l0aW9uXTsgfSAgLy8vXG5cbmZ1bmN0aW9uIHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbikgeyByZXR1cm4gaW1hZ2luYXJ5UXVhdGVybmlvbi5zbGljZSgxKTsgfSAgLy8vXG4iXSwibmFtZXMiOlsicm90YXRlUG9zaXRpb24iLCJwb3NpdGlvbiIsInJvdGF0aW9uUXVhdGVybmlvbiIsImltYWdpbmFyeVF1YXRlcm5pb24iLCJpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uIiwiaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiIsInJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uIiwicG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbiIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7O1FBSUlBLGNBQWMsR0FBZEEsY0FBYztBQUZnRCxHQUF5QixDQUF6QixXQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRXZGQSxjQUFjLENBQUNDLFFBQVEsRUFBRUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1RCxHQUFLLENBQUNDLG1CQUFtQixHQUFHQywrQkFBK0IsQ0FBQ0gsUUFBUSxHQUM5REkseUJBQXlCLE9BSjZDLFdBQXlCLHFDQUloQ0gsa0JBQWtCLEdBQ2pGSSwwQkFBMEIsT0FMNEMsV0FBeUIsNEJBS3hDSCxtQkFBbUIsRUFBRUQsa0JBQWtCLEVBQUVHLHlCQUF5QjtJQUUvSEosUUFBUSxHQUFHTSwrQkFBK0IsQ0FBQ0QsMEJBQTBCO0lBRXJFLE1BQU0sQ0FBQ0wsUUFBUTtBQUNqQixDQUFDO1NBRVFHLCtCQUErQixDQUFDSCxRQUFRLEVBQUUsQ0FBQztJQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQUEsQ0FBQztJQUFhLENBQUMsQ0FBaEIsTUFBZ0Isb0JBQVRBLFFBQVE7QUFBRyxDQUFDLEFBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1NBRTNFTSwrQkFBK0IsQ0FBQ0osbUJBQW1CLEVBQUUsQ0FBQztJQUFDLE1BQU0sQ0FBQ0EsbUJBQW1CLENBQUNLLEtBQUssQ0FBQyxDQUFDO0FBQUcsQ0FBQyxBQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRyJ9