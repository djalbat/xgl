"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _vector = require("../maths/vector");
var _constants = require("../constants");
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
    function Pan(offsets, deltaMultiplier) {
        _classCallCheck(this, Pan);
        this.offsets = offsets;
        this.deltaMultiplier = deltaMultiplier;
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
                return this.deltaMultiplier;
            }
        },
        {
            key: "updateOffsets",
            value: function updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt) {
                var angles = tilt.getAngles(), scaledMouseWheelDelta = mouseWheelDelta * this.deltaMultiplier, scaledReflectedRelativeMouseCoordinates = (0, _vector).reflect2((0, _vector).scale2(relativeMouseCoordinates, _constants.OFFSET_MULTIPLIER)), directions = _toConsumableArray(scaledReflectedRelativeMouseCoordinates).concat([
                    scaledMouseWheelDelta,
                    0
                ]), relativeOffsets = (0, _offsets).relativeOffsetsFromAnglesAndDirections(angles, directions);
                this.offsets = (0, _vector).add3(this.offsets, relativeOffsets);
            }
        }
    ], [
        {
            key: "fromInitialOffsetsAndDeltaMultiplier",
            value: function fromInitialOffsetsAndDeltaMultiplier(initialOffsets, deltaMultiplier) {
                var offsets = initialOffsets, pan = new Pan(offsets, deltaMultiplier);
                return pan;
            }
        },
        {
            key: "fromInitialPositionAndDeltaMultiplier",
            value: function fromInitialPositionAndDeltaMultiplier(initialPosition, deltaMultiplier) {
                var offsets = (0, _vector).scale3(initialPosition, _constants.INVERT_MULTIPLIER), pan = new Pan(offsets, deltaMultiplier);
                return pan;
            }
        }
    ]);
    return Pan;
}();
exports.default = Pan;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkMywgc2NhbGUyLCByZWZsZWN0Miwgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgSU5WRVJUX01VTFRJUExJRVIsIE9GRlNFVF9NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29mZnNldHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0cywgZGVsdGFNdWx0aXBsaWVyKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgICB0aGlzLmRlbHRhTXVsdGlwbGllciA9IGRlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIGdldERlbHRhTXVsdGlwbGllcigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICB1cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aWx0KSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBzY2FsZWRNb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGEgKiB0aGlzLmRlbHRhTXVsdGlwbGllcixcbiAgICAgICAgICBzY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSByZWZsZWN0MihzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBPRkZTRVRfTVVMVElQTElFUikpLFxuICAgICAgICAgIGRpcmVjdGlvbnMgPSBbIC4uLnNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGVkTW91c2VXaGVlbERlbHRhLCAwIF0sXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zKTtcblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDModGhpcy5vZmZzZXRzLCByZWxhdGl2ZU9mZnNldHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0c0FuZERlbHRhTXVsdGlwbGllcihpbml0aWFsT2Zmc2V0cywgZGVsdGFNdWx0aXBsaWVyKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IGluaXRpYWxPZmZzZXRzLCAvLy9cbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMsIGRlbHRhTXVsdGlwbGllcik7XG5cbiAgICByZXR1cm4gcGFuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsUG9zaXRpb25BbmREZWx0YU11bHRpcGxpZXIoaW5pdGlhbFBvc2l0aW9uLCBkZWx0YU11bHRpcGxpZXIpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gc2NhbGUzKGluaXRpYWxQb3NpdGlvbiwgSU5WRVJUX01VTFRJUExJRVIpLFxuICAgICAgICAgIHBhbiA9IG5ldyBQYW4ob2Zmc2V0cywgZGVsdGFNdWx0aXBsaWVyKTtcbiAgICBcbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFbUMsR0FBaUIsQ0FBakIsT0FBaUI7QUFDWCxHQUFjLENBQWQsVUFBYztBQUNaLEdBQXNCLENBQXRCLFFBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXhELEdBQUc7YUFBSCxHQUFHLENBQ1YsT0FBTyxFQUFFLGVBQWU7OEJBRGpCLEdBQUc7YUFFZixPQUFPLEdBQUcsT0FBTzthQUNqQixlQUFlLEdBQUcsZUFBZTs7aUJBSHJCLEdBQUc7O1lBTXRCLEdBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVUsR0FBRyxDQUFDOzRCQUNBLE9BQU87WUFDckIsQ0FBQzs7O1lBRUQsR0FBa0IsR0FBbEIsa0JBQWtCOzRCQUFsQixrQkFBa0IsR0FBRyxDQUFDOzRCQUNSLGVBQWU7WUFDN0IsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYSxDQUFDLHdCQUF3QixFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDOUQsR0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxJQUN2QixxQkFBcUIsR0FBRyxlQUFlLFFBQVEsZUFBZSxFQUM5RCx1Q0FBdUMsT0FyQkYsT0FBaUIsZUFBakIsT0FBaUIsU0FxQkksd0JBQXdCLEVBcEJ2QyxVQUFjLHNCQXFCekQsVUFBVSxzQkFBUSx1Q0FBdUM7b0JBQUUscUJBQXFCO29CQUFFLENBQUM7b0JBQ25GLGVBQWUsT0FyQjhCLFFBQXNCLHlDQXFCVixNQUFNLEVBQUUsVUFBVTtxQkFFNUUsT0FBTyxPQXpCK0IsT0FBaUIsWUF5Qm5DLE9BQU8sRUFBRSxlQUFlO1lBQ25ELENBQUM7Ozs7WUFFTSxHQUFvQyxHQUFwQyxvQ0FBb0M7NEJBQXBDLG9DQUFvQyxDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsQ0FBQztnQkFDNUUsR0FBSyxDQUFDLE9BQU8sR0FBRyxjQUFjLEVBQ3hCLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxlQUFlO3VCQUVyQyxHQUFHO1lBQ1osQ0FBQzs7O1lBRU0sR0FBcUMsR0FBckMscUNBQXFDOzRCQUFyQyxxQ0FBcUMsQ0FBQyxlQUFlLEVBQUUsZUFBZSxFQUFFLENBQUM7Z0JBQzlFLEdBQUssQ0FBQyxPQUFPLE9BcEM4QixPQUFpQixTQW9DckMsZUFBZSxFQW5DVyxVQUFjLHFCQW9DekQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGVBQWU7dUJBRXJDLEdBQUc7WUFDWixDQUFDOzs7V0FwQ2tCLEdBQUc7O2tCQUFILEdBQUcifQ==