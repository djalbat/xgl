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

var colourMixin = {
      clearColour: clearColour,
      clearColourBuffer: clearColourBuffer
};

module.exports = colourMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXhpbi9jb2xvdXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdFIiLCJkZWZhdWx0RyIsImRlZmF1bHRCIiwiZGVmYXVsdEEiLCJjbGVhckNvbG91ciIsInIiLCJnIiwiYiIsImEiLCJjb250ZXh0IiwiY2xlYXJDb2xvciIsImNsZWFyQ29sb3VyQnVmZmVyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIm1hc2siLCJjbGVhciIsImNvbG91ck1peGluIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFqQjtBQUFBLElBQ01DLFdBQVcsR0FEakI7QUFBQSxJQUVNQyxXQUFXLEdBRmpCO0FBQUEsSUFHTUMsV0FBVyxHQUhqQjs7QUFLQSxTQUFTQyxXQUFULEdBQTZFO0FBQUEsVUFBeERDLENBQXdELHVFQUFwREwsUUFBb0Q7QUFBQSxVQUExQ00sQ0FBMEMsdUVBQXRDTCxRQUFzQztBQUFBLFVBQTVCTSxDQUE0Qix1RUFBeEJMLFFBQXdCO0FBQUEsVUFBZE0sQ0FBYyx1RUFBVkwsUUFBVTtBQUFFLFdBQUtNLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkwsQ0FBeEIsRUFBMkJDLENBQTNCLEVBQThCQyxDQUE5QixFQUFpQ0MsQ0FBakM7QUFBc0M7O0FBRXJILFNBQVNHLGlCQUFULEdBQTZCO0FBQ3JCLFVBQUVDLGdCQUFGLEdBQXVCLEtBQUtILE9BQTVCLENBQUVHLGdCQUFGO0FBQUEsVUFDQUMsSUFEQSxHQUNPRCxnQkFEUDs7O0FBR04sV0FBS0gsT0FBTCxDQUFhSyxLQUFiLENBQW1CRCxJQUFuQjtBQUNEOztBQUVELElBQU1FLGNBQWM7QUFDbEJYLG1CQUFhQSxXQURLO0FBRWxCTyx5QkFBbUJBO0FBRkQsQ0FBcEI7O0FBS0FLLE9BQU9DLE9BQVAsR0FBaUJGLFdBQWpCIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVmYXVsdFIgPSAwLjAsXG4gICAgICBkZWZhdWx0RyA9IDAuMCxcbiAgICAgIGRlZmF1bHRCID0gMC4wLFxuICAgICAgZGVmYXVsdEEgPSAxLjA7XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyKHIgPSBkZWZhdWx0UiwgZyA9IGRlZmF1bHRHLCBiID0gZGVmYXVsdEIsIGEgPSBkZWZhdWx0QSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuY29uc3QgY29sb3VyTWl4aW4gPSB7XG4gIGNsZWFyQ29sb3VyOiBjbGVhckNvbG91cixcbiAgY2xlYXJDb2xvdXJCdWZmZXI6IGNsZWFyQ29sb3VyQnVmZmVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbG91ck1peGluO1xuIl19