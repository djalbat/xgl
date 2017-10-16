'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    ColourElement = require('../../../element/colour'),
    vertexUtilities = require('../../../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    vertexIndexData = cuboid.vertexIndexData,
    vertexNormalData = cuboid.vertexNormalData,
    initialVertexPositionData = cuboid.initialVertexPositionData;

var ColourCuboid = function (_ColourElement) {
  _inherits(ColourCuboid, _ColourElement);

  function ColourCuboid() {
    _classCallCheck(this, ColourCuboid);

    return _possibleConstructorReturn(this, (ColourCuboid.__proto__ || Object.getPrototypeOf(ColourCuboid)).apply(this, arguments));
  }

  _createClass(ColourCuboid, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          offset = properties.offset,
          rotation = properties.rotation,
          colour = properties.colour,
          vertexColourData = calculateVertexColourData(colour),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotation),
          colourCuboid = ColourElement.fromProperties(ColourCuboid, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);


      return colourCuboid;
    }
  }]);

  return ColourCuboid;
}(ColourElement);

module.exports = ColourCuboid;

function calculateVertexColourData(colour) {
  var vertexColourData = [];

  for (var index = 0; index < 24; index++) {
    vertexColourData = vertexColourData.concat(colour);
  }

  return vertexColourData;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkL2NvbG91ci5qcyJdLCJuYW1lcyI6WyJjdWJvaWQiLCJyZXF1aXJlIiwiQ29sb3VyRWxlbWVudCIsInZlcnRleFV0aWxpdGllcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleEluZGV4RGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiQ29sb3VyQ3Vib2lkIiwicHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJvZmZzZXQiLCJyb3RhdGlvbiIsImNvbG91ciIsInZlcnRleENvbG91ckRhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhIiwidmVydGV4UG9zaXRpb25EYXRhIiwiY29sb3VyQ3Vib2lkIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5kZXgiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEseUJBQVIsQ0FEdEI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsMkJBQVIsQ0FGeEI7O0FBSU0sSUFBRUcsMkJBQUYsR0FBa0NELGVBQWxDLENBQUVDLDJCQUFGO0FBQUEsSUFDRUMsZUFERixHQUNtRUwsTUFEbkUsQ0FDRUssZUFERjtBQUFBLElBQ21CQyxnQkFEbkIsR0FDbUVOLE1BRG5FLENBQ21CTSxnQkFEbkI7QUFBQSxJQUNxQ0MseUJBRHJDLEdBQ21FUCxNQURuRSxDQUNxQ08seUJBRHJDOztJQUdBQyxZOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFBLFVBQ3hCQyxLQUR3QixHQUMyQkQsVUFEM0IsQ0FDeEJDLEtBRHdCO0FBQUEsVUFDakJDLE1BRGlCLEdBQzJCRixVQUQzQixDQUNqQkUsTUFEaUI7QUFBQSxVQUNUQyxLQURTLEdBQzJCSCxVQUQzQixDQUNURyxLQURTO0FBQUEsVUFDRkMsTUFERSxHQUMyQkosVUFEM0IsQ0FDRkksTUFERTtBQUFBLFVBQ01DLFFBRE4sR0FDMkJMLFVBRDNCLENBQ01LLFFBRE47QUFBQSxVQUNnQkMsTUFEaEIsR0FDMkJOLFVBRDNCLENBQ2dCTSxNQURoQjtBQUFBLFVBRTFCQyxnQkFGMEIsR0FFUEMsMEJBQTBCRixNQUExQixDQUZPO0FBQUEsVUFHMUJHLGtCQUgwQixHQUdMZCw0QkFBNEJHLHlCQUE1QixFQUF1REcsS0FBdkQsRUFBOERDLE1BQTlELEVBQXNFQyxLQUF0RSxFQUE2RUMsTUFBN0UsRUFBcUZDLFFBQXJGLENBSEs7QUFBQSxVQUkxQkssWUFKMEIsR0FJWGpCLGNBQWNrQixjQUFkLENBQTZCWixZQUE3QixFQUEyQ0MsVUFBM0MsRUFBdURTLGtCQUF2RCxFQUEyRVosZ0JBQTNFLEVBQTZGRCxlQUE3RixFQUE4R1csZ0JBQTlHLENBSlc7OztBQU1oQyxhQUFPRyxZQUFQO0FBQ0Q7Ozs7RUFSd0JqQixhOztBQVczQm1CLE9BQU9DLE9BQVAsR0FBaUJkLFlBQWpCOztBQUVBLFNBQVNTLHlCQUFULENBQW1DRixNQUFuQyxFQUEyQztBQUN6QyxNQUFJQyxtQkFBbUIsRUFBdkI7O0FBRUEsT0FBSyxJQUFJTyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRLEVBQTVCLEVBQWdDQSxPQUFoQyxFQUF5QztBQUN2Q1AsdUJBQW1CQSxpQkFBaUJRLE1BQWpCLENBQXdCVCxNQUF4QixDQUFuQjtBQUNEOztBQUVELFNBQU9DLGdCQUFQO0FBQ0QiLCJmaWxlIjoiY29sb3VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdWJvaWQgPSByZXF1aXJlKCcuLi9jdWJvaWQnKSxcbiAgICAgIENvbG91ckVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NvbG91cicpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyB2ZXJ0ZXhJbmRleERhdGEsIHZlcnRleE5vcm1hbERhdGEsIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgfSA9IGN1Ym9pZDtcblxuY2xhc3MgQ29sb3VyQ3Vib2lkIGV4dGVuZHMgQ29sb3VyRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgb2Zmc2V0LCByb3RhdGlvbiwgY29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZlcnRleENvbG91ckRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhKGNvbG91ciksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25EYXRhID0gY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBvZmZzZXQsIHJvdGF0aW9uKSxcbiAgICAgICAgICBjb2xvdXJDdWJvaWQgPSBDb2xvdXJFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91ckN1Ym9pZCwgcHJvcGVydGllcywgdmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHZlcnRleENvbG91ckRhdGEpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJDdWJvaWQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJDdWJvaWQ7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEoY29sb3VyKSB7XG4gIGxldCB2ZXJ0ZXhDb2xvdXJEYXRhID0gW107XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI0OyBpbmRleCsrKSB7XG4gICAgdmVydGV4Q29sb3VyRGF0YSA9IHZlcnRleENvbG91ckRhdGEuY29uY2F0KGNvbG91cik7XG4gIH1cblxuICByZXR1cm4gdmVydGV4Q29sb3VyRGF0YTtcbn1cbiJdfQ==