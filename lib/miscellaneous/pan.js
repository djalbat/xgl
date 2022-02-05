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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkMywgc2NhbGUyLCByZWZsZWN0MiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vZmZzZXRzXCI7XG5pbXBvcnQgeyBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSLCBSRUxBVElWRV9NT1VTRV9DT09SRElOQVRFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyLCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgICB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICAgIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciA9IHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXI7XG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHM7XG4gIH1cblxuICBnZXREZWx0YU11bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIGdldFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcjtcbiAgfVxuXG4gIHVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIGFuZ2xlcykge1xuICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YSAqIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjsgLy8vXG5cbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpOyAvLy9cblxuICAgIGNvbnN0IHNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHJlZmxlY3QyKHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIDEpKSxcbiAgICAgICAgICBkaXJlY3Rpb25zID0gWyAuLi5zY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgMCBdLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0cyA9IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zKGFuZ2xlcywgZGlyZWN0aW9ucywgMSk7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKHRoaXMub2Zmc2V0cywgcmVsYXRpdmVPZmZzZXRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldHNNb3VzZVNlbnNpdGl2aXR5QW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5KGluaXRpYWxPZmZzZXRzLCBtb3VzZVNlbnNpdGl2aXR5LCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gaW5pdGlhbE9mZnNldHMsIC8vL1xuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSICogbW91c2VXaGVlbFNlbnNpdGl2aXR5LFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIgPSBSRUxBVElWRV9NT1VTRV9DT09SRElOQVRFU19NVUxUSVBMSUVSICogbW91c2VTZW5zaXRpdml0eSxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpO1xuXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBhbiIsIm9mZnNldHMiLCJtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciIsImdldE9mZnNldHMiLCJnZXREZWx0YU11bHRpcGxpZXIiLCJnZXRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyIiwidXBkYXRlT2Zmc2V0cyIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsIm1vdXNlV2hlZWxEZWx0YSIsImFuZ2xlcyIsInNjYWxlMiIsInNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInJlZmxlY3QyIiwiZGlyZWN0aW9ucyIsInJlbGF0aXZlT2Zmc2V0cyIsInJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zIiwiYWRkMyIsImZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkiLCJpbml0aWFsT2Zmc2V0cyIsIm1vdXNlU2Vuc2l0aXZpdHkiLCJtb3VzZVdoZWVsU2Vuc2l0aXZpdHkiLCJNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSIiwiUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiIsInBhbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFMkIsR0FBaUIsQ0FBakIsT0FBaUI7QUFDRCxHQUFzQixDQUF0QixRQUFzQjtBQUNPLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0VBLEdBQUcsaUJBQVQsUUFBUTthQUFGQSxHQUFHLENBQ1ZDLE9BQU8sRUFBRUMseUJBQXlCLEVBQUVDLGtDQUFrQzs7UUFDaEYsSUFBSSxDQUFDRixPQUFPLEdBQUdBLE9BQU87UUFDdEIsSUFBSSxDQUFDQyx5QkFBeUIsR0FBR0EseUJBQXlCO1FBQzFELElBQUksQ0FBQ0Msa0NBQWtDLEdBQUdBLGtDQUFrQzs7OztZQUc5RUMsR0FBVSxFQUFWQSxDQUFVO21CQUFWQSxRQUFRLENBQVJBLFVBQVUsR0FBRyxDQUFDO2dCQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUNILE9BQU87WUFDckIsQ0FBQzs7O1lBRURJLEdBQWtCLEVBQWxCQSxDQUFrQjttQkFBbEJBLFFBQVEsQ0FBUkEsa0JBQWtCLEdBQUcsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQ0gseUJBQXlCO1lBQ3ZDLENBQUM7OztZQUVESSxHQUFxQyxFQUFyQ0EsQ0FBcUM7bUJBQXJDQSxRQUFRLENBQVJBLHFDQUFxQyxHQUFHLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUNILGtDQUFrQztZQUNoRCxDQUFDOzs7WUFFREksR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsQ0FBQ0Msd0JBQXdCLEVBQUVDLGVBQWUsRUFBRUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2hFRCxlQUFlLEdBQUdBLGVBQWUsR0FBRyxJQUFJLENBQUNQLHlCQUF5QixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFdkVNLHdCQUF3QixPQUFHRyxPQUFNLFNBQUNILHdCQUF3QixFQUFFLElBQUksQ0FBQ0wsa0NBQWtDLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUV6RyxHQUFLLENBQUNTLHVDQUF1QyxPQUFHQyxPQUFRLGVBQUNGLE9BQU0sU0FBQ0gsd0JBQXdCLEVBQUUsQ0FBQyxJQUNyRk0sVUFBVSxzQkFBUUYsdUNBQXVDLFNBQTVDLENBQUM7b0JBQTZDSCxlQUFlO0FBQUUscUJBQUM7Z0JBQUMsQ0FBQyxHQUMvRU0sZUFBZSxPQUFHQyxRQUFzQyx5Q0FBQ04sTUFBTSxFQUFFSSxVQUFVLEVBQUUsQ0FBQztnQkFFcEYsSUFBSSxDQUFDYixPQUFPLE9BQUdnQixPQUFJLE9BQUMsSUFBSSxDQUFDaEIsT0FBTyxFQUFFYyxlQUFlO1lBQ25ELENBQUM7Ozs7WUFFTUcsR0FBMEQsRUFBMURBLENBQTBEO21CQUFqRSxRQUFRLENBQURBLDBEQUEwRCxDQUFDQyxjQUFjLEVBQUVDLGdCQUFnQixFQUFFQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUMxSCxHQUFLLENBQUNwQixPQUFPLEdBQUdrQixjQUFjLEVBQ3hCakIseUJBQXlCLEdBQUdvQixVQUE0QixnQ0FBR0QscUJBQXFCLEVBQ2hGbEIsa0NBQWtDLEdBQUdvQixVQUFxQyx5Q0FBR0gsZ0JBQWdCLEVBQzdGSSxHQUFHLEdBQUcsR0FBRyxDQUFDeEIsR0FBRyxDQUFDQyxPQUFPLEVBQUVDLHlCQUF5QixFQUFFQyxrQ0FBa0M7Z0JBRTFGLE1BQU0sQ0FBQ3FCLEdBQUc7WUFDWixDQUFDOzs7OztrQkF0Q2tCeEIsR0FBRyJ9