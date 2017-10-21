'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    ColouredCuboid = require('../../common/coloured/cuboid');

var colour = [1, 1, 1, 1],
    width = 8 / 12,
    depth = 8 / 12,
    indent = 1 / 12;

var CornerPost = function (_CanvasElement) {
  _inherits(CornerPost, _CanvasElement);

  function CornerPost() {
    _classCallCheck(this, CornerPost);

    return _possibleConstructorReturn(this, (CornerPost.__proto__ || Object.getPrototypeOf(CornerPost)).apply(this, arguments));
  }

  _createClass(CornerPost, [{
    key: 'childElements',
    value: function childElements(properties) {
      var overallHeight = properties.overallHeight,
          position = [indent, 0, indent],
          height = overallHeight; ///

      return [React.createElement(ColouredCuboid, { width: width - 2 * indent, height: height, depth: depth - 2 * indent, position: position, colour: colour })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(CornerPost, properties);
    }
  }]);

  return CornerPost;
}(CanvasElement);

Object.assign(CornerPost, {
  width: width,
  depth: depth
});

module.exports = CornerPost;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvY29ybmVyUG9zdC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsIkNvbG91cmVkQ3Vib2lkIiwiY29sb3VyIiwid2lkdGgiLCJkZXB0aCIsImluZGVudCIsIkNvcm5lclBvc3QiLCJwcm9wZXJ0aWVzIiwib3ZlcmFsbEhlaWdodCIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSx5QkFBUixDQUF0QjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSw4QkFBUixDQUR2Qjs7QUFHQSxJQUFNRSxTQUFTLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUFmO0FBQUEsSUFDTUMsUUFBUSxJQUFFLEVBRGhCO0FBQUEsSUFFTUMsUUFBUSxJQUFFLEVBRmhCO0FBQUEsSUFHTUMsU0FBUyxJQUFFLEVBSGpCOztJQUtNQyxVOzs7Ozs7Ozs7OztrQ0FDVUMsVSxFQUFZO0FBQ2xCLFVBQUVDLGFBQUYsR0FBb0JELFVBQXBCLENBQUVDLGFBQUY7QUFBQSxVQUNBQyxRQURBLEdBQ1csQ0FBRUosTUFBRixFQUFVLENBQVYsRUFBYUEsTUFBYixDQURYO0FBQUEsVUFFQUssTUFGQSxHQUVTRixhQUZULENBRGtCLENBR007O0FBRTlCLGFBQVEsQ0FFTixvQkFBQyxjQUFELElBQWdCLE9BQU9MLFFBQVEsSUFBRUUsTUFBakMsRUFBeUMsUUFBUUssTUFBakQsRUFBeUQsT0FBT04sUUFBUSxJQUFFQyxNQUExRSxFQUFrRixVQUFVSSxRQUE1RixFQUFzRyxRQUFRUCxNQUE5RyxHQUZNLENBQVI7QUFLRDs7O21DQUVxQkssVSxFQUFZO0FBQUUsYUFBT1IsY0FBY1ksY0FBZCxDQUE2QkwsVUFBN0IsRUFBeUNDLFVBQXpDLENBQVA7QUFBOEQ7Ozs7RUFiM0VSLGE7O0FBZ0J6QmEsT0FBT0MsTUFBUCxDQUFjUCxVQUFkLEVBQTBCO0FBQ3hCSCxTQUFPQSxLQURpQjtBQUV4QkMsU0FBT0E7QUFGaUIsQ0FBMUI7O0FBS0FVLE9BQU9DLE9BQVAsR0FBaUJULFVBQWpCIiwiZmlsZSI6ImNvcm5lclBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgQ29sb3VyZWRDdWJvaWQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vY29sb3VyZWQvY3Vib2lkJyk7XG5cbmNvbnN0IGNvbG91ciA9IFsgMSwgMSwgMSwgMSBdLFxuICAgICAgd2lkdGggPSA4LzEyLFxuICAgICAgZGVwdGggPSA4LzEyLFxuICAgICAgaW5kZW50ID0gMS8xMjtcblxuY2xhc3MgQ29ybmVyUG9zdCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG92ZXJhbGxIZWlnaHQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcG9zaXRpb24gPSBbIGluZGVudCwgMCwgaW5kZW50IF0sXG4gICAgICAgICAgaGVpZ2h0ID0gb3ZlcmFsbEhlaWdodDsgLy8vXG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbG91cmVkQ3Vib2lkIHdpZHRoPXt3aWR0aCAtIDIqaW5kZW50fSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRoIC0gMippbmRlbnR9IHBvc2l0aW9uPXtwb3NpdGlvbn0gY29sb3VyPXtjb2xvdXJ9IC8+LCAvLy9cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29ybmVyUG9zdCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihDb3JuZXJQb3N0LCB7XG4gIHdpZHRoOiB3aWR0aCxcbiAgZGVwdGg6IGRlcHRoXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb3JuZXJQb3N0O1xuIl19