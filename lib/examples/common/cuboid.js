'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = require('../../vec3'),
    Element = require('../../element'),
    arrayUtilities = require('../../utilities/array');

var vertexPositionData = [0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0],
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
      var width = properties.width,
          depth = properties.depth,
          height = properties.height,
          offset = properties.offset,
          vertexPositionData = vertexPositionDataFromHeightWidthDepthAndOffset(width, depth, height, offset);

      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(Class, [null].concat([vertexPositionData, vertexNormalData, vertexIndexData], remainingArguments)))();
    }
  }]);

  return Cuboid;
}(Element);

module.exports = Cuboid;

function vertexPositionDataFromHeightWidthDepthAndOffset(width, depth, height, offset) {
  var vertexPositions = divide(vertexPositionData, 3); ///

  vertexPositions = vertexPositions.map(function (vertexPosition) {
    vertexPosition = vec3.multiply(vertexPosition, [width, depth, height]);
    vertexPosition = vec3.add(vertexPosition, offset);

    return vertexPosition;
  });

  return flatten(vertexPositions);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkLmpzIl0sIm5hbWVzIjpbInZlYzMiLCJyZXF1aXJlIiwiRWxlbWVudCIsImFycmF5VXRpbGl0aWVzIiwidmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4Tm9ybWFsRGF0YSIsInZlcnRleEluZGV4RGF0YSIsImRpdmlkZSIsImZsYXR0ZW4iLCJDdWJvaWQiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ3aWR0aCIsImRlcHRoIiwiaGVpZ2h0Iiwib2Zmc2V0IiwidmVydGV4UG9zaXRpb25EYXRhRnJvbUhlaWdodFdpZHRoRGVwdGhBbmRPZmZzZXQiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJtb2R1bGUiLCJleHBvcnRzIiwidmVydGV4UG9zaXRpb25zIiwibWFwIiwidmVydGV4UG9zaXRpb24iLCJtdWx0aXBseSIsImFkZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFlBQVIsQ0FBYjtBQUFBLElBQ01DLFVBQVVELFFBQVEsZUFBUixDQURoQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSx1QkFBUixDQUZ2Qjs7QUFJQSxJQUFNRyxxQkFBcUIsQ0FFbkIsR0FGbUIsRUFFZCxHQUZjLEVBRVQsR0FGUyxFQUduQixHQUhtQixFQUdkLEdBSGMsRUFHVCxHQUhTLEVBSW5CLEdBSm1CLEVBSWQsR0FKYyxFQUlULEdBSlMsRUFLbkIsR0FMbUIsRUFLZCxHQUxjLEVBS1QsR0FMUyxFQU9uQixHQVBtQixFQU9kLEdBUGMsRUFPVCxHQVBTLEVBUW5CLEdBUm1CLEVBUWQsR0FSYyxFQVFULEdBUlMsRUFTbkIsR0FUbUIsRUFTZCxHQVRjLEVBU1QsR0FUUyxFQVVuQixHQVZtQixFQVVkLEdBVmMsRUFVVCxHQVZTLEVBWW5CLEdBWm1CLEVBWWQsR0FaYyxFQVlULEdBWlMsRUFhbkIsR0FibUIsRUFhZCxHQWJjLEVBYVQsR0FiUyxFQWNuQixHQWRtQixFQWNkLEdBZGMsRUFj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QWpCOztBQUVBLFNBQVNPLCtDQUFULENBQXlESixLQUF6RCxFQUFnRUMsS0FBaEUsRUFBdUVDLE1BQXZFLEVBQStFQyxNQUEvRSxFQUF1RjtBQUNyRixNQUFJSyxrQkFBa0JiLE9BQU9ILGtCQUFQLEVBQTJCLENBQTNCLENBQXRCLENBRHFGLENBQy9COztBQUV0RGdCLG9CQUFrQkEsZ0JBQWdCQyxHQUFoQixDQUFvQixVQUFTQyxjQUFULEVBQXlCO0FBQzdEQSxxQkFBaUJ0QixLQUFLdUIsUUFBTCxDQUFjRCxjQUFkLEVBQThCLENBQUNWLEtBQUQsRUFBUUMsS0FBUixFQUFlQyxNQUFmLENBQTlCLENBQWpCO0FBQ0FRLHFCQUFpQnRCLEtBQUt3QixHQUFMLENBQVNGLGNBQVQsRUFBeUJQLE1BQXpCLENBQWpCOztBQUVBLFdBQU9PLGNBQVA7QUFDRCxHQUxpQixDQUFsQjs7QUFPQSxTQUFPZCxRQUFRWSxlQUFSLENBQVA7QUFDRCIsImZpbGUiOiJjdWJvaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzMgPSByZXF1aXJlKCcuLi8uLi92ZWMzJyksXG4gICAgICBFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgdmVydGV4UG9zaXRpb25EYXRhID0gW1xuXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsXG4gICAgICAgIDEuMCwgMC4wLCAxLjAsXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsXG4gICAgICAgIDAuMCwgMS4wLCAxLjAsXG5cbiAgICAgICAgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcblxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAwLjAsIDEuMCwgMS4wLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuXG4gICAgICAgIDAuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAxLjAsXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsXG5cbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcblxuICAgICAgICAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDEuMCwgMS4wLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuXG4gICAgICBdLFxuICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IFtcblxuICAgICAgICAwLjAsICAwLjAsICsxLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgKzEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCArMS4wLFxuICAgICAgICAwLjAsICAwLjAsICsxLjAsXG5cbiAgICAgICAgMC4wLCAgMC4wLCAtMS4wLFxuICAgICAgICAwLjAsICAwLjAsIC0xLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgLTEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCAtMS4wLFxuXG4gICAgICAgIDAuMCwgKzEuMCwgIDAuMCxcbiAgICAgICAgMC4wLCArMS4wLCAgMC4wLFxuICAgICAgICAwLjAsICsxLjAsICAwLjAsXG4gICAgICAgIDAuMCwgKzEuMCwgIDAuMCxcblxuICAgICAgICAwLjAsIC0xLjAsICAwLjAsXG4gICAgICAgIDAuMCwgLTEuMCwgIDAuMCxcbiAgICAgICAgMC4wLCAtMS4wLCAgMC4wLFxuICAgICAgICAwLjAsIC0xLjAsICAwLjAsXG5cbiAgICAgICAgKzEuMCwgIDAuMCwgIDAuMCxcbiAgICAgICAgKzEuMCwgIDAuMCwgIDAuMCxcbiAgICAgICAgKzEuMCwgIDAuMCwgIDAuMCxcbiAgICAgICAgKzEuMCwgIDAuMCwgIDAuMCxcblxuICAgICAgICAtMS4wLCAgMC4wLCAgMC4wLFxuICAgICAgICAtMS4wLCAgMC4wLCAgMC4wLFxuICAgICAgICAtMS4wLCAgMC4wLCAgMC4wLFxuICAgICAgICAtMS4wLCAgMC4wLCAgMC4wLFxuXG4gICAgICBdLFxuICAgICAgdmVydGV4SW5kZXhEYXRhID0gW1xuXG4gICAgICAgIDAsICAxLCAgMixcbiAgICAgICAgMCwgIDIsICAzLFxuXG4gICAgICAgIDQsICA1LCAgNixcbiAgICAgICAgNCwgIDYsICA3LFxuXG4gICAgICAgIDgsICA5LCAxMCxcbiAgICAgICAgOCwgMTAsIDExLFxuXG4gICAgICAgIDEyLCAxMywgMTQsXG4gICAgICAgIDEyLCAxNCwgMTUsXG5cbiAgICAgICAgMTYsIDE3LCAxOCxcbiAgICAgICAgMTYsIDE4LCAxOSxcblxuICAgICAgICAyMCwgMjEsIDIyLFxuICAgICAgICAyMCwgMjIsIDIzLFxuXG4gICAgICBdO1xuXG5jb25zdCB7IGRpdmlkZSwgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEN1Ym9pZCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSkge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEgPSB2ZXJ0ZXhQb3NpdGlvbkRhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxEYXRhID0gdmVydGV4Tm9ybWFsRGF0YTtcbiAgICB0aGlzLnZlcnRleEluZGV4RGF0YSA9IHZlcnRleEluZGV4RGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbERhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhJbmRleERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4SW5kZXhEYXRhO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGRlcHRoLCBoZWlnaHQsIG9mZnNldCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSB2ZXJ0ZXhQb3NpdGlvbkRhdGFGcm9tSGVpZ2h0V2lkdGhEZXB0aEFuZE9mZnNldCh3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0KTtcbiAgICBcbiAgICByZXR1cm4gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3Vib2lkO1xuXG5mdW5jdGlvbiB2ZXJ0ZXhQb3NpdGlvbkRhdGFGcm9tSGVpZ2h0V2lkdGhEZXB0aEFuZE9mZnNldCh3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0KSB7XG4gIGxldCB2ZXJ0ZXhQb3NpdGlvbnMgPSBkaXZpZGUodmVydGV4UG9zaXRpb25EYXRhLCAzKTsgIC8vL1xuXG4gIHZlcnRleFBvc2l0aW9ucyA9IHZlcnRleFBvc2l0aW9ucy5tYXAoZnVuY3Rpb24odmVydGV4UG9zaXRpb24pIHtcbiAgICB2ZXJ0ZXhQb3NpdGlvbiA9IHZlYzMubXVsdGlwbHkodmVydGV4UG9zaXRpb24sIFt3aWR0aCwgZGVwdGgsIGhlaWdodF0pIDtcbiAgICB2ZXJ0ZXhQb3NpdGlvbiA9IHZlYzMuYWRkKHZlcnRleFBvc2l0aW9uLCBvZmZzZXQpO1xuXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xufVxuIl19