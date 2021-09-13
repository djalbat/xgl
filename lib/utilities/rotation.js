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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcm90YXRpb24uanMiXSwibmFtZXMiOlsicm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbiIsImNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGVQb3NpdGlvbiIsInBvc2l0aW9uIiwicm90YXRpb25RdWF0ZXJuaW9uIiwiaW1hZ2luYXJ5UXVhdGVybmlvbiIsImltYWdpbmFyeVF1YXRlcm5pb25Gcm9tUG9zaXRpb24iLCJpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uIiwicm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24iLCJwb3NpdGlvbkZyb21JbWFnaW5hcnlRdWF0ZXJuaW9uIiwic2xpY2UiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFJSSxjQUFjLEdBQWQsY0FBYztBQUZnRCxHQUF5QixDQUF6QixXQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRXZGLGNBQWMsQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztJQUM1RCxHQUFLLENBQUMsbUJBQW1CLEdBQUcsK0JBQStCLENBQUMsUUFBUSxHQUM5RCx5QkFBeUIsT0FKNkMsV0FBeUIscUNBSWhDLGtCQUFrQixHQUNqRiwwQkFBMEIsT0FMNEMsV0FBeUIsNEJBS3hDLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLHlCQUF5QjtJQUUvSCxRQUFRLEdBQUcsK0JBQStCLENBQUMsMEJBQTBCO0lBRXJFLE1BQU0sQ0FBQyxRQUFRO0FBQ2pCLENBQUM7U0FFUSwrQkFBK0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQUEsQ0FBQztJQUFhLENBQUMsQ0FBaEIsTUFBZ0Isb0JBQVQsUUFBUTtBQUFHLENBQUMsQUFBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7U0FFM0UsK0JBQStCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUFHLENBQUMsQUFBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUciLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbiwgY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlUG9zaXRpb24ocG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBpbWFnaW5hcnlRdWF0ZXJuaW9uID0gaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbihwb3NpdGlvbiksXG4gICAgICAgIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uID0gcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uLCByb3RhdGlvblF1YXRlcm5pb24sIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHBvc2l0aW9uID0gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihyb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbik7XG5cbiAgcmV0dXJuIHBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBbMCwgLi4ucG9zaXRpb25dOyB9ICAvLy9cblxuZnVuY3Rpb24gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uKSB7IHJldHVybiBpbWFnaW5hcnlRdWF0ZXJuaW9uLnNsaWNlKDEpOyB9ICAvLy9cbiJdfQ==