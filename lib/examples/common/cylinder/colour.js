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
      vertexColour = colour,
          vertexColours = [];

      for (var index = 0; index < vertexColoursLength; index++) {
            vertexColours.push(vertexColour);
      }

      var vertexColourData = flatten(vertexColours); ///

      return vertexColourData;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3lsaW5kZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbImN5bGluZGVyIiwicmVxdWlyZSIsIkNvbG91ckVsZW1lbnQiLCJhcnJheVV0aWxpdGllcyIsInZlcnRleFV0aWxpdGllcyIsImZsYXR0ZW4iLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsIkNvbG91ckN5bGluZGVyIiwicHJvcGVydGllcyIsIndpZHRoIiwiZGVwdGgiLCJoZWlnaHQiLCJvZmZzZXQiLCJjb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJEYXRhIiwiY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YSIsInZlcnRleFBvc2l0aW9uRGF0YSIsImNvbG91ckN5bGluZGVyIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCIsImxlbmd0aCIsInZlcnRleENvbG91cnNMZW5ndGgiLCJ2ZXJ0ZXhDb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJzIiwiaW5kZXgiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSx5QkFBUixDQUR0QjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSwwQkFBUixDQUZ2QjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSwyQkFBUixDQUh4Qjs7QUFLTSxJQUFFSSxPQUFGLEdBQWNGLGNBQWQsQ0FBRUUsT0FBRjtBQUFBLElBQ0VDLDJCQURGLEdBQ2tDRixlQURsQyxDQUNFRSwyQkFERjtBQUFBLElBRUVDLGVBRkYsR0FFbUVQLFFBRm5FLENBRUVPLGVBRkY7QUFBQSxJQUVtQkMsZ0JBRm5CLEdBRW1FUixRQUZuRSxDQUVtQlEsZ0JBRm5CO0FBQUEsSUFFcUNDLHlCQUZyQyxHQUVtRVQsUUFGbkUsQ0FFcUNTLHlCQUZyQzs7SUFJQUMsYzs7Ozs7Ozs7Ozs7MkNBQ2tCQyxVLEVBQVk7QUFBQSxzQkFDeEJDLEtBRHdCLEdBQ2lCRCxVQURqQixDQUN4QkMsS0FEd0I7QUFBQSxzQkFDakJDLEtBRGlCLEdBQ2lCRixVQURqQixDQUNqQkUsS0FEaUI7QUFBQSxzQkFDVkMsTUFEVSxHQUNpQkgsVUFEakIsQ0FDVkcsTUFEVTtBQUFBLHNCQUNGQyxNQURFLEdBQ2lCSixVQURqQixDQUNGSSxNQURFO0FBQUEsc0JBQ01DLE1BRE4sR0FDaUJMLFVBRGpCLENBQ01LLE1BRE47QUFBQSxzQkFFMUJDLGdCQUYwQixHQUVQQywwQkFBMEJULHlCQUExQixFQUFxRE8sTUFBckQsQ0FGTztBQUFBLHNCQUcxQkcsa0JBSDBCLEdBR0xiLDRCQUE0QkcseUJBQTVCLEVBQXVERyxLQUF2RCxFQUE4REMsS0FBOUQsRUFBcUVDLE1BQXJFLEVBQTZFQyxNQUE3RSxDQUhLO0FBQUEsc0JBSTFCSyxjQUowQixHQUlUbEIsY0FBY21CLGNBQWQsQ0FBNkJYLGNBQTdCLEVBQTZDQyxVQUE3QyxFQUF5RFEsa0JBQXpELEVBQTZFWCxnQkFBN0UsRUFBK0ZELGVBQS9GLEVBQWdIVSxnQkFBaEgsQ0FKUzs7O0FBTWhDLHlCQUFPRyxjQUFQO0FBQ0Q7Ozs7RUFSMEJsQixhOztBQVc3Qm9CLE9BQU9DLE9BQVAsR0FBaUJiLGNBQWpCOztBQUVBLFNBQVNRLHlCQUFULENBQW1DVCx5QkFBbkMsRUFBOERPLE1BQTlELEVBQXNFO0FBQ3BFLFVBQU1RLGtDQUFrQ2YsMEJBQTBCZ0IsTUFBbEU7QUFBQSxVQUNNQyxzQkFBc0JGLGtDQUFrQyxDQUQ5RDtBQUFBLFVBQ2tFO0FBQzVERyxxQkFBZVgsTUFGckI7QUFBQSxVQUdNWSxnQkFBZ0IsRUFIdEI7O0FBS0EsV0FBSyxJQUFJQyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRSCxtQkFBNUIsRUFBaURHLE9BQWpELEVBQTBEO0FBQ3hERCwwQkFBY0UsSUFBZCxDQUFtQkgsWUFBbkI7QUFDRDs7QUFFRCxVQUFNVixtQkFBbUJaLFFBQVF1QixhQUFSLENBQXpCLENBVm9FLENBVWxCOztBQUVsRCxhQUFPWCxnQkFBUDtBQUNEIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3lsaW5kZXIgPSByZXF1aXJlKCcuLi9jeWxpbmRlcicpLFxuICAgICAgQ29sb3VyRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY29sb3VyJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEgfSA9IHZlcnRleFV0aWxpdGllcyxcbiAgICAgIHsgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBjeWxpbmRlcjtcblxuY2xhc3MgQ29sb3VyQ3lsaW5kZXIgZXh0ZW5kcyBDb2xvdXJFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBkZXB0aCwgaGVpZ2h0LCBvZmZzZXQsIGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJEYXRhID0gY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCBjb2xvdXIpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uRGF0YSA9IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCB3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0KSxcbiAgICAgICAgICBjb2xvdXJDeWxpbmRlciA9IENvbG91ckVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyQ3lsaW5kZXIsIHByb3BlcnRpZXMsIHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcblxuICAgIHJldHVybiBjb2xvdXJDeWxpbmRlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91ckN5bGluZGVyO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIGNvbG91cikge1xuICBjb25zdCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoID0gaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YS5sZW5ndGgsXG4gICAgICAgIHZlcnRleENvbG91cnNMZW5ndGggPSBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoIC8gNCwgIC8vL1xuICAgICAgICB2ZXJ0ZXhDb2xvdXIgPSBjb2xvdXIsXG4gICAgICAgIHZlcnRleENvbG91cnMgPSBbXTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmVydGV4Q29sb3Vyc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIHZlcnRleENvbG91cnMucHVzaCh2ZXJ0ZXhDb2xvdXIpO1xuICB9XG5cbiAgY29uc3QgdmVydGV4Q29sb3VyRGF0YSA9IGZsYXR0ZW4odmVydGV4Q29sb3Vycyk7ICAvLy9cblxuICByZXR1cm4gdmVydGV4Q29sb3VyRGF0YTtcbn1cbiJdfQ==