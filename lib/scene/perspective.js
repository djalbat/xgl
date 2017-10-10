'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var create = mat4.create,
    perspective = mat4.perspective;


var defaultFieldOfView = 45 * Math.PI / 180,
    defaultZNear = 1,
    defaultZFar = 1000.0;

var Perspective = function () {
  function Perspective(matrix) {
    _classCallCheck(this, Perspective);

    this.matrix = matrix;
  }

  _createClass(Perspective, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }], [{
    key: 'fromWidthAndHeight',
    value: function fromWidthAndHeight(width, height) {
      var matrix = create(),
          fieldOfView = defaultFieldOfView,
          aspectRatio = width / height,
          zNear = defaultZNear,
          zFar = defaultZFar,
          perspective = new Perspective(matrix);

      perspective(matrix, fieldOfView, aspectRatio, zNear, zFar);

      return perspective;
    }
  }]);

  return Perspective;
}();

module.exports = Perspective;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zY2VuZS9wZXJzcGVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImNyZWF0ZSIsInBlcnNwZWN0aXZlIiwiZGVmYXVsdEZpZWxkT2ZWaWV3IiwiTWF0aCIsIlBJIiwiZGVmYXVsdFpOZWFyIiwiZGVmYXVsdFpGYXIiLCJQZXJzcGVjdGl2ZSIsIm1hdHJpeCIsIndpZHRoIiwiaGVpZ2h0IiwiZmllbGRPZlZpZXciLCJhc3BlY3RSYXRpbyIsInpOZWFyIiwiekZhciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYixDLENBQWtDOztJQUUxQkMsTSxHQUF3QkYsSSxDQUF4QkUsTTtJQUFRQyxXLEdBQWdCSCxJLENBQWhCRyxXOzs7QUFFaEIsSUFBTUMscUJBQXFCLEtBQUtDLEtBQUtDLEVBQVYsR0FBZSxHQUExQztBQUFBLElBQ01DLGVBQWUsQ0FEckI7QUFBQSxJQUVNQyxjQUFjLE1BRnBCOztJQUlNQyxXO0FBQ0osdUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLE1BQVo7QUFDRDs7O3VDQUV5QkMsSyxFQUFPQyxNLEVBQVE7QUFDdkMsVUFBTUYsU0FBU1IsUUFBZjtBQUFBLFVBQ01XLGNBQWNULGtCQURwQjtBQUFBLFVBRU1VLGNBQWNILFFBQVFDLE1BRjVCO0FBQUEsVUFHTUcsUUFBUVIsWUFIZDtBQUFBLFVBSU1TLE9BQU9SLFdBSmI7QUFBQSxVQUtNTCxjQUFjLElBQUlNLFdBQUosQ0FBZ0JDLE1BQWhCLENBTHBCOztBQU9BUCxrQkFBWU8sTUFBWixFQUFvQkcsV0FBcEIsRUFBaUNDLFdBQWpDLEVBQThDQyxLQUE5QyxFQUFxREMsSUFBckQ7O0FBRUEsYUFBT2IsV0FBUDtBQUNEOzs7Ozs7QUFHSGMsT0FBT0MsT0FBUCxHQUFpQlQsV0FBakIiLCJmaWxlIjoicGVyc3BlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7ICAvLy9cblxuY29uc3QgeyBjcmVhdGUsIHBlcnNwZWN0aXZlIH0gPSBtYXQ0O1xuXG5jb25zdCBkZWZhdWx0RmllbGRPZlZpZXcgPSA0NSAqIE1hdGguUEkgLyAxODAsXG4gICAgICBkZWZhdWx0Wk5lYXIgPSAxLFxuICAgICAgZGVmYXVsdFpGYXIgPSAxMDAwLjA7XG5cbmNsYXNzIFBlcnNwZWN0aXZlIHtcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBtYXRyaXggPSBjcmVhdGUoKSxcbiAgICAgICAgICBmaWVsZE9mVmlldyA9IGRlZmF1bHRGaWVsZE9mVmlldyxcbiAgICAgICAgICBhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0LFxuICAgICAgICAgIHpOZWFyID0gZGVmYXVsdFpOZWFyLFxuICAgICAgICAgIHpGYXIgPSBkZWZhdWx0WkZhcixcbiAgICAgICAgICBwZXJzcGVjdGl2ZSA9IG5ldyBQZXJzcGVjdGl2ZShtYXRyaXgpO1xuXG4gICAgcGVyc3BlY3RpdmUobWF0cml4LCBmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKTtcblxuICAgIHJldHVybiBwZXJzcGVjdGl2ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBlcnNwZWN0aXZlO1xuIl19