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
    var r = ((colour & 0xff0000) >> 16) / 256, g = ((colour & 0x00ff00) >> 8) / 256, b = ((colour & 0x0000ff) >> 0) / 256, a = 1; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY29sb3VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjbGVhckNvbG91cihjb2xvdXIpIHtcbiAgY29uc3QgciA9ICgoY29sb3VyICYgMHhmZjAwMDApID4+IDE2KSAvIDI1NixcbiAgICAgICAgZyA9ICgoY29sb3VyICYgMHgwMGZmMDApID4+IDgpIC8gMjU2LFxuICAgICAgICBiID0gKChjb2xvdXIgJiAweDAwMDBmZikgPj4gMCkgLyAyNTYsXG4gICAgICAgIGEgPSAxOyAgLy8vXG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyQ29sb3IociwgZywgYiwgYSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyQnVmZmVyKCkge1xuICBjb25zdCB7IENPTE9SX0JVRkZFUl9CSVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbWFzayA9IENPTE9SX0JVRkZFUl9CSVQ7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5jb25zdCBjb2xvdXJNaXhpbnMgPSB7XG4gIGNsZWFyQ29sb3VyLFxuICBjbGVhckNvbG91ckJ1ZmZlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29sb3VyTWl4aW5zO1xuIl0sIm5hbWVzIjpbImNsZWFyQ29sb3VyIiwiY29sb3VyIiwiciIsImciLCJiIiwiYSIsImNvbnRleHQiLCJjbGVhckNvbG9yIiwiY2xlYXJDb2xvdXJCdWZmZXIiLCJDT0xPUl9CVUZGRVJfQklUIiwibWFzayIsImNsZWFyIiwiY29sb3VyTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1QkE7OztlQUFBOzs7QUFyQkEsU0FBU0EsWUFBWUMsTUFBTTtJQUN6QixJQUFNQyxJQUFJLEFBQUMsQ0FBQSxBQUFDRCxDQUFBQSxTQUFTLFFBQU8sS0FBTSxFQUFDLElBQUssS0FDbENFLElBQUksQUFBQyxDQUFBLEFBQUNGLENBQUFBLFNBQVMsUUFBTyxLQUFNLENBQUEsSUFBSyxLQUNqQ0csSUFBSSxBQUFDLENBQUEsQUFBQ0gsQ0FBQUEsU0FBUyxRQUFPLEtBQU0sQ0FBQSxJQUFLLEtBQ2pDSSxJQUFJLEdBQUksR0FBRztJQUVqQixJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDTCxHQUFHQyxHQUFHQyxHQUFHQztBQUNuQztBQUVBLFNBQVNHO0lBQ1AsSUFBTSxBQUFFQyxtQkFBcUIsSUFBSSxDQUFDSCxPQUFPLENBQWpDRyxrQkFDRkMsT0FBT0Q7SUFFYixJQUFJLENBQUNILE9BQU8sQ0FBQ0ssS0FBSyxDQUFDRDtBQUNyQjtBQUVBLElBQU1FLGVBQWU7SUFDbkJaLGFBQUFBO0lBQ0FRLG1CQUFBQTtBQUNGO0lBRUEsV0FBZUkifQ==