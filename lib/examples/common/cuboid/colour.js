'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    ColourElement = require('../../../element/colour');

var vertexIndexData = cuboid.vertexIndexData,
    vertexNormalData = cuboid.vertexNormalData,
    calculateVertexPositionData = cuboid.calculateVertexPositionData;

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
          depth = properties.depth,
          height = properties.height,
          offset = properties.offset,
          colour = properties.colour,
          vertexColourData = calculateVertexColourData(colour),
          vertexPositionData = calculateVertexPositionData(width, depth, height, offset),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkL2NvbG91ci5qcyJdLCJuYW1lcyI6WyJjdWJvaWQiLCJyZXF1aXJlIiwiQ29sb3VyRWxlbWVudCIsInZlcnRleEluZGV4RGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJDb2xvdXJDdWJvaWQiLCJwcm9wZXJ0aWVzIiwid2lkdGgiLCJkZXB0aCIsImhlaWdodCIsIm9mZnNldCIsImNvbG91ciIsInZlcnRleENvbG91ckRhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhIiwidmVydGV4UG9zaXRpb25EYXRhIiwiY29sb3VyQ3Vib2lkIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5kZXgiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEseUJBQVIsQ0FEdEI7O0lBR1FFLGUsR0FBbUVILE0sQ0FBbkVHLGU7SUFBaUJDLGdCLEdBQWtESixNLENBQWxESSxnQjtJQUFrQkMsMkIsR0FBZ0NMLE0sQ0FBaENLLDJCOztJQUVyQ0MsWTs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFBQSxVQUN4QkMsS0FEd0IsR0FDaUJELFVBRGpCLENBQ3hCQyxLQUR3QjtBQUFBLFVBQ2pCQyxLQURpQixHQUNpQkYsVUFEakIsQ0FDakJFLEtBRGlCO0FBQUEsVUFDVkMsTUFEVSxHQUNpQkgsVUFEakIsQ0FDVkcsTUFEVTtBQUFBLFVBQ0ZDLE1BREUsR0FDaUJKLFVBRGpCLENBQ0ZJLE1BREU7QUFBQSxVQUNNQyxNQUROLEdBQ2lCTCxVQURqQixDQUNNSyxNQUROO0FBQUEsVUFFMUJDLGdCQUYwQixHQUVQQywwQkFBMEJGLE1BQTFCLENBRk87QUFBQSxVQUcxQkcsa0JBSDBCLEdBR0xWLDRCQUE0QkcsS0FBNUIsRUFBbUNDLEtBQW5DLEVBQTBDQyxNQUExQyxFQUFrREMsTUFBbEQsQ0FISztBQUFBLFVBSTFCSyxZQUowQixHQUlYZCxjQUFjZSxjQUFkLENBQTZCWCxZQUE3QixFQUEyQ0MsVUFBM0MsRUFBdURRLGtCQUF2RCxFQUEyRVgsZ0JBQTNFLEVBQTZGRCxlQUE3RixFQUE4R1UsZ0JBQTlHLENBSlc7OztBQU1oQyxhQUFPRyxZQUFQO0FBQ0Q7Ozs7RUFSd0JkLGE7O0FBVzNCZ0IsT0FBT0MsT0FBUCxHQUFpQmIsWUFBakI7O0FBRUEsU0FBU1EseUJBQVQsQ0FBbUNGLE1BQW5DLEVBQTJDO0FBQ3pDLE1BQUlDLG1CQUFtQixFQUF2Qjs7QUFFQSxPQUFLLElBQUlPLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVEsRUFBNUIsRUFBZ0NBLE9BQWhDLEVBQXlDO0FBQ3ZDUCx1QkFBbUJBLGlCQUFpQlEsTUFBakIsQ0FBd0JULE1BQXhCLENBQW5CO0FBQ0Q7O0FBRUQsU0FBT0MsZ0JBQVA7QUFDRCIsImZpbGUiOiJjb2xvdXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1Ym9pZCA9IHJlcXVpcmUoJy4uL2N1Ym9pZCcpLFxuICAgICAgQ29sb3VyRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY29sb3VyJyk7XG5cbmNvbnN0IHsgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEgfSA9IGN1Ym9pZDtcblxuY2xhc3MgQ29sb3VyQ3Vib2lkIGV4dGVuZHMgQ29sb3VyRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0LCBjb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdmVydGV4Q29sb3VyRGF0YSA9IGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEoY29sb3VyKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEod2lkdGgsIGRlcHRoLCBoZWlnaHQsIG9mZnNldCksXG4gICAgICAgICAgY29sb3VyQ3Vib2lkID0gQ29sb3VyRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJDdWJvaWQsIHByb3BlcnRpZXMsIHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcblxuICAgIHJldHVybiBjb2xvdXJDdWJvaWQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJDdWJvaWQ7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEoY29sb3VyKSB7XG4gIGxldCB2ZXJ0ZXhDb2xvdXJEYXRhID0gW107XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI0OyBpbmRleCsrKSB7XG4gICAgdmVydGV4Q29sb3VyRGF0YSA9IHZlcnRleENvbG91ckRhdGEuY29uY2F0KGNvbG91cik7XG4gIH1cblxuICByZXR1cm4gdmVydGV4Q29sb3VyRGF0YTtcbn1cbiJdfQ==