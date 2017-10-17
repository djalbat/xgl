'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var plane = require('../plane'),
    ColourElement = require('../../../element/colour'),
    vertexUtilities = require('../../../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    calculateVertexNormalData = vertexUtilities.calculateVertexNormalData,
    calculateVertexColourData = vertexUtilities.calculateVertexColourData,
    vertexIndexData = plane.vertexIndexData,
    initialVertexPositionData = plane.initialVertexPositionData;

var ColourPlane = function (_ColourElement) {
      _inherits(ColourPlane, _ColourElement);

      function ColourPlane() {
            _classCallCheck(this, ColourPlane);

            return _possibleConstructorReturn(this, (ColourPlane.__proto__ || Object.getPrototypeOf(ColourPlane)).apply(this, arguments));
      }

      _createClass(ColourPlane, null, [{
            key: 'fromProperties',
            value: function fromProperties(properties) {
                  var width = properties.width,
                      height = properties.height,
                      depth = properties.depth,
                      position = properties.position,
                      rotations = properties.rotations,
                      colour = properties.colour,
                      vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, position, rotations),
                      vertexNormalData = calculateVertexNormalData(vertexPositionData),
                      colourPlane = ColourElement.fromProperties(ColourPlane, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);


                  return colourPlane;
            }
      }]);

      return ColourPlane;
}(ColourElement);

module.exports = ColourPlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vcGxhbmUvY29sb3VyLmpzIl0sIm5hbWVzIjpbInBsYW5lIiwicmVxdWlyZSIsIkNvbG91ckVsZW1lbnQiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhIiwiY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YSIsInZlcnRleEluZGV4RGF0YSIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJDb2xvdXJQbGFuZSIsInByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiLCJjb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJEYXRhIiwidmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4Tm9ybWFsRGF0YSIsImNvbG91clBsYW5lIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsVUFBUixDQUFkO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLHlCQUFSLENBRHRCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLDJCQUFSLENBRnhCOztJQUlRRywyQixHQUFzRkQsZSxDQUF0RkMsMkI7SUFBNkJDLHlCLEdBQXlERixlLENBQXpERSx5QjtJQUEyQkMseUIsR0FBOEJILGUsQ0FBOUJHLHlCO0lBQ3hEQyxlLEdBQStDUCxLLENBQS9DTyxlO0lBQWlCQyx5QixHQUE4QlIsSyxDQUE5QlEseUI7O0lBRW5CQyxXOzs7Ozs7Ozs7OzsyQ0FDa0JDLFUsRUFBWTtBQUFBLHNCQUN4QkMsS0FEd0IsR0FDOEJELFVBRDlCLENBQ3hCQyxLQUR3QjtBQUFBLHNCQUNqQkMsTUFEaUIsR0FDOEJGLFVBRDlCLENBQ2pCRSxNQURpQjtBQUFBLHNCQUNUQyxLQURTLEdBQzhCSCxVQUQ5QixDQUNURyxLQURTO0FBQUEsc0JBQ0ZDLFFBREUsR0FDOEJKLFVBRDlCLENBQ0ZJLFFBREU7QUFBQSxzQkFDUUMsU0FEUixHQUM4QkwsVUFEOUIsQ0FDUUssU0FEUjtBQUFBLHNCQUNtQkMsTUFEbkIsR0FDOEJOLFVBRDlCLENBQ21CTSxNQURuQjtBQUFBLHNCQUUxQkMsZ0JBRjBCLEdBRVBYLDBCQUEwQkUseUJBQTFCLEVBQXFEUSxNQUFyRCxDQUZPO0FBQUEsc0JBRzFCRSxrQkFIMEIsR0FHTGQsNEJBQTRCSSx5QkFBNUIsRUFBdURHLEtBQXZELEVBQThEQyxNQUE5RCxFQUFzRUMsS0FBdEUsRUFBNkVDLFFBQTdFLEVBQXVGQyxTQUF2RixDQUhLO0FBQUEsc0JBSTFCSSxnQkFKMEIsR0FJUGQsMEJBQTBCYSxrQkFBMUIsQ0FKTztBQUFBLHNCQUsxQkUsV0FMMEIsR0FLWmxCLGNBQWNtQixjQUFkLENBQTZCWixXQUE3QixFQUEwQ0MsVUFBMUMsRUFBc0RRLGtCQUF0RCxFQUEwRUMsZ0JBQTFFLEVBQTRGWixlQUE1RixFQUE2R1UsZ0JBQTdHLENBTFk7OztBQU9oQyx5QkFBT0csV0FBUDtBQUNEOzs7O0VBVHVCbEIsYTs7QUFZMUJvQixPQUFPQyxPQUFQLEdBQWlCZCxXQUFqQiIsImZpbGUiOiJjb2xvdXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBsYW5lID0gcmVxdWlyZSgnLi4vcGxhbmUnKSxcbiAgICAgIENvbG91ckVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NvbG91cicpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSwgY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSwgY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YSB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyB2ZXJ0ZXhJbmRleERhdGEsIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgfSA9IHBsYW5lO1xuXG5jbGFzcyBDb2xvdXJQbGFuZSBleHRlbmRzIENvbG91ckVsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMsIGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJEYXRhID0gY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCBjb2xvdXIpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uRGF0YSA9IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEodmVydGV4UG9zaXRpb25EYXRhKSxcbiAgICAgICAgICBjb2xvdXJQbGFuZSA9IENvbG91ckVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyUGxhbmUsIHByb3BlcnRpZXMsIHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUGxhbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJQbGFuZTtcbiJdfQ==