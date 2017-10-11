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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jYW52YXMvbWl4aW4vY29sb3VyLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRSIiwiZGVmYXVsdEciLCJkZWZhdWx0QiIsImRlZmF1bHRBIiwiY2xlYXJDb2xvdXIiLCJyIiwiZyIsImIiLCJhIiwiY29udGV4dCIsImNsZWFyQ29sb3IiLCJjbGVhckNvbG91ckJ1ZmZlciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJtYXNrIiwiY2xlYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxXQUFXLEdBQWpCO0FBQUEsSUFDTUMsV0FBVyxHQURqQjtBQUFBLElBRU1DLFdBQVcsR0FGakI7QUFBQSxJQUdNQyxXQUFXLEdBSGpCOztBQUtBLFNBQVNDLFdBQVQsR0FBNkU7QUFBQSxVQUF4REMsQ0FBd0QsdUVBQXBETCxRQUFvRDtBQUFBLFVBQTFDTSxDQUEwQyx1RUFBdENMLFFBQXNDO0FBQUEsVUFBNUJNLENBQTRCLHVFQUF4QkwsUUFBd0I7QUFBQSxVQUFkTSxDQUFjLHVFQUFWTCxRQUFVO0FBQUUsV0FBS00sT0FBTCxDQUFhQyxVQUFiLENBQXdCTCxDQUF4QixFQUEyQkMsQ0FBM0IsRUFBOEJDLENBQTlCLEVBQWlDQyxDQUFqQztBQUFzQzs7QUFFckgsU0FBU0csaUJBQVQsR0FBNkI7QUFDckIsVUFBRUMsZ0JBQUYsR0FBdUIsS0FBS0gsT0FBNUIsQ0FBRUcsZ0JBQUY7QUFBQSxVQUNBQyxJQURBLEdBQ09ELGdCQURQOzs7QUFHTixXQUFLSCxPQUFMLENBQWFLLEtBQWIsQ0FBbUJELElBQW5CO0FBQ0Q7O0FBRURFLE9BQU9DLE9BQVAsR0FBaUI7QUFDZlosbUJBQWFBLFdBREU7QUFFZk8seUJBQW1CQTtBQUZKLENBQWpCIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVmYXVsdFIgPSAwLjAsXG4gICAgICBkZWZhdWx0RyA9IDAuMCxcbiAgICAgIGRlZmF1bHRCID0gMC4wLFxuICAgICAgZGVmYXVsdEEgPSAxLjA7XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyKHIgPSBkZWZhdWx0UiwgZyA9IGRlZmF1bHRHLCBiID0gZGVmYXVsdEIsIGEgPSBkZWZhdWx0QSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsZWFyQ29sb3VyOiBjbGVhckNvbG91cixcbiAgY2xlYXJDb2xvdXJCdWZmZXI6IGNsZWFyQ29sb3VyQnVmZmVyXG59O1xuIl19