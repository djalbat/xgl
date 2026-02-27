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
function clearColour(colour) {
    const [r, g, b, a = 1] = colour;
    this.context.clearColor(r, g, b, a);
}
function clearColourBuffer() {
    const { COLOR_BUFFER_BIT } = this.context, mask = COLOR_BUFFER_BIT;
    this.context.clear(mask);
}
const colourMixins = {
    clearColour,
    clearColourBuffer
};
const _default = colourMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY29sb3VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjbGVhckNvbG91cihjb2xvdXIpIHtcbiAgY29uc3QgWyByLCBnLCBiLCBhID0gMSBdID0gIGNvbG91cjtcblxuICB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb2xvdXJCdWZmZXIoKSB7XG4gIGNvbnN0IHsgQ09MT1JfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gQ09MT1JfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbmNvbnN0IGNvbG91ck1peGlucyA9IHtcbiAgY2xlYXJDb2xvdXIsXG4gIGNsZWFyQ29sb3VyQnVmZmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb2xvdXJNaXhpbnM7XG4iXSwibmFtZXMiOlsiY2xlYXJDb2xvdXIiLCJjb2xvdXIiLCJyIiwiZyIsImIiLCJhIiwiY29udGV4dCIsImNsZWFyQ29sb3IiLCJjbGVhckNvbG91ckJ1ZmZlciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJtYXNrIiwiY2xlYXIiLCJjb2xvdXJNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9CQTs7O2VBQUE7OztBQWxCQSxTQUFTQSxZQUFZQyxNQUFNO0lBQ3pCLE1BQU0sQ0FBRUMsR0FBR0MsR0FBR0MsR0FBR0MsSUFBSSxDQUFDLENBQUUsR0FBSUo7SUFFNUIsSUFBSSxDQUFDSyxPQUFPLENBQUNDLFVBQVUsQ0FBQ0wsR0FBR0MsR0FBR0MsR0FBR0M7QUFDbkM7QUFFQSxTQUFTRztJQUNQLE1BQU0sRUFBRUMsZ0JBQWdCLEVBQUUsR0FBRyxJQUFJLENBQUNILE9BQU8sRUFDbkNJLE9BQU9EO0lBRWIsSUFBSSxDQUFDSCxPQUFPLENBQUNLLEtBQUssQ0FBQ0Q7QUFDckI7QUFFQSxNQUFNRSxlQUFlO0lBQ25CWjtJQUNBUTtBQUNGO01BRUEsV0FBZUkifQ==