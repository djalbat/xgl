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
          colour = properties.colour,
          vertexColourData = calculateVertexColourData(colour),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkL2NvbG91ci5qcyJdLCJuYW1lcyI6WyJjdWJvaWQiLCJyZXF1aXJlIiwiQ29sb3VyRWxlbWVudCIsInZlcnRleFV0aWxpdGllcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleEluZGV4RGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiQ29sb3VyQ3Vib2lkIiwicHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJvZmZzZXQiLCJjb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJEYXRhIiwiY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YSIsInZlcnRleFBvc2l0aW9uRGF0YSIsImNvbG91ckN1Ym9pZCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImluZGV4IiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLHlCQUFSLENBRHRCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLDJCQUFSLENBRnhCOztBQUlNLElBQUVHLDJCQUFGLEdBQWtDRCxlQUFsQyxDQUFFQywyQkFBRjtBQUFBLElBQ0VDLGVBREYsR0FDbUVMLE1BRG5FLENBQ0VLLGVBREY7QUFBQSxJQUNtQkMsZ0JBRG5CLEdBQ21FTixNQURuRSxDQUNtQk0sZ0JBRG5CO0FBQUEsSUFDcUNDLHlCQURyQyxHQUNtRVAsTUFEbkUsQ0FDcUNPLHlCQURyQzs7SUFHQUMsWTs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFBQSxVQUN4QkMsS0FEd0IsR0FDaUJELFVBRGpCLENBQ3hCQyxLQUR3QjtBQUFBLFVBQ2pCQyxNQURpQixHQUNpQkYsVUFEakIsQ0FDakJFLE1BRGlCO0FBQUEsVUFDVEMsS0FEUyxHQUNpQkgsVUFEakIsQ0FDVEcsS0FEUztBQUFBLFVBQ0ZDLE1BREUsR0FDaUJKLFVBRGpCLENBQ0ZJLE1BREU7QUFBQSxVQUNNQyxNQUROLEdBQ2lCTCxVQURqQixDQUNNSyxNQUROO0FBQUEsVUFFMUJDLGdCQUYwQixHQUVQQywwQkFBMEJGLE1BQTFCLENBRk87QUFBQSxVQUcxQkcsa0JBSDBCLEdBR0xiLDRCQUE0QkcseUJBQTVCLEVBQXVERyxLQUF2RCxFQUE4REMsTUFBOUQsRUFBc0VDLEtBQXRFLEVBQTZFQyxNQUE3RSxDQUhLO0FBQUEsVUFJMUJLLFlBSjBCLEdBSVhoQixjQUFjaUIsY0FBZCxDQUE2QlgsWUFBN0IsRUFBMkNDLFVBQTNDLEVBQXVEUSxrQkFBdkQsRUFBMkVYLGdCQUEzRSxFQUE2RkQsZUFBN0YsRUFBOEdVLGdCQUE5RyxDQUpXOzs7QUFNaEMsYUFBT0csWUFBUDtBQUNEOzs7O0VBUndCaEIsYTs7QUFXM0JrQixPQUFPQyxPQUFQLEdBQWlCYixZQUFqQjs7QUFFQSxTQUFTUSx5QkFBVCxDQUFtQ0YsTUFBbkMsRUFBMkM7QUFDekMsTUFBSUMsbUJBQW1CLEVBQXZCOztBQUVBLE9BQUssSUFBSU8sUUFBUSxDQUFqQixFQUFvQkEsUUFBUSxFQUE1QixFQUFnQ0EsT0FBaEMsRUFBeUM7QUFDdkNQLHVCQUFtQkEsaUJBQWlCUSxNQUFqQixDQUF3QlQsTUFBeEIsQ0FBbkI7QUFDRDs7QUFFRCxTQUFPQyxnQkFBUDtBQUNEIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3Vib2lkID0gcmVxdWlyZSgnLi4vY3Vib2lkJyksXG4gICAgICBDb2xvdXJFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jb2xvdXInKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEgfSA9IHZlcnRleFV0aWxpdGllcyxcbiAgICAgIHsgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBjdWJvaWQ7XG5cbmNsYXNzIENvbG91ckN1Ym9pZCBleHRlbmRzIENvbG91ckVsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIG9mZnNldCwgY29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZlcnRleENvbG91ckRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhKGNvbG91ciksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25EYXRhID0gY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBvZmZzZXQpLFxuICAgICAgICAgIGNvbG91ckN1Ym9pZCA9IENvbG91ckVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyQ3Vib2lkLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdmVydGV4Q29sb3VyRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91ckN1Ym9pZDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91ckN1Ym9pZDtcblxuZnVuY3Rpb24gY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YShjb2xvdXIpIHtcbiAgbGV0IHZlcnRleENvbG91ckRhdGEgPSBbXTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjQ7IGluZGV4KyspIHtcbiAgICB2ZXJ0ZXhDb2xvdXJEYXRhID0gdmVydGV4Q29sb3VyRGF0YS5jb25jYXQoY29sb3VyKTtcbiAgfVxuXG4gIHJldHVybiB2ZXJ0ZXhDb2xvdXJEYXRhO1xufVxuIl19