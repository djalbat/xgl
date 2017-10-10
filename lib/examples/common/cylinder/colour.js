'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cylinder = require('../cylinder'),
    ColourElement = require('../../../element/colour'),
    arrayUtilities = require('../../../utilities/array'),
    vertexUtilities = require('../../../utilities/vertex');

var flatten = arrayUtilities.flatten,
    calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    vertexIndexData = cylinder.vertexIndexData,
    vertexNormalData = cylinder.vertexNormalData,
    initialVertexPositionData = cylinder.initialVertexPositionData;


var defaultOffset = [10, 10, 10];

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
                      rotation = properties.rotation,
                      colour = properties.colour,
                      vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, depth, height, offset, rotation),
                      colourCylinder = ColourElement.fromProperties(ColourCylinder, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);


                  return colourCylinder;
            }
      }]);

      return ColourCylinder;
}(ColourElement);

module.exports = ColourCylinder;

function calculateVertexColourData(initialVertexPositionData, colour) {
      var initialVertexPositionDataLength = initialVertexPositionData.length,
          vertexColoursLength = initialVertexPositionDataLength / 4,
          ///
      vertexColour = colour,
          vertexColours = [];

      for (var index = 0; index < vertexColoursLength; index++) {
            vertexColours.push(vertexColour);
      }

      var vertexColourData = flatten(vertexColours); ///

      return vertexColourData;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3lsaW5kZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbImN5bGluZGVyIiwicmVxdWlyZSIsIkNvbG91ckVsZW1lbnQiLCJhcnJheVV0aWxpdGllcyIsInZlcnRleFV0aWxpdGllcyIsImZsYXR0ZW4iLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsImRlZmF1bHRPZmZzZXQiLCJDb2xvdXJDeWxpbmRlciIsInByb3BlcnRpZXMiLCJ3aWR0aCIsImRlcHRoIiwiaGVpZ2h0Iiwib2Zmc2V0Iiwicm90YXRpb24iLCJjb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJEYXRhIiwiY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YSIsInZlcnRleFBvc2l0aW9uRGF0YSIsImNvbG91ckN5bGluZGVyIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCIsImxlbmd0aCIsInZlcnRleENvbG91cnNMZW5ndGgiLCJ2ZXJ0ZXhDb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJzIiwiaW5kZXgiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSx5QkFBUixDQUR0QjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSwwQkFBUixDQUZ2QjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSwyQkFBUixDQUh4Qjs7QUFLTSxJQUFFSSxPQUFGLEdBQWNGLGNBQWQsQ0FBRUUsT0FBRjtBQUFBLElBQ0VDLDJCQURGLEdBQ2tDRixlQURsQyxDQUNFRSwyQkFERjtBQUFBLElBRUVDLGVBRkYsR0FFbUVQLFFBRm5FLENBRUVPLGVBRkY7QUFBQSxJQUVtQkMsZ0JBRm5CLEdBRW1FUixRQUZuRSxDQUVtQlEsZ0JBRm5CO0FBQUEsSUFFcUNDLHlCQUZyQyxHQUVtRVQsUUFGbkUsQ0FFcUNTLHlCQUZyQzs7O0FBSU4sSUFBTUMsZ0JBQWdCLENBQUUsRUFBRixFQUFNLEVBQU4sRUFBVSxFQUFWLENBQXRCOztJQUVNQyxjOzs7Ozs7Ozs7OzsyQ0FDa0JDLFUsRUFBWTtBQUFBLHNCQUN4QkMsS0FEd0IsR0FDMkJELFVBRDNCLENBQ3hCQyxLQUR3QjtBQUFBLHNCQUNqQkMsS0FEaUIsR0FDMkJGLFVBRDNCLENBQ2pCRSxLQURpQjtBQUFBLHNCQUNWQyxNQURVLEdBQzJCSCxVQUQzQixDQUNWRyxNQURVO0FBQUEsc0JBQ0ZDLE1BREUsR0FDMkJKLFVBRDNCLENBQ0ZJLE1BREU7QUFBQSxzQkFDTUMsUUFETixHQUMyQkwsVUFEM0IsQ0FDTUssUUFETjtBQUFBLHNCQUNnQkMsTUFEaEIsR0FDMkJOLFVBRDNCLENBQ2dCTSxNQURoQjtBQUFBLHNCQUUxQkMsZ0JBRjBCLEdBRVBDLDBCQUEwQlgseUJBQTFCLEVBQXFEUyxNQUFyRCxDQUZPO0FBQUEsc0JBRzFCRyxrQkFIMEIsR0FHTGYsNEJBQTRCRyx5QkFBNUIsRUFBdURJLEtBQXZELEVBQThEQyxLQUE5RCxFQUFxRUMsTUFBckUsRUFBNkVDLE1BQTdFLEVBQXFGQyxRQUFyRixDQUhLO0FBQUEsc0JBSTFCSyxjQUowQixHQUlUcEIsY0FBY3FCLGNBQWQsQ0FBNkJaLGNBQTdCLEVBQTZDQyxVQUE3QyxFQUF5RFMsa0JBQXpELEVBQTZFYixnQkFBN0UsRUFBK0ZELGVBQS9GLEVBQWdIWSxnQkFBaEgsQ0FKUzs7O0FBTWhDLHlCQUFPRyxjQUFQO0FBQ0Q7Ozs7RUFSMEJwQixhOztBQVc3QnNCLE9BQU9DLE9BQVAsR0FBaUJkLGNBQWpCOztBQUVBLFNBQVNTLHlCQUFULENBQW1DWCx5QkFBbkMsRUFBOERTLE1BQTlELEVBQXNFO0FBQ3BFLFVBQU1RLGtDQUFrQ2pCLDBCQUEwQmtCLE1BQWxFO0FBQUEsVUFDTUMsc0JBQXNCRixrQ0FBa0MsQ0FEOUQ7QUFBQSxVQUNrRTtBQUM1REcscUJBQWVYLE1BRnJCO0FBQUEsVUFHTVksZ0JBQWdCLEVBSHRCOztBQUtBLFdBQUssSUFBSUMsUUFBUSxDQUFqQixFQUFvQkEsUUFBUUgsbUJBQTVCLEVBQWlERyxPQUFqRCxFQUEwRDtBQUN4REQsMEJBQWNFLElBQWQsQ0FBbUJILFlBQW5CO0FBQ0Q7O0FBRUQsVUFBTVYsbUJBQW1CZCxRQUFReUIsYUFBUixDQUF6QixDQVZvRSxDQVVsQjs7QUFFbEQsYUFBT1gsZ0JBQVA7QUFDRCIsImZpbGUiOiJjb2xvdXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN5bGluZGVyID0gcmVxdWlyZSgnLi4vY3lsaW5kZXInKSxcbiAgICAgIENvbG91ckVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NvbG91cicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBmbGF0dGVuIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRleEluZGV4RGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gY3lsaW5kZXI7XG5cbmNvbnN0IGRlZmF1bHRPZmZzZXQgPSBbIDEwLCAxMCwgMTAgXTtcblxuY2xhc3MgQ29sb3VyQ3lsaW5kZXIgZXh0ZW5kcyBDb2xvdXJFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBkZXB0aCwgaGVpZ2h0LCBvZmZzZXQsIHJvdGF0aW9uLCBjb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdmVydGV4Q29sb3VyRGF0YSA9IGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgY29sb3VyKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgd2lkdGgsIGRlcHRoLCBoZWlnaHQsIG9mZnNldCwgcm90YXRpb24pLFxuICAgICAgICAgIGNvbG91ckN5bGluZGVyID0gQ29sb3VyRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJDeWxpbmRlciwgcHJvcGVydGllcywgdmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHZlcnRleENvbG91ckRhdGEpO1xuXG4gICAgcmV0dXJuIGNvbG91ckN5bGluZGVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyQ3lsaW5kZXI7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgY29sb3VyKSB7XG4gIGNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggPSBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLmxlbmd0aCxcbiAgICAgICAgdmVydGV4Q29sb3Vyc0xlbmd0aCA9IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggLyA0LCAgLy8vXG4gICAgICAgIHZlcnRleENvbG91ciA9IGNvbG91cixcbiAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2ZXJ0ZXhDb2xvdXJzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG4gIH1cblxuICBjb25zdCB2ZXJ0ZXhDb2xvdXJEYXRhID0gZmxhdHRlbih2ZXJ0ZXhDb2xvdXJzKTsgIC8vL1xuXG4gIHJldHVybiB2ZXJ0ZXhDb2xvdXJEYXRhO1xufVxuIl19