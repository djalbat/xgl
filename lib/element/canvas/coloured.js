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
    value: function create(colourRenderer, textureRenderer, transforms) {
      var vertexPositionData = this.calculateVertexPositionData(transforms),
          vertexIndexData = this.calculateVertexIndexData(vertexPositionData),
          vertexNormalData = this.calculateVertexNormalData(vertexPositionData),
          vertexColourData = this.calculateVertexColourData(vertexPositionData);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZmxhdHRlbiIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsInRyYW5zZm9ybSIsImNvbG91ciIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCIsImxlbmd0aCIsInZlcnRleENvbG91cnNMZW5ndGgiLCJ2ZXJ0ZXhDb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJzIiwiaW5kZXgiLCJwdXNoIiwidmVydGV4Q29sb3VyRGF0YSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleEluZGV4RGF0YSIsImNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhIiwiY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YSIsImFkZFZlcnRleFBvc2l0aW9uRGF0YSIsImFkZFZlcnRleEluZGV4RGF0YSIsImFkZFZlcnRleE5vcm1hbERhdGEiLCJhZGRWZXJ0ZXhDb2xvdXJEYXRhIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiY29sb3VyZWRDYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLHNCQUFSLENBQXRCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLHVCQUFSLENBRHZCOztJQUdRRSxPLEdBQVlELGMsQ0FBWkMsTzs7SUFFRkMscUI7OztBQUNKLGlDQUFZQyxTQUFaLEVBQXVCQyxNQUF2QixFQUErQjtBQUFBOztBQUFBLDhJQUN2QkQsU0FEdUI7O0FBRzdCLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUg2QjtBQUk5Qjs7Ozs4Q0FFeUJDLGtCLEVBQW9CO0FBQzVDLFVBQU1DLDJCQUEyQkQsbUJBQW1CRSxNQUFwRDtBQUFBLFVBQ01DLHNCQUFzQkYsMkJBQTJCLENBRHZEO0FBQUEsVUFDMkQ7QUFDckRHLHFCQUFlLEtBQUtMLE1BRjFCO0FBQUEsVUFHTU0sZ0JBQWdCLEVBSHRCOztBQUtBLFdBQUssSUFBSUMsUUFBUSxDQUFqQixFQUFvQkEsUUFBUUgsbUJBQTVCLEVBQWlERyxPQUFqRCxFQUEwRDtBQUN4REQsc0JBQWNFLElBQWQsQ0FBbUJILFlBQW5CO0FBQ0Q7O0FBRUQsVUFBTUksbUJBQW1CWixRQUFRUyxhQUFSLENBQXpCLENBVjRDLENBVU07O0FBRWxELGFBQU9HLGdCQUFQO0FBQ0Q7OzsyQkFFTUMsYyxFQUFnQkMsZSxFQUFpQkMsVSxFQUFZO0FBQ2xELFVBQU1YLHFCQUFxQixLQUFLWSwyQkFBTCxDQUFpQ0QsVUFBakMsQ0FBM0I7QUFBQSxVQUNNRSxrQkFBa0IsS0FBS0Msd0JBQUwsQ0FBOEJkLGtCQUE5QixDQUR4QjtBQUFBLFVBRU1lLG1CQUFtQixLQUFLQyx5QkFBTCxDQUErQmhCLGtCQUEvQixDQUZ6QjtBQUFBLFVBR01RLG1CQUFtQixLQUFLUyx5QkFBTCxDQUErQmpCLGtCQUEvQixDQUh6Qjs7QUFLQVMscUJBQWVTLHFCQUFmLENBQXFDbEIsa0JBQXJDO0FBQ0FTLHFCQUFlVSxrQkFBZixDQUFrQ04sZUFBbEM7QUFDQUoscUJBQWVXLG1CQUFmLENBQW1DTCxnQkFBbkM7QUFDQU4scUJBQWVZLG1CQUFmLENBQW1DYixnQkFBbkM7O0FBRUEsMklBQWFDLGNBQWIsRUFBNkJDLGVBQTdCLEVBQThDQyxVQUE5QztBQUNEOzs7bUNBRXFCVyxLLEVBQU9DLFUsRUFBWTtBQUNqQyxVQUFFeEIsTUFBRixHQUFhd0IsVUFBYixDQUFFeEIsTUFBRjtBQUFBLFVBQ0F5QixxQkFEQSxHQUN3Qi9CLGNBQWNnQyxjQUFkLENBQTZCSCxLQUE3QixFQUFvQ0MsVUFBcEMsRUFBZ0R4QixNQUFoRCxDQUR4Qjs7O0FBR04sYUFBT3lCLHFCQUFQO0FBQ0Q7Ozs7RUF6Q2lDL0IsYTs7QUE0Q3BDaUMsT0FBT0MsT0FBUCxHQUFpQjlCLHFCQUFqQiIsImZpbGUiOiJjb2xvdXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBjb2xvdXIpIHtcbiAgICBzdXBlcih0cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCA9IHZlcnRleFBvc2l0aW9uRGF0YS5sZW5ndGgsXG4gICAgICAgICAgdmVydGV4Q29sb3Vyc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCAvIDMsICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLmNvbG91cixcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmVydGV4Q29sb3Vyc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4Q29sb3VyRGF0YSA9IGZsYXR0ZW4odmVydGV4Q29sb3Vycyk7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJEYXRhO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSh0cmFuc2Zvcm1zKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleERhdGEgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEodmVydGV4UG9zaXRpb25EYXRhKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJEYXRhID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodmVydGV4UG9zaXRpb25EYXRhKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleE5vcm1hbERhdGEpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleENvbG91ckRhdGEodmVydGV4Q29sb3VyRGF0YSk7XG5cbiAgICBzdXBlci5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJlZENhbnZhc0VsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb2xvdXIpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkQ2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkQ2FudmFzRWxlbWVudDtcbiJdfQ==