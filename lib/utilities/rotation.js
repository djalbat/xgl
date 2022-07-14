"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "rotatePosition", {
    enumerable: true,
    get: function() {
        return rotatePosition;
    }
});
var _quaternion = require("../utilities/quaternion");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function rotatePosition(position, rotationQuaternion) {
    var imaginaryQuaternion = imaginaryQuaternionFromPosition(position), inverseRotationQuaternion = (0, _quaternion.calculateInverseRotationQuaternion)(rotationQuaternion), rotatedImaginaryQuaternion = (0, _quaternion.rotateImaginaryQuaternion)(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcm90YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24sIGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgaW1hZ2luYXJ5UXVhdGVybmlvbiA9IGltYWdpbmFyeVF1YXRlcm5pb25Gcm9tUG9zaXRpb24ocG9zaXRpb24pLFxuICAgICAgICBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICByb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbiA9IHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbiwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICBwb3NpdGlvbiA9IHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24ocm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gWzAsIC4uLnBvc2l0aW9uXTsgfSAgLy8vXG5cbmZ1bmN0aW9uIHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbikgeyByZXR1cm4gaW1hZ2luYXJ5UXVhdGVybmlvbi5zbGljZSgxKTsgfSAgLy8vXG4iXSwibmFtZXMiOlsicm90YXRlUG9zaXRpb24iLCJwb3NpdGlvbiIsInJvdGF0aW9uUXVhdGVybmlvbiIsImltYWdpbmFyeVF1YXRlcm5pb24iLCJpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uIiwiaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiIsImNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbiIsInJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24iLCJwb3NpdGlvbkZyb21JbWFnaW5hcnlRdWF0ZXJuaW9uIiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFJR0EsZ0JBQWM7OztlQUFkQSxjQUFjOzs7MEJBRmdELHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEcsU0FBU0EsY0FBYyxDQUFDQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFO0lBQzNELElBQU1DLG1CQUFtQixHQUFHQywrQkFBK0IsQ0FBQ0gsUUFBUSxDQUFDLEVBQy9ESSx5QkFBeUIsR0FBR0MsSUFBQUEsV0FBa0MsbUNBQUEsRUFBQ0osa0JBQWtCLENBQUMsRUFDbEZLLDBCQUEwQixHQUFHQyxJQUFBQSxXQUF5QiwwQkFBQSxFQUFDTCxtQkFBbUIsRUFBRUQsa0JBQWtCLEVBQUVHLHlCQUF5QixDQUFDLEFBQUM7SUFFaklKLFFBQVEsR0FBR1EsK0JBQStCLENBQUNGLDBCQUEwQixDQUFDLENBQUM7SUFFdkUsT0FBT04sUUFBUSxDQUFDO0NBQ2pCO0FBRUQsU0FBU0csK0JBQStCLENBQUNILFFBQVEsRUFBRTtJQUFFLE9BQU87QUFBQyxTQUFDO0tBQWMsQ0FBaEIsTUFBZ0IsQ0FBWixtQkFBR0EsUUFBUSxDQUFSQSxDQUFTLENBQUM7Q0FBRSxDQUFFLEdBQUc7QUFFcEYsU0FBU1EsK0JBQStCLENBQUNOLG1CQUFtQixFQUFFO0lBQUUsT0FBT0EsbUJBQW1CLENBQUNPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUFFLENBQUUsR0FBRyJ9