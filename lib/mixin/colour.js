'use strict';

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

module.exports = {
      clearColour: clearColour,
      clearColourBuffer: clearColourBuffer
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXhpbi9jb2xvdXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdFIiLCJkZWZhdWx0RyIsImRlZmF1bHRCIiwiZGVmYXVsdEEiLCJjbGVhckNvbG91ciIsInIiLCJnIiwiYiIsImEiLCJjb250ZXh0IiwiY2xlYXJDb2xvciIsImNsZWFyQ29sb3VyQnVmZmVyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIm1hc2siLCJjbGVhciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFdBQVcsR0FBakI7QUFBQSxJQUNNQyxXQUFXLEdBRGpCO0FBQUEsSUFFTUMsV0FBVyxHQUZqQjtBQUFBLElBR01DLFdBQVcsR0FIakI7O0FBS0EsU0FBU0MsV0FBVCxHQUE2RTtBQUFBLFVBQXhEQyxDQUF3RCx1RUFBcERMLFFBQW9EO0FBQUEsVUFBMUNNLENBQTBDLHVFQUF0Q0wsUUFBc0M7QUFBQSxVQUE1Qk0sQ0FBNEIsdUVBQXhCTCxRQUF3QjtBQUFBLFVBQWRNLENBQWMsdUVBQVZMLFFBQVU7QUFBRSxXQUFLTSxPQUFMLENBQWFDLFVBQWIsQ0FBd0JMLENBQXhCLEVBQTJCQyxDQUEzQixFQUE4QkMsQ0FBOUIsRUFBaUNDLENBQWpDO0FBQXNDOztBQUVySCxTQUFTRyxpQkFBVCxHQUE2QjtBQUNyQixVQUFFQyxnQkFBRixHQUF1QixLQUFLSCxPQUE1QixDQUFFRyxnQkFBRjtBQUFBLFVBQ0FDLElBREEsR0FDT0QsZ0JBRFA7OztBQUdOLFdBQUtILE9BQUwsQ0FBYUssS0FBYixDQUFtQkQsSUFBbkI7QUFDRDs7QUFFREUsT0FBT0MsT0FBUCxHQUFpQjtBQUNmWiw4QkFEZTtBQUVmTztBQUZlLENBQWpCIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVmYXVsdFIgPSAwLjAsXG4gICAgICBkZWZhdWx0RyA9IDAuMCxcbiAgICAgIGRlZmF1bHRCID0gMC4wLFxuICAgICAgZGVmYXVsdEEgPSAxLjA7XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyKHIgPSBkZWZhdWx0UiwgZyA9IGRlZmF1bHRHLCBiID0gZGVmYXVsdEIsIGEgPSBkZWZhdWx0QSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsZWFyQ29sb3VyLFxuICBjbGVhckNvbG91ckJ1ZmZlclxufTtcbiJdfQ==