'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    vertexUtilities = require('../../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    calculateVertexNormalData = vertexUtilities.calculateVertexNormalData,
    calculateVertexIndexData = vertexUtilities.calculateVertexIndexData,
    calculateVertexColourData = vertexUtilities.calculateVertexColourData;

var ColouredCanvasElement = function (_CanvasElement) {
  _inherits(ColouredCanvasElement, _CanvasElement);

  function ColouredCanvasElement(width, height, depth, dimensions, position, rotations, transformations, colour) {
    _classCallCheck(this, ColouredCanvasElement);

    var _this = _possibleConstructorReturn(this, (ColouredCanvasElement.__proto__ || Object.getPrototypeOf(ColouredCanvasElement)).call(this, width, height, depth, dimensions, position, rotations, transformations));

    _this.colour = colour;
    return _this;
  }

  _createClass(ColouredCanvasElement, [{
    key: 'create',
    value: function create(colourRenderer, textureRenderer) {
      var initialVertexPositionData = this.getInitialVertexPositionData(),
          width = this.getWidth(),
          height = this.getHeight(),
          depth = this.getDepth(),
          dimensions = this.getDimensions(),
          position = this.getPosition(),
          rotations = this.getRotations(),
          transformations = this.getTransformations(),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, dimensions, position, rotations, transformations),
          vertexIndexData = calculateVertexIndexData(initialVertexPositionData),
          vertexNormalData = calculateVertexNormalData(vertexPositionData),
          vertexColourData = calculateVertexColourData(initialVertexPositionData, this.colour);

      colourRenderer.addVertexPositionData(vertexPositionData);
      colourRenderer.addVertexIndexData(vertexIndexData);
      colourRenderer.addVertexNormalData(vertexNormalData);
      colourRenderer.addVertexColourData(vertexColourData);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var colour = properties.colour,
          colouredCanvasElement = CanvasElement.fromProperties(Class, properties, colour);


      return colouredCanvasElement;
    }
  }]);

  return ColouredCanvasElement;
}(CanvasElement);

module.exports = ColouredCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsInZlcnRleFV0aWxpdGllcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhIiwiQ29sb3VyZWRDYW52YXNFbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJkZXB0aCIsImRpbWVuc2lvbnMiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsInRyYW5zZm9ybWF0aW9ucyIsImNvbG91ciIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsImdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsImdldERlcHRoIiwiZ2V0RGltZW5zaW9ucyIsImdldFBvc2l0aW9uIiwiZ2V0Um90YXRpb25zIiwiZ2V0VHJhbnNmb3JtYXRpb25zIiwidmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4SW5kZXhEYXRhIiwidmVydGV4Tm9ybWFsRGF0YSIsInZlcnRleENvbG91ckRhdGEiLCJhZGRWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJhZGRWZXJ0ZXhJbmRleERhdGEiLCJhZGRWZXJ0ZXhOb3JtYWxEYXRhIiwiYWRkVmVydGV4Q29sb3VyRGF0YSIsIkNsYXNzIiwicHJvcGVydGllcyIsImNvbG91cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsc0JBQVIsQ0FBdEI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsd0JBQVIsQ0FEeEI7O0lBR1FFLDJCLEdBQWdIRCxlLENBQWhIQywyQjtJQUE2QkMseUIsR0FBbUZGLGUsQ0FBbkZFLHlCO0lBQTJCQyx3QixHQUF3REgsZSxDQUF4REcsd0I7SUFBMEJDLHlCLEdBQThCSixlLENBQTlCSSx5Qjs7SUFFcEZDLHFCOzs7QUFDSixpQ0FBWUMsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkJDLEtBQTNCLEVBQWtDQyxVQUFsQyxFQUE4Q0MsUUFBOUMsRUFBd0RDLFNBQXhELEVBQW1FQyxlQUFuRSxFQUFvRkMsTUFBcEYsRUFBNEY7QUFBQTs7QUFBQSw4SUFDcEZQLEtBRG9GLEVBQzdFQyxNQUQ2RSxFQUNyRUMsS0FEcUUsRUFDOURDLFVBRDhELEVBQ2xEQyxRQURrRCxFQUN4Q0MsU0FEd0MsRUFDN0JDLGVBRDZCOztBQUcxRixVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFIMEY7QUFJM0Y7Ozs7MkJBRU1DLGMsRUFBZ0JDLGUsRUFBaUI7QUFDdEMsVUFBTUMsNEJBQTRCLEtBQUtDLDRCQUFMLEVBQWxDO0FBQUEsVUFDSVgsUUFBUSxLQUFLWSxRQUFMLEVBRFo7QUFBQSxVQUVJWCxTQUFTLEtBQUtZLFNBQUwsRUFGYjtBQUFBLFVBR0lYLFFBQVEsS0FBS1ksUUFBTCxFQUhaO0FBQUEsVUFJSVgsYUFBYSxLQUFLWSxhQUFMLEVBSmpCO0FBQUEsVUFLSVgsV0FBVyxLQUFLWSxXQUFMLEVBTGY7QUFBQSxVQU1JWCxZQUFZLEtBQUtZLFlBQUwsRUFOaEI7QUFBQSxVQU9JWCxrQkFBa0IsS0FBS1ksa0JBQUwsRUFQdEI7QUFBQSxVQVFJQyxxQkFBcUJ4Qiw0QkFBNEJlLHlCQUE1QixFQUF1RFYsS0FBdkQsRUFBOERDLE1BQTlELEVBQXNFQyxLQUF0RSxFQUE2RUMsVUFBN0UsRUFBeUZDLFFBQXpGLEVBQW1HQyxTQUFuRyxFQUE4R0MsZUFBOUcsQ0FSekI7QUFBQSxVQVNJYyxrQkFBa0J2Qix5QkFBeUJhLHlCQUF6QixDQVR0QjtBQUFBLFVBVUlXLG1CQUFtQnpCLDBCQUEwQnVCLGtCQUExQixDQVZ2QjtBQUFBLFVBV0lHLG1CQUFtQnhCLDBCQUEwQlkseUJBQTFCLEVBQXFELEtBQUtILE1BQTFELENBWHZCOztBQWFBQyxxQkFBZWUscUJBQWYsQ0FBcUNKLGtCQUFyQztBQUNBWCxxQkFBZWdCLGtCQUFmLENBQWtDSixlQUFsQztBQUNBWixxQkFBZWlCLG1CQUFmLENBQW1DSixnQkFBbkM7QUFDQWIscUJBQWVrQixtQkFBZixDQUFtQ0osZ0JBQW5DO0FBQ0Q7OzttQ0FFcUJLLEssRUFBT0MsVSxFQUFZO0FBQ2pDLFVBQUVyQixNQUFGLEdBQWFxQixVQUFiLENBQUVyQixNQUFGO0FBQUEsVUFDQXNCLHFCQURBLEdBQ3dCckMsY0FBY3NDLGNBQWQsQ0FBNkJILEtBQTdCLEVBQW9DQyxVQUFwQyxFQUFnRHJCLE1BQWhELENBRHhCOzs7QUFHTixhQUFPc0IscUJBQVA7QUFDRDs7OztFQWhDaUNyQyxhOztBQW1DcEN1QyxPQUFPQyxPQUFQLEdBQWlCakMscUJBQWpCIiwiZmlsZSI6ImNvbG91cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEsIGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEsIGNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSwgY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YSB9ID0gdmVydGV4VXRpbGl0aWVzO1xuXG5jbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgZGVwdGgsIGRpbWVuc2lvbnMsIHBvc2l0aW9uLCByb3RhdGlvbnMsIHRyYW5zZm9ybWF0aW9ucywgY29sb3VyKSB7XG4gICAgc3VwZXIod2lkdGgsIGhlaWdodCwgZGVwdGgsIGRpbWVuc2lvbnMsIHBvc2l0aW9uLCByb3RhdGlvbnMsIHRyYW5zZm9ybWF0aW9ucyk7XG5cbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSA9IHRoaXMuZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSgpLFxuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgZGVwdGggPSB0aGlzLmdldERlcHRoKCksXG4gICAgICAgIGRpbWVuc2lvbnMgPSB0aGlzLmdldERpbWVuc2lvbnMoKSxcbiAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgIHJvdGF0aW9ucyA9IHRoaXMuZ2V0Um90YXRpb25zKCksXG4gICAgICAgIHRyYW5zZm9ybWF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNmb3JtYXRpb25zKCksXG4gICAgICAgIHZlcnRleFBvc2l0aW9uRGF0YSA9IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgZGltZW5zaW9ucywgcG9zaXRpb24sIHJvdGF0aW9ucywgdHJhbnNmb3JtYXRpb25zKSxcbiAgICAgICAgdmVydGV4SW5kZXhEYXRhID0gY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICB2ZXJ0ZXhDb2xvdXJEYXRhID0gY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCB0aGlzLmNvbG91cik7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodmVydGV4UG9zaXRpb25EYXRhKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleE5vcm1hbERhdGEpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleENvbG91ckRhdGEodmVydGV4Q29sb3VyRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJlZENhbnZhc0VsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb2xvdXIpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkQ2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkQ2FudmFzRWxlbWVudDtcbiJdfQ==