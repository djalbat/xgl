"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _vector = require("../maths/vector");
var _offsets = require("../utilities/offsets");
var _constants = require("../constants");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
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
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkMywgc2NhbGUyLCByZWZsZWN0MiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vZmZzZXRzXCI7XG5pbXBvcnQgeyBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSLCBSRUxBVElWRV9NT1VTRV9DT09SRElOQVRFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyLCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgICB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICAgIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciA9IHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXI7XG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHM7XG4gIH1cblxuICBnZXREZWx0YU11bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIGdldFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcjtcbiAgfVxuXG4gIHVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIGFuZ2xlcykge1xuICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YSAqIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjsgLy8vXG5cbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpOyAvLy9cblxuICAgIGNvbnN0IHNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHJlZmxlY3QyKHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIDEpKSxcbiAgICAgICAgICBkaXJlY3Rpb25zID0gWyAuLi5zY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgMCBdLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0cyA9IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zKGFuZ2xlcywgZGlyZWN0aW9ucywgMSk7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKHRoaXMub2Zmc2V0cywgcmVsYXRpdmVPZmZzZXRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldHNNb3VzZVNlbnNpdGl2aXR5QW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5KGluaXRpYWxPZmZzZXRzLCBtb3VzZVNlbnNpdGl2aXR5LCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gaW5pdGlhbE9mZnNldHMsIC8vL1xuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSICogbW91c2VXaGVlbFNlbnNpdGl2aXR5LFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIgPSBSRUxBVElWRV9NT1VTRV9DT09SRElOQVRFU19NVUxUSVBMSUVSICogbW91c2VTZW5zaXRpdml0eSxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpO1xuXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBhbiIsIm9mZnNldHMiLCJtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciIsImdldE9mZnNldHMiLCJnZXREZWx0YU11bHRpcGxpZXIiLCJnZXRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyIiwidXBkYXRlT2Zmc2V0cyIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsIm1vdXNlV2hlZWxEZWx0YSIsImFuZ2xlcyIsInNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsImRpcmVjdGlvbnMiLCJyZWxhdGl2ZU9mZnNldHMiLCJmcm9tSW5pdGlhbE9mZnNldHNNb3VzZVNlbnNpdGl2aXR5QW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5IiwiaW5pdGlhbE9mZnNldHMiLCJtb3VzZVNlbnNpdGl2aXR5IiwibW91c2VXaGVlbFNlbnNpdGl2aXR5IiwicGFuIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUUyQixHQUFpQixDQUFqQixPQUFpQjtBQUNELEdBQXNCLENBQXRCLFFBQXNCO0FBQ08sR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0VBLEdBQUcsaUJBQVQsUUFBUTthQUFGQSxHQUFHLENBQ1ZDLE9BQU8sRUFBRUMseUJBQXlCLEVBQUVDLGtDQUFrQzs4QkFEL0RILEdBQUc7UUFFcEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87UUFDdEIsSUFBSSxDQUFDQyx5QkFBeUIsR0FBR0EseUJBQXlCO1FBQzFELElBQUksQ0FBQ0Msa0NBQWtDLEdBQUdBLGtDQUFrQzs7aUJBSjNESCxHQUFHOztZQU90QkksR0FBVSxFQUFWQSxDQUFVO21CQUFWQSxRQUFRLENBQVJBLFVBQVUsR0FBRyxDQUFDO2dCQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUNILE9BQU87WUFDckIsQ0FBQzs7O1lBRURJLEdBQWtCLEVBQWxCQSxDQUFrQjttQkFBbEJBLFFBQVEsQ0FBUkEsa0JBQWtCLEdBQUcsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQ0gseUJBQXlCO1lBQ3ZDLENBQUM7OztZQUVESSxHQUFxQyxFQUFyQ0EsQ0FBcUM7bUJBQXJDQSxRQUFRLENBQVJBLHFDQUFxQyxHQUFHLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUNILGtDQUFrQztZQUNoRCxDQUFDOzs7WUFFREksR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsQ0FBQ0Msd0JBQXdCLEVBQUVDLGVBQWUsRUFBRUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2hFRCxlQUFlLEdBQUdBLGVBQWUsR0FBRyxJQUFJLENBQUNQLHlCQUF5QixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFdkVNLHdCQUF3QixPQTFCVyxPQUFpQixTQTBCbEJBLHdCQUF3QixFQUFFLElBQUksQ0FBQ0wsa0NBQWtDLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUV6RyxHQUFLLENBQUNRLHVDQUF1QyxPQTVCVixPQUFpQixlQUFqQixPQUFpQixTQTRCWUgsd0JBQXdCLEVBQUUsQ0FBQyxJQUNyRkksVUFBVSxzQkFBUUQsdUNBQXVDLFNBQTVDLENBQUM7b0JBQTZDRixlQUFlO29CQUFFLENBQUM7Z0JBQUMsQ0FBQyxHQUMvRUksZUFBZSxPQTdCOEIsUUFBc0IseUNBNkJWSCxNQUFNLEVBQUVFLFVBQVUsRUFBRSxDQUFDO2dCQUVwRixJQUFJLENBQUNYLE9BQU8sT0FoQ3VCLE9BQWlCLE9BZ0NoQyxJQUFJLENBQUNBLE9BQU8sRUFBRVksZUFBZTtZQUNuRCxDQUFDOzs7O1lBRU1DLEdBQTBELEVBQTFEQSxDQUEwRDttQkFBakUsUUFBUSxDQUFEQSwwREFBMEQsQ0FBQ0MsY0FBYyxFQUFFQyxnQkFBZ0IsRUFBRUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDMUgsR0FBSyxDQUFDaEIsT0FBTyxHQUFHYyxjQUFjLEVBQ3hCYix5QkFBeUIsR0FuQ2lELFVBQWMsZ0NBbUM3QmUscUJBQXFCLEVBQ2hGZCxrQ0FBa0MsR0FwQ3dDLFVBQWMseUNBb0NYYSxnQkFBZ0IsRUFDN0ZFLEdBQUcsR0FBRyxHQUFHLENBQUNsQixHQUFHLENBQUNDLE9BQU8sRUFBRUMseUJBQXlCLEVBQUVDLGtDQUFrQztnQkFFMUYsTUFBTSxDQUFDZSxHQUFHO1lBQ1osQ0FBQzs7O1dBdENrQmxCLEdBQUc7O2tCQUFIQSxHQUFHIn0=