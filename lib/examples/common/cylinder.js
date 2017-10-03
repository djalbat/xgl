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

var Cylinder = function (_Element) {
  _inherits(Cylinder, _Element);

  function Cylinder(vertexPositionData, vertexNormalData, vertexIndexData) {
    _classCallCheck(this, Cylinder);

    var _this = _possibleConstructorReturn(this, (Cylinder.__proto__ || Object.getPrototypeOf(Cylinder)).call(this));

    _this.vertexPositionData = vertexPositionData;
    _this.vertexNormalData = vertexNormalData;
    _this.vertexIndexData = vertexIndexData;
    return _this;
  }

  _createClass(Cylinder, [{
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

  return Cylinder;
}(Element);

module.exports = Cylinder;

function vertexPositionDataFromHeightWidthDepthAndOffset(width, depth, height, offset) {
  var vertexPositions = divide(vertexPositionData, 3); ///

  vertexPositions = vertexPositions.map(function (vertexPosition) {
    vertexPosition = vec3.multiply(vertexPosition, [width, depth, height]);
    vertexPosition = vec3.add(vertexPosition, offset);

    return vertexPosition;
  });

  return flatten(vertexPositions);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3lsaW5kZXIuanMiXSwibmFtZXMiOlsidmVjMyIsInJlcXVpcmUiLCJFbGVtZW50IiwiYXJyYXlVdGlsaXRpZXMiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwiZGl2aWRlIiwiZmxhdHRlbiIsIkN5bGluZGVyIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwid2lkdGgiLCJkZXB0aCIsImhlaWdodCIsIm9mZnNldCIsInZlcnRleFBvc2l0aW9uRGF0YUZyb21IZWlnaHRXaWR0aERlcHRoQW5kT2Zmc2V0IiwicmVtYWluaW5nQXJndW1lbnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsInZlcnRleFBvc2l0aW9ucyIsIm1hcCIsInZlcnRleFBvc2l0aW9uIiwibXVsdGlwbHkiLCJhZGQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxZQUFSLENBQWI7QUFBQSxJQUNNQyxVQUFVRCxRQUFRLGVBQVIsQ0FEaEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsdUJBQVIsQ0FGdkI7O0FBSUEsSUFBTUcscUJBQXFCLENBRW5CLEdBRm1CLEVBRWQsR0FGYyxFQUVULEdBRlMsRUFHbkIsR0FIbUIsRUFHZCxHQUhjLEVBR1QsR0FIUyxFQUluQixHQUptQixFQUlkLEdBSmMsRUFJVCxHQUpTLEVBS25CLEdBTG1CLEVBS2QsR0FMYyxFQUtULEdBTFMsRUFPbkIsR0FQbUIsRUFPZCxHQVBjLEVBT1QsR0FQUyxFQVFuQixHQVJtQixFQVFkLEdBUmMsRUFRVCxHQVJTLEVBU25CLEdBVG1CLEVBU2QsR0FUYyxFQVNULEdBVFMsRUFVbkIsR0FWbUIsRUFVZCxHQVZjLEVBVVQsR0FWUyxFQVluQixHQVptQixFQVlkLEdBWmMsRUFZVCxHQVpTLEVBYW5CLEdBYm1CLEVBYWQsR0FiYyxFQWFULEdBYlMsRUFjbkIsR0FkbUIsRUFjZCxHQWRj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VixRQUFqQjs7QUFFQSxTQUFTTywrQ0FBVCxDQUF5REosS0FBekQsRUFBZ0VDLEtBQWhFLEVBQXVFQyxNQUF2RSxFQUErRUMsTUFBL0UsRUFBdUY7QUFDckYsTUFBSUssa0JBQWtCYixPQUFPSCxrQkFBUCxFQUEyQixDQUEzQixDQUF0QixDQURxRixDQUMvQjs7QUFFdERnQixvQkFBa0JBLGdCQUFnQkMsR0FBaEIsQ0FBb0IsVUFBU0MsY0FBVCxFQUF5QjtBQUM3REEscUJBQWlCdEIsS0FBS3VCLFFBQUwsQ0FBY0QsY0FBZCxFQUE4QixDQUFDVixLQUFELEVBQVFDLEtBQVIsRUFBZUMsTUFBZixDQUE5QixDQUFqQjtBQUNBUSxxQkFBaUJ0QixLQUFLd0IsR0FBTCxDQUFTRixjQUFULEVBQXlCUCxNQUF6QixDQUFqQjs7QUFFQSxXQUFPTyxjQUFQO0FBQ0QsR0FMaUIsQ0FBbEI7O0FBT0EsU0FBT2QsUUFBUVksZUFBUixDQUFQO0FBQ0QiLCJmaWxlIjoiY3lsaW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzMgPSByZXF1aXJlKCcuLi8uLi92ZWMzJyksXG4gICAgICBFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgdmVydGV4UG9zaXRpb25EYXRhID0gW1xuXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsXG4gICAgICAgIDEuMCwgMC4wLCAxLjAsXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsXG4gICAgICAgIDAuMCwgMS4wLCAxLjAsXG5cbiAgICAgICAgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcblxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAwLjAsIDEuMCwgMS4wLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuXG4gICAgICAgIDAuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAxLjAsXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsXG5cbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcblxuICAgICAgICAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDEuMCwgMS4wLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuXG4gICAgICBdLFxuICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IFtcblxuICAgICAgICAwLjAsICAwLjAsICsxLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgKzEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCArMS4wLFxuICAgICAgICAwLjAsICAwLjAsICsxLjAsXG5cbiAgICAgICAgMC4wLCAgMC4wLCAtMS4wLFxuICAgICAgICAwLjAsICAwLjAsIC0xLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgLTEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCAtMS4wLFxuXG4gICAgICAgIDAuMCwgKzEuMCwgIDAuMCxcbiAgICAgICAgMC4wLCArMS4wLCAgMC4wLFxuICAgICAgICAwLjAsICsxLjAsICAwLjAsXG4gICAgICAgIDAuMCwgKzEuMCwgIDAuMCxcblxuICAgICAgICAwLjAsIC0xLjAsICAwLjAsXG4gICAgICAgIDAuMCwgLTEuMCwgIDAuMCxcbiAgICAgICAgMC4wLCAtMS4wLCAgMC4wLFxuICAgICAgICAwLjAsIC0xLjAsICAwLjAsXG5cbiAgICAgICAgKzEuMCwgIDAuMCwgIDAuMCxcbiAgICAgICAgKzEuMCwgIDAuMCwgIDAuMCxcbiAgICAgICAgKzEuMCwgIDAuMCwgIDAuMCxcbiAgICAgICAgKzEuMCwgIDAuMCwgIDAuMCxcblxuICAgICAgICAtMS4wLCAgMC4wLCAgMC4wLFxuICAgICAgICAtMS4wLCAgMC4wLCAgMC4wLFxuICAgICAgICAtMS4wLCAgMC4wLCAgMC4wLFxuICAgICAgICAtMS4wLCAgMC4wLCAgMC4wLFxuXG4gICAgICBdLFxuICAgICAgdmVydGV4SW5kZXhEYXRhID0gW1xuXG4gICAgICAgIDAsICAxLCAgMixcbiAgICAgICAgMCwgIDIsICAzLFxuXG4gICAgICAgIDQsICA1LCAgNixcbiAgICAgICAgNCwgIDYsICA3LFxuXG4gICAgICAgIDgsICA5LCAxMCxcbiAgICAgICAgOCwgMTAsIDExLFxuXG4gICAgICAgIDEyLCAxMywgMTQsXG4gICAgICAgIDEyLCAxNCwgMTUsXG5cbiAgICAgICAgMTYsIDE3LCAxOCxcbiAgICAgICAgMTYsIDE4LCAxOSxcblxuICAgICAgICAyMCwgMjEsIDIyLFxuICAgICAgICAyMCwgMjIsIDIzLFxuXG4gICAgICBdO1xuXG5jb25zdCB7IGRpdmlkZSwgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEN5bGluZGVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSA9IHZlcnRleFBvc2l0aW9uRGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbERhdGEgPSB2ZXJ0ZXhOb3JtYWxEYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhEYXRhID0gdmVydGV4SW5kZXhEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25EYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleE5vcm1hbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleEluZGV4RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleERhdGE7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uRGF0YSA9IHZlcnRleFBvc2l0aW9uRGF0YUZyb21IZWlnaHRXaWR0aERlcHRoQW5kT2Zmc2V0KHdpZHRoLCBkZXB0aCwgaGVpZ2h0LCBvZmZzZXQpO1xuICAgIFxuICAgIHJldHVybiBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDeWxpbmRlcjtcblxuZnVuY3Rpb24gdmVydGV4UG9zaXRpb25EYXRhRnJvbUhlaWdodFdpZHRoRGVwdGhBbmRPZmZzZXQod2lkdGgsIGRlcHRoLCBoZWlnaHQsIG9mZnNldCkge1xuICBsZXQgdmVydGV4UG9zaXRpb25zID0gZGl2aWRlKHZlcnRleFBvc2l0aW9uRGF0YSwgMyk7ICAvLy9cblxuICB2ZXJ0ZXhQb3NpdGlvbnMgPSB2ZXJ0ZXhQb3NpdGlvbnMubWFwKGZ1bmN0aW9uKHZlcnRleFBvc2l0aW9uKSB7XG4gICAgdmVydGV4UG9zaXRpb24gPSB2ZWMzLm11bHRpcGx5KHZlcnRleFBvc2l0aW9uLCBbd2lkdGgsIGRlcHRoLCBoZWlnaHRdKSA7XG4gICAgdmVydGV4UG9zaXRpb24gPSB2ZWMzLmFkZCh2ZXJ0ZXhQb3NpdGlvbiwgb2Zmc2V0KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGZsYXR0ZW4odmVydGV4UG9zaXRpb25zKTtcbn1cbiJdfQ==