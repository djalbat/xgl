'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vec3 = require('./maths/vec3'),
    arrayUtilities = require('./utilities/array');

var subtract = vec3.subtract,
    first = arrayUtilities.first;

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
  }, {
    key: 'calculateIntersectionWithVerticalLineInXYPlane',
    value: function calculateIntersectionWithVerticalLineInXYPlane(verticalLineInXYPlane) {
      var intersection = void 0;

      var positionComponents = this.position,
          ///
      directionComponents = this.direction,
          ///
      firstDirectionComponent = first(directionComponents);

      if (firstDirectionComponent === 0) {
        intersection = null;
      } else {
        var firstPositionComponent = first(positionComponents),
            verticalLineInXYPlaneFirstPositionComponent = verticalLineInXYPlane.getFirstPositionComponent();

        intersection = (verticalLineInXYPlaneFirstPositionComponent - firstPositionComponent) / firstDirectionComponent;
      }

      return intersection;
    }
  }], [{
    key: 'fromVertices',
    value: function fromVertices(startVertex, endVertex) {
      var position = startVertex.slice(),
          direction = subtract(endVertex, startVertex),
          line = new Line(position, direction);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9saW5lLmpzIl0sIm5hbWVzIjpbInZlYzMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJzdWJ0cmFjdCIsImZpcnN0IiwiTGluZSIsInBvc2l0aW9uIiwiZGlyZWN0aW9uIiwidmVydGljYWxMaW5lSW5YWVBsYW5lIiwiaW50ZXJzZWN0aW9uIiwicG9zaXRpb25Db21wb25lbnRzIiwiZGlyZWN0aW9uQ29tcG9uZW50cyIsImZpcnN0RGlyZWN0aW9uQ29tcG9uZW50IiwiZmlyc3RQb3NpdGlvbkNvbXBvbmVudCIsInZlcnRpY2FsTGluZUluWFlQbGFuZUZpcnN0UG9zaXRpb25Db21wb25lbnQiLCJnZXRGaXJzdFBvc2l0aW9uQ29tcG9uZW50Iiwic3RhcnRWZXJ0ZXgiLCJlbmRWZXJ0ZXgiLCJzbGljZSIsImxpbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsbUJBQVIsQ0FEdkI7O0FBR00sSUFBRUUsUUFBRixHQUFlSCxJQUFmLENBQUVHLFFBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lGLGNBRFosQ0FDRUUsS0FERjs7SUFHQUMsSTtBQUNKLGdCQUFZQyxRQUFaLEVBQXNCQyxTQUF0QixFQUFpQztBQUFBOztBQUMvQixTQUFLRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtELFFBQVo7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7OzttRUFFOENDLHFCLEVBQXVCO0FBQ3BFLFVBQUlDLHFCQUFKOztBQUVBLFVBQU1DLHFCQUFxQixLQUFLSixRQUFoQztBQUFBLFVBQTBDO0FBQ3BDSyw0QkFBc0IsS0FBS0osU0FEakM7QUFBQSxVQUM0QztBQUN0Q0ssZ0NBQTBCUixNQUFNTyxtQkFBTixDQUZoQzs7QUFJQSxVQUFJQyw0QkFBNEIsQ0FBaEMsRUFBbUM7QUFDakNILHVCQUFlLElBQWY7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNSSx5QkFBeUJULE1BQU1NLGtCQUFOLENBQS9CO0FBQUEsWUFDTUksOENBQThDTixzQkFBc0JPLHlCQUF0QixFQURwRDs7QUFHQU4sdUJBQWUsQ0FBQ0ssOENBQThDRCxzQkFBL0MsSUFBeUVELHVCQUF4RjtBQUNEOztBQUVELGFBQU9ILFlBQVA7QUFDRDs7O2lDQUVtQk8sVyxFQUFhQyxTLEVBQVc7QUFDMUMsVUFBTVgsV0FBV1UsWUFBWUUsS0FBWixFQUFqQjtBQUFBLFVBQ01YLFlBQVlKLFNBQVNjLFNBQVQsRUFBb0JELFdBQXBCLENBRGxCO0FBQUEsVUFFTUcsT0FBTyxJQUFJZCxJQUFKLENBQVNDLFFBQVQsRUFBbUJDLFNBQW5CLENBRmI7O0FBSUEsYUFBT1ksSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmhCLElBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzMgPSByZXF1aXJlKCcuL21hdGhzL3ZlYzMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBzdWJ0cmFjdCB9ID0gdmVjMyxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBMaW5lIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGRpcmVjdGlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbjtcbiAgfVxuXG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUodmVydGljYWxMaW5lSW5YWVBsYW5lKSB7XG4gICAgbGV0IGludGVyc2VjdGlvbjtcblxuICAgIGNvbnN0IHBvc2l0aW9uQ29tcG9uZW50cyA9IHRoaXMucG9zaXRpb24sIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbkNvbXBvbmVudHMgPSB0aGlzLmRpcmVjdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3REaXJlY3Rpb25Db21wb25lbnQgPSBmaXJzdChkaXJlY3Rpb25Db21wb25lbnRzKTtcblxuICAgIGlmIChmaXJzdERpcmVjdGlvbkNvbXBvbmVudCA9PT0gMCkge1xuICAgICAgaW50ZXJzZWN0aW9uID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgICB2ZXJ0aWNhbExpbmVJblhZUGxhbmVGaXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gdmVydGljYWxMaW5lSW5YWVBsYW5lLmdldEZpcnN0UG9zaXRpb25Db21wb25lbnQoKTtcblxuICAgICAgaW50ZXJzZWN0aW9uID0gKHZlcnRpY2FsTGluZUluWFlQbGFuZUZpcnN0UG9zaXRpb25Db21wb25lbnQgLSBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSAvIGZpcnN0RGlyZWN0aW9uQ29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnNlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHN0YXJ0VmVydGV4LnNsaWNlKCksXG4gICAgICAgICAgZGlyZWN0aW9uID0gc3VidHJhY3QoZW5kVmVydGV4LCBzdGFydFZlcnRleCksXG4gICAgICAgICAgbGluZSA9IG5ldyBMaW5lKHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuXG4gICAgcmV0dXJuIGxpbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xuIl19