'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = require('./maths/vec3'),
    LineInXYPlane = require('./lineInXYPlane'),
    arrayUtilities = require('./utilities/array');

var add = vec3.add,
    subtract = vec3.subtract,
    normalise = vec3.normalise,
    transform = vec3.transform,
    first = arrayUtilities.first,
    second = arrayUtilities.second;

var VerticalLineInXYPlane = function (_LineInXYPlane) {
  _inherits(VerticalLineInXYPlane, _LineInXYPlane);

  function VerticalLineInXYPlane(position, direction, rotationMatrix) {
    _classCallCheck(this, VerticalLineInXYPlane);

    var _this = _possibleConstructorReturn(this, (VerticalLineInXYPlane.__proto__ || Object.getPrototypeOf(VerticalLineInXYPlane)).call(this, position, direction));

    _this.rotationMatrix = rotationMatrix;
    return _this;
  }

  _createClass(VerticalLineInXYPlane, [{
    key: 'getRotationMatrix',
    value: function getRotationMatrix() {
      return this.rotationMatrix;
    }
  }, {
    key: 'getX',
    value: function getX() {
      var positionComponents = this.position,
          ///
      firstPositionComponent = first(positionComponents),
          x = firstPositionComponent; ///

      return x;
    }
  }], [{
    key: 'fromLineInXYPlane',
    value: function fromLineInXYPlane(lineInXYPlane) {
      var position = lineInXYPlane.getPosition(),
          direction = lineInXYPlane.getDirection();

      var unitDirection = normalise(direction),
          unitDirectionComponents = unitDirection,
          ///
      firstUnitDirectionComponent = first(unitDirectionComponents),
          secondUnitDirectionComponent = second(unitDirectionComponents),
          angleOfRotationCosine = +secondUnitDirectionComponent,
          ///
      angleOfRotationSine = -firstUnitDirectionComponent,
          ///
      c = angleOfRotationCosine,
          s = angleOfRotationSine,
          rotationMatrix = [c, -s, 0, +s, c, 0, 0, 0, 0]; ///

      var startVertex = position.slice(),
          endVertex = add(position, direction);

      startVertex = rotateVertex(startVertex, rotationMatrix);
      endVertex = rotateVertex(endVertex, rotationMatrix);

      position = startVertex;
      direction = subtract(endVertex, startVertex);

      var verticalLineInXYPlane = new VerticalLineInXYPlane(position, direction, rotationMatrix);

      return verticalLineInXYPlane;
    }
  }]);

  return VerticalLineInXYPlane;
}(LineInXYPlane);

module.exports = VerticalLineInXYPlane;

function rotateVertex(vertex, rotationMatrix) {
  var vec = vertex; ///

  var mat3 = rotationMatrix; ///

  vec = transform(vec, mat3);

  vertex = vec; ///

  return vertex;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0aWNhbExpbmVJblhZUGxhbmUuanMiXSwibmFtZXMiOlsidmVjMyIsInJlcXVpcmUiLCJMaW5lSW5YWVBsYW5lIiwiYXJyYXlVdGlsaXRpZXMiLCJhZGQiLCJzdWJ0cmFjdCIsIm5vcm1hbGlzZSIsInRyYW5zZm9ybSIsImZpcnN0Iiwic2Vjb25kIiwiVmVydGljYWxMaW5lSW5YWVBsYW5lIiwicG9zaXRpb24iLCJkaXJlY3Rpb24iLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uQ29tcG9uZW50cyIsImZpcnN0UG9zaXRpb25Db21wb25lbnQiLCJ4IiwibGluZUluWFlQbGFuZSIsImdldFBvc2l0aW9uIiwiZ2V0RGlyZWN0aW9uIiwidW5pdERpcmVjdGlvbiIsInVuaXREaXJlY3Rpb25Db21wb25lbnRzIiwiZmlyc3RVbml0RGlyZWN0aW9uQ29tcG9uZW50Iiwic2Vjb25kVW5pdERpcmVjdGlvbkNvbXBvbmVudCIsImFuZ2xlT2ZSb3RhdGlvbkNvc2luZSIsImFuZ2xlT2ZSb3RhdGlvblNpbmUiLCJjIiwicyIsInN0YXJ0VmVydGV4Iiwic2xpY2UiLCJlbmRWZXJ0ZXgiLCJyb3RhdGVWZXJ0ZXgiLCJ2ZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwidmVydGV4IiwidmVjIiwibWF0MyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxpQkFBUixDQUR0QjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxtQkFBUixDQUZ2Qjs7SUFJUUcsRyxHQUF3Q0osSSxDQUF4Q0ksRztJQUFLQyxRLEdBQW1DTCxJLENBQW5DSyxRO0lBQVVDLFMsR0FBeUJOLEksQ0FBekJNLFM7SUFBV0MsUyxHQUFjUCxJLENBQWRPLFM7SUFDMUJDLEssR0FBa0JMLGMsQ0FBbEJLLEs7SUFBT0MsTSxHQUFXTixjLENBQVhNLE07O0lBRVRDLHFCOzs7QUFDSixpQ0FBWUMsUUFBWixFQUFzQkMsU0FBdEIsRUFBaUNDLGNBQWpDLEVBQWlEO0FBQUE7O0FBQUEsOElBQ3pDRixRQUR5QyxFQUMvQkMsU0FEK0I7O0FBRy9DLFVBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBSCtDO0FBSWhEOzs7O3dDQUVtQjtBQUNsQixhQUFPLEtBQUtBLGNBQVo7QUFDRDs7OzJCQUVNO0FBQ0wsVUFBTUMscUJBQXFCLEtBQUtILFFBQWhDO0FBQUEsVUFBMEM7QUFDcENJLCtCQUF5QlAsTUFBTU0sa0JBQU4sQ0FEL0I7QUFBQSxVQUVNRSxJQUFJRCxzQkFGVixDQURLLENBRzZCOztBQUVsQyxhQUFPQyxDQUFQO0FBQ0Q7OztzQ0FFd0JDLGEsRUFBZTtBQUN0QyxVQUFJTixXQUFXTSxjQUFjQyxXQUFkLEVBQWY7QUFBQSxVQUNJTixZQUFZSyxjQUFjRSxZQUFkLEVBRGhCOztBQUdBLFVBQU1DLGdCQUFnQmQsVUFBVU0sU0FBVixDQUF0QjtBQUFBLFVBQ01TLDBCQUEwQkQsYUFEaEM7QUFBQSxVQUNnRDtBQUMxQ0Usb0NBQThCZCxNQUFNYSx1QkFBTixDQUZwQztBQUFBLFVBR01FLCtCQUErQmQsT0FBT1ksdUJBQVAsQ0FIckM7QUFBQSxVQUlNRyx3QkFBd0IsQ0FBQ0QsNEJBSi9CO0FBQUEsVUFJOEQ7QUFDeERFLDRCQUFzQixDQUFDSCwyQkFMN0I7QUFBQSxVQUswRDtBQUNwREksVUFBSUYscUJBTlY7QUFBQSxVQU9NRyxJQUFJRixtQkFQVjtBQUFBLFVBUU1aLGlCQUFpQixDQUFFYSxDQUFGLEVBQUssQ0FBQ0MsQ0FBTixFQUFTLENBQVQsRUFBWSxDQUFDQSxDQUFiLEVBQWdCRCxDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQVJ2QixDQUpzQyxDQVltQjs7QUFFekQsVUFBSUUsY0FBY2pCLFNBQVNrQixLQUFULEVBQWxCO0FBQUEsVUFDSUMsWUFBWTFCLElBQUlPLFFBQUosRUFBY0MsU0FBZCxDQURoQjs7QUFHQWdCLG9CQUFjRyxhQUFhSCxXQUFiLEVBQTBCZixjQUExQixDQUFkO0FBQ0FpQixrQkFBWUMsYUFBYUQsU0FBYixFQUF3QmpCLGNBQXhCLENBQVo7O0FBRUFGLGlCQUFXaUIsV0FBWDtBQUNBaEIsa0JBQVlQLFNBQVN5QixTQUFULEVBQW9CRixXQUFwQixDQUFaOztBQUVBLFVBQU1JLHdCQUF3QixJQUFJdEIscUJBQUosQ0FBMEJDLFFBQTFCLEVBQW9DQyxTQUFwQyxFQUErQ0MsY0FBL0MsQ0FBOUI7O0FBRUEsYUFBT21CLHFCQUFQO0FBQ0Q7Ozs7RUE3Q2lDOUIsYTs7QUFnRHBDK0IsT0FBT0MsT0FBUCxHQUFpQnhCLHFCQUFqQjs7QUFFQSxTQUFTcUIsWUFBVCxDQUFzQkksTUFBdEIsRUFBOEJ0QixjQUE5QixFQUE4QztBQUM1QyxNQUFJdUIsTUFBTUQsTUFBVixDQUQ0QyxDQUMxQjs7QUFFbEIsTUFBTUUsT0FBT3hCLGNBQWIsQ0FINEMsQ0FHZDs7QUFFOUJ1QixRQUFNN0IsVUFBVTZCLEdBQVYsRUFBZUMsSUFBZixDQUFOOztBQUVBRixXQUFTQyxHQUFULENBUDRDLENBTzlCOztBQUVkLFNBQU9ELE1BQVA7QUFDRCIsImZpbGUiOiJ2ZXJ0aWNhbExpbmVJblhZUGxhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzMgPSByZXF1aXJlKCcuL21hdGhzL3ZlYzMnKSxcbiAgICAgIExpbmVJblhZUGxhbmUgPSByZXF1aXJlKCcuL2xpbmVJblhZUGxhbmUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBhZGQsIHN1YnRyYWN0LCBub3JtYWxpc2UsIHRyYW5zZm9ybSB9ID0gdmVjMyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFZlcnRpY2FsTGluZUluWFlQbGFuZSBleHRlbmRzIExpbmVJblhZUGxhbmUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgZGlyZWN0aW9uLCByb3RhdGlvbk1hdHJpeCkge1xuICAgIHN1cGVyKHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuXG4gICAgdGhpcy5yb3RhdGlvbk1hdHJpeCA9IHJvdGF0aW9uTWF0cml4O1xuICB9XG5cbiAgZ2V0Um90YXRpb25NYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25NYXRyaXg7XG4gIH1cbiAgXG4gIGdldFgoKSB7XG4gICAgY29uc3QgcG9zaXRpb25Db21wb25lbnRzID0gdGhpcy5wb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgeCA9IGZpcnN0UG9zaXRpb25Db21wb25lbnQ7IC8vL1xuICAgIFxuICAgIHJldHVybiB4O1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lSW5YWVBsYW5lKGxpbmVJblhZUGxhbmUpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBsaW5lSW5YWVBsYW5lLmdldFBvc2l0aW9uKCksXG4gICAgICAgIGRpcmVjdGlvbiA9IGxpbmVJblhZUGxhbmUuZ2V0RGlyZWN0aW9uKCk7XG5cbiAgICBjb25zdCB1bml0RGlyZWN0aW9uID0gbm9ybWFsaXNlKGRpcmVjdGlvbiksXG4gICAgICAgICAgdW5pdERpcmVjdGlvbkNvbXBvbmVudHMgPSB1bml0RGlyZWN0aW9uLCAgLy8vXG4gICAgICAgICAgZmlyc3RVbml0RGlyZWN0aW9uQ29tcG9uZW50ID0gZmlyc3QodW5pdERpcmVjdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHNlY29uZFVuaXREaXJlY3Rpb25Db21wb25lbnQgPSBzZWNvbmQodW5pdERpcmVjdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9ICtzZWNvbmRVbml0RGlyZWN0aW9uQ29tcG9uZW50LCAgLy8vXG4gICAgICAgICAgYW5nbGVPZlJvdGF0aW9uU2luZSA9IC1maXJzdFVuaXREaXJlY3Rpb25Db21wb25lbnQsIC8vL1xuICAgICAgICAgIGMgPSBhbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgcyA9IGFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSBbIGMsIC1zLCAwLCArcywgYywgMCwgMCwgMCwgMCBdOyAgLy8vXG5cbiAgICBsZXQgc3RhcnRWZXJ0ZXggPSBwb3NpdGlvbi5zbGljZSgpLFxuICAgICAgICBlbmRWZXJ0ZXggPSBhZGQocG9zaXRpb24sIGRpcmVjdGlvbik7XG5cbiAgICBzdGFydFZlcnRleCA9IHJvdGF0ZVZlcnRleChzdGFydFZlcnRleCwgcm90YXRpb25NYXRyaXgpO1xuICAgIGVuZFZlcnRleCA9IHJvdGF0ZVZlcnRleChlbmRWZXJ0ZXgsIHJvdGF0aW9uTWF0cml4KTtcblxuICAgIHBvc2l0aW9uID0gc3RhcnRWZXJ0ZXg7XG4gICAgZGlyZWN0aW9uID0gc3VidHJhY3QoZW5kVmVydGV4LCBzdGFydFZlcnRleCk7XG5cbiAgICBjb25zdCB2ZXJ0aWNhbExpbmVJblhZUGxhbmUgPSBuZXcgVmVydGljYWxMaW5lSW5YWVBsYW5lKHBvc2l0aW9uLCBkaXJlY3Rpb24sIHJvdGF0aW9uTWF0cml4KTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbExpbmVJblhZUGxhbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNhbExpbmVJblhZUGxhbmU7XG5cbmZ1bmN0aW9uIHJvdGF0ZVZlcnRleCh2ZXJ0ZXgsIHJvdGF0aW9uTWF0cml4KSB7XG4gIGxldCB2ZWMgPSB2ZXJ0ZXg7IC8vL1xuXG4gIGNvbnN0IG1hdDMgPSByb3RhdGlvbk1hdHJpeDsgIC8vL1xuXG4gIHZlYyA9IHRyYW5zZm9ybSh2ZWMsIG1hdDMpO1xuXG4gIHZlcnRleCA9IHZlYzsgLy8vXG5cbiAgcmV0dXJuIHZlcnRleDtcbn1cbiJdfQ==