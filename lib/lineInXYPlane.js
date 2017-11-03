'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vec3 = require('./maths/vec3'),
    arrayUtilities = require('./utilities/array');

var subtract = vec3.subtract,
    first = arrayUtilities.first;

var LineInXYPlane = function () {
  function LineInXYPlane(position, direction) {
    _classCallCheck(this, LineInXYPlane);

    this.position = position;
    this.direction = direction;
  }

  _createClass(LineInXYPlane, [{
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
            x = verticalLineInXYPlane.getX();

        intersection = (x - firstPositionComponent) / firstDirectionComponent;
      }

      return intersection;
    }
  }], [{
    key: 'fromEquation',
    value: function fromEquation(a, b, c) {
      var startVertex = b !== 0 ? [-1, (a - c) / b, 0] : [(b - c) / a, -1, 0],
          endVertex = b !== 0 ? [+1, (-a - c) / b, 0] : [(-b - c) / a, +1, 0],
          position = startVertex,
          ///
      direction = subtract(endVertex, startVertex),
          lineInXYPlane = new LineInXYPlane(position, direction);

      return lineInXYPlane;
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(startVertex, endVertex) {
      var position = startVertex.slice(),
          direction = subtract(endVertex, startVertex),
          lineInXYPlane = new LineInXYPlane(position, direction);

      return lineInXYPlane;
    }
  }]);

  return LineInXYPlane;
}();

module.exports = LineInXYPlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9saW5lSW5YWVBsYW5lLmpzIl0sIm5hbWVzIjpbInZlYzMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJzdWJ0cmFjdCIsImZpcnN0IiwiTGluZUluWFlQbGFuZSIsInBvc2l0aW9uIiwiZGlyZWN0aW9uIiwidmVydGljYWxMaW5lSW5YWVBsYW5lIiwiaW50ZXJzZWN0aW9uIiwicG9zaXRpb25Db21wb25lbnRzIiwiZGlyZWN0aW9uQ29tcG9uZW50cyIsImZpcnN0RGlyZWN0aW9uQ29tcG9uZW50IiwiZmlyc3RQb3NpdGlvbkNvbXBvbmVudCIsIngiLCJnZXRYIiwiYSIsImIiLCJjIiwic3RhcnRWZXJ0ZXgiLCJlbmRWZXJ0ZXgiLCJsaW5lSW5YWVBsYW5lIiwic2xpY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsbUJBQVIsQ0FEdkI7O0FBR00sSUFBRUUsUUFBRixHQUFlSCxJQUFmLENBQUVHLFFBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lGLGNBRFosQ0FDRUUsS0FERjs7SUFHQUMsYTtBQUNKLHlCQUFZQyxRQUFaLEVBQXNCQyxTQUF0QixFQUFpQztBQUFBOztBQUMvQixTQUFLRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtELFFBQVo7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7OzttRUFFOENDLHFCLEVBQXVCO0FBQ3BFLFVBQUlDLHFCQUFKOztBQUVBLFVBQU1DLHFCQUFxQixLQUFLSixRQUFoQztBQUFBLFVBQTBDO0FBQ3BDSyw0QkFBc0IsS0FBS0osU0FEakM7QUFBQSxVQUM0QztBQUN0Q0ssZ0NBQTBCUixNQUFNTyxtQkFBTixDQUZoQzs7QUFJQSxVQUFJQyw0QkFBNEIsQ0FBaEMsRUFBbUM7QUFDakNILHVCQUFlLElBQWY7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNSSx5QkFBeUJULE1BQU1NLGtCQUFOLENBQS9CO0FBQUEsWUFDTUksSUFBSU4sc0JBQXNCTyxJQUF0QixFQURWOztBQUdBTix1QkFBZSxDQUFDSyxJQUFJRCxzQkFBTCxJQUErQkQsdUJBQTlDO0FBQ0Q7O0FBRUQsYUFBT0gsWUFBUDtBQUNEOzs7aUNBRW1CTyxDLEVBQUdDLEMsRUFBR0MsQyxFQUFHO0FBQzNCLFVBQU1DLGNBQWVGLE1BQU0sQ0FBUCxHQUNFLENBQUUsQ0FBQyxDQUFILEVBQU0sQ0FBQ0QsSUFBSUUsQ0FBTCxJQUFRRCxDQUFkLEVBQWlCLENBQWpCLENBREYsR0FFSSxDQUFFLENBQUNBLElBQUlDLENBQUwsSUFBUUYsQ0FBVixFQUFhLENBQUMsQ0FBZCxFQUFpQixDQUFqQixDQUZ4QjtBQUFBLFVBR01JLFlBQWFILE1BQU0sQ0FBUCxHQUNFLENBQUUsQ0FBQyxDQUFILEVBQU0sQ0FBQyxDQUFDRCxDQUFELEdBQUtFLENBQU4sSUFBU0QsQ0FBZixFQUFrQixDQUFsQixDQURGLEdBRUksQ0FBRSxDQUFDLENBQUNBLENBQUQsR0FBS0MsQ0FBTixJQUFTRixDQUFYLEVBQWMsQ0FBQyxDQUFmLEVBQWtCLENBQWxCLENBTHRCO0FBQUEsVUFNTVYsV0FBV2EsV0FOakI7QUFBQSxVQU04QjtBQUN4Qlosa0JBQVlKLFNBQVNpQixTQUFULEVBQW9CRCxXQUFwQixDQVBsQjtBQUFBLFVBUU1FLGdCQUFnQixJQUFJaEIsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLFNBQTVCLENBUnRCOztBQVVBLGFBQU9jLGFBQVA7QUFDRDs7O2lDQUVtQkYsVyxFQUFhQyxTLEVBQVc7QUFDMUMsVUFBTWQsV0FBV2EsWUFBWUcsS0FBWixFQUFqQjtBQUFBLFVBQ01mLFlBQVlKLFNBQVNpQixTQUFULEVBQW9CRCxXQUFwQixDQURsQjtBQUFBLFVBRU1FLGdCQUFnQixJQUFJaEIsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLFNBQTVCLENBRnRCOztBQUlBLGFBQU9jLGFBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJuQixhQUFqQiIsImZpbGUiOiJsaW5lSW5YWVBsYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMzID0gcmVxdWlyZSgnLi9tYXRocy92ZWMzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgc3VidHJhY3QgfSA9IHZlYzMsXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgTGluZUluWFlQbGFuZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb247XG4gIH1cblxuICBjYWxjdWxhdGVJbnRlcnNlY3Rpb25XaXRoVmVydGljYWxMaW5lSW5YWVBsYW5lKHZlcnRpY2FsTGluZUluWFlQbGFuZSkge1xuICAgIGxldCBpbnRlcnNlY3Rpb247XG5cbiAgICBjb25zdCBwb3NpdGlvbkNvbXBvbmVudHMgPSB0aGlzLnBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBkaXJlY3Rpb25Db21wb25lbnRzID0gdGhpcy5kaXJlY3Rpb24sIC8vL1xuICAgICAgICAgIGZpcnN0RGlyZWN0aW9uQ29tcG9uZW50ID0gZmlyc3QoZGlyZWN0aW9uQ29tcG9uZW50cyk7XG5cbiAgICBpZiAoZmlyc3REaXJlY3Rpb25Db21wb25lbnQgPT09IDApIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChwb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgICAgeCA9IHZlcnRpY2FsTGluZUluWFlQbGFuZS5nZXRYKCk7XG5cbiAgICAgIGludGVyc2VjdGlvbiA9ICh4IC0gZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkgLyBmaXJzdERpcmVjdGlvbkNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21FcXVhdGlvbihhLCBiLCBjKSB7XG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXggPSAoYiAhPT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBbIC0xLCAoYSAtIGMpL2IsIDAgXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyAoYiAtIGMpL2EsIC0xLCAwIF0sXG4gICAgICAgICAgZW5kVmVydGV4ID0gKGIgIT09IDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgIFsgKzEsICgtYSAtIGMpL2IsIDAgXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsgKC1iIC0gYykvYSwgKzEsIDAgXSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHN0YXJ0VmVydGV4LCAvLy9cbiAgICAgICAgICBkaXJlY3Rpb24gPSBzdWJ0cmFjdChlbmRWZXJ0ZXgsIHN0YXJ0VmVydGV4KSxcbiAgICAgICAgICBsaW5lSW5YWVBsYW5lID0gbmV3IExpbmVJblhZUGxhbmUocG9zaXRpb24sIGRpcmVjdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIGxpbmVJblhZUGxhbmU7ICAgIFxuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0aWNlcyhzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBzdGFydFZlcnRleC5zbGljZSgpLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IHN1YnRyYWN0KGVuZFZlcnRleCwgc3RhcnRWZXJ0ZXgpLFxuICAgICAgICAgIGxpbmVJblhZUGxhbmUgPSBuZXcgTGluZUluWFlQbGFuZShwb3NpdGlvbiwgZGlyZWN0aW9uKTtcblxuICAgIHJldHVybiBsaW5lSW5YWVBsYW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGluZUluWFlQbGFuZTtcbiJdfQ==