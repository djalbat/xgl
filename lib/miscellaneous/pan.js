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
var Pan = function() {
    function Pan(offsets) {
        _classCallCheck(this, Pan);
        this.offsets = offsets;
    }
    _createClass(Pan, [
        {
            key: "getOffsets",
            value: function getOffsets() {
                return this.offsets;
            }
        },
        {
            key: "updateOffsets",
            value: function updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt) {
                var angles = tilt.getAngles(), scaledMouseWheelDelta = mouseWheelDelta * _constants.DELTA_SCALAR, scaledReflectedRelativeMouseCoordinates = _vector.reflect2(_vector.scale2(relativeMouseCoordinates, _constants.OFFSET_SCALAR)), directions = _toConsumableArray(scaledReflectedRelativeMouseCoordinates).concat([
                    scaledMouseWheelDelta,
                    0
                ]), relativeOffsets = _offsets.relativeOffsetsFromAnglesAndDirections(angles, directions);
                this.offsets = _vector.add3(this.offsets, relativeOffsets);
            }
        }
    ], [
        {
            key: "fromInitialOffsets",
            value: function fromInitialOffsets(initialOffsets) {
                var offsets = initialOffsets, pan = new Pan(offsets);
                return pan;
            }
        },
        {
            key: "fromInitialPosition",
            value: function fromInitialPosition(initialPosition) {
                var offsets = _vector.scale3(initialPosition, _constants.INVERT_SCALAR), pan = new Pan(offsets);
                return pan;
            }
        }
    ]);
    return Pan;
}();
exports.default = Pan;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkMywgc2NhbGUyLCByZWZsZWN0Miwgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29mZnNldHNcIjtcbmltcG9ydCB7IERFTFRBX1NDQUxBUiwgSU5WRVJUX1NDQUxBUiwgT0ZGU0VUX1NDQUxBUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0cykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHM7XG4gIH1cblxuICB1cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aWx0KSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBzY2FsZWRNb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGEgKiBERUxUQV9TQ0FMQVIsXG4gICAgICAgICAgc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gcmVmbGVjdDIoc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgT0ZGU0VUX1NDQUxBUikpLFxuICAgICAgICAgIGRpcmVjdGlvbnMgPSBbIC4uLnNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGVkTW91c2VXaGVlbERlbHRhLCAwIF0sXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zKTtcblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDModGhpcy5vZmZzZXRzLCByZWxhdGl2ZU9mZnNldHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0cyhpbml0aWFsT2Zmc2V0cykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBpbml0aWFsT2Zmc2V0cywgLy8vXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzKTtcblxuICAgIHJldHVybiBwYW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pIHtcbiAgICBjb25zdCBvZmZzZXRzID0gc2NhbGUzKGluaXRpYWxQb3NpdGlvbiwgSU5WRVJUX1NDQUxBUiksXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzKTtcbiAgICBcbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFbUMsT0FBaUI7SUFDVCxRQUFzQjtJQUNsQixVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBELEdBQUc7YUFBSCxHQUFHLENBQ1YsT0FBTzs4QkFEQSxHQUFHO2FBRWYsT0FBTyxHQUFHLE9BQU87O2lCQUZMLEdBQUc7O1lBS3RCLEdBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVU7NEJBQ0ksT0FBTzs7OztZQUdyQixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhLENBQUMsd0JBQXdCLEVBQUUsZUFBZSxFQUFFLElBQUk7b0JBQ3JELE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxJQUN2QixxQkFBcUIsR0FBRyxlQUFlLEdBYlUsVUFBYyxlQWMvRCx1Q0FBdUMsR0FoQkYsT0FBaUIsVUFBakIsT0FBaUIsUUFnQkksd0JBQXdCLEVBZGpDLFVBQWMsa0JBZS9ELFVBQVUsc0JBQVEsdUNBQXVDO29CQUFFLHFCQUFxQjtvQkFBRSxDQUFDO29CQUNuRixlQUFlLEdBakI4QixRQUFzQix3Q0FpQlYsTUFBTSxFQUFFLFVBQVU7cUJBRTVFLE9BQU8sR0FwQitCLE9BQWlCLFdBb0JuQyxPQUFPLEVBQUUsZUFBZTs7Ozs7WUFHNUMsR0FBa0IsR0FBbEIsa0JBQWtCOzRCQUFsQixrQkFBa0IsQ0FBQyxjQUFjO29CQUNoQyxPQUFPLEdBQUcsY0FBYyxFQUN4QixHQUFHLE9BQU8sR0FBRyxDQUFDLE9BQU87dUJBRXBCLEdBQUc7Ozs7WUFHTCxHQUFtQixHQUFuQixtQkFBbUI7NEJBQW5CLG1CQUFtQixDQUFDLGVBQWU7b0JBQ2xDLE9BQU8sR0EvQjhCLE9BQWlCLFFBK0JyQyxlQUFlLEVBN0JpQixVQUFjLGlCQThCL0QsR0FBRyxPQUFPLEdBQUcsQ0FBQyxPQUFPO3VCQUVwQixHQUFHOzs7O1dBOUJPLEdBQUc7O2tCQUFILEdBQUcifQ==