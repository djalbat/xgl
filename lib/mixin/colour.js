'use strict';

var defaultRed = 0.0,
    defaultBlue = 0.0,
    defaultGreen = 0.0,
    defaultAlpha = 1.0;

function clearColour() {
      var red = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRed;
      var green = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGreen;
      var blue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBlue;
      var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultAlpha;
      this.context.clearColor(red, green, blue, alpha);
}

function clearColourBuffer() {
      this.context.clear(this.context.COLOR_BUFFER_BIT);
}

var colourMixin = {
      clearColour: clearColour,
      clearColourBuffer: clearColourBuffer
};

module.exports = colourMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXhpbi9jb2xvdXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdFJlZCIsImRlZmF1bHRCbHVlIiwiZGVmYXVsdEdyZWVuIiwiZGVmYXVsdEFscGhhIiwiY2xlYXJDb2xvdXIiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJhbHBoYSIsImNvbnRleHQiLCJjbGVhckNvbG9yIiwiY2xlYXJDb2xvdXJCdWZmZXIiLCJjbGVhciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJjb2xvdXJNaXhpbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLGFBQWEsR0FBbkI7QUFBQSxJQUNNQyxjQUFjLEdBRHBCO0FBQUEsSUFFTUMsZUFBZSxHQUZyQjtBQUFBLElBR01DLGVBQWUsR0FIckI7O0FBS0EsU0FBU0MsV0FBVCxHQUF1RztBQUFBLFVBQWxGQyxHQUFrRix1RUFBNUVMLFVBQTRFO0FBQUEsVUFBaEVNLEtBQWdFLHVFQUF4REosWUFBd0Q7QUFBQSxVQUExQ0ssSUFBMEMsdUVBQW5DTixXQUFtQztBQUFBLFVBQXRCTyxLQUFzQix1RUFBZEwsWUFBYztBQUFFLFdBQUtNLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkwsR0FBeEIsRUFBNkJDLEtBQTdCLEVBQW9DQyxJQUFwQyxFQUEwQ0MsS0FBMUM7QUFBbUQ7O0FBRTVKLFNBQVNHLGlCQUFULEdBQTZCO0FBQUUsV0FBS0YsT0FBTCxDQUFhRyxLQUFiLENBQW1CLEtBQUtILE9BQUwsQ0FBYUksZ0JBQWhDO0FBQW9EOztBQUVuRixJQUFNQyxjQUFjO0FBQ2xCVixtQkFBYUEsV0FESztBQUVsQk8seUJBQW1CQTtBQUZELENBQXBCOztBQUtBSSxPQUFPQyxPQUFQLEdBQWlCRixXQUFqQiIsImZpbGUiOiJjb2xvdXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHRSZWQgPSAwLjAsXG4gICAgICBkZWZhdWx0Qmx1ZSA9IDAuMCxcbiAgICAgIGRlZmF1bHRHcmVlbiA9IDAuMCxcbiAgICAgIGRlZmF1bHRBbHBoYSA9IDEuMDtcblxuZnVuY3Rpb24gY2xlYXJDb2xvdXIocmVkID0gZGVmYXVsdFJlZCwgZ3JlZW4gPSBkZWZhdWx0R3JlZW4sIGJsdWUgPSBkZWZhdWx0Qmx1ZSwgYWxwaGEgPSBkZWZhdWx0QWxwaGEpIHsgdGhpcy5jb250ZXh0LmNsZWFyQ29sb3IocmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyQnVmZmVyKCkgeyB0aGlzLmNvbnRleHQuY2xlYXIodGhpcy5jb250ZXh0LkNPTE9SX0JVRkZFUl9CSVQpOyB9XG5cbmNvbnN0IGNvbG91ck1peGluID0ge1xuICBjbGVhckNvbG91cjogY2xlYXJDb2xvdXIsXG4gIGNsZWFyQ29sb3VyQnVmZmVyOiBjbGVhckNvbG91ckJ1ZmZlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb2xvdXJNaXhpbjtcbiJdfQ==