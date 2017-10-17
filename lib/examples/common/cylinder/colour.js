'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cylinder = require('../cylinder'),
    ColourElement = require('../../../element/colour'),
    vertexUtilities = require('../../../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    calculateVertexColourData = vertexUtilities.calculateVertexColourData,
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
                      height = properties.height,
                      depth = properties.depth,
                      offset = properties.offset,
                      rotation = properties.rotation,
                      colour = properties.colour,
                      vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotation),
                      colourCylinder = ColourElement.fromProperties(ColourCylinder, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);


                  return colourCylinder;
            }
      }]);

      return ColourCylinder;
}(ColourElement);

module.exports = ColourCylinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3lsaW5kZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbImN5bGluZGVyIiwicmVxdWlyZSIsIkNvbG91ckVsZW1lbnQiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwidmVydGV4Tm9ybWFsRGF0YSIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJDb2xvdXJDeWxpbmRlciIsInByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwib2Zmc2V0Iiwicm90YXRpb24iLCJjb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJEYXRhIiwidmVydGV4UG9zaXRpb25EYXRhIiwiY29sb3VyQ3lsaW5kZXIiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxhQUFSLENBQWpCO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLHlCQUFSLENBRHRCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLDJCQUFSLENBRnhCOztJQUlRRywyQixHQUEyREQsZSxDQUEzREMsMkI7SUFBNkJDLHlCLEdBQThCRixlLENBQTlCRSx5QjtJQUM3QkMsZSxHQUFpRU4sUSxDQUFqRU0sZTtJQUFpQkMsZ0IsR0FBZ0RQLFEsQ0FBaERPLGdCO0lBQWtCQyx5QixHQUE4QlIsUSxDQUE5QlEseUI7O0lBRXJDQyxjOzs7Ozs7Ozs7OzsyQ0FDa0JDLFUsRUFBWTtBQUFBLHNCQUN4QkMsS0FEd0IsR0FDMkJELFVBRDNCLENBQ3hCQyxLQUR3QjtBQUFBLHNCQUNqQkMsTUFEaUIsR0FDMkJGLFVBRDNCLENBQ2pCRSxNQURpQjtBQUFBLHNCQUNUQyxLQURTLEdBQzJCSCxVQUQzQixDQUNURyxLQURTO0FBQUEsc0JBQ0ZDLE1BREUsR0FDMkJKLFVBRDNCLENBQ0ZJLE1BREU7QUFBQSxzQkFDTUMsUUFETixHQUMyQkwsVUFEM0IsQ0FDTUssUUFETjtBQUFBLHNCQUNnQkMsTUFEaEIsR0FDMkJOLFVBRDNCLENBQ2dCTSxNQURoQjtBQUFBLHNCQUUxQkMsZ0JBRjBCLEdBRVBaLDBCQUEwQkcseUJBQTFCLEVBQXFEUSxNQUFyRCxDQUZPO0FBQUEsc0JBRzFCRSxrQkFIMEIsR0FHTGQsNEJBQTRCSSx5QkFBNUIsRUFBdURHLEtBQXZELEVBQThEQyxNQUE5RCxFQUFzRUMsS0FBdEUsRUFBNkVDLE1BQTdFLEVBQXFGQyxRQUFyRixDQUhLO0FBQUEsc0JBSTFCSSxjQUowQixHQUlUakIsY0FBY2tCLGNBQWQsQ0FBNkJYLGNBQTdCLEVBQTZDQyxVQUE3QyxFQUF5RFEsa0JBQXpELEVBQTZFWCxnQkFBN0UsRUFBK0ZELGVBQS9GLEVBQWdIVyxnQkFBaEgsQ0FKUzs7O0FBTWhDLHlCQUFPRSxjQUFQO0FBQ0Q7Ozs7RUFSMEJqQixhOztBQVc3Qm1CLE9BQU9DLE9BQVAsR0FBaUJiLGNBQWpCIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3lsaW5kZXIgPSByZXF1aXJlKCcuLi9jeWxpbmRlcicpLFxuICAgICAgQ29sb3VyRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY29sb3VyJyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvdmVydGV4Jyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhLCBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRleEluZGV4RGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gY3lsaW5kZXI7XG5cbmNsYXNzIENvbG91ckN5bGluZGVyIGV4dGVuZHMgQ29sb3VyRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgb2Zmc2V0LCByb3RhdGlvbiwgY29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZlcnRleENvbG91ckRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIGNvbG91ciksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25EYXRhID0gY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBvZmZzZXQsIHJvdGF0aW9uKSxcbiAgICAgICAgICBjb2xvdXJDeWxpbmRlciA9IENvbG91ckVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyQ3lsaW5kZXIsIHByb3BlcnRpZXMsIHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcblxuICAgIHJldHVybiBjb2xvdXJDeWxpbmRlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91ckN5bGluZGVyO1xuIl19