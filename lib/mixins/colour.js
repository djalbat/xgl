"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function clearColour(colour) {
    var _colour = _sliced_to_array(colour, 4), r = _colour[0], g = _colour[1], b = _colour[2], tmp = _colour[3], a = tmp === void 0 ? 1 : tmp;
    this.context.clearColor(r, g, b, a);
}
function clearColourBuffer() {
    var COLOR_BUFFER_BIT = this.context.COLOR_BUFFER_BIT, mask = COLOR_BUFFER_BIT;
    this.context.clear(mask);
}
var colourMixins = {
    clearColour: clearColour,
    clearColourBuffer: clearColourBuffer
};
var _default = colourMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY29sb3VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjbGVhckNvbG91cihjb2xvdXIpIHtcbiAgY29uc3QgWyByLCBnLCBiLCBhID0gMSBdID0gIGNvbG91cjtcblxuICB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb2xvdXJCdWZmZXIoKSB7XG4gIGNvbnN0IHsgQ09MT1JfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gQ09MT1JfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbmNvbnN0IGNvbG91ck1peGlucyA9IHtcbiAgY2xlYXJDb2xvdXIsXG4gIGNsZWFyQ29sb3VyQnVmZmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb2xvdXJNaXhpbnM7XG4iXSwibmFtZXMiOlsiY2xlYXJDb2xvdXIiLCJjb2xvdXIiLCJyIiwiZyIsImIiLCJhIiwiY29udGV4dCIsImNsZWFyQ29sb3IiLCJjbGVhckNvbG91ckJ1ZmZlciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJtYXNrIiwiY2xlYXIiLCJjb2xvdXJNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9CQTs7O2VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFsQkEsU0FBU0EsWUFBWUMsTUFBTTtJQUN6QixJQUE0QkEsMkJBQUFBLFlBQXBCQyxJQUFvQkQsWUFBakJFLElBQWlCRixZQUFkRyxJQUFjSCxZQUFYSSxNQUFXSixZQUFYSSxJQUFBQSxpQkFBSSxJQUFKQTtJQUVqQixJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDTCxHQUFHQyxHQUFHQyxHQUFHQztBQUNuQztBQUVBLFNBQVNHO0lBQ1AsSUFBTSxBQUFFQyxtQkFBcUIsSUFBSSxDQUFDSCxPQUFPLENBQWpDRyxrQkFDRkMsT0FBT0Q7SUFFYixJQUFJLENBQUNILE9BQU8sQ0FBQ0ssS0FBSyxDQUFDRDtBQUNyQjtBQUVBLElBQU1FLGVBQWU7SUFDbkJaLGFBQUFBO0lBQ0FRLG1CQUFBQTtBQUNGO0lBRUEsV0FBZUkifQ==