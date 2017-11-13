'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vectorUtilities = require('./utilities/vector');

var subtract3 = vectorUtilities.subtract3;

var Line = function () {
  function Line(position, direction) {
    _classCallCheck(this, Line);

    this.position = position;
    this.direction = direction;
  }

  _createClass(Line, [{
    key: 'getPosition',
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: 'getDirection',
    value: function getDirection() {
      return this.direction;
    }
  }], [{
    key: 'fromVertices',
    value: function fromVertices(startVertex, endVertex) {
      var position = startVertex.slice(),
          ///
      direction = subtract3(endVertex, startVertex),
          line = new Line(position, direction);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9saW5lLmpzIl0sIm5hbWVzIjpbInZlY3RvclV0aWxpdGllcyIsInJlcXVpcmUiLCJzdWJ0cmFjdDMiLCJMaW5lIiwicG9zaXRpb24iLCJkaXJlY3Rpb24iLCJzdGFydFZlcnRleCIsImVuZFZlcnRleCIsInNsaWNlIiwibGluZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JDLFFBQVEsb0JBQVIsQ0FBeEI7O0lBRVFDLFMsR0FBY0YsZSxDQUFkRSxTOztJQUVGQyxJO0FBQ0osZ0JBQVlDLFFBQVosRUFBc0JDLFNBQXRCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0QsUUFBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7O2lDQUVtQkMsVyxFQUFhQyxTLEVBQVc7QUFDMUMsVUFBTUgsV0FBV0UsWUFBWUUsS0FBWixFQUFqQjtBQUFBLFVBQXNDO0FBQ2hDSCxrQkFBWUgsVUFBVUssU0FBVixFQUFxQkQsV0FBckIsQ0FEbEI7QUFBQSxVQUVNRyxPQUFPLElBQUlOLElBQUosQ0FBU0MsUUFBVCxFQUFtQkMsU0FBbkIsQ0FGYjs7QUFJQSxhQUFPSSxJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCUixJQUFqQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWN0b3JVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZWN0b3InKTtcblxuY29uc3QgeyBzdWJ0cmFjdDMgfSA9IHZlY3RvclV0aWxpdGllcztcblxuY2xhc3MgTGluZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHN0YXJ0VmVydGV4LnNsaWNlKCksIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IHN1YnRyYWN0MyhlbmRWZXJ0ZXgsIHN0YXJ0VmVydGV4KSxcbiAgICAgICAgICBsaW5lID0gbmV3IExpbmUocG9zaXRpb24sIGRpcmVjdGlvbik7XG5cbiAgICByZXR1cm4gbGluZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XG4iXX0=