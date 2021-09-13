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
            value: function getRotatedAngles(param) {
                var clockwise = param === void 0 ? true : param;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwibmFtZXMiOlsiQU5HTEVTX01VTFRJUExJRVIiLCJhZGQyIiwic2NhbGUyIiwidHJhbnNmb3JtMiIsIlRpbHQiLCJjb25zdHJ1Y3RvciIsImFuZ2xlcyIsImdldEFuZ2xlcyIsImdldFJvdGF0ZWRBbmdsZXMiLCJjbG9ja3dpc2UiLCJtdWx0aXBsaWVyIiwibWF0cml4Iiwicm90YXRlZEFuZ2xlcyIsInVwZGF0ZUFuZ2xlcyIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInJlbGF0aXZlQW5nbGVzIiwiZnJvbUluaXRpYWxBbmdsZXMiLCJpbml0aWFsQW5nbGVzIiwidGlsdCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFc0IsR0FBYyxDQUFkLFVBQWM7QUFDUCxHQUFpQixDQUFqQixPQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFckMsSUFBSSxpQkFBVixRQUFRO2FBQUYsSUFBSSxDQUNYLE1BQU07OEJBREMsSUFBSTtRQUVyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07O2lCQUZILElBQUk7O1lBS3ZCLEdBQVMsR0FBVCxTQUFTO21CQUFULFFBQVEsQ0FBUixTQUFTLEdBQUcsQ0FBQztnQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDcEIsQ0FBQzs7O1lBRUQsR0FBZ0IsR0FBaEIsZ0JBQWdCO21CQUFoQixRQUFRLENBQVIsZ0JBQWdCLENBQUMsS0FBZ0IsRUFBRSxDQUFDO29CQUFuQixTQUFTLEdBQVQsS0FBZ0IsY0FBSixJQUFJLEdBQWhCLEtBQWdCO2dCQUMvQixHQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsSUFDTixDQUFDLElBQ0MsQ0FBQyxFQUNuQixNQUFNLEdBQUcsQ0FBQztvQkFFUixDQUFDO3FCQUFhLFVBQVU7cUJBQ3ZCLFVBQVU7b0JBQVksQ0FBQztnQkFFMUIsQ0FBQyxFQUNELGFBQWEsT0FyQmtCLE9BQWlCLGFBcUJyQixJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTFELE1BQU0sQ0FBQyxhQUFhO1lBQ3RCLENBQUM7OztZQUVELEdBQVksR0FBWixZQUFZO21CQUFaLFFBQVEsQ0FBUixZQUFZLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztnQkFDdEMsd0JBQXdCLE9BM0JhLE9BQWlCLFNBMkJwQix3QkFBd0IsRUE1QjVCLFVBQWMsb0JBNEJvQyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRW5GLEdBQUssQ0FBQyxjQUFjLEdBQUcsd0JBQXdCLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVyRCxJQUFJLENBQUMsTUFBTSxPQS9CMEIsT0FBaUIsT0ErQm5DLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYztZQUNoRCxDQUFDOzs7O1lBRU0sR0FBaUIsR0FBakIsaUJBQWlCO21CQUF4QixRQUFRLENBQUQsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3ZDLEdBQUssQ0FBQyxNQUFNLEdBQUcsYUFBYSxFQUN0QixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO2dCQUU1QixNQUFNLENBQUMsSUFBSTtZQUNiLENBQUM7OztXQXJDa0IsSUFBSTs7a0JBQUosSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBBTkdMRVNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGFkZDIsIHNjYWxlMiwgdHJhbnNmb3JtMiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsdCB7XG4gIGNvbnN0cnVjdG9yKGFuZ2xlcykge1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzO1xuICB9XG5cbiAgZ2V0QW5nbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmFuZ2xlcztcbiAgfVxuXG4gIGdldFJvdGF0ZWRBbmdsZXMoY2xvY2t3aXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG11bHRpcGxpZXIgPSBjbG9ja3dpc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICsxIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgMCwgICAgICAgICAgICttdWx0aXBsaWVyLFxuICAgICAgICAgICAgLW11bHRpcGxpZXIsICAgICAgICAgICAwLFxuXG4gICAgICAgICAgXSxcbiAgICAgICAgICByb3RhdGVkQW5nbGVzID0gdHJhbnNmb3JtMih0aGlzLmFuZ2xlcywgbWF0cml4KTsgLy8vXG5cbiAgICByZXR1cm4gcm90YXRlZEFuZ2xlcztcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBBTkdMRVNfTVVMVElQTElFUik7IC8vL1xuXG4gICAgY29uc3QgcmVsYXRpdmVBbmdsZXMgPSByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXM7ICAvLy9cblxuICAgIHRoaXMuYW5nbGVzID0gYWRkMih0aGlzLmFuZ2xlcywgcmVsYXRpdmVBbmdsZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsQW5nbGVzKGluaXRpYWxBbmdsZXMpIHtcbiAgICBjb25zdCBhbmdsZXMgPSBpbml0aWFsQW5nbGVzLCAvLy9cbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoYW5nbGVzKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG59XG4iXX0=