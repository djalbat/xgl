"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _array = require("../utilities/array");
var _vector = require("../maths/vector");
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
var Tilt = /*#__PURE__*/ function() {
    function Tilt(angles, flipped) {
        _classCallCheck(this, Tilt);
        this.angles = angles;
        this.flipped = flipped;
    }
    _createClass(Tilt, [
        {
            key: "getXAngle",
            value: function getXAngle() {
                var firstAngle = (0, _array).first(this.angles), xAngle = firstAngle; ///
                return xAngle;
            }
        },
        {
            key: "getYAngle",
            value: function getYAngle() {
                var secondAngle = (0, _array).second(this.angles), yAngle = secondAngle; ///
                return yAngle;
            }
        },
        {
            key: "getZAngle",
            value: function getZAngle() {
                var zAngle = 0;
                return zAngle;
            }
        },
        {
            key: "getAngles",
            value: function getAngles() {
                return this.angles;
            }
        },
        {
            key: "updateAngles",
            value: function updateAngles(relativeMouseCoordinates) {
                var scalar = this.flipped ? +_constants.ANGLES_SCALAR : -_constants.ANGLES_SCALAR, matrix = [
                    0,
                    scalar,
                    0,
                    -scalar,
                    0,
                    0,
                    0,
                    0,
                    0, 
                ], relativeAngles = (0, _vector).transform3(_toConsumableArray(relativeMouseCoordinates).concat([
                    0
                ]), matrix); ///
                this.angles = (0, _vector).add3(this.angles, relativeAngles);
            }
        }
    ], [
        {
            key: "fromInitialAnglesAndFlipped",
            value: function fromInitialAnglesAndFlipped(initialAngles, flipped) {
                var scalar = flipped ? +_constants.DEGREES_TO_RADIANS_SCALAR : -_constants.DEGREES_TO_RADIANS_SCALAR, matrix = [
                    0,
                    scalar,
                    0,
                    -scalar,
                    0,
                    0,
                    0,
                    0,
                    0, 
                ], angles = (0, _vector).transform3(_toConsumableArray(initialAngles).concat([
                    0
                ]), matrix), tilt = new Tilt(angles, flipped);
                return tilt;
            }
        }
    ]);
    return Tilt;
}();
exports.default = Tilt;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBhZGQzLCB0cmFuc2Zvcm0zIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgQU5HTEVTX1NDQUxBUiwgREVHUkVFU19UT19SQURJQU5TX1NDQUxBUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsdCB7XG4gIGNvbnN0cnVjdG9yKGFuZ2xlcywgZmxpcHBlZCkge1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzO1xuICAgIHRoaXMuZmxpcHBlZCA9IGZsaXBwZWQ7XG4gIH1cblxuICBnZXRYQW5nbGUoKSB7XG4gICAgY29uc3QgZmlyc3RBbmdsZSA9IGZpcnN0KHRoaXMuYW5nbGVzKSxcbiAgICAgICAgICB4QW5nbGUgPSBmaXJzdEFuZ2xlOyAgLy8vXG5cbiAgICByZXR1cm4geEFuZ2xlO1xuICB9XG4gIFxuICBnZXRZQW5nbGUoKSB7XG4gICAgY29uc3Qgc2Vjb25kQW5nbGUgPSBzZWNvbmQodGhpcy5hbmdsZXMpLFxuICAgICAgICAgIHlBbmdsZSA9IHNlY29uZEFuZ2xlOyAvLy9cblxuICAgIHJldHVybiB5QW5nbGU7XG4gIH1cblxuICBnZXRaQW5nbGUoKSB7XG4gICAgY29uc3QgekFuZ2xlID0gMDtcblxuICAgIHJldHVybiB6QW5nbGU7XG4gIH1cbiAgXG4gIGdldEFuZ2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbmdsZXM7XG4gIH1cbiAgXG4gIHVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBzY2FsYXIgPSB0aGlzLmZsaXBwZWQgP1xuICAgICAgICAgICAgICAgICAgICAgK0FOR0xFU19TQ0FMQVIgOlxuICAgICAgICAgICAgICAgICAgICAgICAtQU5HTEVTX1NDQUxBUixcbiAgICAgICAgICBtYXRyaXggPSBbXG5cbiAgICAgICAgICAgICAgICAgIDAsIHNjYWxhciwgMCxcbiAgICAgICAgICAgIC1zY2FsYXIsICAgICAgMCwgMCxcbiAgICAgICAgICAgICAgICAgIDAsICAgICAgMCwgMCxcblxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsYXRpdmVBbmdsZXMgPSB0cmFuc2Zvcm0zKFsgLi4ucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCAwIF0sIG1hdHJpeCk7ICAvLy9cblxuICAgIHRoaXMuYW5nbGVzID0gYWRkMyh0aGlzLmFuZ2xlcywgcmVsYXRpdmVBbmdsZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gZmxpcHBlZCA/XG4gICAgICAgICAgICAgICAgICAgICArREVHUkVFU19UT19SQURJQU5TX1NDQUxBUiA6XG4gICAgICAgICAgICAgICAgICAgICAgIC1ERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgICAgICAgMCwgc2NhbGFyLCAwLFxuICAgICAgICAgICAgLXNjYWxhciwgICAgICAwLCAwLFxuICAgICAgICAgICAgICAgICAgMCwgICAgICAwLCAwLFxuXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhbmdsZXMgPSB0cmFuc2Zvcm0zKFsgLi4uaW5pdGlhbEFuZ2xlcywgMCBdLCBtYXRyaXgpLCAvLy9cbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoYW5nbGVzLCBmbGlwcGVkKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFa0IsR0FBb0IsQ0FBcEIsTUFBb0I7QUFDakIsR0FBaUIsQ0FBakIsT0FBaUI7QUFDTyxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVsRCxJQUFJO2FBQUosSUFBSSxDQUNYLE1BQU0sRUFBRSxPQUFPOzhCQURSLElBQUk7YUFFaEIsTUFBTSxHQUFHLE1BQU07YUFDZixPQUFPLEdBQUcsT0FBTzs7aUJBSEwsSUFBSTs7WUFNdkIsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsR0FBSyxDQUFDLFVBQVUsT0FYVSxNQUFvQixhQVdoQixNQUFNLEdBQzlCLE1BQU0sR0FBRyxVQUFVLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUV4QixNQUFNO1lBQ2YsQ0FBQzs7O1lBRUQsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsR0FBSyxDQUFDLFdBQVcsT0FsQlMsTUFBb0IsY0FrQmQsTUFBTSxHQUNoQyxNQUFNLEdBQUcsV0FBVyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFeEIsTUFBTTtZQUNmLENBQUM7OztZQUVELEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsR0FBRyxDQUFDO2dCQUNYLEdBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQzt1QkFFVCxNQUFNO1lBQ2YsQ0FBQzs7O1lBRUQsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxHQUFHLENBQUM7NEJBQ0MsTUFBTTtZQUNwQixDQUFDOzs7WUFFRCxHQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztnQkFDdEMsR0FBSyxDQUFDLE1BQU0sUUFBUSxPQUFPLElBakMwQixVQUFjLGtCQUFkLFVBQWMsZ0JBb0M3RCxNQUFNO29CQUVFLENBQUM7b0JBQUUsTUFBTTtvQkFBRSxDQUFDO3FCQUNqQixNQUFNO29CQUFPLENBQUM7b0JBQUUsQ0FBQztvQkFDWixDQUFDO29CQUFPLENBQUM7b0JBQUUsQ0FBQzttQkFHcEIsY0FBYyxPQTVDUyxPQUFpQixnQ0E0Q1Asd0JBQXdCO29CQUFFLENBQUM7b0JBQUksTUFBTSxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztxQkFFOUUsTUFBTSxPQTlDa0IsT0FBaUIsWUE4Q3RCLE1BQU0sRUFBRSxjQUFjO1lBQ2hELENBQUM7Ozs7WUFFTSxHQUEyQixHQUEzQiwyQkFBMkI7NEJBQTNCLDJCQUEyQixDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDMUQsR0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLElBakQrQixVQUFjLDhCQUFkLFVBQWMsNEJBb0Q3RCxNQUFNO29CQUVFLENBQUM7b0JBQUUsTUFBTTtvQkFBRSxDQUFDO3FCQUNqQixNQUFNO29CQUFPLENBQUM7b0JBQUUsQ0FBQztvQkFDWixDQUFDO29CQUFPLENBQUM7b0JBQUUsQ0FBQzttQkFHcEIsTUFBTSxPQTVEaUIsT0FBaUIsZ0NBNERmLGFBQWE7b0JBQUUsQ0FBQztvQkFBSSxNQUFNLEdBQ25ELElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPO3VCQUU5QixJQUFJO1lBQ2IsQ0FBQzs7O1dBN0RrQixJQUFJOztrQkFBSixJQUFJIn0=