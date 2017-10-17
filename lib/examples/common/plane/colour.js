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
                      offset = properties.offset,
                      rotations = properties.rotations,
                      colour = properties.colour,
                      vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotations),
                      vertexNormalData = calculateVertexNormalData(vertexPositionData),
                      colourPlane = ColourElement.fromProperties(ColourPlane, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);


                  return colourPlane;
            }
      }]);

      return ColourPlane;
}(ColourElement);

module.exports = ColourPlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vcGxhbmUvY29sb3VyLmpzIl0sIm5hbWVzIjpbInBsYW5lIiwicmVxdWlyZSIsIkNvbG91ckVsZW1lbnQiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhIiwiY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YSIsInZlcnRleEluZGV4RGF0YSIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJDb2xvdXJQbGFuZSIsInByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwib2Zmc2V0Iiwicm90YXRpb25zIiwiY29sb3VyIiwidmVydGV4Q29sb3VyRGF0YSIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJjb2xvdXJQbGFuZSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSx5QkFBUixDQUR0QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSwyQkFBUixDQUZ4Qjs7SUFJUUcsMkIsR0FBc0ZELGUsQ0FBdEZDLDJCO0lBQTZCQyx5QixHQUF5REYsZSxDQUF6REUseUI7SUFBMkJDLHlCLEdBQThCSCxlLENBQTlCRyx5QjtJQUN4REMsZSxHQUErQ1AsSyxDQUEvQ08sZTtJQUFpQkMseUIsR0FBOEJSLEssQ0FBOUJRLHlCOztJQUVuQkMsVzs7Ozs7Ozs7Ozs7MkNBQ2tCQyxVLEVBQVk7QUFBQSxzQkFDeEJDLEtBRHdCLEdBQzRCRCxVQUQ1QixDQUN4QkMsS0FEd0I7QUFBQSxzQkFDakJDLE1BRGlCLEdBQzRCRixVQUQ1QixDQUNqQkUsTUFEaUI7QUFBQSxzQkFDVEMsS0FEUyxHQUM0QkgsVUFENUIsQ0FDVEcsS0FEUztBQUFBLHNCQUNGQyxNQURFLEdBQzRCSixVQUQ1QixDQUNGSSxNQURFO0FBQUEsc0JBQ01DLFNBRE4sR0FDNEJMLFVBRDVCLENBQ01LLFNBRE47QUFBQSxzQkFDaUJDLE1BRGpCLEdBQzRCTixVQUQ1QixDQUNpQk0sTUFEakI7QUFBQSxzQkFFMUJDLGdCQUYwQixHQUVQWCwwQkFBMEJFLHlCQUExQixFQUFxRFEsTUFBckQsQ0FGTztBQUFBLHNCQUcxQkUsa0JBSDBCLEdBR0xkLDRCQUE0QkkseUJBQTVCLEVBQXVERyxLQUF2RCxFQUE4REMsTUFBOUQsRUFBc0VDLEtBQXRFLEVBQTZFQyxNQUE3RSxFQUFxRkMsU0FBckYsQ0FISztBQUFBLHNCQUkxQkksZ0JBSjBCLEdBSVBkLDBCQUEwQmEsa0JBQTFCLENBSk87QUFBQSxzQkFLMUJFLFdBTDBCLEdBS1psQixjQUFjbUIsY0FBZCxDQUE2QlosV0FBN0IsRUFBMENDLFVBQTFDLEVBQXNEUSxrQkFBdEQsRUFBMEVDLGdCQUExRSxFQUE0RlosZUFBNUYsRUFBNkdVLGdCQUE3RyxDQUxZOzs7QUFPaEMseUJBQU9HLFdBQVA7QUFDRDs7OztFQVR1QmxCLGE7O0FBWTFCb0IsT0FBT0MsT0FBUCxHQUFpQmQsV0FBakIiLCJmaWxlIjoiY29sb3VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwbGFuZSA9IHJlcXVpcmUoJy4uL3BsYW5lJyksXG4gICAgICBDb2xvdXJFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jb2xvdXInKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEsIGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEsIGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEgfSA9IHZlcnRleFV0aWxpdGllcyxcbiAgICAgIHsgdmVydGV4SW5kZXhEYXRhLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBwbGFuZTtcblxuY2xhc3MgQ29sb3VyUGxhbmUgZXh0ZW5kcyBDb2xvdXJFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBvZmZzZXQsIHJvdGF0aW9ucywgY29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZlcnRleENvbG91ckRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIGNvbG91ciksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25EYXRhID0gY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBvZmZzZXQsIHJvdGF0aW9ucyksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEodmVydGV4UG9zaXRpb25EYXRhKSxcbiAgICAgICAgICBjb2xvdXJQbGFuZSA9IENvbG91ckVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyUGxhbmUsIHByb3BlcnRpZXMsIHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUGxhbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJQbGFuZTtcbiJdfQ==