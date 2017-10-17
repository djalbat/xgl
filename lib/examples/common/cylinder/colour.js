'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cylinder = require('../cylinder'),
    ColourElement = require('../../../element/colour'),
    vertexUtilities = require('../../../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    calculateVertexNormalData = vertexUtilities.calculateVertexNormalData,
    calculateVertexColourData = vertexUtilities.calculateVertexColourData,
    vertexIndexData = cylinder.vertexIndexData,
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
                      rotations = properties.rotations,
                      colour = properties.colour,
                      vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotations),
                      vertexNormalData = calculateVertexNormalData(vertexPositionData),
                      colourCylinder = ColourElement.fromProperties(ColourCylinder, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);


                  return colourCylinder;
            }
      }]);

      return ColourCylinder;
}(ColourElement);

module.exports = ColourCylinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3lsaW5kZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbImN5bGluZGVyIiwicmVxdWlyZSIsIkNvbG91ckVsZW1lbnQiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhIiwiY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YSIsInZlcnRleEluZGV4RGF0YSIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJDb2xvdXJDeWxpbmRlciIsInByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwib2Zmc2V0Iiwicm90YXRpb25zIiwiY29sb3VyIiwidmVydGV4Q29sb3VyRGF0YSIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJjb2xvdXJDeWxpbmRlciIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLGFBQVIsQ0FBakI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEseUJBQVIsQ0FEdEI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsMkJBQVIsQ0FGeEI7O0lBSVFHLDJCLEdBQXNGRCxlLENBQXRGQywyQjtJQUE2QkMseUIsR0FBeURGLGUsQ0FBekRFLHlCO0lBQTJCQyx5QixHQUE4QkgsZSxDQUE5QkcseUI7SUFDeERDLGUsR0FBK0NQLFEsQ0FBL0NPLGU7SUFBaUJDLHlCLEdBQThCUixRLENBQTlCUSx5Qjs7SUFFbkJDLGM7Ozs7Ozs7Ozs7OzJDQUNrQkMsVSxFQUFZO0FBQUEsc0JBQ3hCQyxLQUR3QixHQUM0QkQsVUFENUIsQ0FDeEJDLEtBRHdCO0FBQUEsc0JBQ2pCQyxNQURpQixHQUM0QkYsVUFENUIsQ0FDakJFLE1BRGlCO0FBQUEsc0JBQ1RDLEtBRFMsR0FDNEJILFVBRDVCLENBQ1RHLEtBRFM7QUFBQSxzQkFDRkMsTUFERSxHQUM0QkosVUFENUIsQ0FDRkksTUFERTtBQUFBLHNCQUNNQyxTQUROLEdBQzRCTCxVQUQ1QixDQUNNSyxTQUROO0FBQUEsc0JBQ2lCQyxNQURqQixHQUM0Qk4sVUFENUIsQ0FDaUJNLE1BRGpCO0FBQUEsc0JBRTFCQyxnQkFGMEIsR0FFUFgsMEJBQTBCRSx5QkFBMUIsRUFBcURRLE1BQXJELENBRk87QUFBQSxzQkFHMUJFLGtCQUgwQixHQUdMZCw0QkFBNEJJLHlCQUE1QixFQUF1REcsS0FBdkQsRUFBOERDLE1BQTlELEVBQXNFQyxLQUF0RSxFQUE2RUMsTUFBN0UsRUFBcUZDLFNBQXJGLENBSEs7QUFBQSxzQkFJMUJJLGdCQUowQixHQUlQZCwwQkFBMEJhLGtCQUExQixDQUpPO0FBQUEsc0JBSzFCRSxjQUwwQixHQUtUbEIsY0FBY21CLGNBQWQsQ0FBNkJaLGNBQTdCLEVBQTZDQyxVQUE3QyxFQUF5RFEsa0JBQXpELEVBQTZFQyxnQkFBN0UsRUFBK0ZaLGVBQS9GLEVBQWdIVSxnQkFBaEgsQ0FMUzs7O0FBT2hDLHlCQUFPRyxjQUFQO0FBQ0Q7Ozs7RUFUMEJsQixhOztBQVk3Qm9CLE9BQU9DLE9BQVAsR0FBaUJkLGNBQWpCIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3lsaW5kZXIgPSByZXF1aXJlKCcuLi9jeWxpbmRlcicpLFxuICAgICAgQ29sb3VyRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY29sb3VyJyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvdmVydGV4Jyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhLCBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhLCBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRleEluZGV4RGF0YSwgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gY3lsaW5kZXI7XG5cbmNsYXNzIENvbG91ckN5bGluZGVyIGV4dGVuZHMgQ29sb3VyRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgb2Zmc2V0LCByb3RhdGlvbnMsIGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJEYXRhID0gY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCBjb2xvdXIpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uRGF0YSA9IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgb2Zmc2V0LCByb3RhdGlvbnMpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICAgICAgY29sb3VyQ3lsaW5kZXIgPSBDb2xvdXJFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91ckN5bGluZGVyLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdmVydGV4Q29sb3VyRGF0YSk7XG5cbiAgICByZXR1cm4gY29sb3VyQ3lsaW5kZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJDeWxpbmRlcjtcbiJdfQ==