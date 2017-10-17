'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    ColourElement = require('../../../element/colour'),
    vertexUtilities = require('../../../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    calculateVertexNormalData = vertexUtilities.calculateVertexNormalData,
    calculateVertexColourData = vertexUtilities.calculateVertexColourData,
    vertexIndexData = cuboid.vertexIndexData,
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
                      rotations = properties.rotations,
                      colour = properties.colour,
                      vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotations),
                      vertexNormalData = calculateVertexNormalData(vertexPositionData),
                      colourCuboid = ColourElement.fromProperties(ColourCuboid, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);


                  return colourCuboid;
            }
      }]);

      return ColourCuboid;
}(ColourElement);

module.exports = ColourCuboid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkL2NvbG91ci5qcyJdLCJuYW1lcyI6WyJjdWJvaWQiLCJyZXF1aXJlIiwiQ29sb3VyRWxlbWVudCIsInZlcnRleFV0aWxpdGllcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsIkNvbG91ckN1Ym9pZCIsInByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwib2Zmc2V0Iiwicm90YXRpb25zIiwiY29sb3VyIiwidmVydGV4Q29sb3VyRGF0YSIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJjb2xvdXJDdWJvaWQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEseUJBQVIsQ0FEdEI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsMkJBQVIsQ0FGeEI7O0lBSVFHLDJCLEdBQXNGRCxlLENBQXRGQywyQjtJQUE2QkMseUIsR0FBeURGLGUsQ0FBekRFLHlCO0lBQTJCQyx5QixHQUE4QkgsZSxDQUE5QkcseUI7SUFDeERDLGUsR0FBK0NQLE0sQ0FBL0NPLGU7SUFBaUJDLHlCLEdBQThCUixNLENBQTlCUSx5Qjs7SUFFbkJDLFk7Ozs7Ozs7Ozs7OzJDQUNrQkMsVSxFQUFZO0FBQUEsc0JBQ3hCQyxLQUR3QixHQUM0QkQsVUFENUIsQ0FDeEJDLEtBRHdCO0FBQUEsc0JBQ2pCQyxNQURpQixHQUM0QkYsVUFENUIsQ0FDakJFLE1BRGlCO0FBQUEsc0JBQ1RDLEtBRFMsR0FDNEJILFVBRDVCLENBQ1RHLEtBRFM7QUFBQSxzQkFDRkMsTUFERSxHQUM0QkosVUFENUIsQ0FDRkksTUFERTtBQUFBLHNCQUNNQyxTQUROLEdBQzRCTCxVQUQ1QixDQUNNSyxTQUROO0FBQUEsc0JBQ2lCQyxNQURqQixHQUM0Qk4sVUFENUIsQ0FDaUJNLE1BRGpCO0FBQUEsc0JBRTFCQyxnQkFGMEIsR0FFUFgsMEJBQTBCRSx5QkFBMUIsRUFBcURRLE1BQXJELENBRk87QUFBQSxzQkFHMUJFLGtCQUgwQixHQUdMZCw0QkFBNEJJLHlCQUE1QixFQUF1REcsS0FBdkQsRUFBOERDLE1BQTlELEVBQXNFQyxLQUF0RSxFQUE2RUMsTUFBN0UsRUFBcUZDLFNBQXJGLENBSEs7QUFBQSxzQkFJMUJJLGdCQUowQixHQUlQZCwwQkFBMEJhLGtCQUExQixDQUpPO0FBQUEsc0JBSzFCRSxZQUwwQixHQUtYbEIsY0FBY21CLGNBQWQsQ0FBNkJaLFlBQTdCLEVBQTJDQyxVQUEzQyxFQUF1RFEsa0JBQXZELEVBQTJFQyxnQkFBM0UsRUFBNkZaLGVBQTdGLEVBQThHVSxnQkFBOUcsQ0FMVzs7O0FBT2hDLHlCQUFPRyxZQUFQO0FBQ0Q7Ozs7RUFUd0JsQixhOztBQVkzQm9CLE9BQU9DLE9BQVAsR0FBaUJkLFlBQWpCIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3Vib2lkID0gcmVxdWlyZSgnLi4vY3Vib2lkJyksXG4gICAgICBDb2xvdXJFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jb2xvdXInKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEsIGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEsIGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEgfSA9IHZlcnRleFV0aWxpdGllcyxcbiAgICAgIHsgdmVydGV4SW5kZXhEYXRhLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBjdWJvaWQ7XG5cbmNsYXNzIENvbG91ckN1Ym9pZCBleHRlbmRzIENvbG91ckVsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIG9mZnNldCwgcm90YXRpb25zLCBjb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdmVydGV4Q29sb3VyRGF0YSA9IGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgY29sb3VyKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgd2lkdGgsIGhlaWdodCwgZGVwdGgsIG9mZnNldCwgcm90YXRpb25zKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICAgIGNvbG91ckN1Ym9pZCA9IENvbG91ckVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyQ3Vib2lkLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdmVydGV4Q29sb3VyRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91ckN1Ym9pZDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91ckN1Ym9pZDtcbiJdfQ==