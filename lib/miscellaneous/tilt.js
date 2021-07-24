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
                var scalar = this.flipped ? +_constants.ANGLES_MULTIPLIER : -_constants.ANGLES_MULTIPLIER, matrix = [
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
                var scalar = flipped ? +_constants.DEGREES_TO_RADIANS_MULTIPLIER : -_constants.DEGREES_TO_RADIANS_MULTIPLIER, matrix = [
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBhZGQzLCB0cmFuc2Zvcm0zIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgQU5HTEVTX01VTFRJUExJRVIsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoYW5nbGVzLCBmbGlwcGVkKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXM7XG4gICAgdGhpcy5mbGlwcGVkID0gZmxpcHBlZDtcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QodGhpcy5hbmdsZXMpLFxuICAgICAgICAgIHhBbmdsZSA9IGZpcnN0QW5nbGU7ICAvLy9cblxuICAgIHJldHVybiB4QW5nbGU7XG4gIH1cbiAgXG4gIGdldFlBbmdsZSgpIHtcbiAgICBjb25zdCBzZWNvbmRBbmdsZSA9IHNlY29uZCh0aGlzLmFuZ2xlcyksXG4gICAgICAgICAgeUFuZ2xlID0gc2Vjb25kQW5nbGU7IC8vL1xuXG4gICAgcmV0dXJuIHlBbmdsZTtcbiAgfVxuXG4gIGdldFpBbmdsZSgpIHtcbiAgICBjb25zdCB6QW5nbGUgPSAwO1xuXG4gICAgcmV0dXJuIHpBbmdsZTtcbiAgfVxuICBcbiAgZ2V0QW5nbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmFuZ2xlcztcbiAgfVxuICBcbiAgdXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHNjYWxhciA9IHRoaXMuZmxpcHBlZCA/XG4gICAgICAgICAgICAgICAgICAgICArQU5HTEVTX01VTFRJUExJRVIgOlxuICAgICAgICAgICAgICAgICAgICAgICAtQU5HTEVTX01VTFRJUExJRVIsXG4gICAgICAgICAgbWF0cml4ID0gW1xuXG4gICAgICAgICAgICAgICAgICAwLCBzY2FsYXIsIDAsXG4gICAgICAgICAgICAtc2NhbGFyLCAgICAgIDAsIDAsXG4gICAgICAgICAgICAgICAgICAwLCAgICAgIDAsIDAsXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVzID0gdHJhbnNmb3JtMyhbIC4uLnJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMCBdLCBtYXRyaXgpOyAgLy8vXG5cbiAgICB0aGlzLmFuZ2xlcyA9IGFkZDModGhpcy5hbmdsZXMsIHJlbGF0aXZlQW5nbGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCkge1xuICAgIGNvbnN0IHNjYWxhciA9IGZsaXBwZWQgP1xuICAgICAgICAgICAgICAgICAgICAgK0RFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgLURFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgICAgICAgMCwgc2NhbGFyLCAwLFxuICAgICAgICAgICAgLXNjYWxhciwgICAgICAwLCAwLFxuICAgICAgICAgICAgICAgICAgMCwgICAgICAwLCAwLFxuXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhbmdsZXMgPSB0cmFuc2Zvcm0zKFsgLi4uaW5pdGlhbEFuZ2xlcywgMCBdLCBtYXRyaXgpLCAvLy9cbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoYW5nbGVzLCBmbGlwcGVkKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFa0IsR0FBb0IsQ0FBcEIsTUFBb0I7QUFDakIsR0FBaUIsQ0FBakIsT0FBaUI7QUFDZSxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUxRCxJQUFJO2FBQUosSUFBSSxDQUNYLE1BQU0sRUFBRSxPQUFPOzhCQURSLElBQUk7YUFFaEIsTUFBTSxHQUFHLE1BQU07YUFDZixPQUFPLEdBQUcsT0FBTzs7aUJBSEwsSUFBSTs7WUFNdkIsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsR0FBSyxDQUFDLFVBQVUsT0FYVSxNQUFvQixhQVdoQixNQUFNLEdBQzlCLE1BQU0sR0FBRyxVQUFVLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUV4QixNQUFNO1lBQ2YsQ0FBQzs7O1lBRUQsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsR0FBSyxDQUFDLFdBQVcsT0FsQlMsTUFBb0IsY0FrQmQsTUFBTSxHQUNoQyxNQUFNLEdBQUcsV0FBVyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFeEIsTUFBTTtZQUNmLENBQUM7OztZQUVELEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsR0FBRyxDQUFDO2dCQUNYLEdBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQzt1QkFFVCxNQUFNO1lBQ2YsQ0FBQzs7O1lBRUQsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxHQUFHLENBQUM7NEJBQ0MsTUFBTTtZQUNwQixDQUFDOzs7WUFFRCxHQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztnQkFDdEMsR0FBSyxDQUFDLE1BQU0sUUFBUSxPQUFPLElBakNrQyxVQUFjLHNCQUFkLFVBQWMsb0JBb0NyRSxNQUFNO29CQUVFLENBQUM7b0JBQUUsTUFBTTtvQkFBRSxDQUFDO3FCQUNqQixNQUFNO29CQUFPLENBQUM7b0JBQUUsQ0FBQztvQkFDWixDQUFDO29CQUFPLENBQUM7b0JBQUUsQ0FBQzttQkFHcEIsY0FBYyxPQTVDUyxPQUFpQixnQ0E0Q1Asd0JBQXdCO29CQUFFLENBQUM7b0JBQUksTUFBTSxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztxQkFFOUUsTUFBTSxPQTlDa0IsT0FBaUIsWUE4Q3RCLE1BQU0sRUFBRSxjQUFjO1lBQ2hELENBQUM7Ozs7WUFFTSxHQUEyQixHQUEzQiwyQkFBMkI7NEJBQTNCLDJCQUEyQixDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDMUQsR0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLElBakR1QyxVQUFjLGtDQUFkLFVBQWMsZ0NBb0RyRSxNQUFNO29CQUVFLENBQUM7b0JBQUUsTUFBTTtvQkFBRSxDQUFDO3FCQUNqQixNQUFNO29CQUFPLENBQUM7b0JBQUUsQ0FBQztvQkFDWixDQUFDO29CQUFPLENBQUM7b0JBQUUsQ0FBQzttQkFHcEIsTUFBTSxPQTVEaUIsT0FBaUIsZ0NBNERmLGFBQWE7b0JBQUUsQ0FBQztvQkFBSSxNQUFNLEdBQ25ELElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPO3VCQUU5QixJQUFJO1lBQ2IsQ0FBQzs7O1dBN0RrQixJQUFJOztrQkFBSixJQUFJIn0=