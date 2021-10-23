"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
var _vector = require("../maths/vector");
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
                    -multiplier,
                    0, 
                ], relativeAngles = (0, _vector).transform2(relativeMouseCoordinates, matrix);
                this.angles = (0, _vector).add2(this.angles, relativeAngles);
            }
        }
    ], [
        {
            key: "fromInitialAngles",
            value: function fromInitialAngles(initialAngles) {
                var angles = initialAngles, clockwise = false, tilt = new Tilt(angles, clockwise);
                return tilt;
            }
        },
        {
            key: "fromInitialAnglesAndClockwise",
            value: function fromInitialAnglesAndClockwise(initialAngles, clockwise) {
                var angles = initialAngles, tilt = new Tilt(angles, clockwise);
                return tilt;
            }
        }
    ]);
    return Tilt;
}();
exports.default = Tilt;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFOR0xFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYWRkMiwgc2NhbGUyLCB0cmFuc2Zvcm0yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoYW5nbGVzLCBjbG9ja3dpc2UpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlcztcbiAgICB0aGlzLmNsb2Nrd2lzZSA9IGNsb2Nrd2lzZTtcbiAgfVxuXG4gIGdldEFuZ2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbmdsZXM7XG4gIH1cblxuICBpc0Nsb2Nrd2lzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja3dpc2U7XG4gIH1cblxuICB1cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgQU5HTEVTX01VTFRJUExJRVIpOyAvLy9cblxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSB0aGlzLmNsb2Nrd2lzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICArMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgMCwgICAgICAgICAgICttdWx0aXBsaWVyLFxuICAgICAgICAgICAgLW11bHRpcGxpZXIsICAgICAgICAgICAwLFxuXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxhdGl2ZUFuZ2xlcyA9IHRyYW5zZm9ybTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtYXRyaXgpO1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQyKHRoaXMuYW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXMoaW5pdGlhbEFuZ2xlcykge1xuICAgIGNvbnN0IGFuZ2xlcyA9IGluaXRpYWxBbmdsZXMsIC8vL1xuICAgICAgICAgIGNsb2Nrd2lzZSA9IGZhbHNlLFxuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlc0FuZENsb2Nrd2lzZShpbml0aWFsQW5nbGVzLCBjbG9ja3dpc2UpIHtcbiAgICBjb25zdCBhbmdsZXMgPSBpbml0aWFsQW5nbGVzLCAvLy9cbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoYW5nbGVzLCBjbG9ja3dpc2UpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUaWx0IiwiYW5nbGVzIiwiY2xvY2t3aXNlIiwiZ2V0QW5nbGVzIiwiaXNDbG9ja3dpc2UiLCJ1cGRhdGVBbmdsZXMiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtdWx0aXBsaWVyIiwibWF0cml4IiwicmVsYXRpdmVBbmdsZXMiLCJmcm9tSW5pdGlhbEFuZ2xlcyIsImluaXRpYWxBbmdsZXMiLCJ0aWx0IiwiZnJvbUluaXRpYWxBbmdsZXNBbmRDbG9ja3dpc2UiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRXNCLEdBQWMsQ0FBZCxVQUFjO0FBQ1AsR0FBaUIsQ0FBakIsT0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJDQSxJQUFJLGlCQUFWLFFBQVE7YUFBRkEsSUFBSSxDQUNYQyxNQUFNLEVBQUVDLFNBQVM7OEJBRFZGLElBQUk7UUFFckIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07UUFDcEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBLFNBQVM7O2lCQUhURixJQUFJOztZQU12QkcsR0FBUyxFQUFUQSxDQUFTO21CQUFUQSxRQUFRLENBQVJBLFNBQVMsR0FBRyxDQUFDO2dCQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUNGLE1BQU07WUFDcEIsQ0FBQzs7O1lBRURHLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLEdBQUcsQ0FBQztnQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDRixTQUFTO1lBQ3ZCLENBQUM7OztZQUVERyxHQUFZLEVBQVpBLENBQVk7bUJBQVpBLFFBQVEsQ0FBUkEsWUFBWSxDQUFDQyx3QkFBd0IsRUFBRSxDQUFDO2dCQUN0Q0Esd0JBQXdCLE9BakJhLE9BQWlCLFNBaUJwQkEsd0JBQXdCLEVBbEI1QixVQUFjLG9CQWtCb0MsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVuRixHQUFLLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNMLFNBQVMsSUFDWixDQUFDLElBQ0MsQ0FBQyxFQUNsQk0sTUFBTSxHQUFHLENBQUM7b0JBRVIsQ0FBQztxQkFBYUQsVUFBVTtxQkFDdkJBLFVBQVU7b0JBQVksQ0FBQztnQkFFMUIsQ0FBQyxFQUNERSxjQUFjLE9BNUJpQixPQUFpQixhQTRCcEJILHdCQUF3QixFQUFFRSxNQUFNO2dCQUVsRSxJQUFJLENBQUNQLE1BQU0sT0E5QjBCLE9BQWlCLE9BOEJuQyxJQUFJLENBQUNBLE1BQU0sRUFBRVEsY0FBYztZQUNoRCxDQUFDOzs7O1lBRU1DLEdBQWlCLEVBQWpCQSxDQUFpQjttQkFBeEIsUUFBUSxDQUFEQSxpQkFBaUIsQ0FBQ0MsYUFBYSxFQUFFLENBQUM7Z0JBQ3ZDLEdBQUssQ0FBQ1YsTUFBTSxHQUFHVSxhQUFhLEVBQ3RCVCxTQUFTLEdBQUcsS0FBSyxFQUNqQlUsSUFBSSxHQUFHLEdBQUcsQ0FBQ1osSUFBSSxDQUFDQyxNQUFNLEVBQUVDLFNBQVM7Z0JBRXZDLE1BQU0sQ0FBQ1UsSUFBSTtZQUNiLENBQUM7OztZQUVNQyxHQUE2QixFQUE3QkEsQ0FBNkI7bUJBQXBDLFFBQVEsQ0FBREEsNkJBQTZCLENBQUNGLGFBQWEsRUFBRVQsU0FBUyxFQUFFLENBQUM7Z0JBQzlELEdBQUssQ0FBQ0QsTUFBTSxHQUFHVSxhQUFhLEVBQ3RCQyxJQUFJLEdBQUcsR0FBRyxDQUFDWixJQUFJLENBQUNDLE1BQU0sRUFBRUMsU0FBUztnQkFFdkMsTUFBTSxDQUFDVSxJQUFJO1lBQ2IsQ0FBQzs7O1dBNUNrQlosSUFBSTs7a0JBQUpBLElBQUkifQ==