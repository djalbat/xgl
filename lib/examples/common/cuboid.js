'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = require('../../vec3'),
    Element = require('../../element'),
    arrayUtilities = require('../../utilities/array');

var vertexPositionData = [-1.0, -1.0, +1.0, +1.0, -1.0, +1.0, +1.0, +1.0, +1.0, -1.0, +1.0, +1.0, -1.0, -1.0, -1.0, -1.0, +1.0, -1.0, +1.0, +1.0, -1.0, +1.0, -1.0, -1.0, -1.0, +1.0, -1.0, -1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, -1.0, -1.0, -1.0, -1.0, +1.0, -1.0, -1.0, +1.0, -1.0, +1.0, -1.0, -1.0, +1.0, +1.0, -1.0, -1.0, +1.0, +1.0, -1.0, +1.0, +1.0, +1.0, +1.0, -1.0, +1.0, -1.0, -1.0, -1.0, -1.0, -1.0, +1.0, -1.0, +1.0, +1.0, -1.0, +1.0, -1.0],
    vertexNormalData = [0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0],
    vertexIndexData = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];

var divide = arrayUtilities.divide,
    flatten = arrayUtilities.flatten;

var Cuboid = function (_Element) {
  _inherits(Cuboid, _Element);

  function Cuboid(vertexPositionData, vertexNormalData, vertexIndexData) {
    _classCallCheck(this, Cuboid);

    var _this = _possibleConstructorReturn(this, (Cuboid.__proto__ || Object.getPrototypeOf(Cuboid)).call(this));

    _this.vertexPositionData = vertexPositionData;
    _this.vertexNormalData = vertexNormalData;
    _this.vertexIndexData = vertexIndexData;
    return _this;
  }

  _createClass(Cuboid, [{
    key: 'getVertexPositionData',
    value: function getVertexPositionData() {
      return this.vertexPositionData;
    }
  }, {
    key: 'getVertexNormalData',
    value: function getVertexNormalData() {
      return this.vertexNormalData;
    }
  }, {
    key: 'getVertexIndexData',
    value: function getVertexIndexData() {
      return this.vertexIndexData;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var offsetPosition = properties.offsetPosition,
          vertexPositionData = vertexPositionDataFromOffsetPosition(offsetPosition);

      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(Class, [null].concat([vertexPositionData, vertexNormalData, vertexIndexData], remainingArguments)))();
    }
  }]);

  return Cuboid;
}(Element);

module.exports = Cuboid;

function vertexPositionDataFromOffsetPosition(offsetPosition) {
  var vertexPositions = divide(vertexPositionData, 3); ///

  vertexPositions = vertexPositions.map(function (vertexPosition) {
    var offsetVertexPosition = vec3.add(vertexPosition, offsetPosition);

    return offsetVertexPosition;
  });

  return flatten(vertexPositions);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkLmpzIl0sIm5hbWVzIjpbInZlYzMiLCJyZXF1aXJlIiwiRWxlbWVudCIsImFycmF5VXRpbGl0aWVzIiwidmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4Tm9ybWFsRGF0YSIsInZlcnRleEluZGV4RGF0YSIsImRpdmlkZSIsImZsYXR0ZW4iLCJDdWJvaWQiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJvZmZzZXRQb3NpdGlvbiIsInZlcnRleFBvc2l0aW9uRGF0YUZyb21PZmZzZXRQb3NpdGlvbiIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJtYXAiLCJ2ZXJ0ZXhQb3NpdGlvbiIsIm9mZnNldFZlcnRleFBvc2l0aW9uIiwiYWRkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsWUFBUixDQUFiO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxlQUFSLENBRGhCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLHVCQUFSLENBRnZCOztBQUlBLElBQU1HLHFCQUFxQixDQUNyQixDQUFDLEdBRG9CLEVBQ2YsQ0FBQyxHQURjLEVBQ1QsQ0FBQyxHQURRLEVBRXJCLENBQUMsR0FGb0IsRUFFZixDQUFDLEdBRmMsRUFFVCxDQUFDLEdBRlEsRUFHckIsQ0FBQyxHQUhvQixFQUdmLENBQUMsR0FIYyxFQUdULENBQUMsR0FIUSxFQUlyQixDQUFDLEdBSm9CLEVBSWYsQ0FBQyxHQUpjLEVBSVQsQ0FBQyxHQUpRLEVBTXJCLENBQUMsR0FOb0IsRUFNZixDQUFDLEdBTmMsRUFNVCxDQUFDLEdBTlEsRUFPckIsQ0FBQyxHQVBvQixFQU9mLENBQUMsR0FQYyxFQU9ULENBQUMsR0FQUSxFQVFyQixDQUFDLEdBUm9CLEVBUWYsQ0FBQyxHQVJjLEVBUVQsQ0FBQyxHQVJRLEVBU3JCLENBQUMsR0FUb0IsRUFTZixDQUFDLEdBVGMs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QURyQjs7QUFEd0Qsd0NBQXBCRSxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUk5RCxnREFBV0osS0FBWCxpQkFBaUJOLGtCQUFqQixFQUFxQ0MsZ0JBQXJDLEVBQXVEQyxlQUF2RCxHQUEyRVEsa0JBQTNFO0FBQ0Q7Ozs7RUExQmtCWixPOztBQTZCckJhLE9BQU9DLE9BQVAsR0FBaUJQLE1BQWpCOztBQUVBLFNBQVNJLG9DQUFULENBQThDRCxjQUE5QyxFQUE4RDtBQUM1RCxNQUFJSyxrQkFBa0JWLE9BQU9ILGtCQUFQLEVBQTJCLENBQTNCLENBQXRCLENBRDRELENBQ047O0FBRXREYSxvQkFBa0JBLGdCQUFnQkMsR0FBaEIsQ0FBb0IsVUFBU0MsY0FBVCxFQUF5QjtBQUM3RCxRQUFNQyx1QkFBdUJwQixLQUFLcUIsR0FBTCxDQUFTRixjQUFULEVBQXlCUCxjQUF6QixDQUE3Qjs7QUFFQSxXQUFPUSxvQkFBUDtBQUNELEdBSmlCLENBQWxCOztBQU1BLFNBQU9aLFFBQVFTLGVBQVIsQ0FBUDtBQUNEIiwiZmlsZSI6ImN1Ym9pZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMyA9IHJlcXVpcmUoJy4uLy4uL3ZlYzMnKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBbXG4gICAgICAtMS4wLCAtMS4wLCArMS4wLFxuICAgICAgKzEuMCwgLTEuMCwgKzEuMCxcbiAgICAgICsxLjAsICsxLjAsICsxLjAsXG4gICAgICAtMS4wLCArMS4wLCArMS4wLFxuXG4gICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgLTEuMCwgKzEuMCwgLTEuMCxcbiAgICAgICsxLjAsICsxLjAsIC0xLjAsXG4gICAgICArMS4wLCAtMS4wLCAtMS4wLFxuXG4gICAgICAtMS4wLCArMS4wLCAtMS4wLFxuICAgICAgLTEuMCwgKzEuMCwgKzEuMCxcbiAgICAgICsxLjAsICsxLjAsICsxLjAsXG4gICAgICArMS4wLCArMS4wLCAtMS4wLFxuXG4gICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgKzEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICsxLjAsIC0xLjAsICsxLjAsXG4gICAgICAtMS4wLCAtMS4wLCArMS4wLFxuXG4gICAgICArMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgKzEuMCwgKzEuMCwgLTEuMCxcbiAgICAgICsxLjAsICsxLjAsICsxLjAsXG4gICAgICArMS4wLCAtMS4wLCArMS4wLFxuXG4gICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgLTEuMCwgLTEuMCwgKzEuMCxcbiAgICAgIC0xLjAsICsxLjAsICsxLjAsXG4gICAgICAtMS4wLCArMS4wLCAtMS4wXG4gICAgXSxcbiAgICAgIHZlcnRleE5vcm1hbERhdGEgPSBbXG4gICAgICAwLjAsICAwLjAsICsxLjAsXG4gICAgICAwLjAsICAwLjAsICsxLjAsXG4gICAgICAwLjAsICAwLjAsICsxLjAsXG4gICAgICAwLjAsICAwLjAsICsxLjAsXG5cbiAgICAgIDAuMCwgIDAuMCwgLTEuMCxcbiAgICAgIDAuMCwgIDAuMCwgLTEuMCxcbiAgICAgIDAuMCwgIDAuMCwgLTEuMCxcbiAgICAgIDAuMCwgIDAuMCwgLTEuMCxcblxuICAgICAgMC4wLCArMS4wLCAgMC4wLFxuICAgICAgMC4wLCArMS4wLCAgMC4wLFxuICAgICAgMC4wLCArMS4wLCAgMC4wLFxuICAgICAgMC4wLCArMS4wLCAgMC4wLFxuXG4gICAgICAwLjAsIC0xLjAsICAwLjAsXG4gICAgICAwLjAsIC0xLjAsICAwLjAsXG4gICAgICAwLjAsIC0xLjAsICAwLjAsXG4gICAgICAwLjAsIC0xLjAsICAwLjAsXG5cbiAgICAgICsxLjAsICAwLjAsICAwLjAsXG4gICAgICArMS4wLCAgMC4wLCAgMC4wLFxuICAgICAgKzEuMCwgIDAuMCwgIDAuMCxcbiAgICAgICsxLjAsICAwLjAsICAwLjAsXG5cbiAgICAgIC0xLjAsICAwLjAsICAwLjAsXG4gICAgICAtMS4wLCAgMC4wLCAgMC4wLFxuICAgICAgLTEuMCwgIDAuMCwgIDAuMCxcbiAgICAgIC0xLjAsICAwLjAsICAwLjBcbiAgICBdLFxuICAgICAgdmVydGV4SW5kZXhEYXRhID0gW1xuICAgICAgMCwgIDEsICAyLFxuICAgICAgMCwgIDIsICAzLFxuXG4gICAgICA0LCAgNSwgIDYsXG4gICAgICA0LCAgNiwgIDcsXG5cbiAgICAgIDgsICA5LCAxMCxcbiAgICAgIDgsIDEwLCAxMSxcblxuICAgICAgMTIsIDEzLCAxNCxcbiAgICAgIDEyLCAxNCwgMTUsXG5cbiAgICAgIDE2LCAxNywgMTgsXG4gICAgICAxNiwgMTgsIDE5LFxuXG4gICAgICAyMCwgMjEsIDIyLFxuICAgICAgMjAsIDIyLCAyM1xuICAgIF07XG5cbmNvbnN0IHsgZGl2aWRlLCBmbGF0dGVuIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgQ3Vib2lkIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSA9IHZlcnRleFBvc2l0aW9uRGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbERhdGEgPSB2ZXJ0ZXhOb3JtYWxEYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhEYXRhID0gdmVydGV4SW5kZXhEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25EYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleE5vcm1hbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleEluZGV4RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleERhdGE7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBvZmZzZXRQb3NpdGlvbiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSB2ZXJ0ZXhQb3NpdGlvbkRhdGFGcm9tT2Zmc2V0UG9zaXRpb24ob2Zmc2V0UG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdWJvaWQ7XG5cbmZ1bmN0aW9uIHZlcnRleFBvc2l0aW9uRGF0YUZyb21PZmZzZXRQb3NpdGlvbihvZmZzZXRQb3NpdGlvbikge1xuICBsZXQgdmVydGV4UG9zaXRpb25zID0gZGl2aWRlKHZlcnRleFBvc2l0aW9uRGF0YSwgMyk7ICAvLy9cblxuICB2ZXJ0ZXhQb3NpdGlvbnMgPSB2ZXJ0ZXhQb3NpdGlvbnMubWFwKGZ1bmN0aW9uKHZlcnRleFBvc2l0aW9uKSB7XG4gICAgY29uc3Qgb2Zmc2V0VmVydGV4UG9zaXRpb24gPSB2ZWMzLmFkZCh2ZXJ0ZXhQb3NpdGlvbiwgb2Zmc2V0UG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIG9mZnNldFZlcnRleFBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xufVxuIl19