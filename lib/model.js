'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4');

var defaultXOffset = 0.0,
    defaultYOffset = 0.0,
    defaultZOffset = 6.0;

var Model = function Model() {
  var xOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultXOffset;
  var yOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultYOffset;
  var zOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultZOffset;

  _classCallCheck(this, Model);

  this.matrix = mat4.create();

  var offsetVector = [xOffset, yOffset, zOffset];

  mat4.translate(this.matrix, this.matrix, offsetVector);
};

module.exports = Model;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9tb2RlbC5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImRlZmF1bHRYT2Zmc2V0IiwiZGVmYXVsdFlPZmZzZXQiLCJkZWZhdWx0Wk9mZnNldCIsIk1vZGVsIiwieE9mZnNldCIsInlPZmZzZXQiLCJ6T2Zmc2V0IiwibWF0cml4IiwiY3JlYXRlIiwib2Zmc2V0VmVjdG9yIiwidHJhbnNsYXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjs7QUFFQSxJQUFNQyxpQkFBaUIsR0FBdkI7QUFBQSxJQUNNQyxpQkFBaUIsR0FEdkI7QUFBQSxJQUVNQyxpQkFBaUIsR0FGdkI7O0lBSU1DLEssR0FDSixpQkFBMEY7QUFBQSxNQUE5RUMsT0FBOEUsdUVBQXBFSixjQUFvRTtBQUFBLE1BQXBESyxPQUFvRCx1RUFBMUNKLGNBQTBDO0FBQUEsTUFBMUJLLE9BQTBCLHVFQUFoQkosY0FBZ0I7O0FBQUE7O0FBQ3hGLE9BQUtLLE1BQUwsR0FBY1QsS0FBS1UsTUFBTCxFQUFkOztBQUVBLE1BQU1DLGVBQWUsQ0FDbkJMLE9BRG1CLEVBRW5CQyxPQUZtQixFQUduQkMsT0FIbUIsQ0FBckI7O0FBTUFSLE9BQUtZLFNBQUwsQ0FBZSxLQUFLSCxNQUFwQixFQUE0QixLQUFLQSxNQUFqQyxFQUF5Q0UsWUFBekM7QUFDRCxDOztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCVCxLQUFqQiIsImZpbGUiOiJtb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTtcblxuY29uc3QgZGVmYXVsdFhPZmZzZXQgPSAwLjAsXG4gICAgICBkZWZhdWx0WU9mZnNldCA9IDAuMCwgXG4gICAgICBkZWZhdWx0Wk9mZnNldCA9IDYuMDtcblxuY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3Rvcih4T2Zmc2V0ID0gZGVmYXVsdFhPZmZzZXQsIHlPZmZzZXQgPSBkZWZhdWx0WU9mZnNldCwgek9mZnNldCA9IGRlZmF1bHRaT2Zmc2V0KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgIFxuICAgIGNvbnN0IG9mZnNldFZlY3RvciA9IFtcbiAgICAgIHhPZmZzZXQsXG4gICAgICB5T2Zmc2V0LFxuICAgICAgek9mZnNldFxuICAgIF07XG4gICAgXG4gICAgbWF0NC50cmFuc2xhdGUodGhpcy5tYXRyaXgsIHRoaXMubWF0cml4LCBvZmZzZXRWZWN0b3IpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kZWw7XG4iXX0=