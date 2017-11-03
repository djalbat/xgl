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

  function VerticalLineInXYPlane(position, direction, rotationAboutZAxisMatrix) {
    _classCallCheck(this, VerticalLineInXYPlane);

    var _this = _possibleConstructorReturn(this, (VerticalLineInXYPlane.__proto__ || Object.getPrototypeOf(VerticalLineInXYPlane)).call(this, position, direction));

    _this.rotationAboutZAxisMatrix = rotationAboutZAxisMatrix;
    return _this;
  }

  _createClass(VerticalLineInXYPlane, [{
    key: 'getRotationAboutZAxisMatrix',
    value: function getRotationAboutZAxisMatrix() {
      return this.rotationAboutZAxisMatrix;
    }
  }, {
    key: 'getForwardsRotationAboutZAxisMatrix',
    value: function getForwardsRotationAboutZAxisMatrix() {
      var forwardsRotationAboutZAxisMatrix = this.rotationAboutZAxisMatrix; ///

      return forwardsRotationAboutZAxisMatrix;
    }
  }, {
    key: 'getBackwardsRotationAboutZAxisMatrix',
    value: function getBackwardsRotationAboutZAxisMatrix() {
      var rotationAboutZAxisMatrixComponents = this.rotationAboutZAxisMatrix,
          ///
      firstRotationAboutZAxisMatrixComponent = first(rotationAboutZAxisMatrixComponents),
          fourthRotationAboutZAxisMatrixComponent = fourth(rotationAboutZAxisMatrixComponents),
          c = firstRotationAboutZAxisMatrixComponent,
          ///
      s = fourthRotationAboutZAxisMatrixComponent,
          ///
      backwardsRotationAboutZAxisMatrix = [c, +s, 0, -s, c, 0, 0, 0, 1];

      return backwardsRotationAboutZAxisMatrix;
    }
  }, {
    key: 'getFirstPositionComponent',
    value: function getFirstPositionComponent() {
      var positionComponents = this.position,
          ///
      firstPositionComponent = first(positionComponents);

      return firstPositionComponent;
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
          rotationAboutZAxisMatrix = [c, -s, 0, +s, c, 0, 0, 0, 1]; ///

      var startVertex = position.slice(),
          endVertex = add(position, direction);

      startVertex = rotateVertex(startVertex, rotationAboutZAxisMatrix);
      endVertex = rotateVertex(endVertex, rotationAboutZAxisMatrix);

      position = startVertex;
      direction = subtract(endVertex, startVertex);

      var verticalLineInXYPlane = new VerticalLineInXYPlane(position, direction, rotationAboutZAxisMatrix);

      return verticalLineInXYPlane;
    }
  }]);

  return VerticalLineInXYPlane;
}(LineInXYPlane);

module.exports = VerticalLineInXYPlane;

function rotateVertex(vertex, rotationAboutZAxisMatrix) {
  var vec = vertex; ///

  var mat3 = rotationAboutZAxisMatrix; ///

  vec = transform(vec, mat3);

  vertex = vec; ///

  return vertex;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0aWNhbExpbmVJblhZUGxhbmUuanMiXSwibmFtZXMiOlsidmVjMyIsInJlcXVpcmUiLCJMaW5lSW5YWVBsYW5lIiwiYXJyYXlVdGlsaXRpZXMiLCJhZGQiLCJzdWJ0cmFjdCIsIm5vcm1hbGlzZSIsInRyYW5zZm9ybSIsImZpcnN0Iiwic2Vjb25kIiwiZm91cnRoIiwiVmVydGljYWxMaW5lSW5YWVBsYW5lIiwicG9zaXRpb24iLCJkaXJlY3Rpb24iLCJyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsInJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudHMiLCJmaXJzdFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCIsImZvdXJ0aFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCIsImMiLCJzIiwiYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4IiwicG9zaXRpb25Db21wb25lbnRzIiwiZmlyc3RQb3NpdGlvbkNvbXBvbmVudCIsImxpbmVJblhZUGxhbmUiLCJnZXRQb3NpdGlvbiIsImdldERpcmVjdGlvbiIsInVuaXREaXJlY3Rpb24iLCJ1bml0RGlyZWN0aW9uQ29tcG9uZW50cyIsImZpcnN0VW5pdERpcmVjdGlvbkNvbXBvbmVudCIsInNlY29uZFVuaXREaXJlY3Rpb25Db21wb25lbnQiLCJhbmdsZU9mUm90YXRpb25Db3NpbmUiLCJhbmdsZU9mUm90YXRpb25TaW5lIiwic3RhcnRWZXJ0ZXgiLCJzbGljZSIsImVuZFZlcnRleCIsInJvdGF0ZVZlcnRleCIsInZlcnRpY2FsTGluZUluWFlQbGFuZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ2ZXJ0ZXgiLCJ2ZWMiLCJtYXQzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLGlCQUFS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cENvQyxPQUFPQyxPQUFQLEdBQWlCNUIscUJBQWpCOztBQUVBLFNBQVN5QixZQUFULENBQXNCSSxNQUF0QixFQUE4QjFCLHdCQUE5QixFQUF3RDtBQUN0RCxNQUFJMkIsTUFBTUQsTUFBVixDQURzRCxDQUNwQzs7QUFFbEIsTUFBTUUsT0FBTzVCLHdCQUFiLENBSHNELENBR2Q7O0FBRXhDMkIsUUFBTWxDLFVBQVVrQyxHQUFWLEVBQWVDLElBQWYsQ0FBTjs7QUFFQUYsV0FBU0MsR0FBVCxDQVBzRCxDQU94Qzs7QUFFZCxTQUFPRCxNQUFQO0FBQ0QiLCJmaWxlIjoidmVydGljYWxMaW5lSW5YWVBsYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMzID0gcmVxdWlyZSgnLi9tYXRocy92ZWMzJyksXG4gICAgICBMaW5lSW5YWVBsYW5lID0gcmVxdWlyZSgnLi9saW5lSW5YWVBsYW5lJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgYWRkLCBzdWJ0cmFjdCwgbm9ybWFsaXNlLCB0cmFuc2Zvcm0gfSA9IHZlYzMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIGZvdXJ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFZlcnRpY2FsTGluZUluWFlQbGFuZSBleHRlbmRzIExpbmVJblhZUGxhbmUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgZGlyZWN0aW9uLCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpIHtcbiAgICBzdXBlcihwb3NpdGlvbiwgZGlyZWN0aW9uKTtcblxuICAgIHRoaXMucm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gcm90YXRpb25BYm91dFpBeGlzTWF0cml4O1xuICB9XG4gIFxuICBnZXRSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25BYm91dFpBeGlzTWF0cml4O1xuICB9XG5cbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgoKSB7XG4gICAgY29uc3QgZm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSB0aGlzLnJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDsgLy8vXG4gICAgXG4gICAgcmV0dXJuIGZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4O1xuICB9XG4gIFxuICBnZXRCYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgoKSB7XG4gICAgY29uc3Qgcm90YXRpb25BYm91dFpBeGlzTWF0cml4Q29tcG9uZW50cyA9IHRoaXMucm90YXRpb25BYm91dFpBeGlzTWF0cml4LCAvLy9cbiAgICAgICAgICBmaXJzdFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCA9IGZpcnN0KHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudHMpLFxuICAgICAgICAgIGZvdXJ0aFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCA9IGZvdXJ0aChyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnRzKSxcbiAgICAgICAgICBjID0gZmlyc3RSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnQsIC8vL1xuICAgICAgICAgIHMgPSBmb3VydGhSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnQsICAvLy9cbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSBbIGMsICtzLCAwLCAtcywgYywgMCwgMCwgMCwgMSBdO1xuICAgIFxuICAgIHJldHVybiBiYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXg7XG4gIH1cbiAgXG4gIGdldEZpcnN0UG9zaXRpb25Db21wb25lbnQoKSB7XG4gICAgY29uc3QgcG9zaXRpb25Db21wb25lbnRzID0gdGhpcy5wb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIGZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmVJblhZUGxhbmUobGluZUluWFlQbGFuZSkge1xuICAgIGxldCBwb3NpdGlvbiA9IGxpbmVJblhZUGxhbmUuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZGlyZWN0aW9uID0gbGluZUluWFlQbGFuZS5nZXREaXJlY3Rpb24oKTtcblxuICAgIGNvbnN0IHVuaXREaXJlY3Rpb24gPSBub3JtYWxpc2UoZGlyZWN0aW9uKSxcbiAgICAgICAgICB1bml0RGlyZWN0aW9uQ29tcG9uZW50cyA9IHVuaXREaXJlY3Rpb24sICAvLy9cbiAgICAgICAgICBmaXJzdFVuaXREaXJlY3Rpb25Db21wb25lbnQgPSBmaXJzdCh1bml0RGlyZWN0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgc2Vjb25kVW5pdERpcmVjdGlvbkNvbXBvbmVudCA9IHNlY29uZCh1bml0RGlyZWN0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gK3NlY29uZFVuaXREaXJlY3Rpb25Db21wb25lbnQsICAvLy9cbiAgICAgICAgICBhbmdsZU9mUm90YXRpb25TaW5lID0gLWZpcnN0VW5pdERpcmVjdGlvbkNvbXBvbmVudCwgLy8vXG4gICAgICAgICAgYyA9IGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSxcbiAgICAgICAgICBzID0gYW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSBbIGMsIC1zLCAwLCArcywgYywgMCwgMCwgMCwgMSBdOyAgLy8vXG5cbiAgICBsZXQgc3RhcnRWZXJ0ZXggPSBwb3NpdGlvbi5zbGljZSgpLFxuICAgICAgICBlbmRWZXJ0ZXggPSBhZGQocG9zaXRpb24sIGRpcmVjdGlvbik7XG5cbiAgICBzdGFydFZlcnRleCA9IHJvdGF0ZVZlcnRleChzdGFydFZlcnRleCwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcbiAgICBlbmRWZXJ0ZXggPSByb3RhdGVWZXJ0ZXgoZW5kVmVydGV4LCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuXG4gICAgcG9zaXRpb24gPSBzdGFydFZlcnRleDtcbiAgICBkaXJlY3Rpb24gPSBzdWJ0cmFjdChlbmRWZXJ0ZXgsIHN0YXJ0VmVydGV4KTtcblxuICAgIGNvbnN0IHZlcnRpY2FsTGluZUluWFlQbGFuZSA9IG5ldyBWZXJ0aWNhbExpbmVJblhZUGxhbmUocG9zaXRpb24sIGRpcmVjdGlvbiwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbExpbmVJblhZUGxhbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNhbExpbmVJblhZUGxhbmU7XG5cbmZ1bmN0aW9uIHJvdGF0ZVZlcnRleCh2ZXJ0ZXgsIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCkge1xuICBsZXQgdmVjID0gdmVydGV4OyAvLy9cblxuICBjb25zdCBtYXQzID0gcm90YXRpb25BYm91dFpBeGlzTWF0cml4OyAgLy8vXG5cbiAgdmVjID0gdHJhbnNmb3JtKHZlYywgbWF0Myk7XG5cbiAgdmVydGV4ID0gdmVjOyAvLy9cblxuICByZXR1cm4gdmVydGV4O1xufVxuIl19