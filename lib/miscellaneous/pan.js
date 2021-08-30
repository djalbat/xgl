"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
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
            value: function updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt) {
                mouseWheelDelta = mouseWheelDelta * this.mouseWheelDeltaMultiplier; ///
                relativeMouseCoordinates = (0, _vector).scale2(relativeMouseCoordinates, this.relativeMouseCoordinatesMultiplier); ///
                var angles = tilt.getAngles(), scaledReflectedRelativeMouseCoordinates = (0, _vector).reflect2((0, _vector).scale2(relativeMouseCoordinates, 1)), directions = _toConsumableArray(scaledReflectedRelativeMouseCoordinates).concat([
                    mouseWheelDelta,
                    0
                ]), relativeOffsets = (0, _offsets).relativeOffsetsFromAnglesAndDirections(angles, directions, 1);
                this.offsets = (0, _vector).add3(this.offsets, relativeOffsets);
            }
        },
        {
            key: "magnify",
            value: function magnify(magnification) {
                this.offsets = this.offsets * magnification;
                this.mouseWheelDeltaMultiplier = this.mouseWheelDeltaMultiplier * magnification;
                this.relativeMouseCoordinatesMultiplier = this.relativeMouseCoordinatesMultiplier * magnification;
            }
        }
    ], [
        {
            key: "fromInitialOffsetsMouseWheelDeltaMultiplierAndRelativeMouseCoordinatesMultiplier",
            value: function fromInitialOffsetsMouseWheelDeltaMultiplierAndRelativeMouseCoordinatesMultiplier(initialOffsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier) {
                var offsets = initialOffsets, pan = new Pan(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);
                return pan;
            }
        },
        {
            key: "fromInitialPositionMouseWheelDeltaMultiplierAndRelativeMouseCoordinatesMultiplier",
            value: function fromInitialPositionMouseWheelDeltaMultiplierAndRelativeMouseCoordinatesMultiplier(initialPosition, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier) {
                var offsets = (0, _vector).scale3(initialPosition, _constants.INVERT_MULTIPLIER), pan = new Pan(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);
                return pan;
            }
        }
    ]);
    return Pan;
}();
exports.default = Pan;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgSU5WRVJUX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBhZGQzLCBzY2FsZTIsIHJlZmxlY3QyLCBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2Zmc2V0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyLCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgICB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICAgIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciA9IHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXI7XG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHM7XG4gIH1cblxuICBnZXREZWx0YU11bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIGdldFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcjtcbiAgfVxuXG4gIHVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpIHtcbiAgICBtb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGEgKiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7IC8vL1xuXG4gICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgdGhpcy5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKTsgLy8vXG5cbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHJlZmxlY3QyKHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIDEpKSxcbiAgICAgICAgICBkaXJlY3Rpb25zID0gWyAuLi5zY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgMCBdLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0cyA9IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zKGFuZ2xlcywgZGlyZWN0aW9ucywgMSk7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKHRoaXMub2Zmc2V0cywgcmVsYXRpdmVPZmZzZXRzKTtcbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuICAgIHRoaXMub2Zmc2V0cyA9IHRoaXMub2Zmc2V0cyAqIG1hZ25pZmljYXRpb247XG4gICAgdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyICogbWFnbmlmaWNhdGlvbjtcbiAgICB0aGlzLnJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIgPSB0aGlzLnJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIgKiBtYWduaWZpY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0c01vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXJBbmRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKGluaXRpYWxPZmZzZXRzLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyLCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IGluaXRpYWxPZmZzZXRzLCAvLy9cbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpO1xuXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbFBvc2l0aW9uTW91c2VXaGVlbERlbHRhTXVsdGlwbGllckFuZFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIoaW5pdGlhbFBvc2l0aW9uLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyLCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IHNjYWxlMyhpbml0aWFsUG9zaXRpb24sIElOVkVSVF9NVUxUSVBMSUVSKSxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpO1xuICAgIFxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVzQixHQUFjLENBQWQsVUFBYztBQUNELEdBQWlCLENBQWpCLE9BQWlCO0FBQ1QsR0FBc0IsQ0FBdEIsUUFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFeEQsR0FBRzthQUFILEdBQUcsQ0FDVixPQUFPLEVBQUUseUJBQXlCLEVBQUUsa0NBQWtDOzhCQUQvRCxHQUFHO2FBRWYsT0FBTyxHQUFHLE9BQU87YUFDakIseUJBQXlCLEdBQUcseUJBQXlCO2FBQ3JELGtDQUFrQyxHQUFHLGtDQUFrQzs7aUJBSjNELEdBQUc7O1lBT3RCLEdBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVUsR0FBRyxDQUFDOzRCQUNBLE9BQU87WUFDckIsQ0FBQzs7O1lBRUQsR0FBa0IsR0FBbEIsa0JBQWtCOzRCQUFsQixrQkFBa0IsR0FBRyxDQUFDOzRCQUNSLHlCQUF5QjtZQUN2QyxDQUFDOzs7WUFFRCxHQUFxQyxHQUFyQyxxQ0FBcUM7NEJBQXJDLHFDQUFxQyxHQUFHLENBQUM7NEJBQzNCLGtDQUFrQztZQUNoRCxDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhLENBQUMsd0JBQXdCLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUM5RCxlQUFlLEdBQUcsZUFBZSxRQUFRLHlCQUF5QixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFdkUsd0JBQXdCLE9BekJtQixPQUFpQixTQXlCMUIsd0JBQXdCLE9BQU8sa0NBQWtDLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUV6RyxHQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQ3ZCLHVDQUF1QyxPQTVCRixPQUFpQixlQUFqQixPQUFpQixTQTRCSSx3QkFBd0IsRUFBRSxDQUFDLElBQ3JGLFVBQVUsc0JBQVEsdUNBQXVDO29CQUFFLGVBQWU7b0JBQUUsQ0FBQztvQkFDN0UsZUFBZSxPQTdCOEIsUUFBc0IseUNBNkJWLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQztxQkFFL0UsT0FBTyxPQWhDK0IsT0FBaUIsWUFnQ25DLE9BQU8sRUFBRSxlQUFlO1lBQ25ELENBQUM7OztZQUVELEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztxQkFDakIsT0FBTyxRQUFRLE9BQU8sR0FBRyxhQUFhO3FCQUN0Qyx5QkFBeUIsUUFBUSx5QkFBeUIsR0FBRyxhQUFhO3FCQUMxRSxrQ0FBa0MsUUFBUSxrQ0FBa0MsR0FBRyxhQUFhO1lBQ25HLENBQUM7Ozs7WUFFTSxHQUFnRixHQUFoRixnRkFBZ0Y7NEJBQWhGLGdGQUFnRixDQUFDLGNBQWMsRUFBRSx5QkFBeUIsRUFBRSxrQ0FBa0MsRUFBRSxDQUFDO2dCQUN0SyxHQUFLLENBQUMsT0FBTyxHQUFHLGNBQWMsRUFDeEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLGtDQUFrQzt1QkFFbkYsR0FBRztZQUNaLENBQUM7OztZQUVNLEdBQWlGLEdBQWpGLGlGQUFpRjs0QkFBakYsaUZBQWlGLENBQUMsZUFBZSxFQUFFLHlCQUF5QixFQUFFLGtDQUFrQyxFQUFFLENBQUM7Z0JBQ3hLLEdBQUssQ0FBQyxPQUFPLE9BakQ4QixPQUFpQixTQWlEckMsZUFBZSxFQWxEUixVQUFjLHFCQW1EdEMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLGtDQUFrQzt1QkFFbkYsR0FBRztZQUNaLENBQUM7OztXQWxEa0IsR0FBRzs7a0JBQUgsR0FBRyJ9