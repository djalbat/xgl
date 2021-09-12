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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFOR0xFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYWRkMiwgc2NhbGUyLCB0cmFuc2Zvcm0yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoYW5nbGVzKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXM7XG4gIH1cblxuICBnZXRBbmdsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5nbGVzO1xuICB9XG5cbiAgZ2V0Um90YXRlZEFuZ2xlcyhjbG9ja3dpc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbXVsdGlwbGllciA9IGNsb2Nrd2lzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgKzEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEsXG4gICAgICAgICAgbWF0cml4ID0gW1xuXG4gICAgICAgICAgICAwLCAgICAgICAgICAgK211bHRpcGxpZXIsXG4gICAgICAgICAgICAtbXVsdGlwbGllciwgICAgICAgICAgIDAsXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJvdGF0ZWRBbmdsZXMgPSB0cmFuc2Zvcm0yKHRoaXMuYW5nbGVzLCBtYXRyaXgpOyAvLy9cblxuICAgIHJldHVybiByb3RhdGVkQW5nbGVzO1xuICB9XG5cbiAgdXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcykge1xuICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIEFOR0xFU19NVUxUSVBMSUVSKTsgLy8vXG5cbiAgICBjb25zdCByZWxhdGl2ZUFuZ2xlcyA9IHJlbGF0aXZlTW91c2VDb29yZGluYXRlczsgIC8vL1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQyKHRoaXMuYW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXMoaW5pdGlhbEFuZ2xlcykge1xuICAgIGNvbnN0IGFuZ2xlcyA9IGluaXRpYWxBbmdsZXMsIC8vL1xuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVzQixHQUFjLENBQWQsVUFBYztBQUNQLEdBQWlCLENBQWpCLE9BQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVyQyxJQUFJO2FBQUosSUFBSSxDQUNYLE1BQU07OEJBREMsSUFBSTthQUVoQixNQUFNLEdBQUcsTUFBTTs7aUJBRkgsSUFBSTs7WUFLdkIsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxHQUFHLENBQUM7NEJBQ0MsTUFBTTtZQUNwQixDQUFDOzs7WUFFRCxHQUFnQixHQUFoQixnQkFBZ0I7NEJBQWhCLGdCQUFnQixDQUFDLEtBQWdCLEVBQUUsQ0FBQztvQkFBbkIsU0FBUyxHQUFULEtBQWdCLGNBQUosSUFBSSxHQUFoQixLQUFnQjtnQkFDL0IsR0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLElBQ04sQ0FBQyxJQUNDLENBQUMsRUFDbkIsTUFBTTtvQkFFSixDQUFDO3FCQUFhLFVBQVU7cUJBQ3ZCLFVBQVU7b0JBQVksQ0FBQzttQkFHMUIsYUFBYSxPQXJCa0IsT0FBaUIsa0JBcUJoQixNQUFNLEVBQUUsTUFBTSxFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFbkQsYUFBYTtZQUN0QixDQUFDOzs7WUFFRCxHQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztnQkFDdEMsd0JBQXdCLE9BM0JhLE9BQWlCLFNBMkJwQix3QkFBd0IsRUE1QjVCLFVBQWMsb0JBNEJvQyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRW5GLEdBQUssQ0FBQyxjQUFjLEdBQUcsd0JBQXdCLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3FCQUVoRCxNQUFNLE9BL0IwQixPQUFpQixZQStCOUIsTUFBTSxFQUFFLGNBQWM7WUFDaEQsQ0FBQzs7OztZQUVNLEdBQWlCLEdBQWpCLGlCQUFpQjs0QkFBakIsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3ZDLEdBQUssQ0FBQyxNQUFNLEdBQUcsYUFBYSxFQUN0QixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO3VCQUVyQixJQUFJO1lBQ2IsQ0FBQzs7O1dBckNrQixJQUFJOztrQkFBSixJQUFJIn0=