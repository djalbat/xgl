'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var plane = require('../plane'),
    ColourElement = require('../../../element/colour'),
    vertexUtilities = require('../../../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    calculateVertexColourData = vertexUtilities.calculateVertexColourData,
    vertexIndexData = plane.vertexIndexData,
    vertexNormalData = plane.vertexNormalData,
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
                      rotation = properties.rotation,
                      colour = properties.colour,
                      vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotation),
                      colourPlane = ColourElement.fromProperties(ColourPlane, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);


                  return colourPlane;
            }
      }]);

      return ColourPlane;
}(ColourElement);

module.exports = ColourPlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vcGxhbmUvY29sb3VyLmpzIl0sIm5hbWVzIjpbInBsYW5lIiwicmVxdWlyZSIsIkNvbG91ckVsZW1lbnQiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwidmVydGV4Tm9ybWFsRGF0YSIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJDb2xvdXJQbGFuZSIsInByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwib2Zmc2V0Iiwicm90YXRpb24iLCJjb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJEYXRhIiwidmVydGV4UG9zaXRpb25EYXRhIiwiY29sb3VyUGxhbmUiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxVQUFSLENBQWQ7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEseUJBQVIsQ0FEdEI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsMkJBQVIsQ0FGeEI7O0lBSVFHLDJCLEdBQTJERCxlLENBQTNEQywyQjtJQUE2QkMseUIsR0FBOEJGLGUsQ0FBOUJFLHlCO0lBQzdCQyxlLEdBQWlFTixLLENBQWpFTSxlO0lBQWlCQyxnQixHQUFnRFAsSyxDQUFoRE8sZ0I7SUFBa0JDLHlCLEdBQThCUixLLENBQTlCUSx5Qjs7SUFFckNDLFc7Ozs7Ozs7Ozs7OzJDQUNrQkMsVSxFQUFZO0FBQUEsc0JBQ3hCQyxLQUR3QixHQUMyQkQsVUFEM0IsQ0FDeEJDLEtBRHdCO0FBQUEsc0JBQ2pCQyxNQURpQixHQUMyQkYsVUFEM0IsQ0FDakJFLE1BRGlCO0FBQUEsc0JBQ1RDLEtBRFMsR0FDMkJILFVBRDNCLENBQ1RHLEtBRFM7QUFBQSxzQkFDRkMsTUFERSxHQUMyQkosVUFEM0IsQ0FDRkksTUFERTtBQUFBLHNCQUNNQyxRQUROLEdBQzJCTCxVQUQzQixDQUNNSyxRQUROO0FBQUEsc0JBQ2dCQyxNQURoQixHQUMyQk4sVUFEM0IsQ0FDZ0JNLE1BRGhCO0FBQUEsc0JBRTFCQyxnQkFGMEIsR0FFUFosMEJBQTBCRyx5QkFBMUIsRUFBcURRLE1BQXJELENBRk87QUFBQSxzQkFHMUJFLGtCQUgwQixHQUdMZCw0QkFBNEJJLHlCQUE1QixFQUF1REcsS0FBdkQsRUFBOERDLE1BQTlELEVBQXNFQyxLQUF0RSxFQUE2RUMsTUFBN0UsRUFBcUZDLFFBQXJGLENBSEs7QUFBQSxzQkFJMUJJLFdBSjBCLEdBSVpqQixjQUFja0IsY0FBZCxDQUE2QlgsV0FBN0IsRUFBMENDLFVBQTFDLEVBQXNEUSxrQkFBdEQsRUFBMEVYLGdCQUExRSxFQUE0RkQsZUFBNUYsRUFBNkdXLGdCQUE3RyxDQUpZOzs7QUFNaEMseUJBQU9FLFdBQVA7QUFDRDs7OztFQVJ1QmpCLGE7O0FBVzFCbUIsT0FBT0MsT0FBUCxHQUFpQmIsV0FBakIiLCJmaWxlIjoiY29sb3VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwbGFuZSA9IHJlcXVpcmUoJy4uL3BsYW5lJyksXG4gICAgICBDb2xvdXJFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jb2xvdXInKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEsIGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEgfSA9IHZlcnRleFV0aWxpdGllcyxcbiAgICAgIHsgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBwbGFuZTtcblxuY2xhc3MgQ29sb3VyUGxhbmUgZXh0ZW5kcyBDb2xvdXJFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBvZmZzZXQsIHJvdGF0aW9uLCBjb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdmVydGV4Q29sb3VyRGF0YSA9IGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgY29sb3VyKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgd2lkdGgsIGhlaWdodCwgZGVwdGgsIG9mZnNldCwgcm90YXRpb24pLFxuICAgICAgICAgIGNvbG91clBsYW5lID0gQ29sb3VyRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJQbGFuZSwgcHJvcGVydGllcywgdmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHZlcnRleENvbG91ckRhdGEpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJQbGFuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clBsYW5lO1xuIl19