"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _defaults = require("../defaults");
function clearColour(param, param1, param2, param3) {
    var r = param === void 0 ? _defaults.DEFAULT_R : param, g = param1 === void 0 ? _defaults.DEFAULT_G : param1, b = param2 === void 0 ? _defaults.DEFAULT_B : param2, a = param3 === void 0 ? _defaults.DEFAULT_A : param3;
    this.context.clearColor(r, g, b, a);
}
function clearColourBuffer() {
    var _context = this.context, COLOR_BUFFER_BIT = _context.COLOR_BUFFER_BIT, mask = COLOR_BUFFER_BIT;
    this.context.clear(mask);
}
var colourMixins = {
    clearColour: clearColour,
    clearColourBuffer: clearColourBuffer
};
var _default = colourMixins;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY29sb3VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX1IsIERFRkFVTFRfRywgREVGQVVMVF9CLCBERUZBVUxUX0EgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZnVuY3Rpb24gY2xlYXJDb2xvdXIociA9IERFRkFVTFRfUiwgZyA9IERFRkFVTFRfRywgYiA9IERFRkFVTFRfQiwgYSA9IERFRkFVTFRfQSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuY29uc3QgY29sb3VyTWl4aW5zID0ge1xuICBjbGVhckNvbG91cixcbiAgY2xlYXJDb2xvdXJCdWZmZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbG91ck1peGlucztcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUUrQyxHQUFhLENBQWIsU0FBYTtTQUUvRCxXQUFXLENBQUMsS0FBYSxFQUFFLE1BQWEsRUFBRSxNQUFhLEVBQUUsTUFBYSxFQUFFLENBQUM7UUFBN0QsQ0FBQyxHQUFELEtBQWEsY0FGeUIsU0FBYSxhQUVuRCxLQUFhLEVBQUUsQ0FBQyxHQUFELE1BQWEsY0FGVSxTQUFhLGFBRXBDLE1BQWEsRUFBRSxDQUFDLEdBQUQsTUFBYSxjQUZMLFNBQWEsYUFFckIsTUFBYSxFQUFFLENBQUMsR0FBRCxNQUFhLGNBRnBCLFNBQWEsYUFFTixNQUFhO1NBQVMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQUcsQ0FBQztTQUVoSCxpQkFBaUIsR0FBRyxDQUFDO0lBQzVCLEdBQUssQ0FBd0IsUUFBWSxRQUFQLE9BQU8sRUFBakMsZ0JBQWdCLEdBQUssUUFBWSxDQUFqQyxnQkFBZ0IsRUFDbEIsSUFBSSxHQUFHLGdCQUFnQjtTQUV4QixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUk7QUFDekIsQ0FBQztBQUVELEdBQUssQ0FBQyxZQUFZO0lBQ2hCLFdBQVcsRUFBWCxXQUFXO0lBQ1gsaUJBQWlCLEVBQWpCLGlCQUFpQjs7ZUFHSixZQUFZIn0=