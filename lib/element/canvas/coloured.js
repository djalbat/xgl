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

  function ColouredCanvasElement(transform, transformations, colour) {
    _classCallCheck(this, ColouredCanvasElement);

    var _this = _possibleConstructorReturn(this, (ColouredCanvasElement.__proto__ || Object.getPrototypeOf(ColouredCanvasElement)).call(this, transform, transformations));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZmxhdHRlbiIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsInRyYW5zZm9ybSIsInRyYW5zZm9ybWF0aW9ucyIsImNvbG91ciIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCIsImxlbmd0aCIsInZlcnRleENvbG91cnNMZW5ndGgiLCJ2ZXJ0ZXhDb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJzIiwiaW5kZXgiLCJwdXNoIiwidmVydGV4Q29sb3VyRGF0YSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4SW5kZXhEYXRhIiwiY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhIiwidmVydGV4Tm9ybWFsRGF0YSIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhIiwiYWRkVmVydGV4UG9zaXRpb25EYXRhIiwiYWRkVmVydGV4SW5kZXhEYXRhIiwiYWRkVmVydGV4Tm9ybWFsRGF0YSIsImFkZFZlcnRleENvbG91ckRhdGEiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJjb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLHNCQUFSLENBQXRCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLHVCQUFSLENBRHZCOztJQUdRRSxPLEdBQVlELGMsQ0FBWkMsTzs7SUFFRkMscUI7OztBQUNKLGlDQUFZQyxTQUFaLEVBQXVCQyxlQUF2QixFQUF3Q0MsTUFBeEMsRUFBZ0Q7QUFBQTs7QUFBQSw4SUFDeENGLFNBRHdDLEVBQzdCQyxlQUQ2Qjs7QUFHOUMsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBSDhDO0FBSS9DOzs7OzhDQUV5QkMsa0IsRUFBb0I7QUFDNUMsVUFBTUMsMkJBQTJCRCxtQkFBbUJFLE1BQXBEO0FBQUEsVUFDTUMsc0JBQXNCRiwyQkFBMkIsQ0FEdkQ7QUFBQSxVQUMyRDtBQUNyREcscUJBQWUsS0FBS0wsTUFGMUI7QUFBQSxVQUdNTSxnQkFBZ0IsRUFIdEI7O0FBS0EsV0FBSyxJQUFJQyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRSCxtQkFBNUIsRUFBaURHLE9BQWpELEVBQTBEO0FBQ3hERCxzQkFBY0UsSUFBZCxDQUFtQkgsWUFBbkI7QUFDRDs7QUFFRCxVQUFNSSxtQkFBbUJiLFFBQVFVLGFBQVIsQ0FBekIsQ0FWNEMsQ0FVTTs7QUFFbEQsYUFBT0csZ0JBQVA7QUFDRDs7OzJCQUVNQyxjLEVBQWdCQyxlLEVBQWlCO0FBQ3RDLFVBQU1WLHFCQUFxQixLQUFLVywyQkFBTCxFQUEzQjtBQUFBLFVBQ01DLGtCQUFrQixLQUFLQyx3QkFBTCxDQUE4QmIsa0JBQTlCLENBRHhCO0FBQUEsVUFFTWMsbUJBQW1CLEtBQUtDLHlCQUFMLENBQStCZixrQkFBL0IsQ0FGekI7QUFBQSxVQUdNUSxtQkFBbUIsS0FBS1EseUJBQUwsQ0FBK0JoQixrQkFBL0IsQ0FIekI7O0FBS0FTLHFCQUFlUSxxQkFBZixDQUFxQ2pCLGtCQUFyQztBQUNBUyxxQkFBZVMsa0JBQWYsQ0FBa0NOLGVBQWxDO0FBQ0FILHFCQUFlVSxtQkFBZixDQUFtQ0wsZ0JBQW5DO0FBQ0FMLHFCQUFlVyxtQkFBZixDQUFtQ1osZ0JBQW5DO0FBQ0Q7OzttQ0FFcUJhLEssRUFBT0MsVSxFQUFZO0FBQ2pDLFVBQUV2QixNQUFGLEdBQWF1QixVQUFiLENBQUV2QixNQUFGO0FBQUEsVUFDQXdCLHFCQURBLEdBQ3dCL0IsY0FBY2dDLGNBQWQsQ0FBNkJILEtBQTdCLEVBQW9DQyxVQUFwQyxFQUFnRHZCLE1BQWhELENBRHhCOzs7QUFHTixhQUFPd0IscUJBQVA7QUFDRDs7OztFQXZDaUMvQixhOztBQTBDcENpQyxPQUFPQyxPQUFQLEdBQWlCOUIscUJBQWpCIiwiZmlsZSI6ImNvbG91cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIHRyYW5zZm9ybWF0aW9ucywgY29sb3VyKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtLCB0cmFuc2Zvcm1hdGlvbnMpO1xuXG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCA9IHZlcnRleFBvc2l0aW9uRGF0YS5sZW5ndGgsXG4gICAgICAgICAgdmVydGV4Q29sb3Vyc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCAvIDMsICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLmNvbG91cixcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmVydGV4Q29sb3Vyc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4Q29sb3VyRGF0YSA9IGZsYXR0ZW4odmVydGV4Q29sb3Vycyk7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJEYXRhO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4RGF0YSA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICAgIHZlcnRleENvbG91ckRhdGEgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEodmVydGV4UG9zaXRpb25EYXRhKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9uRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhJbmRleERhdGEpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbERhdGEodmVydGV4Tm9ybWFsRGF0YSk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Q29sb3VyRGF0YSh2ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91cmVkQ2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvbG91cik7XG5cbiAgICByZXR1cm4gY29sb3VyZWRDYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRDYW52YXNFbGVtZW50O1xuIl19