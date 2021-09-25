"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _vector = require("../maths/vector");
var _offsets = require("../utilities/offsets");
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
            key: "fromInitialOffsetsMouseWheelDeltaMultiplierAndRelativeMouseCoordinatesMultiplier",
            value: function fromInitialOffsetsMouseWheelDeltaMultiplierAndRelativeMouseCoordinatesMultiplier(initialOffsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier) {
                var offsets = initialOffsets, pan = new Pan(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);
                return pan;
            }
        }
    ]);
    return Pan;
}();
exports.default = Pan;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJuYW1lcyI6WyJhZGQzIiwic2NhbGUyIiwic2NhbGUzIiwicmVmbGVjdDIiLCJyZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyIsIlBhbiIsImNvbnN0cnVjdG9yIiwib2Zmc2V0cyIsIm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyIiwiZ2V0T2Zmc2V0cyIsImdldERlbHRhTXVsdGlwbGllciIsImdldFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIiLCJ1cGRhdGVPZmZzZXRzIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibW91c2VXaGVlbERlbHRhIiwiYW5nbGVzIiwic2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwiZGlyZWN0aW9ucyIsInJlbGF0aXZlT2Zmc2V0cyIsImZyb21Jbml0aWFsT2Zmc2V0c01vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXJBbmRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyIiwiaW5pdGlhbE9mZnNldHMiLCJwYW4iXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRW1DLEdBQWlCLENBQWpCLE9BQWlCO0FBQ1QsR0FBc0IsQ0FBdEIsUUFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFeEQsR0FBRyxpQkFBVCxRQUFRO2FBQUYsR0FBRyxDQUNWLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxrQ0FBa0M7OEJBRC9ELEdBQUc7UUFFcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQ3RCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyx5QkFBeUI7UUFDMUQsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLGtDQUFrQzs7aUJBSjNELEdBQUc7O1lBT3RCLEdBQVUsRUFBVixDQUFVO21CQUFWLFFBQVEsQ0FBUixVQUFVLEdBQUcsQ0FBQztnQkFDWixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDckIsQ0FBQzs7O1lBRUQsR0FBa0IsRUFBbEIsQ0FBa0I7bUJBQWxCLFFBQVEsQ0FBUixrQkFBa0IsR0FBRyxDQUFDO2dCQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLHlCQUF5QjtZQUN2QyxDQUFDOzs7WUFFRCxHQUFxQyxFQUFyQyxDQUFxQzttQkFBckMsUUFBUSxDQUFSLHFDQUFxQyxHQUFHLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0NBQWtDO1lBQ2hELENBQUM7OztZQUVELEdBQWEsRUFBYixDQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLENBQUMsd0JBQXdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUNoRSxlQUFlLEdBQUcsZUFBZSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXZFLHdCQUF3QixPQXpCbUIsT0FBaUIsU0F5QjFCLHdCQUF3QixFQUFFLElBQUksQ0FBQyxrQ0FBa0MsRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXpHLEdBQUssQ0FBQyx1Q0FBdUMsT0EzQkYsT0FBaUIsZUFBakIsT0FBaUIsU0EyQkksd0JBQXdCLEVBQUUsQ0FBQyxJQUNyRixVQUFVLHNCQUFRLHVDQUF1QyxTQUE1QyxDQUFDO29CQUE2QyxlQUFlO29CQUFFLENBQUM7Z0JBQUMsQ0FBQyxHQUMvRSxlQUFlLE9BNUI4QixRQUFzQix5Q0E0QlYsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUVwRixJQUFJLENBQUMsT0FBTyxPQS9CK0IsT0FBaUIsT0ErQnhDLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZTtZQUNuRCxDQUFDOzs7O1lBRU0sR0FBZ0YsRUFBaEYsQ0FBZ0Y7bUJBQXZGLFFBQVEsQ0FBRCxnRkFBZ0YsQ0FBQyxjQUFjLEVBQUUseUJBQXlCLEVBQUUsa0NBQWtDLEVBQUUsQ0FBQztnQkFDdEssR0FBSyxDQUFDLE9BQU8sR0FBRyxjQUFjLEVBQ3hCLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxrQ0FBa0M7Z0JBRTFGLE1BQU0sQ0FBQyxHQUFHO1lBQ1osQ0FBQzs7O1dBcENrQixHQUFHOztrQkFBSCxHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZDMsIHNjYWxlMiwgc2NhbGUzLCByZWZsZWN0MiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vZmZzZXRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpIHtcbiAgICB0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuICAgIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gICAgdGhpcy5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyID0gcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcjtcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIGdldERlbHRhTXVsdGlwbGllcigpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICB9XG5cbiAgZ2V0UmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyO1xuICB9XG5cbiAgdXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKSB7XG4gICAgbW91c2VXaGVlbERlbHRhID0gbW91c2VXaGVlbERlbHRhICogdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyOyAvLy9cblxuICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcik7IC8vL1xuXG4gICAgY29uc3Qgc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gcmVmbGVjdDIoc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMSkpLFxuICAgICAgICAgIGRpcmVjdGlvbnMgPSBbIC4uLnNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCAwIF0sXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zLCAxKTtcblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDModGhpcy5vZmZzZXRzLCByZWxhdGl2ZU9mZnNldHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0c01vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXJBbmRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKGluaXRpYWxPZmZzZXRzLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyLCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IGluaXRpYWxPZmZzZXRzLCAvLy9cbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpO1xuXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuIl19