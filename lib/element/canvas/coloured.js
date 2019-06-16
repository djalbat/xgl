'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColouredFacet = require('../../primitive/facet/coloured'),
    CanvasElement = require('../../element/canvas');

var ColouredCanvasElement = function (_CanvasElement) {
  _inherits(ColouredCanvasElement, _CanvasElement);

  function ColouredCanvasElement() {
    _classCallCheck(this, ColouredCanvasElement);

    return _possibleConstructorReturn(this, (ColouredCanvasElement.__proto__ || Object.getPrototypeOf(ColouredCanvasElement)).apply(this, arguments));
  }

  _createClass(ColouredCanvasElement, [{
    key: 'initialise',
    value: function initialise(colourRenderer, textureRenderer) {
      var facets = this.getFacets();

      colourRenderer.addFacets(facets);

      _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'initialise', this).call(this, colourRenderer, textureRenderer);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, coordinates, indexes, colour) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
        remainingArguments[_key - 5] = arguments[_key];
      }

      var colouredCanvasElement = CanvasElement.fromProperties.apply(CanvasElement, [Class, properties].concat(remainingArguments)),
          hidden = properties.hidden;


      if (!hidden) {
        var indexTuples = indexes,
            ///
        facets = indexTuples.map(function (indexTuple) {
          var coordinateTuples = coordinates,
              ///
          colouredFacet = ColouredFacet.fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour),
              facet = colouredFacet; ///

          return facet;
        });

        colouredCanvasElement.setFacets(facets);
      }

      return colouredCanvasElement;
    }
  }]);

  return ColouredCanvasElement;
}(CanvasElement);

module.exports = ColouredCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDb2xvdXJlZEZhY2V0IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImZhY2V0cyIsImdldEZhY2V0cyIsImFkZEZhY2V0cyIsIkNsYXNzIiwicHJvcGVydGllcyIsImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImNvbG91ciIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImZyb21Qcm9wZXJ0aWVzIiwiaGlkZGVuIiwiaW5kZXhUdXBsZXMiLCJtYXAiLCJpbmRleFR1cGxlIiwiY29vcmRpbmF0ZVR1cGxlcyIsImNvbG91cmVkRmFjZXQiLCJmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVBbmRDb2xvdXIiLCJmYWNldCIsImNvbG91cmVkQ2FudmFzRWxlbWVudCIsInNldEZhY2V0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsZ0NBQVIsQ0FBdEI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsc0JBQVIsQ0FEdEI7O0lBR01FLHFCOzs7Ozs7Ozs7OzsrQkFDT0MsYyxFQUFnQkMsZSxFQUFpQjtBQUMxQyxVQUFNQyxTQUFTLEtBQUtDLFNBQUwsRUFBZjs7QUFFQUgscUJBQWVJLFNBQWYsQ0FBeUJGLE1BQXpCOztBQUVBLCtJQUFpQkYsY0FBakIsRUFBaUNDLGVBQWpDO0FBQ0Q7OzttQ0FFcUJJLEssRUFBT0MsVSxFQUFZQyxXLEVBQWFDLE8sRUFBU0MsTSxFQUErQjtBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFDdEYsa0NBQXdCWixjQUFjYSxjQUFkLHVCQUE2Qk4sS0FBN0IsRUFBb0NDLFVBQXBDLFNBQW1ESSxrQkFBbkQsRUFBeEI7QUFBQSxVQUNFRSxNQURGLEdBQ2FOLFVBRGIsQ0FDRU0sTUFERjs7O0FBR04sVUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDWCxZQUFNQyxjQUFjTCxPQUFwQjtBQUFBLFlBQThCO0FBQ3hCTixpQkFBU1csWUFBWUMsR0FBWixDQUFnQixVQUFDQyxVQUFELEVBQWdCO0FBQ3ZDLGNBQU1DLG1CQUFtQlQsV0FBekI7QUFBQSxjQUFzQztBQUNoQ1UsMEJBQWdCckIsY0FBY3NCLHVDQUFkLENBQXNERixnQkFBdEQsRUFBd0VELFVBQXhFLEVBQW9GTixNQUFwRixDQUR0QjtBQUFBLGNBRU1VLFFBQVFGLGFBRmQsQ0FEdUMsQ0FHVDs7QUFFOUIsaUJBQU9FLEtBQVA7QUFDRCxTQU5RLENBRGY7O0FBU0FDLDhCQUFzQkMsU0FBdEIsQ0FBZ0NuQixNQUFoQztBQUNEOztBQUVELGFBQU9rQixxQkFBUDtBQUNEOzs7O0VBM0JpQ3RCLGE7O0FBOEJwQ3dCLE9BQU9DLE9BQVAsR0FBaUJ4QixxQkFBakIiLCJmaWxlIjoiY29sb3VyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkRmFjZXQgPSByZXF1aXJlKCcuLi8uLi9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgaW5pdGlhbGlzZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuaW5pdGlhbGlzZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgY29sb3VyZWRDYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICB7IGhpZGRlbiB9ID0gcHJvcGVydGllcztcblxuICAgIGlmICghaGlkZGVuKSB7XG4gICAgICBjb25zdCBpbmRleFR1cGxlcyA9IGluZGV4ZXMsICAvLy9cbiAgICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLm1hcCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGVzID0gY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gQ29sb3VyZWRGYWNldC5mcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVBbmRDb2xvdXIoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgY29sb3VyKSxcbiAgICAgICAgICAgICAgICAgICAgZmFjZXQgPSBjb2xvdXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhY2V0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGNvbG91cmVkQ2FudmFzRWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRDYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRDYW52YXNFbGVtZW50O1xuIl19