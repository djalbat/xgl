'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    arrayUtilities = require('../../utilities/array');

var flatten = arrayUtilities.flatten;

var ColouredCanvasElement = function (_CanvasElement) {
  _inherits(ColouredCanvasElement, _CanvasElement);

  function ColouredCanvasElement(transform, colour) {
    _classCallCheck(this, ColouredCanvasElement);

    var _this = _possibleConstructorReturn(this, (ColouredCanvasElement.__proto__ || Object.getPrototypeOf(ColouredCanvasElement)).call(this, transform));

    _this.colour = colour;
    return _this;
  }

  _createClass(ColouredCanvasElement, [{
    key: 'calculateVertexColours',
    value: function calculateVertexColours(vertexPositions) {
      var vertexPositionsLength = vertexPositions.length,
          vertexColoursLength = vertexPositionsLength,
          ///
      vertexColour = this.colour,
          vertexColours = [];

      for (var index = 0; index < vertexColoursLength; index++) {
        vertexColours.push(vertexColour);
      }

      return vertexColours;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      var vertexPositions = this.calculateVertexPositions(transforms),
          vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          vertexColours = this.calculateVertexColours(vertexPositions);

      var vertexPositionData = flatten(vertexPositions),
          vertexNormalData = flatten(vertexNormals),
          vertexColourData = flatten(vertexColours),
          vertexIndexData = vertexIndexes;

      colourRenderer.addVertexPositionData(vertexPositionData);
      colourRenderer.addVertexIndexData(vertexIndexData);
      colourRenderer.addVertexNormalData(vertexNormalData);
      colourRenderer.addVertexColourData(vertexColourData);

      _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZmxhdHRlbiIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsInRyYW5zZm9ybSIsImNvbG91ciIsInZlcnRleFBvc2l0aW9ucyIsInZlcnRleFBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInZlcnRleENvbG91cnNMZW5ndGgiLCJ2ZXJ0ZXhDb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJzIiwiaW5kZXgiLCJwdXNoIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ0cmFuc2Zvcm1zIiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zIiwidmVydGV4SW5kZXhlcyIsImNhbGN1bGF0ZVZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwiY2FsY3VsYXRlVmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleENvbG91cnMiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4Q29sb3VyRGF0YSIsInZlcnRleEluZGV4RGF0YSIsImFkZFZlcnRleFBvc2l0aW9uRGF0YSIsImFkZFZlcnRleEluZGV4RGF0YSIsImFkZFZlcnRleE5vcm1hbERhdGEiLCJhZGRWZXJ0ZXhDb2xvdXJEYXRhIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiY29sb3VyZWRDYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLHNCQUFSLENBQXRCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLHVCQUFSLENBRHZCOztJQUdRRSxPLEdBQVlELGMsQ0FBWkMsTzs7SUFFRkMscUI7OztBQUNKLGlDQUFZQyxTQUFaLEVBQXVCQyxNQUF2QixFQUErQjtBQUFBOztBQUFBLDhJQUN2QkQsU0FEdUI7O0FBRzdCLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUg2QjtBQUk5Qjs7OzsyQ0FFc0JDLGUsRUFBaUI7QUFDdEMsVUFBTUMsd0JBQXdCRCxnQkFBZ0JFLE1BQTlDO0FBQUEsVUFDTUMsc0JBQXNCRixxQkFENUI7QUFBQSxVQUNvRDtBQUM5Q0cscUJBQWUsS0FBS0wsTUFGMUI7QUFBQSxVQUdNTSxnQkFBZ0IsRUFIdEI7O0FBS0EsV0FBSyxJQUFJQyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRSCxtQkFBNUIsRUFBaURHLE9BQWpELEVBQTBEO0FBQ3hERCxzQkFBY0UsSUFBZCxDQUFtQkgsWUFBbkI7QUFDRDs7QUFFRCxhQUFPQyxhQUFQO0FBQ0Q7OzsyQkFFTUcsYyxFQUFnQkMsZSxFQUFpQkMsVSxFQUFZO0FBQ2xELFVBQU1WLGtCQUFrQixLQUFLVyx3QkFBTCxDQUE4QkQsVUFBOUIsQ0FBeEI7QUFBQSxVQUNNRSxnQkFBZ0IsS0FBS0Msc0JBQUwsQ0FBNEJiLGVBQTVCLENBRHRCO0FBQUEsVUFFTWMsZ0JBQWdCLEtBQUtDLHNCQUFMLENBQTRCZixlQUE1QixDQUZ0QjtBQUFBLFVBR01LLGdCQUFnQixLQUFLVyxzQkFBTCxDQUE0QmhCLGVBQTVCLENBSHRCOztBQUtBLFVBQU1pQixxQkFBcUJyQixRQUFRSSxlQUFSLENBQTNCO0FBQUEsVUFDTWtCLG1CQUFtQnRCLFFBQVFrQixhQUFSLENBRHpCO0FBQUEsVUFFTUssbUJBQW1CdkIsUUFBUVMsYUFBUixDQUZ6QjtBQUFBLFVBR01lLGtCQUFrQlIsYUFIeEI7O0FBS0FKLHFCQUFlYSxxQkFBZixDQUFxQ0osa0JBQXJDO0FBQ0FULHFCQUFlYyxrQkFBZixDQUFrQ0YsZUFBbEM7QUFDQVoscUJBQWVlLG1CQUFmLENBQW1DTCxnQkFBbkM7QUFDQVYscUJBQWVnQixtQkFBZixDQUFtQ0wsZ0JBQW5DOztBQUVBLDJJQUFhWCxjQUFiLEVBQTZCQyxlQUE3QixFQUE4Q0MsVUFBOUM7QUFDRDs7O21DQUVxQmUsSyxFQUFPQyxVLEVBQVk7QUFDakMsVUFBRTNCLE1BQUYsR0FBYTJCLFVBQWIsQ0FBRTNCLE1BQUY7QUFBQSxVQUNBNEIscUJBREEsR0FDd0JsQyxjQUFjbUMsY0FBZCxDQUE2QkgsS0FBN0IsRUFBb0NDLFVBQXBDLEVBQWdEM0IsTUFBaEQsQ0FEeEI7OztBQUdOLGFBQU80QixxQkFBUDtBQUNEOzs7O0VBNUNpQ2xDLGE7O0FBK0NwQ29DLE9BQU9DLE9BQVAsR0FBaUJqQyxxQkFBakIiLCJmaWxlIjoiY29sb3VyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmbGF0dGVuIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgQ29sb3VyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgY29sb3VyKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtKTtcblxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Q29sb3Vycyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHZlcnRleENvbG91cnNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGgsICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLmNvbG91cixcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmVydGV4Q29sb3Vyc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zKHRyYW5zZm9ybXMpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleEluZGV4ZXModmVydGV4UG9zaXRpb25zKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhOb3JtYWxzKHZlcnRleFBvc2l0aW9ucyksXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Q29sb3Vycyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25EYXRhID0gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSBmbGF0dGVuKHZlcnRleE5vcm1hbHMpLFxuICAgICAgICAgIHZlcnRleENvbG91ckRhdGEgPSBmbGF0dGVuKHZlcnRleENvbG91cnMpLFxuICAgICAgICAgIHZlcnRleEluZGV4RGF0YSA9IHZlcnRleEluZGV4ZXM7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodmVydGV4UG9zaXRpb25EYXRhKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleE5vcm1hbERhdGEpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleENvbG91ckRhdGEodmVydGV4Q29sb3VyRGF0YSk7XG5cbiAgICBzdXBlci5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJlZENhbnZhc0VsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb2xvdXIpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkQ2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkQ2FudmFzRWxlbWVudDtcbiJdfQ==