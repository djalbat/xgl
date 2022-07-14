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
var _defaults = require("../defaults");
function clearColour() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_R, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_G, b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_B, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _defaults.DEFAULT_A;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY29sb3VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX1IsIERFRkFVTFRfRywgREVGQVVMVF9CLCBERUZBVUxUX0EgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZnVuY3Rpb24gY2xlYXJDb2xvdXIociA9IERFRkFVTFRfUiwgZyA9IERFRkFVTFRfRywgYiA9IERFRkFVTFRfQiwgYSA9IERFRkFVTFRfQSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuY29uc3QgY29sb3VyTWl4aW5zID0ge1xuICBjbGVhckNvbG91cixcbiAgY2xlYXJDb2xvdXJCdWZmZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbG91ck1peGlucztcbiJdLCJuYW1lcyI6WyJjbGVhckNvbG91ciIsInIiLCJERUZBVUxUX1IiLCJnIiwiREVGQVVMVF9HIiwiYiIsIkRFRkFVTFRfQiIsImEiLCJERUZBVUxUX0EiLCJjb250ZXh0IiwiY2xlYXJDb2xvciIsImNsZWFyQ29sb3VyQnVmZmVyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIm1hc2siLCJjbGVhciIsImNvbG91ck1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQWtCYixTQUE0Qjs7O2VBQTVCLFFBQTRCOzs7d0JBaEIrQixhQUFhO0FBRXhFLFNBQVNBLFdBQVcsR0FBNkQ7UUFBNURDLENBQUMsR0FBREEsK0NBQWEsa0JBQVRDLFNBQVMsVUFBQSxFQUFFQyxDQUFDLEdBQURBLCtDQUFhLGtCQUFUQyxTQUFTLFVBQUEsRUFBRUMsQ0FBQyxHQUFEQSwrQ0FBYSxrQkFBVEMsU0FBUyxVQUFBLEVBQUVDLENBQUMsR0FBREEsK0NBQWEsa0JBQVRDLFNBQVMsVUFBQTtJQUFJLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxVQUFVLENBQUNULENBQUMsRUFBRUUsQ0FBQyxFQUFFRSxDQUFDLEVBQUVFLENBQUMsQ0FBQyxDQUFDO0NBQUU7QUFFekgsU0FBU0ksaUJBQWlCLEdBQUc7SUFDM0IsSUFBTSxBQUFFQyxnQkFBZ0IsR0FBSyxJQUFJLENBQUNILE9BQU8sQ0FBakNHLGdCQUFnQixBQUFpQixFQUNuQ0MsSUFBSSxHQUFHRCxnQkFBZ0IsQUFBQztJQUU5QixJQUFJLENBQUNILE9BQU8sQ0FBQ0ssS0FBSyxDQUFDRCxJQUFJLENBQUMsQ0FBQztDQUMxQjtBQUVELElBQU1FLFlBQVksR0FBRztJQUNuQmYsV0FBVyxFQUFYQSxXQUFXO0lBQ1hXLGlCQUFpQixFQUFqQkEsaUJBQWlCO0NBQ2xCLEFBQUM7SUFFRixRQUE0QixHQUFiSSxZQUFZIn0=