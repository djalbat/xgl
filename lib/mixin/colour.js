"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearColour = clearColour;
exports.clearColourBuffer = clearColourBuffer;
var defaultR = 0.0,
    defaultG = 0.0,
    defaultB = 0.0,
    defaultA = 1.0;

function clearColour() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultR;
  var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultG;
  var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultB;
  var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultA;
  this.context.clearColor(r, g, b, a);
}

function clearColourBuffer() {
  var COLOR_BUFFER_BIT = this.context.COLOR_BUFFER_BIT,
      mask = COLOR_BUFFER_BIT;
  this.context.clear(mask);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG91ci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UiIsImRlZmF1bHRHIiwiZGVmYXVsdEIiLCJkZWZhdWx0QSIsImNsZWFyQ29sb3VyIiwiciIsImciLCJiIiwiYSIsImNvbnRleHQiLCJjbGVhckNvbG9yIiwiY2xlYXJDb2xvdXJCdWZmZXIiLCJDT0xPUl9CVUZGRVJfQklUIiwibWFzayIsImNsZWFyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxHQUFqQjtBQUFBLElBQ01DLFFBQVEsR0FBRyxHQURqQjtBQUFBLElBRU1DLFFBQVEsR0FBRyxHQUZqQjtBQUFBLElBR01DLFFBQVEsR0FBRyxHQUhqQjs7QUFLTyxTQUFTQyxXQUFULEdBQTZFO0FBQUEsTUFBeERDLENBQXdELHVFQUFwREwsUUFBb0Q7QUFBQSxNQUExQ00sQ0FBMEMsdUVBQXRDTCxRQUFzQztBQUFBLE1BQTVCTSxDQUE0Qix1RUFBeEJMLFFBQXdCO0FBQUEsTUFBZE0sQ0FBYyx1RUFBVkwsUUFBVTtBQUFFLE9BQUtNLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkwsQ0FBeEIsRUFBMkJDLENBQTNCLEVBQThCQyxDQUE5QixFQUFpQ0MsQ0FBakM7QUFBc0M7O0FBRXJILFNBQVNHLGlCQUFULEdBQTZCO0FBQzVCLE1BQUVDLGdCQUFGLEdBQXVCLEtBQUtILE9BQTVCLENBQUVHLGdCQUFGO0FBQUEsTUFDQUMsSUFEQSxHQUNPRCxnQkFEUDtBQUdOLE9BQUtILE9BQUwsQ0FBYUssS0FBYixDQUFtQkQsSUFBbkI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBkZWZhdWx0UiA9IDAuMCxcbiAgICAgIGRlZmF1bHRHID0gMC4wLFxuICAgICAgZGVmYXVsdEIgPSAwLjAsXG4gICAgICBkZWZhdWx0QSA9IDEuMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ29sb3VyKHIgPSBkZWZhdWx0UiwgZyA9IGRlZmF1bHRHLCBiID0gZGVmYXVsdEIsIGEgPSBkZWZhdWx0QSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb2xvdXJCdWZmZXIoKSB7XG4gIGNvbnN0IHsgQ09MT1JfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gQ09MT1JfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG4iXX0=