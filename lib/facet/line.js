'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vectorUtilities = require('../utilities/vector');

var subtract3 = vectorUtilities.subtract3;

var Line = function () {
  function Line(position, extent) {
    _classCallCheck(this, Line);

    this.position = position;
    this.extent = extent;
  }

  _createClass(Line, [{
    key: 'getPosition',
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: 'getExtent',
    value: function getExtent() {
      return this.extent;
    }
  }], [{
    key: 'fromVertices',
    value: function fromVertices(startVertex, endVertex) {
      var position = startVertex.slice(),
          ///
      extent = subtract3(endVertex, startVertex),
          line = new Line(position, extent);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC9saW5lLmpzIl0sIm5hbWVzIjpbInZlY3RvclV0aWxpdGllcyIsInJlcXVpcmUiLCJzdWJ0cmFjdDMiLCJMaW5lIiwicG9zaXRpb24iLCJleHRlbnQiLCJzdGFydFZlcnRleCIsImVuZFZlcnRleCIsInNsaWNlIiwibGluZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JDLFFBQVEscUJBQVIsQ0FBeEI7O0lBRVFDLFMsR0FBY0YsZSxDQUFkRSxTOztJQUVGQyxJO0FBQ0osZ0JBQVlDLFFBQVosRUFBc0JDLE1BQXRCLEVBQThCO0FBQUE7O0FBQzVCLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtELFFBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7OztpQ0FFbUJDLFcsRUFBYUMsUyxFQUFXO0FBQzFDLFVBQU1ILFdBQVdFLFlBQVlFLEtBQVosRUFBakI7QUFBQSxVQUFzQztBQUNoQ0gsZUFBU0gsVUFBVUssU0FBVixFQUFxQkQsV0FBckIsQ0FEZjtBQUFBLFVBRU1HLE9BQU8sSUFBSU4sSUFBSixDQUFTQyxRQUFULEVBQW1CQyxNQUFuQixDQUZiOztBQUlBLGFBQU9JLElBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJSLElBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZWN0b3InKTtcblxuY29uc3QgeyBzdWJ0cmFjdDMgfSA9IHZlY3RvclV0aWxpdGllcztcblxuY2xhc3MgTGluZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBleHRlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHN0YXJ0VmVydGV4LnNsaWNlKCksIC8vL1xuICAgICAgICAgIGV4dGVudCA9IHN1YnRyYWN0MyhlbmRWZXJ0ZXgsIHN0YXJ0VmVydGV4KSxcbiAgICAgICAgICBsaW5lID0gbmV3IExpbmUocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gbGluZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XG4iXX0=