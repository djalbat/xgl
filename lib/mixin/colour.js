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
  var mask = this.COLOR_BUFFER_BIT_MASK;

  this.context.clear(mask);
}

var colourMixin = {
  clearColour: clearColour,
  clearColourBuffer: clearColourBuffer
};

module.exports = colourMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXhpbi9jb2xvdXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdFIiLCJkZWZhdWx0RyIsImRlZmF1bHRCIiwiZGVmYXVsdEEiLCJjbGVhckNvbG91ciIsInIiLCJnIiwiYiIsImEiLCJjb250ZXh0IiwiY2xlYXJDb2xvciIsImNsZWFyQ29sb3VyQnVmZmVyIiwibWFzayIsIkNPTE9SX0JVRkZFUl9CSVRfTUFTSyIsImNsZWFyIiwiY29sb3VyTWl4aW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxXQUFXLEdBQWpCO0FBQUEsSUFDTUMsV0FBVyxHQURqQjtBQUFBLElBRU1DLFdBQVcsR0FGakI7QUFBQSxJQUdNQyxXQUFXLEdBSGpCOztBQUtBLFNBQVNDLFdBQVQsR0FBNkU7QUFBQSxNQUF4REMsQ0FBd0QsdUVBQXBETCxRQUFvRDtBQUFBLE1BQTFDTSxDQUEwQyx1RUFBdENMLFFBQXNDO0FBQUEsTUFBNUJNLENBQTRCLHVFQUF4QkwsUUFBd0I7QUFBQSxNQUFkTSxDQUFjLHVFQUFWTCxRQUFVO0FBQUUsT0FBS00sT0FBTCxDQUFhQyxVQUFiLENBQXdCTCxDQUF4QixFQUEyQkMsQ0FBM0IsRUFBOEJDLENBQTlCLEVBQWlDQyxDQUFqQztBQUFzQzs7QUFFckgsU0FBU0csaUJBQVQsR0FBNkI7QUFDM0IsTUFBTUMsT0FBTyxLQUFLQyxxQkFBbEI7O0FBRUEsT0FBS0osT0FBTCxDQUFhSyxLQUFiLENBQW1CRixJQUFuQjtBQUNEOztBQUVELElBQU1HLGNBQWM7QUFDbEJYLGVBQWFBLFdBREs7QUFFbEJPLHFCQUFtQkE7QUFGRCxDQUFwQjs7QUFLQUssT0FBT0MsT0FBUCxHQUFpQkYsV0FBakIiLCJmaWxlIjoiY29sb3VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0UiA9IDAuMCxcbiAgICAgIGRlZmF1bHRHID0gMC4wLFxuICAgICAgZGVmYXVsdEIgPSAwLjAsXG4gICAgICBkZWZhdWx0QSA9IDEuMDtcblxuZnVuY3Rpb24gY2xlYXJDb2xvdXIociA9IGRlZmF1bHRSLCBnID0gZGVmYXVsdEcsIGIgPSBkZWZhdWx0QiwgYSA9IGRlZmF1bHRBKSB7IHRoaXMuY29udGV4dC5jbGVhckNvbG9yKHIsIGcsIGIsIGEpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyQnVmZmVyKCkge1xuICBjb25zdCBtYXNrID0gdGhpcy5DT0xPUl9CVUZGRVJfQklUX01BU0s7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5jb25zdCBjb2xvdXJNaXhpbiA9IHtcbiAgY2xlYXJDb2xvdXI6IGNsZWFyQ29sb3VyLFxuICBjbGVhckNvbG91ckJ1ZmZlcjogY2xlYXJDb2xvdXJCdWZmZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29sb3VyTWl4aW47XG4iXX0=