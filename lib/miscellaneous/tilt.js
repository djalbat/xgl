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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwibmFtZXMiOlsiQU5HTEVTX01VTFRJUExJRVIiLCJhZGQyIiwic2NhbGUyIiwidHJhbnNmb3JtMiIsIlRpbHQiLCJjb25zdHJ1Y3RvciIsImFuZ2xlcyIsImNsb2Nrd2lzZSIsImdldEFuZ2xlcyIsImlzQ2xvY2t3aXNlIiwidXBkYXRlQW5nbGVzIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibXVsdGlwbGllciIsIm1hdHJpeCIsInJlbGF0aXZlQW5nbGVzIiwiZnJvbUluaXRpYWxBbmdsZXMiLCJpbml0aWFsQW5nbGVzIiwidGlsdCIsImZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVzQixHQUFjLENBQWQsVUFBYztBQUNQLEdBQWlCLENBQWpCLE9BQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVyQyxJQUFJLGlCQUFWLFFBQVE7YUFBRixJQUFJLENBQ1gsTUFBTSxFQUFFLFNBQVM7OEJBRFYsSUFBSTtRQUVyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTOztpQkFIVCxJQUFJOztZQU12QixHQUFTLEdBQVQsU0FBUzttQkFBVCxRQUFRLENBQVIsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3BCLENBQUM7OztZQUVELEdBQVcsR0FBWCxXQUFXO21CQUFYLFFBQVEsQ0FBUixXQUFXLEdBQUcsQ0FBQztnQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDdkIsQ0FBQzs7O1lBRUQsR0FBWSxHQUFaLFlBQVk7bUJBQVosUUFBUSxDQUFSLFlBQVksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2dCQUN0Qyx3QkFBd0IsT0FqQmEsT0FBaUIsU0FpQnBCLHdCQUF3QixFQWxCNUIsVUFBYyxvQkFrQm9DLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFbkYsR0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUNaLENBQUMsSUFDQyxDQUFDLEVBQ2xCLE1BQU0sR0FBRyxDQUFDO29CQUVSLENBQUM7cUJBQWEsVUFBVTtxQkFDdkIsVUFBVTtvQkFBWSxDQUFDO2dCQUUxQixDQUFDLEVBQ0QsY0FBYyxPQTVCaUIsT0FBaUIsYUE0QnBCLHdCQUF3QixFQUFFLE1BQU07Z0JBRWxFLElBQUksQ0FBQyxNQUFNLE9BOUIwQixPQUFpQixPQThCbkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxjQUFjO1lBQ2hELENBQUM7Ozs7WUFFTSxHQUFpQixHQUFqQixpQkFBaUI7bUJBQXhCLFFBQVEsQ0FBRCxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDdkMsR0FBSyxDQUFDLE1BQU0sR0FBRyxhQUFhLEVBQ3RCLFNBQVMsR0FBRyxLQUFLLEVBQ2pCLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTO2dCQUV2QyxNQUFNLENBQUMsSUFBSTtZQUNiLENBQUM7OztZQUVNLEdBQTZCLEdBQTdCLDZCQUE2QjttQkFBcEMsUUFBUSxDQUFELDZCQUE2QixDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFDOUQsR0FBSyxDQUFDLE1BQU0sR0FBRyxhQUFhLEVBQ3RCLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTO2dCQUV2QyxNQUFNLENBQUMsSUFBSTtZQUNiLENBQUM7OztXQTVDa0IsSUFBSTs7a0JBQUosSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBBTkdMRVNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGFkZDIsIHNjYWxlMiwgdHJhbnNmb3JtMiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsdCB7XG4gIGNvbnN0cnVjdG9yKGFuZ2xlcywgY2xvY2t3aXNlKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXM7XG4gICAgdGhpcy5jbG9ja3dpc2UgPSBjbG9ja3dpc2U7XG4gIH1cblxuICBnZXRBbmdsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5nbGVzO1xuICB9XG5cbiAgaXNDbG9ja3dpc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvY2t3aXNlO1xuICB9XG5cbiAgdXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcykge1xuICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIEFOR0xFU19NVUxUSVBMSUVSKTsgLy8vXG5cbiAgICBjb25zdCBtdWx0aXBsaWVyID0gdGhpcy5jbG9ja3dpc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgKzEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAtMSxcbiAgICAgICAgICBtYXRyaXggPSBbXG5cbiAgICAgICAgICAgIDAsICAgICAgICAgICArbXVsdGlwbGllcixcbiAgICAgICAgICAgIC1tdWx0aXBsaWVyLCAgICAgICAgICAgMCxcblxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsYXRpdmVBbmdsZXMgPSB0cmFuc2Zvcm0yKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbWF0cml4KTtcblxuICAgIHRoaXMuYW5nbGVzID0gYWRkMih0aGlzLmFuZ2xlcywgcmVsYXRpdmVBbmdsZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsQW5nbGVzKGluaXRpYWxBbmdsZXMpIHtcbiAgICBjb25zdCBhbmdsZXMgPSBpbml0aWFsQW5nbGVzLCAvLy9cbiAgICAgICAgICBjbG9ja3dpc2UgPSBmYWxzZSxcbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoYW5nbGVzLCBjbG9ja3dpc2UpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXNBbmRDbG9ja3dpc2UoaW5pdGlhbEFuZ2xlcywgY2xvY2t3aXNlKSB7XG4gICAgY29uc3QgYW5nbGVzID0gaW5pdGlhbEFuZ2xlcywgLy8vXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KGFuZ2xlcywgY2xvY2t3aXNlKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG59XG4iXX0=