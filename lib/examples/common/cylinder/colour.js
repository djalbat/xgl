'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cylinder = require('../cylinder'),
    ColourElement = require('../../../element/colour'),
    vertexUtilities = require('../../../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    vertexIndexData = cylinder.vertexIndexData,
    vertexNormalData = cylinder.vertexNormalData,
    initialVertexPositionData = cylinder.initialVertexPositionData;

var ColourCylinder = function (_ColourElement) {
  _inherits(ColourCylinder, _ColourElement);

  function ColourCylinder() {
    _classCallCheck(this, ColourCylinder);

    return _possibleConstructorReturn(this, (ColourCylinder.__proto__ || Object.getPrototypeOf(ColourCylinder)).apply(this, arguments));
  }

  _createClass(ColourCylinder, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var width = properties.width,
          depth = properties.depth,
          height = properties.height,
          offset = properties.offset,
          colour = properties.colour,
          vertexColourData = calculateVertexColourData(colour),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, depth, height, offset),
          colourCylinder = ColourElement.fromProperties(ColourCylinder, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);


      return colourCylinder;
    }
  }]);

  return ColourCylinder;
}(ColourElement);

module.exports = ColourCylinder;

function calculateVertexColourData(colour) {
  var vertexColourData = [];

  for (var index = 0; index < 24; index++) {
    vertexColourData = vertexColourData.concat(colour);
  }

  return vertexColourData;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3lsaW5kZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbImN5bGluZGVyIiwicmVxdWlyZSIsIkNvbG91ckVsZW1lbnQiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsIkNvbG91ckN5bGluZGVyIiwicHJvcGVydGllcyIsIndpZHRoIiwiZGVwdGgiLCJoZWlnaHQiLCJvZmZzZXQiLCJjb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJEYXRhIiwiY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YSIsInZlcnRleFBvc2l0aW9uRGF0YSIsImNvbG91ckN5bGluZGVyIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5kZXgiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxhQUFSLENBQWpCO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLHlCQUFSLENBRHRCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLDJCQUFSLENBRnhCOztBQUlNLElBQUVHLDJCQUFGLEdBQWtDRCxlQUFsQyxDQUFFQywyQkFBRjtBQUFBLElBQ0VDLGVBREYsR0FDbUVMLFFBRG5FLENBQ0VLLGVBREY7QUFBQSxJQUNtQkMsZ0JBRG5CLEdBQ21FTixRQURuRSxDQUNtQk0sZ0JBRG5CO0FBQUEsSUFDcUNDLHlCQURyQyxHQUNtRVAsUUFEbkUsQ0FDcUNPLHlCQURyQzs7SUFHQUMsYzs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFBQSxVQUN4QkMsS0FEd0IsR0FDaUJELFVBRGpCLENBQ3hCQyxLQUR3QjtBQUFBLFVBQ2pCQyxLQURpQixHQUNpQkYsVUFEakIsQ0FDakJFLEtBRGlCO0FBQUEsVUFDVkMsTUFEVSxHQUNpQkgsVUFEakIsQ0FDVkcsTUFEVTtBQUFBLFVBQ0ZDLE1BREUsR0FDaUJKLFVBRGpCLENBQ0ZJLE1BREU7QUFBQSxVQUNNQyxNQUROLEdBQ2lCTCxVQURqQixDQUNNSyxNQUROO0FBQUEsVUFFMUJDLGdCQUYwQixHQUVQQywwQkFBMEJGLE1BQTFCLENBRk87QUFBQSxVQUcxQkcsa0JBSDBCLEdBR0xiLDRCQUE0QkcseUJBQTVCLEVBQXVERyxLQUF2RCxFQUE4REMsS0FBOUQsRUFBcUVDLE1BQXJFLEVBQTZFQyxNQUE3RSxDQUhLO0FBQUEsVUFJMUJLLGNBSjBCLEdBSVRoQixjQUFjaUIsY0FBZCxDQUE2QlgsY0FBN0IsRUFBNkNDLFVBQTdDLEVBQXlEUSxrQkFBekQsRUFBNkVYLGdCQUE3RSxFQUErRkQsZUFBL0YsRUFBZ0hVLGdCQUFoSCxDQUpTOzs7QUFNaEMsYUFBT0csY0FBUDtBQUNEOzs7O0VBUjBCaEIsYTs7QUFXN0JrQixPQUFPQyxPQUFQLEdBQWlCYixjQUFqQjs7QUFFQSxTQUFTUSx5QkFBVCxDQUFtQ0YsTUFBbkMsRUFBMkM7QUFDekMsTUFBSUMsbUJBQW1CLEVBQXZCOztBQUVBLE9BQUssSUFBSU8sUUFBUSxDQUFqQixFQUFvQkEsUUFBUSxFQUE1QixFQUFnQ0EsT0FBaEMsRUFBeUM7QUFDdkNQLHVCQUFtQkEsaUJBQWlCUSxNQUFqQixDQUF3QlQsTUFBeEIsQ0FBbkI7QUFDRDs7QUFFRCxTQUFPQyxnQkFBUDtBQUNEIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3lsaW5kZXIgPSByZXF1aXJlKCcuLi9jeWxpbmRlcicpLFxuICAgICAgQ29sb3VyRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY29sb3VyJyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvdmVydGV4Jyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRleEluZGV4RGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gY3lsaW5kZXI7XG5cbmNsYXNzIENvbG91ckN5bGluZGVyIGV4dGVuZHMgQ29sb3VyRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0LCBjb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdmVydGV4Q29sb3VyRGF0YSA9IGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEoY29sb3VyKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgd2lkdGgsIGRlcHRoLCBoZWlnaHQsIG9mZnNldCksXG4gICAgICAgICAgY29sb3VyQ3lsaW5kZXIgPSBDb2xvdXJFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91ckN5bGluZGVyLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdmVydGV4Q29sb3VyRGF0YSk7XG5cbiAgICByZXR1cm4gY29sb3VyQ3lsaW5kZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJDeWxpbmRlcjtcblxuZnVuY3Rpb24gY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YShjb2xvdXIpIHtcbiAgbGV0IHZlcnRleENvbG91ckRhdGEgPSBbXTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjQ7IGluZGV4KyspIHtcbiAgICB2ZXJ0ZXhDb2xvdXJEYXRhID0gdmVydGV4Q29sb3VyRGF0YS5jb25jYXQoY29sb3VyKTtcbiAgfVxuXG4gIHJldHVybiB2ZXJ0ZXhDb2xvdXJEYXRhO1xufVxuIl19