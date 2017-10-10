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
                      vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, depth, height, offset),
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
      vertexColours = [];

      for (var index = 0; index < vertexColoursLength; index++) {
            var vertexColour = colour;

            vertexColours.push(vertexColour);
      }

      var vertexColourData = flatten(vertexColours); ///

      return vertexColourData;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3lsaW5kZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbImN5bGluZGVyIiwicmVxdWlyZSIsIkNvbG91ckVsZW1lbnQiLCJhcnJheVV0aWxpdGllcyIsInZlcnRleFV0aWxpdGllcyIsImZsYXR0ZW4iLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsIkNvbG91ckN5bGluZGVyIiwicHJvcGVydGllcyIsIndpZHRoIiwiZGVwdGgiLCJoZWlnaHQiLCJvZmZzZXQiLCJjb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJEYXRhIiwiY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YSIsInZlcnRleFBvc2l0aW9uRGF0YSIsImNvbG91ckN5bGluZGVyIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCIsImxlbmd0aCIsInZlcnRleENvbG91cnNMZW5ndGgiLCJ2ZXJ0ZXhDb2xvdXJzIiwiaW5kZXgiLCJ2ZXJ0ZXhDb2xvdXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSx5QkFBUixDQUR0QjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSwwQkFBUixDQUZ2QjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSwyQkFBUixDQUh4Qjs7QUFLTSxJQUFFSSxPQUFGLEdBQWNGLGNBQWQsQ0FBRUUsT0FBRjtBQUFBLElBQ0VDLDJCQURGLEdBQ2tDRixlQURsQyxDQUNFRSwyQkFERjtBQUFBLElBRUVDLGVBRkYsR0FFbUVQLFFBRm5FLENBRUVPLGVBRkY7QUFBQSxJQUVtQkMsZ0JBRm5CLEdBRW1FUixRQUZuRSxDQUVtQlEsZ0JBRm5CO0FBQUEsSUFFcUNDLHlCQUZyQyxHQUVtRVQsUUFGbkUsQ0FFcUNTLHlCQUZyQzs7SUFJQUMsYzs7Ozs7Ozs7Ozs7MkNBQ2tCQyxVLEVBQVk7QUFBQSxzQkFDeEJDLEtBRHdCLEdBQ2lCRCxVQURqQixDQUN4QkMsS0FEd0I7QUFBQSxzQkFDakJDLEtBRGlCLEdBQ2lCRixVQURqQixDQUNqQkUsS0FEaUI7QUFBQSxzQkFDVkMsTUFEVSxHQUNpQkgsVUFEakIsQ0FDVkcsTUFEVTtBQUFBLHNCQUNGQyxNQURFLEdBQ2lCSixVQURqQixDQUNGSSxNQURFO0FBQUEsc0JBQ01DLE1BRE4sR0FDaUJMLFVBRGpCLENBQ01LLE1BRE47QUFBQSxzQkFFMUJDLGdCQUYwQixHQUVQQywwQkFBMEJULHlCQUExQixFQUFxRE8sTUFBckQsQ0FGTztBQUFBLHNCQUcxQkcsa0JBSDBCLEdBR0xiLDRCQUE0QkcseUJBQTVCLEVBQXVERyxLQUF2RCxFQUE4REMsS0FBOUQsRUFBcUVDLE1BQXJFLEVBQTZFQyxNQUE3RSxDQUhLO0FBQUEsc0JBSTFCSyxjQUowQixHQUlUbEIsY0FBY21CLGNBQWQsQ0FBNkJYLGNBQTdCLEVBQTZDQyxVQUE3QyxFQUF5RFEsa0JBQXpELEVBQTZFWCxnQkFBN0UsRUFBK0ZELGVBQS9GLEVBQWdIVSxnQkFBaEgsQ0FKUzs7O0FBTWhDLHlCQUFPRyxjQUFQO0FBQ0Q7Ozs7RUFSMEJsQixhOztBQVc3Qm9CLE9BQU9DLE9BQVAsR0FBaUJiLGNBQWpCOztBQUVBLFNBQVNRLHlCQUFULENBQW1DVCx5QkFBbkMsRUFBOERPLE1BQTlELEVBQXNFO0FBQ3BFLFVBQU1RLGtDQUFrQ2YsMEJBQTBCZ0IsTUFBbEU7QUFBQSxVQUNNQyxzQkFBc0JGLGtDQUFrQyxDQUQ5RDtBQUFBLFVBQ2tFO0FBQzVERyxzQkFBZ0IsRUFGdEI7O0FBSUEsV0FBSyxJQUFJQyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRRixtQkFBNUIsRUFBaURFLE9BQWpELEVBQTBEO0FBQ3hELGdCQUFNQyxlQUFlYixNQUFyQjs7QUFFQVcsMEJBQWNHLElBQWQsQ0FBbUJELFlBQW5CO0FBQ0Q7O0FBRUQsVUFBTVosbUJBQW1CWixRQUFRc0IsYUFBUixDQUF6QixDQVhvRSxDQVdsQjs7QUFFbEQsYUFBT1YsZ0JBQVA7QUFDRCIsImZpbGUiOiJjb2xvdXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN5bGluZGVyID0gcmVxdWlyZSgnLi4vY3lsaW5kZXInKSxcbiAgICAgIENvbG91ckVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NvbG91cicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBmbGF0dGVuIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRleEluZGV4RGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gY3lsaW5kZXI7XG5cbmNsYXNzIENvbG91ckN5bGluZGVyIGV4dGVuZHMgQ29sb3VyRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0LCBjb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdmVydGV4Q29sb3VyRGF0YSA9IGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgY29sb3VyKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgd2lkdGgsIGRlcHRoLCBoZWlnaHQsIG9mZnNldCksXG4gICAgICAgICAgY29sb3VyQ3lsaW5kZXIgPSBDb2xvdXJFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91ckN5bGluZGVyLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdmVydGV4Q29sb3VyRGF0YSk7XG5cbiAgICByZXR1cm4gY29sb3VyQ3lsaW5kZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJDeWxpbmRlcjtcblxuZnVuY3Rpb24gY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCBjb2xvdXIpIHtcbiAgY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCA9IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEubGVuZ3RoLFxuICAgICAgICB2ZXJ0ZXhDb2xvdXJzTGVuZ3RoID0gaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCAvIDQsICAvLy9cbiAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2ZXJ0ZXhDb2xvdXJzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyID0gY29sb3VyO1xuXG4gICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG4gIH1cblxuICBjb25zdCB2ZXJ0ZXhDb2xvdXJEYXRhID0gZmxhdHRlbih2ZXJ0ZXhDb2xvdXJzKTsgIC8vL1xuXG4gIHJldHVybiB2ZXJ0ZXhDb2xvdXJEYXRhO1xufVxuIl19