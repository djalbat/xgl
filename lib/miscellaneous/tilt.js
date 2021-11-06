"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
var _vector = require("../maths/vector");
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
    function Tilt(angles, clockwise) {
        _classCallCheck(this, Tilt);
        this.angles = angles;
        this.clockwise = clockwise;
    }
    _createClass(Tilt, [
        {
            key: "getAngles",
            value: function getAngles() {
                return this.angles;
            }
        },
        {
            key: "isClockwise",
            value: function isClockwise() {
                return this.clockwise;
            }
        },
        {
            key: "updateAngles",
            value: function updateAngles(relativeMouseCoordinates) {
                relativeMouseCoordinates = (0, _vector).scale2(relativeMouseCoordinates, _constants.ANGLES_MULTIPLIER); ///
                var multiplier = this.clockwise ? +1 : -1, matrix = [
                    0,
                    +multiplier,
                    0,
                    -multiplier,
                    0,
                    0,
                    0,
                    0,
                    0
                ], relativeAngles = (0, _vector).transform3(_toConsumableArray(relativeMouseCoordinates).concat([
                    0
                ]), matrix);
                this.angles = (0, _vector).add3(this.angles, relativeAngles);
            }
        }
    ], [
        {
            key: "fromInitialAngles",
            value: function fromInitialAngles(initialAngles) {
                var angles = _toConsumableArray(initialAngles).concat([
                    0
                ]), clockwise = false, tilt = new Tilt(angles, clockwise);
                return tilt;
            }
        },
        {
            key: "fromInitialAnglesAndClockwise",
            value: function fromInitialAnglesAndClockwise(initialAngles, clockwise) {
                var angles = _toConsumableArray(initialAngles).concat([
                    0
                ]), tilt = new Tilt(angles, clockwise);
                return tilt;
            }
        }
    ]);
    return Tilt;
}();
exports.default = Tilt;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFOR0xFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYWRkMywgc2NhbGUyLCB0cmFuc2Zvcm0zIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoYW5nbGVzLCBjbG9ja3dpc2UpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlcztcbiAgICB0aGlzLmNsb2Nrd2lzZSA9IGNsb2Nrd2lzZTtcbiAgfVxuXG4gIGdldEFuZ2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbmdsZXM7XG4gIH1cblxuICBpc0Nsb2Nrd2lzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja3dpc2U7XG4gIH1cblxuICB1cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgQU5HTEVTX01VTFRJUExJRVIpOyAvLy9cblxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSB0aGlzLmNsb2Nrd2lzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICArMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgICAgICAgICAgIDAsICttdWx0aXBsaWVyLCAwLFxuICAgICAgICAgICAgLW11bHRpcGxpZXIsICAgICAgICAgICAwLCAwLFxuICAgICAgICAgICAgICAgICAgICAgIDAsICAgICAgICAgICAwLCAwXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVzID0gdHJhbnNmb3JtMyhbIC4uLnJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMCBdLCBtYXRyaXgpO1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQzKHRoaXMuYW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXMoaW5pdGlhbEFuZ2xlcykge1xuICAgIGNvbnN0IGFuZ2xlcyA9IFsgLi4uaW5pdGlhbEFuZ2xlcywgMCBdLFxuICAgICAgICAgIGNsb2Nrd2lzZSA9IGZhbHNlLFxuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlc0FuZENsb2Nrd2lzZShpbml0aWFsQW5nbGVzLCBjbG9ja3dpc2UpIHtcbiAgICBjb25zdCBhbmdsZXMgPSBbIC4uLmluaXRpYWxBbmdsZXMsIDAgXSxcbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoYW5nbGVzLCBjbG9ja3dpc2UpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUaWx0IiwiYW5nbGVzIiwiY2xvY2t3aXNlIiwiZ2V0QW5nbGVzIiwiaXNDbG9ja3dpc2UiLCJ1cGRhdGVBbmdsZXMiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtdWx0aXBsaWVyIiwibWF0cml4IiwicmVsYXRpdmVBbmdsZXMiLCJmcm9tSW5pdGlhbEFuZ2xlcyIsImluaXRpYWxBbmdsZXMiLCJ0aWx0IiwiZnJvbUluaXRpYWxBbmdsZXNBbmRDbG9ja3dpc2UiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRXNCLEdBQWMsQ0FBZCxVQUFjO0FBQ1AsR0FBaUIsQ0FBakIsT0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFckNBLElBQUksaUJBQVYsUUFBUTthQUFGQSxJQUFJLENBQ1hDLE1BQU0sRUFBRUMsU0FBUzs4QkFEVkYsSUFBSTtRQUVyQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtRQUNwQixJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUzs7aUJBSFRGLElBQUk7O1lBTXZCRyxHQUFTLEVBQVRBLENBQVM7bUJBQVRBLFFBQVEsQ0FBUkEsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQ0YsTUFBTTtZQUNwQixDQUFDOzs7WUFFREcsR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsR0FBRyxDQUFDO2dCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUNGLFNBQVM7WUFDdkIsQ0FBQzs7O1lBRURHLEdBQVksRUFBWkEsQ0FBWTttQkFBWkEsUUFBUSxDQUFSQSxZQUFZLENBQUNDLHdCQUF3QixFQUFFLENBQUM7Z0JBQ3RDQSx3QkFBd0IsT0FqQmEsT0FBaUIsU0FpQnBCQSx3QkFBd0IsRUFsQjVCLFVBQWMsb0JBa0JvQyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRW5GLEdBQUssQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0wsU0FBUyxJQUNaLENBQUMsSUFDQyxDQUFDLEVBQ2xCTSxNQUFNLEdBQUcsQ0FBQztvQkFFRSxDQUFDO3FCQUFHRCxVQUFVO29CQUFFLENBQUM7cUJBQzFCQSxVQUFVO29CQUFZLENBQUM7b0JBQUUsQ0FBQztvQkFDakIsQ0FBQztvQkFBWSxDQUFDO29CQUFFLENBQUM7Z0JBRTdCLENBQUMsRUFDREUsY0FBYyxPQTdCaUIsT0FBaUIsZ0NBNkJmSCx3QkFBd0IsU0FBN0IsQ0FBQztvQkFBOEIsQ0FBQztnQkFBQyxDQUFDLEdBQUVFLE1BQU07Z0JBRTVFLElBQUksQ0FBQ1AsTUFBTSxPQS9CMEIsT0FBaUIsT0ErQm5DLElBQUksQ0FBQ0EsTUFBTSxFQUFFUSxjQUFjO1lBQ2hELENBQUM7Ozs7WUFFTUMsR0FBaUIsRUFBakJBLENBQWlCO21CQUF4QixRQUFRLENBQURBLGlCQUFpQixDQUFDQyxhQUFhLEVBQUUsQ0FBQztnQkFDdkMsR0FBSyxDQUFDVixNQUFNLHNCQUFRVSxhQUFhLFNBQWxCLENBQUM7b0JBQW1CLENBQUM7Z0JBQUMsQ0FBQyxHQUNoQ1QsU0FBUyxHQUFHLEtBQUssRUFDakJVLElBQUksR0FBRyxHQUFHLENBQUNaLElBQUksQ0FBQ0MsTUFBTSxFQUFFQyxTQUFTO2dCQUV2QyxNQUFNLENBQUNVLElBQUk7WUFDYixDQUFDOzs7WUFFTUMsR0FBNkIsRUFBN0JBLENBQTZCO21CQUFwQyxRQUFRLENBQURBLDZCQUE2QixDQUFDRixhQUFhLEVBQUVULFNBQVMsRUFBRSxDQUFDO2dCQUM5RCxHQUFLLENBQUNELE1BQU0sc0JBQVFVLGFBQWEsU0FBbEIsQ0FBQztvQkFBbUIsQ0FBQztnQkFBQyxDQUFDLEdBQ2hDQyxJQUFJLEdBQUcsR0FBRyxDQUFDWixJQUFJLENBQUNDLE1BQU0sRUFBRUMsU0FBUztnQkFFdkMsTUFBTSxDQUFDVSxJQUFJO1lBQ2IsQ0FBQzs7O1dBN0NrQlosSUFBSTs7a0JBQUpBLElBQUkifQ==