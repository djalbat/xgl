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
    value: function render(textureRenderer, colourRenderer) {
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
        var colouredFacet = ColouredFacet.fromVertexCoordinatesIndexesAndColour(vertices, indexes, colour);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDb2xvdXJlZEZhY2V0IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJjb2xvdXJSZW5kZXJlciIsInZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsInZlcnRleEluZGV4ZXMiLCJnZXRWZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsImdldFZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhDb2xvdXJzIiwiZ2V0VmVydGV4Q29sb3VycyIsImFkZFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleEluZGV4ZXMiLCJhZGRWZXJ0ZXhOb3JtYWxzIiwiYWRkVmVydGV4Q29sb3VycyIsImZhY2V0cyIsImdldEZhY2V0cyIsInJlZHVjZSIsImZhY2V0IiwiY29sb3VyZWRGYWNldCIsImNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidmVydGljZXMiLCJpbmRleGVzIiwiY29sb3VyIiwicmVtYWluaW5nQXJndW1lbnRzIiwiY29sb3VyZWRGYWNldHMiLCJtYXAiLCJmcm9tVmVydGV4Q29vcmRpbmF0ZXNJbmRleGVzQW5kQ29sb3VyIiwiY29sb3VyZWRDYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxzQkFBUixDQUF0QjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxzQkFBUixDQUR0QjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSx1QkFBUixDQUZ2Qjs7SUFJUUcsSSxHQUFTRCxjLENBQVRDLEk7O0lBRUZDLHFCOzs7Ozs7Ozs7OzsyQkFDR0MsZSxFQUFpQkMsYyxFQUFnQjtBQUN0QyxVQUFNQyxrQkFBa0IsS0FBS0Msa0JBQUwsRUFBeEI7QUFBQSxVQUNNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFEdEI7QUFBQSxVQUVNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFGdEI7QUFBQSxVQUdNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFIdEI7O0FBS0FSLHFCQUFlUyxrQkFBZixDQUFrQ1IsZUFBbEM7QUFDQUQscUJBQWVVLGdCQUFmLENBQWdDUCxhQUFoQztBQUNBSCxxQkFBZVcsZ0JBQWYsQ0FBZ0NOLGFBQWhDO0FBQ0FMLHFCQUFlWSxnQkFBZixDQUFnQ0wsYUFBaEM7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNTSxTQUFTLEtBQUtDLFNBQUwsRUFBZjtBQUFBLFVBQ01QLGdCQUFnQk0sT0FBT0UsTUFBUCxDQUFjLFVBQUNSLGFBQUQsRUFBZ0JTLEtBQWhCLEVBQTBCO0FBQ3RELFlBQU1DLGdCQUFnQkQsS0FBdEI7QUFBQSxZQUE4QjtBQUN4QkUscUNBQTZCRCxjQUFjVCxnQkFBZCxFQURuQzs7QUFHQVgsYUFBS1UsYUFBTCxFQUFvQlcsMEJBQXBCOztBQUVBLGVBQU9YLGFBQVA7QUFDRCxPQVBlLEVBT2IsRUFQYSxDQUR0Qjs7QUFVQSxhQUFPQSxhQUFQO0FBQ0Q7OzttQ0FFcUJZLEssRUFBT0MsVSxFQUFZQyxRLEVBQVVDLE8sRUFBU0MsTSxFQUErQjtBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFDekYsVUFBTUMsaUJBQWlCSCxRQUFRSSxHQUFSLENBQVksVUFBQ0osT0FBRCxFQUFhO0FBQUc7QUFDM0MsWUFBTUwsZ0JBQWdCeEIsY0FBY2tDLHFDQUFkLENBQW9ETixRQUFwRCxFQUE4REMsT0FBOUQsRUFBdUVDLE1BQXZFLENBQXRCOztBQUVBLGVBQU9OLGFBQVA7QUFDRCxPQUpnQixDQUF2QjtBQUFBLFVBS01KLFNBQVNZLGNBTGY7QUFBQSxVQUtnQztBQUMxQkcsOEJBQXdCakMsY0FBY2tDLGNBQWQsdUJBQTZCVixLQUE3QixFQUFvQ0MsVUFBcEMsRUFBZ0RQLE1BQWhELFNBQTJEVyxrQkFBM0QsRUFOOUI7O0FBUUEsYUFBT0kscUJBQVA7QUFDRDs7OztFQXJDaUNqQyxhOztBQXdDcENtQyxPQUFPQyxPQUFQLEdBQWlCakMscUJBQWpCIiwiZmlsZSI6ImNvbG91cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb2xvdXJlZEZhY2V0ID0gcmVxdWlyZSgnLi4vLi4vZmFjZXQvY29sb3VyZWQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgQ29sb3VyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIHJlbmRlcih0ZXh0dXJlUmVuZGVyZXIsIGNvbG91clJlbmRlcmVyKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5nZXRWZXJ0ZXhJbmRleGVzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSB0aGlzLmdldFZlcnRleENvbG91cnMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBmYWNldHMucmVkdWNlKCh2ZXJ0ZXhDb2xvdXJzLCBmYWNldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29sb3VyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICAgICAgICBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyA9IGNvbG91cmVkRmFjZXQuZ2V0VmVydGV4Q29sb3VycygpO1xuXG4gICAgICAgICAgICBwdXNoKHZlcnRleENvbG91cnMsIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHZlcnRpY2VzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGNvbG91cmVkRmFjZXRzID0gaW5kZXhlcy5tYXAoKGluZGV4ZXMpID0+IHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgY29sb3VyZWRGYWNldCA9IENvbG91cmVkRmFjZXQuZnJvbVZlcnRleENvb3JkaW5hdGVzSW5kZXhlc0FuZENvbG91cih2ZXJ0aWNlcywgaW5kZXhlcywgY29sb3VyKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmYWNldHMgPSBjb2xvdXJlZEZhY2V0cywgIC8vL1xuICAgICAgICAgIGNvbG91cmVkQ2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGZhY2V0cywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4iXX0=