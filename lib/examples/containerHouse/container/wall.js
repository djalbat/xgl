'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    ColouredRidge = require('./sideWall/colouredRidge');

var Wall = function (_CanvasElement) {
  _inherits(Wall, _CanvasElement);

  function Wall() {
    _classCallCheck(this, Wall);

    return _possibleConstructorReturn(this, (Wall.__proto__ || Object.getPrototypeOf(Wall)).apply(this, arguments));
  }

  _createClass(Wall, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length,
          overallHeight = properties.overallHeight,
          width = 0.25,
          height = overallHeight,
          depth = 0.125,
          rotations = [0, -90, 0],
          step = 1,
          count = length / step,
          colour = [1, 1, 1, 1],
          elements = [];


      for (var index = 0; index < count; index++) {
        var position = [depth, 0, step * index, 0];

        elements.push(React.createElement(ColouredRidge, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations }));
      }

      return elements;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Wall, properties);
    }
  }]);

  return Wall;
}(CanvasElement);

module.exports = Wall;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvd2FsbC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsIkNvbG91cmVkUmlkZ2UiLCJXYWxsIiwicHJvcGVydGllcyIsImxlbmd0aCIsIm92ZXJhbGxIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwicm90YXRpb25zIiwic3RlcCIsImNvdW50IiwiY29sb3VyIiwiZWxlbWVudHMiLCJpbmRleCIsInBvc2l0aW9uIiwicHVzaCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEseUJBQVIsQ0FBdEI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsMEJBQVIsQ0FEdEI7O0lBR01FLEk7Ozs7Ozs7Ozs7O2tDQUNVQyxVLEVBQVk7QUFBQSxVQUNoQkMsTUFEZ0IsR0FDVUQsVUFEVixDQUNoQkMsTUFEZ0I7QUFBQSxVQUNSQyxhQURRLEdBQ1VGLFVBRFYsQ0FDUkUsYUFEUTtBQUFBLFVBRWxCQyxLQUZrQixHQUVWLElBRlU7QUFBQSxVQUdsQkMsTUFIa0IsR0FHVEYsYUFIUztBQUFBLFVBSWxCRyxLQUprQixHQUlWLEtBSlU7QUFBQSxVQUtsQkMsU0FMa0IsR0FLTixDQUFFLENBQUYsRUFBSyxDQUFDLEVBQU4sRUFBVSxDQUFWLENBTE07QUFBQSxVQU1sQkMsSUFOa0IsR0FNWCxDQU5XO0FBQUEsVUFPbEJDLEtBUGtCLEdBT1ZQLFNBQVNNLElBUEM7QUFBQSxVQVFsQkUsTUFSa0IsR0FRVCxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FSUztBQUFBLFVBU2xCQyxRQVRrQixHQVNQLEVBVE87OztBQVd4QixXQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFILEtBQTVCLEVBQW1DRyxPQUFuQyxFQUE0QztBQUMxQyxZQUFNQyxXQUFXLENBQUNQLEtBQUQsRUFBUSxDQUFSLEVBQVdFLE9BQU9JLEtBQWxCLEVBQXlCLENBQXpCLENBQWpCOztBQUVBRCxpQkFBU0csSUFBVCxDQUVFLG9CQUFDLGFBQUQsSUFBZSxRQUFRSixNQUF2QixFQUErQixPQUFPTixLQUF0QyxFQUE2QyxRQUFRQyxNQUFyRCxFQUE2RCxPQUFPQyxLQUFwRSxFQUEyRSxVQUFVTyxRQUFyRixFQUErRixXQUFXTixTQUExRyxHQUZGO0FBS0Q7O0FBRUQsYUFBT0ksUUFBUDtBQUNEOzs7bUNBRXFCVixVLEVBQVk7QUFBRSxhQUFPSixjQUFja0IsY0FBZCxDQUE2QmYsSUFBN0IsRUFBbUNDLFVBQW5DLENBQVA7QUFBd0Q7Ozs7RUF6QjNFSixhOztBQTRCbkJtQixPQUFPQyxPQUFQLEdBQWlCakIsSUFBakIiLCJmaWxlIjoid2FsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBDb2xvdXJlZFJpZGdlID0gcmVxdWlyZSgnLi9zaWRlV2FsbC9jb2xvdXJlZFJpZGdlJyk7XG5cbmNsYXNzIFdhbGwgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGgsIG92ZXJhbGxIZWlnaHQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgd2lkdGggPSAwLjI1LFxuICAgICAgICAgIGhlaWdodCA9IG92ZXJhbGxIZWlnaHQsIC8vL1xuICAgICAgICAgIGRlcHRoID0gMC4xMjUsXG4gICAgICAgICAgcm90YXRpb25zID0gWyAwLCAtOTAsIDAgXSxcbiAgICAgICAgICBzdGVwID0gMSxcbiAgICAgICAgICBjb3VudCA9IGxlbmd0aCAvIHN0ZXAsXG4gICAgICAgICAgY29sb3VyID0gWyAxLCAxLCAxLCAxIF0sXG4gICAgICAgICAgZWxlbWVudHMgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBbZGVwdGgsIDAsIHN0ZXAgKiBpbmRleCwgMF07XG5cbiAgICAgIGVsZW1lbnRzLnB1c2goXG5cbiAgICAgICAgPENvbG91cmVkUmlkZ2UgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gLz4sXG5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhXYWxsLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhbGw7XG4iXX0=