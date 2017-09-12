'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultFieldOfView = 45 * Math.PI / 180,
    defaultZNear = 0.1,
    defaultZFar = 100.0;

var Projection = function () {
  function Projection(clientWidth, clientHeight) {
    var fieldOfView = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultFieldOfView;
    var zNear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultZNear;
    var zFar = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultZFar;

    _classCallCheck(this, Projection);

    var aspectRatio = clientWidth / clientHeight;

    this.matrix = mat4.create();

    mat4.perspective(this.matrix, fieldOfView, aspectRatio, zNear, zFar);
  }

  _createClass(Projection, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }]);

  return Projection;
}();

module.exports = Projection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0aW9uLmpzIl0sIm5hbWVzIjpbIm1hdDQiLCJyZXF1aXJlIiwiZGVmYXVsdEZpZWxkT2ZWaWV3IiwiTWF0aCIsIlBJIiwiZGVmYXVsdFpOZWFyIiwiZGVmYXVsdFpGYXIiLCJQcm9qZWN0aW9uIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJmaWVsZE9mVmlldyIsInpOZWFyIiwiekZhciIsImFzcGVjdFJhdGlvIiwibWF0cml4IiwiY3JlYXRlIiwicGVyc3BlY3RpdmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWIsQyxDQUFrQzs7QUFFbEMsSUFBTUMscUJBQXFCLEtBQUtDLEtBQUtDLEVBQVYsR0FBZSxHQUExQztBQUFBLElBQ01DLGVBQWUsR0FEckI7QUFBQSxJQUVNQyxjQUFjLEtBRnBCOztJQUlNQyxVO0FBQ0osc0JBQVlDLFdBQVosRUFBeUJDLFlBQXpCLEVBQW1IO0FBQUEsUUFBNUVDLFdBQTRFLHVFQUE5RFIsa0JBQThEO0FBQUEsUUFBMUNTLEtBQTBDLHVFQUFsQ04sWUFBa0M7QUFBQSxRQUFwQk8sSUFBb0IsdUVBQWJOLFdBQWE7O0FBQUE7O0FBQ2pILFFBQU1PLGNBQWNMLGNBQWNDLFlBQWxDOztBQUVBLFNBQUtLLE1BQUwsR0FBY2QsS0FBS2UsTUFBTCxFQUFkOztBQUVBZixTQUFLZ0IsV0FBTCxDQUFpQixLQUFLRixNQUF0QixFQUE4QkosV0FBOUIsRUFBMkNHLFdBQTNDLEVBQXdERixLQUF4RCxFQUErREMsSUFBL0Q7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0UsTUFBWjtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQlgsVUFBakIiLCJmaWxlIjoicHJvamVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBkZWZhdWx0RmllbGRPZlZpZXcgPSA0NSAqIE1hdGguUEkgLyAxODAsXG4gICAgICBkZWZhdWx0Wk5lYXIgPSAwLjEsXG4gICAgICBkZWZhdWx0WkZhciA9IDEwMC4wO1xuXG5jbGFzcyBQcm9qZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCwgZmllbGRPZlZpZXcgPSBkZWZhdWx0RmllbGRPZlZpZXcsIHpOZWFyID0gZGVmYXVsdFpOZWFyLCB6RmFyID0gZGVmYXVsdFpGYXIpIHtcbiAgICBjb25zdCBhc3BlY3RSYXRpbyA9IGNsaWVudFdpZHRoIC8gY2xpZW50SGVpZ2h0O1xuXG4gICAgdGhpcy5tYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuXG4gICAgbWF0NC5wZXJzcGVjdGl2ZSh0aGlzLm1hdHJpeCwgZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcik7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0aW9uO1xuIl19