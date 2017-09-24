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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXhpbi9jb2xvdXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdFIiLCJkZWZhdWx0RyIsImRlZmF1bHRCIiwiZGVmYXVsdEEiLCJjbGVhckNvbG91ciIsInIiLCJnIiwiYiIsImEiLCJjb250ZXh0IiwiY2xlYXJDb2xvciIsImNsZWFyQ29sb3VyQnVmZmVyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIm1hc2siLCJjbGVhciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFdBQVcsR0FBakI7QUFBQSxJQUNNQyxXQUFXLEdBRGpCO0FBQUEsSUFFTUMsV0FBVyxHQUZqQjtBQUFBLElBR01DLFdBQVcsR0FIakI7O0FBS0EsU0FBU0MsV0FBVCxHQUE2RTtBQUFBLFVBQXhEQyxDQUF3RCx1RUFBcERMLFFBQW9EO0FBQUEsVUFBMUNNLENBQTBDLHVFQUF0Q0wsUUFBc0M7QUFBQSxVQUE1Qk0sQ0FBNEIsdUVBQXhCTCxRQUF3QjtBQUFBLFVBQWRNLENBQWMsdUVBQVZMLFFBQVU7QUFBRSxXQUFLTSxPQUFMLENBQWFDLFVBQWIsQ0FBd0JMLENBQXhCLEVBQTJCQyxDQUEzQixFQUE4QkMsQ0FBOUIsRUFBaUNDLENBQWpDO0FBQXNDOztBQUVySCxTQUFTRyxpQkFBVCxHQUE2QjtBQUNyQixVQUFFQyxnQkFBRixHQUF1QixLQUFLSCxPQUE1QixDQUFFRyxnQkFBRjtBQUFBLFVBQ0FDLElBREEsR0FDT0QsZ0JBRFA7OztBQUdOLFdBQUtILE9BQUwsQ0FBYUssS0FBYixDQUFtQkQsSUFBbkI7QUFDRDs7QUFFREUsT0FBT0MsT0FBUCxHQUFpQjtBQUNmWixtQkFBYUEsV0FERTtBQUVmTyx5QkFBbUJBO0FBRkosQ0FBakIiLCJmaWxlIjoiY29sb3VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0UiA9IDAuMCxcbiAgICAgIGRlZmF1bHRHID0gMC4wLFxuICAgICAgZGVmYXVsdEIgPSAwLjAsXG4gICAgICBkZWZhdWx0QSA9IDEuMDtcblxuZnVuY3Rpb24gY2xlYXJDb2xvdXIociA9IGRlZmF1bHRSLCBnID0gZGVmYXVsdEcsIGIgPSBkZWZhdWx0QiwgYSA9IGRlZmF1bHRBKSB7IHRoaXMuY29udGV4dC5jbGVhckNvbG9yKHIsIGcsIGIsIGEpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyQnVmZmVyKCkge1xuICBjb25zdCB7IENPTE9SX0JVRkZFUl9CSVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbWFzayA9IENPTE9SX0JVRkZFUl9CSVQ7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xlYXJDb2xvdXI6IGNsZWFyQ29sb3VyLFxuICBjbGVhckNvbG91ckJ1ZmZlcjogY2xlYXJDb2xvdXJCdWZmZXJcbn07XG4iXX0=