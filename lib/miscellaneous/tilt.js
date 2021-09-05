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
    function Tilt(angles) {
        _classCallCheck(this, Tilt);
        this.angles = angles;
    }
    _createClass(Tilt, [
        {
            key: "getAngles",
            value: function getAngles() {
                return this.angles;
            }
        },
        {
            key: "getRotatedAngles",
            value: function getRotatedAngles(clockwise) {
                var multiplier = clockwise ? +1 : -1, matrix = [
                    0,
                    +multiplier,
                    -multiplier,
                    0, 
                ], rotatedAngles = (0, _vector).transform2(this.angles, matrix); ///
                return rotatedAngles;
            }
        },
        {
            key: "updateAngles",
            value: function updateAngles(relativeMouseCoordinates) {
                relativeMouseCoordinates = (0, _vector).scale2(relativeMouseCoordinates, _constants.ANGLES_MULTIPLIER); ///
                var relativeAngles = relativeMouseCoordinates; ///
                this.angles = (0, _vector).add2(this.angles, relativeAngles);
            }
        }
    ], [
        {
            key: "fromInitialAngles",
            value: function fromInitialAngles(initialAngles) {
                var angles = initialAngles, tilt = new Tilt(angles);
                return tilt;
            }
        }
    ]);
    return Tilt;
}();
exports.default = Tilt;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFOR0xFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYWRkMiwgc2NhbGUyLCB0cmFuc2Zvcm0yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoYW5nbGVzKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXM7XG4gIH1cblxuICBnZXRBbmdsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5nbGVzO1xuICB9XG5cbiAgZ2V0Um90YXRlZEFuZ2xlcyhjbG9ja3dpc2UpIHtcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gY2xvY2t3aXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICArMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAtMSxcbiAgICAgICAgICBtYXRyaXggPSBbXG5cbiAgICAgICAgICAgIDAsICAgICAgICAgICArbXVsdGlwbGllcixcbiAgICAgICAgICAgIC1tdWx0aXBsaWVyLCAgICAgICAgICAgMCxcblxuICAgICAgICAgIF0sXG4gICAgICAgICAgcm90YXRlZEFuZ2xlcyA9IHRyYW5zZm9ybTIodGhpcy5hbmdsZXMsIG1hdHJpeCk7IC8vL1xuXG4gICAgcmV0dXJuIHJvdGF0ZWRBbmdsZXM7XG4gIH1cblxuICB1cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgQU5HTEVTX01VTFRJUExJRVIpOyAvLy9cblxuICAgIGNvbnN0IHJlbGF0aXZlQW5nbGVzID0gcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzOyAgLy8vXG5cbiAgICB0aGlzLmFuZ2xlcyA9IGFkZDIodGhpcy5hbmdsZXMsIHJlbGF0aXZlQW5nbGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlcyhpbml0aWFsQW5nbGVzKSB7XG4gICAgY29uc3QgYW5nbGVzID0gaW5pdGlhbEFuZ2xlcywgLy8vXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KGFuZ2xlcyk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRXNCLEdBQWMsQ0FBZCxVQUFjO0FBQ1AsR0FBaUIsQ0FBakIsT0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJDLElBQUk7YUFBSixJQUFJLENBQ1gsTUFBTTs4QkFEQyxJQUFJO2FBRWhCLE1BQU0sR0FBRyxNQUFNOztpQkFGSCxJQUFJOztZQUt2QixHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTLEdBQUcsQ0FBQzs0QkFDQyxNQUFNO1lBQ3BCLENBQUM7OztZQUVELEdBQWdCLEdBQWhCLGdCQUFnQjs0QkFBaEIsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNCLEdBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxJQUNOLENBQUMsSUFDQyxDQUFDLEVBQ25CLE1BQU07b0JBRUosQ0FBQztxQkFBYSxVQUFVO3FCQUN2QixVQUFVO29CQUFZLENBQUM7bUJBRzFCLGFBQWEsT0FyQmtCLE9BQWlCLGtCQXFCaEIsTUFBTSxFQUFFLE1BQU0sRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRW5ELGFBQWE7WUFDdEIsQ0FBQzs7O1lBRUQsR0FBWSxHQUFaLFlBQVk7NEJBQVosWUFBWSxDQUFDLHdCQUF3QixFQUFFLENBQUM7Z0JBQ3RDLHdCQUF3QixPQTNCYSxPQUFpQixTQTJCcEIsd0JBQXdCLEVBNUI1QixVQUFjLG9CQTRCb0MsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVuRixHQUFLLENBQUMsY0FBYyxHQUFHLHdCQUF3QixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztxQkFFaEQsTUFBTSxPQS9CMEIsT0FBaUIsWUErQjlCLE1BQU0sRUFBRSxjQUFjO1lBQ2hELENBQUM7Ozs7WUFFTSxHQUFpQixHQUFqQixpQkFBaUI7NEJBQWpCLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN2QyxHQUFLLENBQUMsTUFBTSxHQUFHLGFBQWEsRUFDdEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTt1QkFFckIsSUFBSTtZQUNiLENBQUM7OztXQXJDa0IsSUFBSTs7a0JBQUosSUFBSSJ9