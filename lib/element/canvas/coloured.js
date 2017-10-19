'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    arrayUtilities = require('../../utilities/array');

var flatten = arrayUtilities.flatten;

var ColouredCanvasElement = function (_CanvasElement) {
  _inherits(ColouredCanvasElement, _CanvasElement);

  function ColouredCanvasElement(width, height, depth, dimensions, position, rotations, transformations, colour) {
    _classCallCheck(this, ColouredCanvasElement);

    var _this = _possibleConstructorReturn(this, (ColouredCanvasElement.__proto__ || Object.getPrototypeOf(ColouredCanvasElement)).call(this, width, height, depth, dimensions, position, rotations, transformations));

    _this.colour = colour;
    return _this;
  }

  _createClass(ColouredCanvasElement, [{
    key: 'calculateVertexColourData',
    value: function calculateVertexColourData(vertexPositionData) {
      var vertexPositionDataLength = vertexPositionData.length,
          vertexColoursLength = vertexPositionDataLength / 3,
          ///
      vertexColour = this.colour,
          vertexColours = [];

      for (var index = 0; index < vertexColoursLength; index++) {
        vertexColours.push(vertexColour);
      }

      var vertexColourData = flatten(vertexColours); ///

      return vertexColourData;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer) {
      var vertexPositionData = this.calculateVertexPositionData(),
          vertexIndexData = this.calculateVertexIndexData(vertexPositionData),
          vertexNormalData = this.calculateVertexNormalData(vertexPositionData),
          vertexColourData = this.calculateVertexColourData(vertexPositionData);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZmxhdHRlbiIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJkaW1lbnNpb25zIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiLCJ0cmFuc2Zvcm1hdGlvbnMiLCJjb2xvdXIiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0ZXhDb2xvdXJzTGVuZ3RoIiwidmVydGV4Q29sb3VyIiwidmVydGV4Q29sb3VycyIsImluZGV4IiwicHVzaCIsInZlcnRleENvbG91ckRhdGEiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleEluZGV4RGF0YSIsImNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhIiwiY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YSIsImFkZFZlcnRleFBvc2l0aW9uRGF0YSIsImFkZFZlcnRleEluZGV4RGF0YSIsImFkZFZlcnRleE5vcm1hbERhdGEiLCJhZGRWZXJ0ZXhDb2xvdXJEYXRhIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiY29sb3VyZWRDYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxzQkFBUixDQUF0QjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSx1QkFBUixDQUR2Qjs7SUFHUUUsTyxHQUFZRCxjLENBQVpDLE87O0lBRUZDLHFCOzs7QUFDSixpQ0FBWUMsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkJDLEtBQTNCLEVBQWtDQyxVQUFsQyxFQUE4Q0MsUUFBOUMsRUFBd0RDLFNBQXhELEVBQW1FQyxlQUFuRSxFQUFvRkMsTUFBcEYsRUFBNEY7QUFBQTs7QUFBQSw4SUFDcEZQLEtBRG9GLEVBQzdFQyxNQUQ2RSxFQUNyRUMsS0FEcUUsRUFDOURDLFVBRDhELEVBQ2xEQyxRQURrRCxFQUN4Q0MsU0FEd0MsRUFDN0JDLGVBRDZCOztBQUcxRixVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFIMEY7QUFJM0Y7Ozs7OENBRXlCQyxrQixFQUFvQjtBQUM1QyxVQUFNQywyQkFBMkJELG1CQUFtQkUsTUFBcEQ7QUFBQSxVQUNNQyxzQkFBc0JGLDJCQUEyQixDQUR2RDtBQUFBLFVBQzJEO0FBQ3JERyxxQkFBZSxLQUFLTCxNQUYxQjtBQUFBLFVBR01NLGdCQUFnQixFQUh0Qjs7QUFLQSxXQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFILG1CQUE1QixFQUFpREcsT0FBakQsRUFBMEQ7QUFDeERELHNCQUFjRSxJQUFkLENBQW1CSCxZQUFuQjtBQUNEOztBQUVELFVBQU1JLG1CQUFtQmxCLFFBQVFlLGFBQVIsQ0FBekIsQ0FWNEMsQ0FVTTs7QUFFbEQsYUFBT0csZ0JBQVA7QUFDRDs7OzJCQUVNQyxjLEVBQWdCQyxlLEVBQWlCO0FBQ3RDLFVBQU1WLHFCQUFxQixLQUFLVywyQkFBTCxFQUEzQjtBQUFBLFVBQ01DLGtCQUFrQixLQUFLQyx3QkFBTCxDQUE4QmIsa0JBQTlCLENBRHhCO0FBQUEsVUFFTWMsbUJBQW1CLEtBQUtDLHlCQUFMLENBQStCZixrQkFBL0IsQ0FGekI7QUFBQSxVQUdNUSxtQkFBbUIsS0FBS1EseUJBQUwsQ0FBK0JoQixrQkFBL0IsQ0FIekI7O0FBS0FTLHFCQUFlUSxxQkFBZixDQUFxQ2pCLGtCQUFyQztBQUNBUyxxQkFBZVMsa0JBQWYsQ0FBa0NOLGVBQWxDO0FBQ0FILHFCQUFlVSxtQkFBZixDQUFtQ0wsZ0JBQW5DO0FBQ0FMLHFCQUFlVyxtQkFBZixDQUFtQ1osZ0JBQW5DO0FBQ0Q7OzttQ0FFcUJhLEssRUFBT0MsVSxFQUFZO0FBQ2pDLFVBQUV2QixNQUFGLEdBQWF1QixVQUFiLENBQUV2QixNQUFGO0FBQUEsVUFDQXdCLHFCQURBLEdBQ3dCcEMsY0FBY3FDLGNBQWQsQ0FBNkJILEtBQTdCLEVBQW9DQyxVQUFwQyxFQUFnRHZCLE1BQWhELENBRHhCOzs7QUFHTixhQUFPd0IscUJBQVA7QUFDRDs7OztFQXZDaUNwQyxhOztBQTBDcENzQyxPQUFPQyxPQUFQLEdBQWlCbkMscUJBQWpCIiwiZmlsZSI6ImNvbG91cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgZGltZW5zaW9ucywgcG9zaXRpb24sIHJvdGF0aW9ucywgdHJhbnNmb3JtYXRpb25zLCBjb2xvdXIpIHtcbiAgICBzdXBlcih3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgZGltZW5zaW9ucywgcG9zaXRpb24sIHJvdGF0aW9ucywgdHJhbnNmb3JtYXRpb25zKTtcblxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbkRhdGEubGVuZ3RoLFxuICAgICAgICAgIHZlcnRleENvbG91cnNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggLyAzLCAgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VyID0gdGhpcy5jb2xvdXIsXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZlcnRleENvbG91cnNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZlcnRleENvbG91cnMucHVzaCh2ZXJ0ZXhDb2xvdXIpO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnRleENvbG91ckRhdGEgPSBmbGF0dGVuKHZlcnRleENvbG91cnMpOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VyRGF0YTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25EYXRhID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleERhdGEgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEodmVydGV4UG9zaXRpb25EYXRhKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJEYXRhID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodmVydGV4UG9zaXRpb25EYXRhKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleE5vcm1hbERhdGEpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleENvbG91ckRhdGEodmVydGV4Q29sb3VyRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJlZENhbnZhc0VsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb2xvdXIpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkQ2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkQ2FudmFzRWxlbWVudDtcbiJdfQ==