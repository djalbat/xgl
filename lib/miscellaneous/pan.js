"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _vector = require("../maths/vector");
var _offsets = require("../utilities/offsets");
var _constants = require("../constants");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
var Pan = /*#__PURE__*/ function() {
    function Pan(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier) {
        _classCallCheck(this, Pan);
        this.offsets = offsets;
        this.mouseWheelDeltaMultiplier = mouseWheelDeltaMultiplier;
        this.relativeMouseCoordinatesMultiplier = relativeMouseCoordinatesMultiplier;
    }
    _createClass(Pan, [
        {
            key: "getOffsets",
            value: function getOffsets() {
                return this.offsets;
            }
        },
        {
            key: "getDeltaMultiplier",
            value: function getDeltaMultiplier() {
                return this.mouseWheelDeltaMultiplier;
            }
        },
        {
            key: "getRelativeMouseCoordinatesMultiplier",
            value: function getRelativeMouseCoordinatesMultiplier() {
                return this.relativeMouseCoordinatesMultiplier;
            }
        },
        {
            key: "updateOffsets",
            value: function updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles) {
                mouseWheelDelta = mouseWheelDelta * this.mouseWheelDeltaMultiplier; ///
                relativeMouseCoordinates = (0, _vector).scale2(relativeMouseCoordinates, this.relativeMouseCoordinatesMultiplier); ///
                var scaledReflectedRelativeMouseCoordinates = (0, _vector).reflect2((0, _vector).scale2(relativeMouseCoordinates, 1)), directions = _toConsumableArray(scaledReflectedRelativeMouseCoordinates).concat([
                    mouseWheelDelta,
                    0
                ]), relativeOffsets = (0, _offsets).relativeOffsetsFromAnglesAndDirections(angles, directions, 1);
                this.offsets = (0, _vector).add3(this.offsets, relativeOffsets);
            }
        }
    ], [
        {
            key: "fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity",
            value: function fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity(initialOffsets, mouseSensitivity, mouseWheelSensitivity) {
                var offsets = initialOffsets, mouseWheelDeltaMultiplier = _constants.MOUSE_WHEEL_DELTA_MULTIPLIER * mouseWheelSensitivity, relativeMouseCoordinatesMultiplier = _constants.RELATIVE_MOUSE_COORDINATES_MULTIPLIER * mouseSensitivity, pan = new Pan(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);
                return pan;
            }
        }
    ]);
    return Pan;
}();
exports.default = Pan;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkMywgc2NhbGUyLCByZWZsZWN0MiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vZmZzZXRzXCI7XG5pbXBvcnQgeyBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSLCBSRUxBVElWRV9NT1VTRV9DT09SRElOQVRFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyLCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgICB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICAgIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciA9IHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXI7XG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHM7XG4gIH1cblxuICBnZXREZWx0YU11bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIGdldFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcjtcbiAgfVxuXG4gIHVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIGFuZ2xlcykge1xuICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YSAqIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjsgLy8vXG5cbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpOyAvLy9cblxuICAgIGNvbnN0IHNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHJlZmxlY3QyKHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIDEpKSxcbiAgICAgICAgICBkaXJlY3Rpb25zID0gWyAuLi5zY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgMCBdLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0cyA9IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zKGFuZ2xlcywgZGlyZWN0aW9ucywgMSk7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKHRoaXMub2Zmc2V0cywgcmVsYXRpdmVPZmZzZXRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldHNNb3VzZVNlbnNpdGl2aXR5QW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5KGluaXRpYWxPZmZzZXRzLCBtb3VzZVNlbnNpdGl2aXR5LCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gaW5pdGlhbE9mZnNldHMsIC8vL1xuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSICogbW91c2VXaGVlbFNlbnNpdGl2aXR5LFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIgPSBSRUxBVElWRV9NT1VTRV9DT09SRElOQVRFU19NVUxUSVBMSUVSICogbW91c2VTZW5zaXRpdml0eSxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpO1xuXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBhbiIsIm9mZnNldHMiLCJtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciIsImdldE9mZnNldHMiLCJnZXREZWx0YU11bHRpcGxpZXIiLCJnZXRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyIiwidXBkYXRlT2Zmc2V0cyIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsIm1vdXNlV2hlZWxEZWx0YSIsImFuZ2xlcyIsInNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsImRpcmVjdGlvbnMiLCJyZWxhdGl2ZU9mZnNldHMiLCJmcm9tSW5pdGlhbE9mZnNldHNNb3VzZVNlbnNpdGl2aXR5QW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5IiwiaW5pdGlhbE9mZnNldHMiLCJtb3VzZVNlbnNpdGl2aXR5IiwibW91c2VXaGVlbFNlbnNpdGl2aXR5IiwicGFuIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUUyQixHQUFpQixDQUFqQixPQUFpQjtBQUNELEdBQXNCLENBQXRCLFFBQXNCO0FBQ08sR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3RUEsR0FBRyxpQkFBVCxRQUFRO2FBQUZBLEdBQUcsQ0FDVkMsT0FBTyxFQUFFQyx5QkFBeUIsRUFBRUMsa0NBQWtDOztRQUNoRixJQUFJLENBQUNGLE9BQU8sR0FBR0EsT0FBTztRQUN0QixJQUFJLENBQUNDLHlCQUF5QixHQUFHQSx5QkFBeUI7UUFDMUQsSUFBSSxDQUFDQyxrQ0FBa0MsR0FBR0Esa0NBQWtDOzs7O1lBRzlFQyxHQUFVLEVBQVZBLENBQVU7bUJBQVZBLFFBQVEsQ0FBUkEsVUFBVSxHQUFHLENBQUM7Z0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQ0gsT0FBTztZQUNyQixDQUFDOzs7WUFFREksR0FBa0IsRUFBbEJBLENBQWtCO21CQUFsQkEsUUFBUSxDQUFSQSxrQkFBa0IsR0FBRyxDQUFDO2dCQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDSCx5QkFBeUI7WUFDdkMsQ0FBQzs7O1lBRURJLEdBQXFDLEVBQXJDQSxDQUFxQzttQkFBckNBLFFBQVEsQ0FBUkEscUNBQXFDLEdBQUcsQ0FBQztnQkFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQ0gsa0NBQWtDO1lBQ2hELENBQUM7OztZQUVESSxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxDQUFDQyx3QkFBd0IsRUFBRUMsZUFBZSxFQUFFQyxNQUFNLEVBQUUsQ0FBQztnQkFDaEVELGVBQWUsR0FBR0EsZUFBZSxHQUFHLElBQUksQ0FBQ1AseUJBQXlCLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUV2RU0sd0JBQXdCLE9BMUJXLE9BQWlCLFNBMEJsQkEsd0JBQXdCLEVBQUUsSUFBSSxDQUFDTCxrQ0FBa0MsRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXpHLEdBQUssQ0FBQ1EsdUNBQXVDLE9BNUJWLE9BQWlCLGVBQWpCLE9BQWlCLFNBNEJZSCx3QkFBd0IsRUFBRSxDQUFDLElBQ3JGSSxVQUFVLHNCQUFRRCx1Q0FBdUMsU0FBNUMsQ0FBQztvQkFBNkNGLGVBQWU7QUFBRSxxQkFBQztnQkFBQyxDQUFDLEdBQy9FSSxlQUFlLE9BN0I4QixRQUFzQix5Q0E2QlZILE1BQU0sRUFBRUUsVUFBVSxFQUFFLENBQUM7Z0JBRXBGLElBQUksQ0FBQ1gsT0FBTyxPQWhDdUIsT0FBaUIsT0FnQ2hDLElBQUksQ0FBQ0EsT0FBTyxFQUFFWSxlQUFlO1lBQ25ELENBQUM7Ozs7WUFFTUMsR0FBMEQsRUFBMURBLENBQTBEO21CQUFqRSxRQUFRLENBQURBLDBEQUEwRCxDQUFDQyxjQUFjLEVBQUVDLGdCQUFnQixFQUFFQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUMxSCxHQUFLLENBQUNoQixPQUFPLEdBQUdjLGNBQWMsRUFDeEJiLHlCQUF5QixHQW5DaUQsVUFBYyxnQ0FtQzdCZSxxQkFBcUIsRUFDaEZkLGtDQUFrQyxHQXBDd0MsVUFBYyx5Q0FvQ1hhLGdCQUFnQixFQUM3RkUsR0FBRyxHQUFHLEdBQUcsQ0FBQ2xCLEdBQUcsQ0FBQ0MsT0FBTyxFQUFFQyx5QkFBeUIsRUFBRUMsa0NBQWtDO2dCQUUxRixNQUFNLENBQUNlLEdBQUc7WUFDWixDQUFDOzs7OztrQkF0Q2tCbEIsR0FBRyJ9