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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var Tilt = /*#__PURE__*/ function() {
    function Tilt(angles, clockwise) {
        _class_call_check(this, Tilt);
        this.angles = angles;
        this.clockwise = clockwise;
    }
    _create_class(Tilt, [
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
                ], relativeAngles = (0, _vector.transform3)(_to_consumable_array(relativeMouseCoordinates).concat([
                    0
                ]), matrix);
                this.angles = (0, _vector.add3)(this.angles, relativeAngles);
            }
        }
    ], [
        {
            key: "fromInitialAngles",
            value: function fromInitialAngles(initialAngles) {
                var angles = _to_consumable_array(initialAngles).concat([
                    0
                ]), clockwise = false, tilt = new Tilt(angles, clockwise);
                return tilt;
            }
        },
        {
            key: "fromInitialAnglesAndClockwise",
            value: function fromInitialAnglesAndClockwise(initialAngles, clockwise) {
                var angles = _to_consumable_array(initialAngles).concat([
                    0
                ]), tilt = new Tilt(angles, clockwise);
                return tilt;
            }
        }
    ]);
    return Tilt;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFOR0xFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYWRkMywgc2NhbGUyLCB0cmFuc2Zvcm0zIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoYW5nbGVzLCBjbG9ja3dpc2UpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlcztcbiAgICB0aGlzLmNsb2Nrd2lzZSA9IGNsb2Nrd2lzZTtcbiAgfVxuXG4gIGdldEFuZ2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbmdsZXM7XG4gIH1cblxuICBpc0Nsb2Nrd2lzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja3dpc2U7XG4gIH1cblxuICB1cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgQU5HTEVTX01VTFRJUExJRVIpOyAvLy9cblxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSB0aGlzLmNsb2Nrd2lzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICArMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgICAgICAgICAgIDAsICttdWx0aXBsaWVyLCAwLFxuICAgICAgICAgICAgLW11bHRpcGxpZXIsICAgICAgICAgICAwLCAwLFxuICAgICAgICAgICAgICAgICAgICAgIDAsICAgICAgICAgICAwLCAwXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVzID0gdHJhbnNmb3JtMyhbIC4uLnJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMCBdLCBtYXRyaXgpO1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQzKHRoaXMuYW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXMoaW5pdGlhbEFuZ2xlcykge1xuICAgIGNvbnN0IGFuZ2xlcyA9IFsgLi4uaW5pdGlhbEFuZ2xlcywgMCBdLFxuICAgICAgICAgIGNsb2Nrd2lzZSA9IGZhbHNlLFxuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlc0FuZENsb2Nrd2lzZShpbml0aWFsQW5nbGVzLCBjbG9ja3dpc2UpIHtcbiAgICBjb25zdCBhbmdsZXMgPSBbIC4uLmluaXRpYWxBbmdsZXMsIDAgXSxcbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoYW5nbGVzLCBjbG9ja3dpc2UpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUaWx0IiwiYW5nbGVzIiwiY2xvY2t3aXNlIiwiZ2V0QW5nbGVzIiwiaXNDbG9ja3dpc2UiLCJ1cGRhdGVBbmdsZXMiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJzY2FsZTIiLCJBTkdMRVNfTVVMVElQTElFUiIsIm11bHRpcGxpZXIiLCJtYXRyaXgiLCJyZWxhdGl2ZUFuZ2xlcyIsInRyYW5zZm9ybTMiLCJhZGQzIiwiZnJvbUluaXRpYWxBbmdsZXMiLCJpbml0aWFsQW5nbGVzIiwidGlsdCIsImZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7Ozt5QkFIYTtzQkFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEscUJBQU47YUFBTUEsS0FDUEMsTUFBTSxFQUFFQyxTQUFTO2dDQURWRjtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUhBRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyx3QkFBd0I7Z0JBQ25DQSwyQkFBMkJDLElBQUFBLGNBQU0sRUFBQ0QsMEJBQTBCRSw0QkFBaUIsR0FBRyxHQUFHO2dCQUVuRixJQUFNQyxhQUFhLElBQUksQ0FBQ1AsU0FBUyxHQUNiLENBQUMsSUFDQyxDQUFDLEdBQ2pCUSxTQUFTO29CQUVHO29CQUFHLENBQUNEO29CQUFZO29CQUMxQixDQUFDQTtvQkFBc0I7b0JBQUc7b0JBQ2hCO29CQUFhO29CQUFHO2lCQUUzQixFQUNERSxpQkFBaUJDLElBQUFBLGtCQUFVLEVBQUMsQUFBRSxxQkFBR04saUNBQUw7b0JBQStCO2lCQUFHLEdBQUVJO2dCQUV0RSxJQUFJLENBQUNULE1BQU0sR0FBR1ksSUFBQUEsWUFBSSxFQUFDLElBQUksQ0FBQ1osTUFBTSxFQUFFVTtZQUNsQzs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWE7Z0JBQ3BDLElBQU1kLFNBQVMsQUFBRSxxQkFBR2Msc0JBQUw7b0JBQW9CO2lCQUFHLEdBQ2hDYixZQUFZLE9BQ1pjLE9BQU8sSUFuQ0loQixLQW1DS0MsUUFBUUM7Z0JBRTlCLE9BQU9jO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJGLGFBQWEsRUFBRWIsU0FBUztnQkFDM0QsSUFBTUQsU0FBUyxBQUFFLHFCQUFHYyxzQkFBTDtvQkFBb0I7aUJBQUcsR0FDaENDLE9BQU8sSUExQ0loQixLQTBDS0MsUUFBUUM7Z0JBRTlCLE9BQU9jO1lBQ1Q7OztXQTdDbUJoQiJ9