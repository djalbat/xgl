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
    second = arrayUtilities.second,
    fourth = arrayUtilities.fourth;

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
    key: 'getForwardsRotationMatrix',
    value: function getForwardsRotationMatrix() {
      var forwardsRotationMatrix = this.rotationMatrix; ///

      return forwardsRotationMatrix;
    }
  }, {
    key: 'getBackwardsRotationMatrix',
    value: function getBackwardsRotationMatrix() {
      var rotationMatrixComponents = this.rotationMatrix,
          ///
      firstRotationMatrixComponent = first(rotationMatrixComponents),
          fourthRotationMatrixComponent = fourth(rotationMatrixComponents),
          c = firstRotationMatrixComponent,
          ///
      s = fourthRotationMatrixComponent,
          ///
      backwardsRotationMatrix = [c, +s, 0, -s, c, 0, 0, 0, 1];

      return backwardsRotationMatrix;
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
          rotationMatrix = [c, -s, 0, +s, c, 0, 0, 0, 1]; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0aWNhbExpbmVJblhZUGxhbmUuanMiXSwibmFtZXMiOlsidmVjMyIsInJlcXVpcmUiLCJMaW5lSW5YWVBsYW5lIiwiYXJyYXlVdGlsaXRpZXMiLCJhZGQiLCJzdWJ0cmFjdCIsIm5vcm1hbGlzZSIsInRyYW5zZm9ybSIsImZpcnN0Iiwic2Vjb25kIiwiZm91cnRoIiwiVmVydGljYWxMaW5lSW5YWVBsYW5lIiwicG9zaXRpb24iLCJkaXJlY3Rpb24iLCJyb3RhdGlvbk1hdHJpeCIsImZvcndhcmRzUm90YXRpb25NYXRyaXgiLCJyb3RhdGlvbk1hdHJpeENvbXBvbmVudHMiLCJmaXJzdFJvdGF0aW9uTWF0cml4Q29tcG9uZW50IiwiZm91cnRoUm90YXRpb25NYXRyaXhDb21wb25lbnQiLCJjIiwicyIsImJhY2t3YXJkc1JvdGF0aW9uTWF0cml4IiwicG9zaXRpb25Db21wb25lbnRzIiwiZmlyc3RQb3NpdGlvbkNvbXBvbmVudCIsIngiLCJsaW5lSW5YWVBsYW5lIiwiZ2V0UG9zaXRpb24iLCJnZXREaXJlY3Rpb24iLCJ1bml0RGlyZWN0aW9uIiwidW5pdERpcmVjdGlvbkNvbXBvbmVudHMiLCJmaXJzdFVuaXREaXJlY3Rpb25Db21wb25lbnQiLCJzZWNvbmRVbml0RGlyZWN0aW9uQ29tcG9uZW50IiwiYW5nbGVPZlJvdGF0aW9uQ29zaW5lIiwiYW5nbGVPZlJvdGF0aW9uU2luZSIsInN0YXJ0VmVydGV4Iiwic2xpY2UiLCJlbmRWZXJ0ZXgiLCJyb3RhdGVWZXJ0ZXgiLCJ2ZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwidmVydGV4IiwidmVjIiwibWF0MyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxpQkFBUixDQUR0QjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxtQkFBUixDQUZ2Qjs7SUFJUUcsRyxHQUF3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QUFFQSxTQUFTMEIsWUFBVCxDQUFzQkksTUFBdEIsRUFBOEIzQixjQUE5QixFQUE4QztBQUM1QyxNQUFJNEIsTUFBTUQsTUFBVixDQUQ0QyxDQUMxQjs7QUFFbEIsTUFBTUUsT0FBTzdCLGNBQWIsQ0FINEMsQ0FHZDs7QUFFOUI0QixRQUFNbkMsVUFBVW1DLEdBQVYsRUFBZUMsSUFBZixDQUFOOztBQUVBRixXQUFTQyxHQUFULENBUDRDLENBTzlCOztBQUVkLFNBQU9ELE1BQVA7QUFDRCIsImZpbGUiOiJ2ZXJ0aWNhbExpbmVJblhZUGxhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzMgPSByZXF1aXJlKCcuL21hdGhzL3ZlYzMnKSxcbiAgICAgIExpbmVJblhZUGxhbmUgPSByZXF1aXJlKCcuL2xpbmVJblhZUGxhbmUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBhZGQsIHN1YnRyYWN0LCBub3JtYWxpc2UsIHRyYW5zZm9ybSB9ID0gdmVjMyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCwgZm91cnRoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgVmVydGljYWxMaW5lSW5YWVBsYW5lIGV4dGVuZHMgTGluZUluWFlQbGFuZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBkaXJlY3Rpb24sIHJvdGF0aW9uTWF0cml4KSB7XG4gICAgc3VwZXIocG9zaXRpb24sIGRpcmVjdGlvbik7XG5cbiAgICB0aGlzLnJvdGF0aW9uTWF0cml4ID0gcm90YXRpb25NYXRyaXg7XG4gIH1cbiAgXG4gIGdldFJvdGF0aW9uTWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uTWF0cml4O1xuICB9XG5cbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvbk1hdHJpeCgpIHtcbiAgICBjb25zdCBmb3J3YXJkc1JvdGF0aW9uTWF0cml4ID0gdGhpcy5yb3RhdGlvbk1hdHJpeDsgLy8vXG4gICAgXG4gICAgcmV0dXJuIGZvcndhcmRzUm90YXRpb25NYXRyaXg7XG4gIH1cbiAgXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uTWF0cml4KCkge1xuICAgIGNvbnN0IHJvdGF0aW9uTWF0cml4Q29tcG9uZW50cyA9IHRoaXMucm90YXRpb25NYXRyaXgsIC8vL1xuICAgICAgICAgIGZpcnN0Um90YXRpb25NYXRyaXhDb21wb25lbnQgPSBmaXJzdChyb3RhdGlvbk1hdHJpeENvbXBvbmVudHMpLFxuICAgICAgICAgIGZvdXJ0aFJvdGF0aW9uTWF0cml4Q29tcG9uZW50ID0gZm91cnRoKHJvdGF0aW9uTWF0cml4Q29tcG9uZW50cyksXG4gICAgICAgICAgYyA9IGZpcnN0Um90YXRpb25NYXRyaXhDb21wb25lbnQsIC8vL1xuICAgICAgICAgIHMgPSBmb3VydGhSb3RhdGlvbk1hdHJpeENvbXBvbmVudCwgIC8vL1xuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uTWF0cml4ID0gWyBjLCArcywgMCwgLXMsIGMsIDAsIDAsIDAsIDEgXTtcbiAgICBcbiAgICByZXR1cm4gYmFja3dhcmRzUm90YXRpb25NYXRyaXg7XG4gIH1cbiAgXG4gIGdldFgoKSB7XG4gICAgY29uc3QgcG9zaXRpb25Db21wb25lbnRzID0gdGhpcy5wb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgeCA9IGZpcnN0UG9zaXRpb25Db21wb25lbnQ7IC8vL1xuICAgIFxuICAgIHJldHVybiB4O1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lSW5YWVBsYW5lKGxpbmVJblhZUGxhbmUpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBsaW5lSW5YWVBsYW5lLmdldFBvc2l0aW9uKCksXG4gICAgICAgIGRpcmVjdGlvbiA9IGxpbmVJblhZUGxhbmUuZ2V0RGlyZWN0aW9uKCk7XG5cbiAgICBjb25zdCB1bml0RGlyZWN0aW9uID0gbm9ybWFsaXNlKGRpcmVjdGlvbiksXG4gICAgICAgICAgdW5pdERpcmVjdGlvbkNvbXBvbmVudHMgPSB1bml0RGlyZWN0aW9uLCAgLy8vXG4gICAgICAgICAgZmlyc3RVbml0RGlyZWN0aW9uQ29tcG9uZW50ID0gZmlyc3QodW5pdERpcmVjdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHNlY29uZFVuaXREaXJlY3Rpb25Db21wb25lbnQgPSBzZWNvbmQodW5pdERpcmVjdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9ICtzZWNvbmRVbml0RGlyZWN0aW9uQ29tcG9uZW50LCAgLy8vXG4gICAgICAgICAgYW5nbGVPZlJvdGF0aW9uU2luZSA9IC1maXJzdFVuaXREaXJlY3Rpb25Db21wb25lbnQsIC8vL1xuICAgICAgICAgIGMgPSBhbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgcyA9IGFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSBbIGMsIC1zLCAwLCArcywgYywgMCwgMCwgMCwgMSBdOyAgLy8vXG5cbiAgICBsZXQgc3RhcnRWZXJ0ZXggPSBwb3NpdGlvbi5zbGljZSgpLFxuICAgICAgICBlbmRWZXJ0ZXggPSBhZGQocG9zaXRpb24sIGRpcmVjdGlvbik7XG5cbiAgICBzdGFydFZlcnRleCA9IHJvdGF0ZVZlcnRleChzdGFydFZlcnRleCwgcm90YXRpb25NYXRyaXgpO1xuICAgIGVuZFZlcnRleCA9IHJvdGF0ZVZlcnRleChlbmRWZXJ0ZXgsIHJvdGF0aW9uTWF0cml4KTtcblxuICAgIHBvc2l0aW9uID0gc3RhcnRWZXJ0ZXg7XG4gICAgZGlyZWN0aW9uID0gc3VidHJhY3QoZW5kVmVydGV4LCBzdGFydFZlcnRleCk7XG5cbiAgICBjb25zdCB2ZXJ0aWNhbExpbmVJblhZUGxhbmUgPSBuZXcgVmVydGljYWxMaW5lSW5YWVBsYW5lKHBvc2l0aW9uLCBkaXJlY3Rpb24sIHJvdGF0aW9uTWF0cml4KTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbExpbmVJblhZUGxhbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNhbExpbmVJblhZUGxhbmU7XG5cbmZ1bmN0aW9uIHJvdGF0ZVZlcnRleCh2ZXJ0ZXgsIHJvdGF0aW9uTWF0cml4KSB7XG4gIGxldCB2ZWMgPSB2ZXJ0ZXg7IC8vL1xuXG4gIGNvbnN0IG1hdDMgPSByb3RhdGlvbk1hdHJpeDsgIC8vL1xuXG4gIHZlYyA9IHRyYW5zZm9ybSh2ZWMsIG1hdDMpO1xuXG4gIHZlcnRleCA9IHZlYzsgLy8vXG5cbiAgcmV0dXJuIHZlcnRleDtcbn1cbiJdfQ==