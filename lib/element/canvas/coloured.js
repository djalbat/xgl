'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColouredFacet = require('../../facet/coloured'),
    CanvasElement = require('../../element/canvas'),
    arrayUtilities = require('../../utilities/array');

var push = arrayUtilities.push;

var ColouredCanvasElement = function (_CanvasElement) {
  _inherits(ColouredCanvasElement, _CanvasElement);

  function ColouredCanvasElement() {
    _classCallCheck(this, ColouredCanvasElement);

    return _possibleConstructorReturn(this, (ColouredCanvasElement.__proto__ || Object.getPrototypeOf(ColouredCanvasElement)).apply(this, arguments));
  }

  _createClass(ColouredCanvasElement, [{
    key: 'render',
    value: function render(colourRenderer, textureRenderer) {
      var vertexPositions = this.getVertexPositions(),
          vertexIndexes = this.getVertexIndexes(),
          vertexNormals = this.getVertexNormals(),
          vertexColours = this.getVertexColours();

      colourRenderer.addVertexPositions(vertexPositions);
      colourRenderer.addVertexIndexes(vertexIndexes);
      colourRenderer.addVertexNormals(vertexNormals);
      colourRenderer.addVertexColours(vertexColours);
    }
  }, {
    key: 'getVertexColours',
    value: function getVertexColours() {
      var facets = this.getFacets(),
          vertexColours = facets.reduce(function (vertexColours, facet) {
        var colouredFacet = facet,
            ///
        colouredFacetVertexColours = colouredFacet.getVertexColours();

        push(vertexColours, colouredFacetVertexColours);

        return vertexColours;
      }, []);

      return vertexColours;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, vertices, indexes, colour) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
        remainingArguments[_key - 5] = arguments[_key];
      }

      var colouredFacets = indexes.map(function (indexes) {
        ///
        var colouredFacet = ColouredFacet.fromVerticesIndexesAndColour(vertices, indexes, colour);

        return colouredFacet;
      }),
          facets = colouredFacets,
          ///
      colouredCanvasElement = CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, facets].concat(remainingArguments));

      return colouredCanvasElement;
    }
  }]);

  return ColouredCanvasElement;
}(CanvasElement);

module.exports = ColouredCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDb2xvdXJlZEZhY2V0IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsInZlcnRleEluZGV4ZXMiLCJnZXRWZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsImdldFZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhDb2xvdXJzIiwiZ2V0VmVydGV4Q29sb3VycyIsImFkZFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleEluZGV4ZXMiLCJhZGRWZXJ0ZXhOb3JtYWxzIiwiYWRkVmVydGV4Q29sb3VycyIsImZhY2V0cyIsImdldEZhY2V0cyIsInJlZHVjZSIsImZhY2V0IiwiY29sb3VyZWRGYWNldCIsImNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidmVydGljZXMiLCJpbmRleGVzIiwiY29sb3VyIiwicmVtYWluaW5nQXJndW1lbnRzIiwiY29sb3VyZWRGYWNldHMiLCJtYXAiLCJmcm9tVmVydGljZXNJbmRleGVzQW5kQ29sb3VyIiwiY29sb3VyZWRDYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxzQkFBUixDQUF0QjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxzQkFBUixDQUR0QjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSx1QkFBUixDQUZ2Qjs7SUFJUUcsSSxHQUFTRCxjLENBQVRDLEk7O0lBRUZDLHFCOzs7Ozs7Ozs7OzsyQkFDR0MsYyxFQUFnQkMsZSxFQUFpQjtBQUN0QyxVQUFNQyxrQkFBa0IsS0FBS0Msa0JBQUwsRUFBeEI7QUFBQSxVQUNNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFEdEI7QUFBQSxVQUVNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFGdEI7QUFBQSxVQUdNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFIdEI7O0FBS0FULHFCQUFlVSxrQkFBZixDQUFrQ1IsZUFBbEM7QUFDQUYscUJBQWVXLGdCQUFmLENBQWdDUCxhQUFoQztBQUNBSixxQkFBZVksZ0JBQWYsQ0FBZ0NOLGFBQWhDO0FBQ0FOLHFCQUFlYSxnQkFBZixDQUFnQ0wsYUFBaEM7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNTSxTQUFTLEtBQUtDLFNBQUwsRUFBZjtBQUFBLFVBQ01QLGdCQUFnQk0sT0FBT0UsTUFBUCxDQUFjLFVBQVNSLGFBQVQsRUFBd0JTLEtBQXhCLEVBQStCO0FBQzNELFlBQU1DLGdCQUFnQkQsS0FBdEI7QUFBQSxZQUE4QjtBQUN4QkUscUNBQTZCRCxjQUFjVCxnQkFBZCxFQURuQzs7QUFHQVgsYUFBS1UsYUFBTCxFQUFvQlcsMEJBQXBCOztBQUVBLGVBQU9YLGFBQVA7QUFDRCxPQVBlLEVBT2IsRUFQYSxDQUR0Qjs7QUFVQSxhQUFPQSxhQUFQO0FBQ0Q7OzttQ0FFcUJZLEssRUFBT0MsVSxFQUFZQyxRLEVBQVVDLE8sRUFBU0MsTSxFQUErQjtBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFDekYsVUFBTUMsaUJBQWlCSCxRQUFRSSxHQUFSLENBQVksVUFBU0osT0FBVCxFQUFrQjtBQUFHO0FBQ2hELFlBQU1MLGdCQUFnQnhCLGNBQWNrQyw0QkFBZCxDQUEyQ04sUUFBM0MsRUFBcURDLE9BQXJELEVBQThEQyxNQUE5RCxDQUF0Qjs7QUFFQSxlQUFPTixhQUFQO0FBQ0QsT0FKZ0IsQ0FBdkI7QUFBQSxVQUtNSixTQUFTWSxjQUxmO0FBQUEsVUFLZ0M7QUFDMUJHLDhCQUF3QmpDLGNBQWNrQyxjQUFkLHVCQUE2QlYsS0FBN0IsRUFBb0NDLFVBQXBDLEVBQWdEUCxNQUFoRCxTQUEyRFcsa0JBQTNELEVBTjlCOztBQVFBLGFBQU9JLHFCQUFQO0FBQ0Q7Ozs7RUFyQ2lDakMsYTs7QUF3Q3BDbUMsT0FBT0MsT0FBUCxHQUFpQmpDLHFCQUFqQiIsImZpbGUiOiJjb2xvdXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyZWRGYWNldCA9IHJlcXVpcmUoJy4uLy4uL2ZhY2V0L2NvbG91cmVkJyksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICByZW5kZXIoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IHRoaXMuZ2V0VmVydGV4SW5kZXhlcygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSB0aGlzLmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gdGhpcy5nZXRWZXJ0ZXhDb2xvdXJzKCk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91cnMoKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhDb2xvdXJzLCBmYWNldCkge1xuICAgICAgICAgICAgY29uc3QgY29sb3VyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICAgICAgICBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyA9IGNvbG91cmVkRmFjZXQuZ2V0VmVydGV4Q29sb3VycygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwdXNoKHZlcnRleENvbG91cnMsIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHZlcnRpY2VzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGNvbG91cmVkRmFjZXRzID0gaW5kZXhlcy5tYXAoZnVuY3Rpb24oaW5kZXhlcykgeyAgLy8vXG4gICAgICAgICAgICBjb25zdCBjb2xvdXJlZEZhY2V0ID0gQ29sb3VyZWRGYWNldC5mcm9tVmVydGljZXNJbmRleGVzQW5kQ29sb3VyKHZlcnRpY2VzLCBpbmRleGVzLCBjb2xvdXIpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZhY2V0cyA9IGNvbG91cmVkRmFjZXRzLCAgLy8vXG4gICAgICAgICAgY29sb3VyZWRDYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgZmFjZXRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkQ2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkQ2FudmFzRWxlbWVudDtcbiJdfQ==