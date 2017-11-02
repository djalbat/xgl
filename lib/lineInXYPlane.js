'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vec3 = require('./maths/vec3'),
    arrayUtilities = require('./utilities/array');

var subtract = vec3.subtract,
    first = arrayUtilities.first,
    second = arrayUtilities.second;

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
      firstPositionComponent = first(positionComponents),
          secondPositionComponent = second(positionComponents),
          firstDirectionComponent = first(directionComponents),
          secondDirectionComponent = second(directionComponents);

      if (firstDirectionComponent === 0) {
        intersection = null;
      } else {
        var a = +secondDirectionComponent,
            ///
        b = -firstDirectionComponent,
            c = firstPositionComponent * secondDirectionComponent - secondPositionComponent * firstDirectionComponent,
            x = verticalLineInXYPlane.getX(),
            y = (c - a * x) / b,
            y1 = secondPositionComponent,
            y2 = secondPositionComponent + secondDirectionComponent;

        intersection = (y - y1) / (y2 - y1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9saW5lSW5YWVBsYW5lLmpzIl0sIm5hbWVzIjpbInZlYzMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJzdWJ0cmFjdCIsImZpcnN0Iiwic2Vjb25kIiwiTGluZUluWFlQbGFuZSIsInBvc2l0aW9uIiwiZGlyZWN0aW9uIiwidmVydGljYWxMaW5lSW5YWVBsYW5lIiwiaW50ZXJzZWN0aW9uIiwicG9zaXRpb25Db21wb25lbnRzIiwiZGlyZWN0aW9uQ29tcG9uZW50cyIsImZpcnN0UG9zaXRpb25Db21wb25lbnQiLCJzZWNvbmRQb3NpdGlvbkNvbXBvbmVudCIsImZpcnN0RGlyZWN0aW9uQ29tcG9uZW50Iiwic2Vjb25kRGlyZWN0aW9uQ29tcG9uZW50IiwiYSIsImIiLCJjIiwieCIsImdldFgiLCJ5IiwieTEiLCJ5MiIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwibGluZUluWFlQbGFuZSIsInNsaWNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG1CQUFSLENBRHZCOztBQUdNLElBQUVFLFFBQUYsR0FBZUgsSUFBZixDQUFFRyxRQUFGO0FBQUEsSUFDRUMsS0FERixHQUNvQkYsY0FEcEIsQ0FDRUUsS0FERjtBQUFBLElBQ1NDLE1BRFQsR0FDb0JILGNBRHBCLENBQ1NHLE1BRFQ7O0lBR0FDLGE7QUFDSix5QkFBWUMsUUFBWixFQUFzQkMsU0FBdEIsRUFBaUM7QUFBQTs7QUFDL0IsU0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRCxRQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLGFBQU8sS0FBS0MsU0FBWjtBQUNEOzs7bUVBRThDQyxxQixFQUF1QjtBQUNwRSxVQUFJQyxxQkFBSjs7QUFFQSxVQUFNQyxxQkFBcUIsS0FBS0osUUFBaEM7QUFBQSxVQUEwQztBQUNwQ0ssNEJBQXNCLEtBQUtKLFNBRGpDO0FBQUEsVUFDNEM7QUFDdENLLCtCQUF5QlQsTUFBTU8sa0JBQU4sQ0FGL0I7QUFBQSxVQUdNRywwQkFBMEJULE9BQU9NLGtCQUFQLENBSGhDO0FBQUEsVUFJTUksMEJBQTBCWCxNQUFNUSxtQkFBTixDQUpoQztBQUFBLFVBS01JLDJCQUEyQlgsT0FBT08sbUJBQVAsQ0FMakM7O0FBT0EsVUFBSUcsNEJBQTRCLENBQWhDLEVBQW1DO0FBQ2pDTCx1QkFBZSxJQUFmO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTU8sSUFBSSxDQUFDRCx3QkFBWDtBQUFBLFlBQXFDO0FBQy9CRSxZQUFJLENBQUNILHVCQURYO0FBQUEsWUFFTUksSUFBSU4seUJBQXlCRyx3QkFBekIsR0FBb0RGLDBCQUEwQkMsdUJBRnhGO0FBQUEsWUFHTUssSUFBSVgsc0JBQXNCWSxJQUF0QixFQUhWO0FBQUEsWUFJTUMsSUFBSSxDQUFDSCxJQUFJRixJQUFFRyxDQUFQLElBQVlGLENBSnRCO0FBQUEsWUFLTUssS0FBS1QsdUJBTFg7QUFBQSxZQU1NVSxLQUFLViwwQkFBMEJFLHdCQU5yQzs7QUFRQU4sdUJBQWUsQ0FBQ1ksSUFBSUMsRUFBTCxLQUFZQyxLQUFLRCxFQUFqQixDQUFmO0FBQ0Q7O0FBRUQsYUFBT2IsWUFBUDtBQUNEOzs7aUNBRW1CTyxDLEVBQUdDLEMsRUFBR0MsQyxFQUFHO0FBQzNCLFVBQU1NLGNBQWVQLE1BQU0sQ0FBUCxHQUNFLENBQUUsQ0FBQyxDQUFILEVBQU0sQ0FBQ0QsSUFBSUUsQ0FBTCxJQUFRRCxDQUFkLEVBQWlCLENBQWpCLENBREYsR0FFSSxDQUFFLENBQUNBLElBQUlDLENBQUwsSUFBUUYsQ0FBVixFQUFhLENBQUMsQ0FBZCxFQUFpQixDQUFqQixDQUZ4QjtBQUFBLFVBR01TLFlBQWFSLE1BQU0sQ0FBUCxHQUNFLENBQUUsQ0FBQyxDQUFILEVBQU0sQ0FBQyxDQUFDRCxDQUFELEdBQUtFLENBQU4sSUFBU0QsQ0FBZixFQUFrQixDQUFsQixDQURGLEdBRUksQ0FBRSxDQUFDLENBQUNBLENBQUQsR0FBS0MsQ0FBTixJQUFTRixDQUFYLEVBQWMsQ0FBQyxDQUFmLEVBQWtCLENBQWxCLENBTHRCO0FBQUEsVUFNTVYsV0FBV2tCLFdBTmpCO0FBQUEsVUFNOEI7QUFDeEJqQixrQkFBWUwsU0FBU3VCLFNBQVQsRUFBb0JELFdBQXBCLENBUGxCO0FBQUEsVUFRTUUsZ0JBQWdCLElBQUlyQixhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsU0FBNUIsQ0FSdEI7O0FBVUEsYUFBT21CLGFBQVA7QUFDRDs7O2lDQUVtQkYsVyxFQUFhQyxTLEVBQVc7QUFDMUMsVUFBTW5CLFdBQVdrQixZQUFZRyxLQUFaLEVBQWpCO0FBQUEsVUFDTXBCLFlBQVlMLFNBQVN1QixTQUFULEVBQW9CRCxXQUFwQixDQURsQjtBQUFBLFVBRU1FLGdCQUFnQixJQUFJckIsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLFNBQTVCLENBRnRCOztBQUlBLGFBQU9tQixhQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCeEIsYUFBakIiLCJmaWxlIjoibGluZUluWFlQbGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMyA9IHJlcXVpcmUoJy4vbWF0aHMvdmVjMycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IHN1YnRyYWN0IH0gPSB2ZWMzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgTGluZUluWFlQbGFuZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb247XG4gIH1cblxuICBjYWxjdWxhdGVJbnRlcnNlY3Rpb25XaXRoVmVydGljYWxMaW5lSW5YWVBsYW5lKHZlcnRpY2FsTGluZUluWFlQbGFuZSkge1xuICAgIGxldCBpbnRlcnNlY3Rpb247XG5cbiAgICBjb25zdCBwb3NpdGlvbkNvbXBvbmVudHMgPSB0aGlzLnBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBkaXJlY3Rpb25Db21wb25lbnRzID0gdGhpcy5kaXJlY3Rpb24sIC8vL1xuICAgICAgICAgIGZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChwb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHNlY29uZFBvc2l0aW9uQ29tcG9uZW50ID0gc2Vjb25kKHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgZmlyc3REaXJlY3Rpb25Db21wb25lbnQgPSBmaXJzdChkaXJlY3Rpb25Db21wb25lbnRzKSxcbiAgICAgICAgICBzZWNvbmREaXJlY3Rpb25Db21wb25lbnQgPSBzZWNvbmQoZGlyZWN0aW9uQ29tcG9uZW50cyk7XG5cbiAgICBpZiAoZmlyc3REaXJlY3Rpb25Db21wb25lbnQgPT09IDApIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGEgPSArc2Vjb25kRGlyZWN0aW9uQ29tcG9uZW50LCAvLy9cbiAgICAgICAgICAgIGIgPSAtZmlyc3REaXJlY3Rpb25Db21wb25lbnQsXG4gICAgICAgICAgICBjID0gZmlyc3RQb3NpdGlvbkNvbXBvbmVudCAqIHNlY29uZERpcmVjdGlvbkNvbXBvbmVudCAtIHNlY29uZFBvc2l0aW9uQ29tcG9uZW50ICogZmlyc3REaXJlY3Rpb25Db21wb25lbnQsXG4gICAgICAgICAgICB4ID0gdmVydGljYWxMaW5lSW5YWVBsYW5lLmdldFgoKSxcbiAgICAgICAgICAgIHkgPSAoYyAtIGEqeCkgLyBiLFxuICAgICAgICAgICAgeTEgPSBzZWNvbmRQb3NpdGlvbkNvbXBvbmVudCxcbiAgICAgICAgICAgIHkyID0gc2Vjb25kUG9zaXRpb25Db21wb25lbnQgKyBzZWNvbmREaXJlY3Rpb25Db21wb25lbnQ7XG5cbiAgICAgIGludGVyc2VjdGlvbiA9ICh5IC0geTEpIC8gKHkyIC0geTEpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnNlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUVxdWF0aW9uKGEsIGIsIGMpIHtcbiAgICBjb25zdCBzdGFydFZlcnRleCA9IChiICE9PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsgLTEsIChhIC0gYykvYiwgMCBdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIChiIC0gYykvYSwgLTEsIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXggPSAoYiAhPT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgWyArMSwgKC1hIC0gYykvYiwgMCBdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWyAoLWIgLSBjKS9hLCArMSwgMCBdLFxuICAgICAgICAgIHBvc2l0aW9uID0gc3RhcnRWZXJ0ZXgsIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IHN1YnRyYWN0KGVuZFZlcnRleCwgc3RhcnRWZXJ0ZXgpLFxuICAgICAgICAgIGxpbmVJblhZUGxhbmUgPSBuZXcgTGluZUluWFlQbGFuZShwb3NpdGlvbiwgZGlyZWN0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gbGluZUluWFlQbGFuZTsgICAgXG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHN0YXJ0VmVydGV4LnNsaWNlKCksXG4gICAgICAgICAgZGlyZWN0aW9uID0gc3VidHJhY3QoZW5kVmVydGV4LCBzdGFydFZlcnRleCksXG4gICAgICAgICAgbGluZUluWFlQbGFuZSA9IG5ldyBMaW5lSW5YWVBsYW5lKHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuXG4gICAgcmV0dXJuIGxpbmVJblhZUGxhbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lSW5YWVBsYW5lO1xuIl19