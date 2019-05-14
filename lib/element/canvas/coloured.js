'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColouredFacet = require('../../primitive/facet/coloured'),
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
      var vertexIndexes = this.getVertexIndexes(),
          vertexNormals = this.getVertexNormals(),
          vertexColours = this.getVertexColours(),
          vertexPositions = this.getVertexPositions();

      colourRenderer.addVertexPositions(vertexPositions);

      colourRenderer.addVertexIndexes(vertexIndexes);

      colourRenderer.addVertexNormals(vertexNormals);

      colourRenderer.addVertexColours(vertexColours);

      _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'render', this).call(this, colourRenderer, textureRenderer);
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
    value: function fromProperties(Class, properties, coordinates, indexes, colour) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
        remainingArguments[_key - 5] = arguments[_key];
      }

      var indexTuples = indexes,
          ///
      coordinateTuples = coordinates,
          ///
      colouredFacets = indexTuples.map(function (indexTuple) {
        var colouredFacet = ColouredFacet.fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDb2xvdXJlZEZhY2V0IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInZlcnRleEluZGV4ZXMiLCJnZXRWZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsImdldFZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhDb2xvdXJzIiwiZ2V0VmVydGV4Q29sb3VycyIsInZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleEluZGV4ZXMiLCJhZGRWZXJ0ZXhOb3JtYWxzIiwiYWRkVmVydGV4Q29sb3VycyIsImZhY2V0cyIsImdldEZhY2V0cyIsInJlZHVjZSIsImZhY2V0IiwiY29sb3VyZWRGYWNldCIsImNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiY29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiY29sb3VyIiwicmVtYWluaW5nQXJndW1lbnRzIiwiaW5kZXhUdXBsZXMiLCJjb29yZGluYXRlVHVwbGVzIiwiY29sb3VyZWRGYWNldHMiLCJtYXAiLCJpbmRleFR1cGxlIiwiZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQW5kQ29sb3VyIiwiY29sb3VyZWRDYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLGdDQUFSLENBQXRCO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLHNCQUFSLENBRHRCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLHVCQUFSLENBRnZCOztJQUlRRyxJLEdBQVNELGMsQ0FBVEMsSTs7SUFFRkMscUI7Ozs7Ozs7Ozs7OzJCQUNHQyxjLEVBQWdCQyxlLEVBQWlCO0FBQ3RDLFVBQU1DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0QjtBQUFBLFVBQ01DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUR0QjtBQUFBLFVBRU1DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUZ0QjtBQUFBLFVBR01DLGtCQUFrQixLQUFLQyxrQkFBTCxFQUh4Qjs7QUFLQVQscUJBQWVVLGtCQUFmLENBQWtDRixlQUFsQzs7QUFFQVIscUJBQWVXLGdCQUFmLENBQWdDVCxhQUFoQzs7QUFFQUYscUJBQWVZLGdCQUFmLENBQWdDUixhQUFoQzs7QUFFQUoscUJBQWVhLGdCQUFmLENBQWdDUCxhQUFoQzs7QUFFQSwySUFBYU4sY0FBYixFQUE2QkMsZUFBN0I7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNYSxTQUFTLEtBQUtDLFNBQUwsRUFBZjtBQUFBLFVBQ01ULGdCQUFnQlEsT0FBT0UsTUFBUCxDQUFjLFVBQUNWLGFBQUQsRUFBZ0JXLEtBQWhCLEVBQTBCO0FBQ3RELFlBQU1DLGdCQUFnQkQsS0FBdEI7QUFBQSxZQUE4QjtBQUN4QkUscUNBQTZCRCxjQUFjWCxnQkFBZCxFQURuQzs7QUFHQVQsYUFBS1EsYUFBTCxFQUFvQmEsMEJBQXBCOztBQUVBLGVBQU9iLGFBQVA7QUFDRCxPQVBlLEVBT2IsRUFQYSxDQUR0Qjs7QUFVQSxhQUFPQSxhQUFQO0FBQ0Q7OzttQ0FFcUJjLEssRUFBT0MsVSxFQUFZQyxXLEVBQWFDLE8sRUFBU0MsTSxFQUErQjtBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFDNUYsVUFBTUMsY0FBY0gsT0FBcEI7QUFBQSxVQUE4QjtBQUN4QkkseUJBQW1CTCxXQUR6QjtBQUFBLFVBQ3NDO0FBQ2hDTSx1QkFBaUJGLFlBQVlHLEdBQVosQ0FBZ0IsVUFBQ0MsVUFBRCxFQUFnQjtBQUMvQyxZQUFNWixnQkFBZ0J4QixjQUFjcUMsdUNBQWQsQ0FBc0RKLGdCQUF0RCxFQUF3RUcsVUFBeEUsRUFBb0ZOLE1BQXBGLENBQXRCOztBQUVBLGVBQU9OLGFBQVA7QUFDRCxPQUpnQixDQUZ2QjtBQUFBLFVBT01KLFNBQVNjLGNBUGY7QUFBQSxVQU9nQztBQUMxQkksOEJBQXdCcEMsY0FBY3FDLGNBQWQsdUJBQTZCYixLQUE3QixFQUFvQ0MsVUFBcEMsRUFBZ0RQLE1BQWhELFNBQTJEVyxrQkFBM0QsRUFSOUI7O0FBVUEsYUFBT08scUJBQVA7QUFDRDs7OztFQTVDaUNwQyxhOztBQStDcENzQyxPQUFPQyxPQUFQLEdBQWlCcEMscUJBQWpCIiwiZmlsZSI6ImNvbG91cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb2xvdXJlZEZhY2V0ID0gcmVxdWlyZSgnLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkJyksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICByZW5kZXIoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSB0aGlzLmdldFZlcnRleEluZGV4ZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IHRoaXMuZ2V0VmVydGV4Q29sb3VycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25zKCk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcblxuICAgIHN1cGVyLnJlbmRlcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91cnMoKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gZmFjZXRzLnJlZHVjZSgodmVydGV4Q29sb3VycywgZmFjZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG91cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgICAgICAgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMgPSBjb2xvdXJlZEZhY2V0LmdldFZlcnRleENvbG91cnMoKTtcblxuICAgICAgICAgICAgcHVzaCh2ZXJ0ZXhDb2xvdXJzLCBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3Vycyk7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBpbmRleFR1cGxlcyA9IGluZGV4ZXMsICAvLy9cbiAgICAgICAgICBjb29yZGluYXRlVHVwbGVzID0gY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgIGNvbG91cmVkRmFjZXRzID0gaW5kZXhUdXBsZXMubWFwKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2xvdXJlZEZhY2V0ID0gQ29sb3VyZWRGYWNldC5mcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVBbmRDb2xvdXIoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgY29sb3VyKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmFjZXRzID0gY29sb3VyZWRGYWNldHMsICAvLy9cbiAgICAgICAgICBjb2xvdXJlZENhbnZhc0VsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBmYWNldHMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRDYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRDYW52YXNFbGVtZW50O1xuIl19