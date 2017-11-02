'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vec2 = require('./vec2'),
    mat2 = require('./mat2'),
    arrayUtilities = require('../utilities/array');

var invert = mat2.invert,
    subtract = vec2.subtract,
    transform = vec2.transform,
    first = arrayUtilities.first,
    second = arrayUtilities.second;

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
    key: 'calculateIntersection',
    value: function calculateIntersection(line) {
      var intersection = void 0;

      var linePosition = line.getPosition(),
          lineDirection = line.getDirection(),
          directionComponents = this.direction,
          ///
      lineDirectionComponents = lineDirection,
          ///
      firstDirectionComponent = first(directionComponents),
          secondDirectionComponent = second(directionComponents),
          firstLineDirectionComponent = first(lineDirectionComponents),
          secondLineDirectionComponent = second(lineDirectionComponents),
          mat = invert([+firstDirectionComponent, ///
      +secondDirectionComponent, ///
      -firstLineDirectionComponent, ///
      -secondLineDirectionComponent ///
      ]); ///

      if (mat === null) {
        intersection = null;
      } else {
        var relativePosition = subtract(linePosition, this.position),
            intersections = transform(relativePosition, mat),
            firstIntersection = first(intersections);

        intersection = firstIntersection; ///
      }

      return intersection;
    }
  }], [{
    key: 'fromEquation',
    value: function fromEquation(a, b, c) {
      var firstPosition = b !== 0 ? [-1, (c + a) / b] : [(c + b) / a, -1],
          secondPosition = b !== 0 ? [+1, (c - a) / b] : [(c - b) / a, +1],
          position = firstPosition,
          ///
      direction = subtract(secondPosition, firstPosition),
          line = new Line(position, direction);

      return line;
    }
  }, {
    key: 'fromVertexPositions',
    value: function fromVertexPositions(vertexPositionA, vertexPositionB) {
      var position = vertexPositionA.slice(0, 2),
          direction = subtract(vertexPositionB, vertexPositionA),
          line = new Line(position, direction);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9saW5lLmpzIl0sIm5hbWVzIjpbInZlYzIiLCJyZXF1aXJlIiwibWF0MiIsImFycmF5VXRpbGl0aWVzIiwiaW52ZXJ0Iiwic3VidHJhY3QiLCJ0cmFuc2Zvcm0iLCJmaXJzdCIsInNlY29uZCIsIkxpbmUiLCJwb3NpdGlvbiIsImRpcmVjdGlvbiIsImxpbmUiLCJpbnRlcnNlY3Rpb24iLCJsaW5lUG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImxpbmVEaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJkaXJlY3Rpb25Db21wb25lbnRzIiwibGluZURpcmVjdGlvbkNvbXBvbmVudHMiLCJmaXJzdERpcmVjdGlvbkNvbXBvbmVudCIsInNlY29uZERpcmVjdGlvbkNvbXBvbmVudCIsImZpcnN0TGluZURpcmVjdGlvbkNvbXBvbmVudCIsInNlY29uZExpbmVEaXJlY3Rpb25Db21wb25lbnQiLCJtYXQiLCJyZWxhdGl2ZVBvc2l0aW9uIiwiaW50ZXJzZWN0aW9ucyIsImZpcnN0SW50ZXJzZWN0aW9uIiwiYSIsImIiLCJjIiwiZmlyc3RQb3NpdGlvbiIsInNlY29uZFBvc2l0aW9uIiwidmVydGV4UG9zaXRpb25BIiwidmVydGV4UG9zaXRpb25CIiwic2xpY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLFFBQVIsQ0FEYjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUZ2Qjs7QUFJTSxJQUFFRyxNQUFGLEdBQWFGLElBQWIsQ0FBRUUsTUFBRjtBQUFBLElBQ0VDLFFBREYsR0FDMEJMLElBRDFCLENBQ0VLLFFBREY7QUFBQSxJQUNZQyxTQURaLEdBQzBCTixJQUQxQixDQUNZTSxTQURaO0FBQUEsSUFFRUMsS0FGRixHQUVvQkosY0FGcEIsQ0FFRUksS0FGRjtBQUFBLElBRVNDLE1BRlQsR0FFb0JMLGNBRnBCLENBRVNLLE1BRlQ7O0lBSUFDLEk7QUFDSixnQkFBWUMsUUFBWixFQUFzQkMsU0FBdEIsRUFBaUM7QUFBQTs7QUFDL0IsU0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRCxRQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLGFBQU8sS0FBS0MsU0FBWjtBQUNEOzs7MENBRXFCQyxJLEVBQU07QUFDMUIsVUFBSUMscUJBQUo7O0FBRUEsVUFBTUMsZUFBZUYsS0FBS0csV0FBTCxFQUFyQjtBQUFBLFVBQ01DLGdCQUFnQkosS0FBS0ssWUFBTCxFQUR0QjtBQUFBLFVBRU1DLHNCQUFzQixLQUFLUCxTQUZqQztBQUFBLFVBRTZDO0FBQ3ZDUSxnQ0FBMEJILGFBSGhDO0FBQUEsVUFHZ0Q7QUFDMUNJLGdDQUEwQmIsTUFBTVcsbUJBQU4sQ0FKaEM7QUFBQSxVQUtNRywyQkFBMkJiLE9BQU9VLG1CQUFQLENBTGpDO0FBQUEsVUFNTUksOEJBQThCZixNQUFNWSx1QkFBTixDQU5wQztBQUFBLFVBT01JLCtCQUErQmYsT0FBT1csdUJBQVAsQ0FQckM7QUFBQSxVQVFNSyxNQUFNcEIsT0FBTyxDQUNYLENBQUNnQix1QkFEVSxFQUNlO0FBQzFCLE9BQUNDLHdCQUZVLEVBRWlCO0FBQzVCLE9BQUNDLDJCQUhVLEVBR21CO0FBQzlCLE9BQUNDLDRCQUpVLENBSW9CO0FBSnBCLE9BQVAsQ0FSWixDQUgwQixDQWdCZjs7QUFFWCxVQUFJQyxRQUFRLElBQVosRUFBa0I7QUFDaEJYLHVCQUFlLElBQWY7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNWSxtQkFBbUJwQixTQUFTUyxZQUFULEVBQXVCLEtBQUtKLFFBQTVCLENBQXpCO0FBQUEsWUFDTWdCLGdCQUFnQnBCLFVBQVVtQixnQkFBVixFQUE0QkQsR0FBNUIsQ0FEdEI7QUFBQSxZQUVNRyxvQkFBb0JwQixNQUFNbUIsYUFBTixDQUYxQjs7QUFJQWIsdUJBQWVjLGlCQUFmLENBTEssQ0FLNkI7QUFDbkM7O0FBRUQsYUFBT2QsWUFBUDtBQUNEOzs7aUNBRW1CZSxDLEVBQUdDLEMsRUFBR0MsQyxFQUFHO0FBQzNCLFVBQU1DLGdCQUFpQkYsTUFBTSxDQUFQLEdBQ0UsQ0FBRSxDQUFDLENBQUgsRUFBTSxDQUFDQyxJQUFJRixDQUFMLElBQVFDLENBQWQsQ0FERixHQUVJLENBQUUsQ0FBQ0MsSUFBSUQsQ0FBTCxJQUFRRCxDQUFWLEVBQWEsQ0FBQyxDQUFkLENBRjFCO0FBQUEsVUFHTUksaUJBQWtCSCxNQUFNLENBQVAsR0FDRSxDQUFFLENBQUMsQ0FBSCxFQUFNLENBQUNDLElBQUlGLENBQUwsSUFBUUMsQ0FBZCxDQURGLEdBRUksQ0FBRSxDQUFDQyxJQUFJRCxDQUFMLElBQVFELENBQVYsRUFBYSxDQUFDLENBQWQsQ0FMM0I7QUFBQSxVQU1NbEIsV0FBV3FCLGFBTmpCO0FBQUEsVUFNZ0M7QUFDMUJwQixrQkFBWU4sU0FBUzJCLGNBQVQsRUFBeUJELGFBQXpCLENBUGxCO0FBQUEsVUFRTW5CLE9BQU8sSUFBSUgsSUFBSixDQUFTQyxRQUFULEVBQW1CQyxTQUFuQixDQVJiOztBQVVBLGFBQU9DLElBQVA7QUFDRDs7O3dDQUUwQnFCLGUsRUFBaUJDLGUsRUFBaUI7QUFDM0QsVUFBTXhCLFdBQVd1QixnQkFBZ0JFLEtBQWhCLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLENBQWpCO0FBQUEsVUFDTXhCLFlBQVlOLFNBQVM2QixlQUFULEVBQTBCRCxlQUExQixDQURsQjtBQUFBLFVBRU1yQixPQUFPLElBQUlILElBQUosQ0FBU0MsUUFBVCxFQUFtQkMsU0FBbkIsQ0FGYjs7QUFJQSxhQUFPQyxJQUFQO0FBQ0Q7Ozs7OztBQUdId0IsT0FBT0MsT0FBUCxHQUFpQjVCLElBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzIgPSByZXF1aXJlKCcuL3ZlYzInKSxcbiAgICAgIG1hdDIgPSByZXF1aXJlKCcuL21hdDInKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgaW52ZXJ0IH0gPSBtYXQyLFxuICAgICAgeyBzdWJ0cmFjdCwgdHJhbnNmb3JtIH0gPSB2ZWMyLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgTGluZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb247XG4gIH1cblxuICBjYWxjdWxhdGVJbnRlcnNlY3Rpb24obGluZSkge1xuICAgIGxldCBpbnRlcnNlY3Rpb247XG5cbiAgICBjb25zdCBsaW5lUG9zaXRpb24gPSBsaW5lLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgbGluZURpcmVjdGlvbiA9IGxpbmUuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgZGlyZWN0aW9uQ29tcG9uZW50cyA9IHRoaXMuZGlyZWN0aW9uLCAgLy8vXG4gICAgICAgICAgbGluZURpcmVjdGlvbkNvbXBvbmVudHMgPSBsaW5lRGlyZWN0aW9uLCAgLy8vXG4gICAgICAgICAgZmlyc3REaXJlY3Rpb25Db21wb25lbnQgPSBmaXJzdChkaXJlY3Rpb25Db21wb25lbnRzKSxcbiAgICAgICAgICBzZWNvbmREaXJlY3Rpb25Db21wb25lbnQgPSBzZWNvbmQoZGlyZWN0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgZmlyc3RMaW5lRGlyZWN0aW9uQ29tcG9uZW50ID0gZmlyc3QobGluZURpcmVjdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHNlY29uZExpbmVEaXJlY3Rpb25Db21wb25lbnQgPSBzZWNvbmQobGluZURpcmVjdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIG1hdCA9IGludmVydChbXG4gICAgICAgICAgICArZmlyc3REaXJlY3Rpb25Db21wb25lbnQsIC8vL1xuICAgICAgICAgICAgK3NlY29uZERpcmVjdGlvbkNvbXBvbmVudCwgIC8vL1xuICAgICAgICAgICAgLWZpcnN0TGluZURpcmVjdGlvbkNvbXBvbmVudCwgLy8vXG4gICAgICAgICAgICAtc2Vjb25kTGluZURpcmVjdGlvbkNvbXBvbmVudCAgLy8vXG4gICAgICAgICAgXSk7ICAvLy9cblxuICAgIGlmIChtYXQgPT09IG51bGwpIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlbGF0aXZlUG9zaXRpb24gPSBzdWJ0cmFjdChsaW5lUG9zaXRpb24sIHRoaXMucG9zaXRpb24pLFxuICAgICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IHRyYW5zZm9ybShyZWxhdGl2ZVBvc2l0aW9uLCBtYXQpLFxuICAgICAgICAgICAgZmlyc3RJbnRlcnNlY3Rpb24gPSBmaXJzdChpbnRlcnNlY3Rpb25zKTtcblxuICAgICAgaW50ZXJzZWN0aW9uID0gZmlyc3RJbnRlcnNlY3Rpb247IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnNlY3Rpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tRXF1YXRpb24oYSwgYiwgYykge1xuICAgIGNvbnN0IGZpcnN0UG9zaXRpb24gPSAoYiAhPT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgLTEsIChjICsgYSkvYiBdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgKGMgKyBiKS9hLCAtMSBdLFxuICAgICAgICAgIHNlY29uZFBvc2l0aW9uID0gKGIgIT09IDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyArMSwgKGMgLSBhKS9iIF0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgKGMgLSBiKS9hLCArMSBdLFxuICAgICAgICAgIHBvc2l0aW9uID0gZmlyc3RQb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gc3VidHJhY3Qoc2Vjb25kUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIGxpbmUgPSBuZXcgTGluZShwb3NpdGlvbiwgZGlyZWN0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gbGluZTsgICAgXG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbkEsIHZlcnRleFBvc2l0aW9uQikge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25BLnNsaWNlKDAsIDIpLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IHN1YnRyYWN0KHZlcnRleFBvc2l0aW9uQiwgdmVydGV4UG9zaXRpb25BKSxcbiAgICAgICAgICBsaW5lID0gbmV3IExpbmUocG9zaXRpb24sIGRpcmVjdGlvbik7XG5cbiAgICByZXR1cm4gbGluZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7Il19