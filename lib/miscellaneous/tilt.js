"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Tilt;
    }
});
var _constants = require("../constants");
var _vector = require("../maths/vector");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
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
                relativeMouseCoordinates = (0, _vector.scale2)(relativeMouseCoordinates, _constants.ANGLES_MULTIPLIER); ///
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
                ], relativeAngles = (0, _vector.transform3)(_toConsumableArray(relativeMouseCoordinates).concat([
                    0
                ]), matrix);
                this.angles = (0, _vector.add3)(this.angles, relativeAngles);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3RpbHQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFOR0xFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYWRkMywgc2NhbGUyLCB0cmFuc2Zvcm0zIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoYW5nbGVzLCBjbG9ja3dpc2UpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlcztcbiAgICB0aGlzLmNsb2Nrd2lzZSA9IGNsb2Nrd2lzZTtcbiAgfVxuXG4gIGdldEFuZ2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbmdsZXM7XG4gIH1cblxuICBpc0Nsb2Nrd2lzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja3dpc2U7XG4gIH1cblxuICB1cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgQU5HTEVTX01VTFRJUExJRVIpOyAvLy9cblxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSB0aGlzLmNsb2Nrd2lzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICArMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgICAgICAgICAgIDAsICttdWx0aXBsaWVyLCAwLFxuICAgICAgICAgICAgLW11bHRpcGxpZXIsICAgICAgICAgICAwLCAwLFxuICAgICAgICAgICAgICAgICAgICAgIDAsICAgICAgICAgICAwLCAwXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVzID0gdHJhbnNmb3JtMyhbIC4uLnJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMCBdLCBtYXRyaXgpO1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQzKHRoaXMuYW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXMoaW5pdGlhbEFuZ2xlcykge1xuICAgIGNvbnN0IGFuZ2xlcyA9IFsgLi4uaW5pdGlhbEFuZ2xlcywgMCBdLFxuICAgICAgICAgIGNsb2Nrd2lzZSA9IGZhbHNlLFxuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlc0FuZENsb2Nrd2lzZShpbml0aWFsQW5nbGVzLCBjbG9ja3dpc2UpIHtcbiAgICBjb25zdCBhbmdsZXMgPSBbIC4uLmluaXRpYWxBbmdsZXMsIDAgXSxcbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoYW5nbGVzLCBjbG9ja3dpc2UpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVGlsdCIsImFuZ2xlcyIsImNsb2Nrd2lzZSIsImdldEFuZ2xlcyIsImlzQ2xvY2t3aXNlIiwidXBkYXRlQW5nbGVzIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwic2NhbGUyIiwiQU5HTEVTX01VTFRJUExJRVIiLCJtdWx0aXBsaWVyIiwibWF0cml4IiwicmVsYXRpdmVBbmdsZXMiLCJ0cmFuc2Zvcm0zIiwiYWRkMyIsImZyb21Jbml0aWFsQW5nbGVzIiwiaW5pdGlhbEFuZ2xlcyIsInRpbHQiLCJmcm9tSW5pdGlhbEFuZ2xlc0FuZENsb2Nrd2lzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7eUJBSGE7c0JBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLHFCQUFOO2FBQU1BLEtBQ1BDLE1BQU0sRUFBRUMsU0FBUzs4QkFEVkY7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztpQkFIQUY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLHdCQUF3QixFQUFFO2dCQUNyQ0EsMkJBQTJCQyxJQUFBQSxjQUFNLEVBQUNELDBCQUEwQkUsNEJBQWlCLEdBQUcsR0FBRztnQkFFbkYsSUFBTUMsYUFBYSxJQUFJLENBQUNQLFNBQVMsR0FDYixDQUFDLElBQ0MsQ0FBQyxDQUFDLEVBQ2xCUSxTQUFTO29CQUVHO29CQUFHLENBQUNEO29CQUFZO29CQUMxQixDQUFDQTtvQkFBc0I7b0JBQUc7b0JBQ2hCO29CQUFhO29CQUFHO2lCQUUzQixFQUNERSxpQkFBaUJDLElBQUFBLGtCQUFVLEVBQUMsQUFBRSxtQkFBR04saUNBQUw7b0JBQStCO2lCQUFHLEdBQUVJO2dCQUV0RSxJQUFJLENBQUNULE1BQU0sR0FBR1ksSUFBQUEsWUFBSSxFQUFDLElBQUksQ0FBQ1osTUFBTSxFQUFFVTtZQUNsQzs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRTtnQkFDdEMsSUFBTWQsU0FBUyxBQUFFLG1CQUFHYyxzQkFBTDtvQkFBb0I7aUJBQUcsR0FDaENiLFlBQVksS0FBSyxFQUNqQmMsT0FBTyxJQW5DSWhCLEtBbUNLQyxRQUFRQztnQkFFOUIsT0FBT2M7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkYsYUFBYSxFQUFFYixTQUFTLEVBQUU7Z0JBQzdELElBQU1ELFNBQVMsQUFBRSxtQkFBR2Msc0JBQUw7b0JBQW9CO2lCQUFHLEdBQ2hDQyxPQUFPLElBMUNJaEIsS0EwQ0tDLFFBQVFDO2dCQUU5QixPQUFPYztZQUNUOzs7V0E3Q21CaEIifQ==