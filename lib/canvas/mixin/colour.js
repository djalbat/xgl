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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jYW52YXMvbWl4aW4vY29sb3VyLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRSIiwiZGVmYXVsdEciLCJkZWZhdWx0QiIsImRlZmF1bHRBIiwiY2xlYXJDb2xvdXIiLCJyIiwiZyIsImIiLCJhIiwiY29udGV4dCIsImNsZWFyQ29sb3IiLCJjbGVhckNvbG91ckJ1ZmZlciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJtYXNrIiwiY2xlYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxXQUFXLEdBQWpCO0FBQUEsSUFDTUMsV0FBVyxHQURqQjtBQUFBLElBRU1DLFdBQVcsR0FGakI7QUFBQSxJQUdNQyxXQUFXLEdBSGpCOztBQUtBLFNBQVNDLFdBQVQsR0FBNkU7QUFBQSxVQUF4REMsQ0FBd0QsdUVBQXBETCxRQUFvRDtBQUFBLFVBQTFDTSxDQUEwQyx1RUFBdENMLFFBQXNDO0FBQUEsVUFBNUJNLENBQTRCLHVFQUF4QkwsUUFBd0I7QUFBQSxVQUFkTSxDQUFjLHVFQUFWTCxRQUFVO0FBQUUsV0FBS00sT0FBTCxDQUFhQyxVQUFiLENBQXdCTCxDQUF4QixFQUEyQkMsQ0FBM0IsRUFBOEJDLENBQTlCLEVBQWlDQyxDQUFqQztBQUFzQzs7QUFFckgsU0FBU0csaUJBQVQsR0FBNkI7QUFDckIsVUFBRUMsZ0JBQUYsR0FBdUIsS0FBS0gsT0FBNUIsQ0FBRUcsZ0JBQUY7QUFBQSxVQUNBQyxJQURBLEdBQ09ELGdCQURQOzs7QUFHTixXQUFLSCxPQUFMLENBQWFLLEtBQWIsQ0FBbUJELElBQW5CO0FBQ0Q7O0FBRURFLE9BQU9DLE9BQVAsR0FBaUI7QUFDZlosOEJBRGU7QUFFZk87QUFGZSxDQUFqQiIsImZpbGUiOiJjb2xvdXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHRSID0gMC4wLFxuICAgICAgZGVmYXVsdEcgPSAwLjAsXG4gICAgICBkZWZhdWx0QiA9IDAuMCxcbiAgICAgIGRlZmF1bHRBID0gMS4wO1xuXG5mdW5jdGlvbiBjbGVhckNvbG91cihyID0gZGVmYXVsdFIsIGcgPSBkZWZhdWx0RywgYiA9IGRlZmF1bHRCLCBhID0gZGVmYXVsdEEpIHsgdGhpcy5jb250ZXh0LmNsZWFyQ29sb3IociwgZywgYiwgYSk7IH1cblxuZnVuY3Rpb24gY2xlYXJDb2xvdXJCdWZmZXIoKSB7XG4gIGNvbnN0IHsgQ09MT1JfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gQ09MT1JfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjbGVhckNvbG91cixcbiAgY2xlYXJDb2xvdXJCdWZmZXJcbn07XG4iXX0=