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
    key: 'render',
    value: function render(colourRenderer, textureRenderer) {
      var facets = this.getFacets();

      colourRenderer.addFacets(facets);

      _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'render', this).call(this, colourRenderer, textureRenderer);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, coordinates, indexes, colour) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
        remainingArguments[_key - 5] = arguments[_key];
      }

      var colouredCanvasElement = CanvasElement.fromProperties.apply(CanvasElement, [Class, properties].concat(remainingArguments)),
          indexTuples = indexes,
          ///
      facets = indexTuples.map(function (indexTuple) {
        var coordinateTuples = coordinates,
            ///
        colouredFacet = ColouredFacet.fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour),
            facet = colouredFacet; ///

        return facet;
      });

      colouredCanvasElement.setFacets(facets);

      return colouredCanvasElement;
    }
  }]);

  return ColouredCanvasElement;
}(CanvasElement);

module.exports = ColouredCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDb2xvdXJlZEZhY2V0IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImZhY2V0cyIsImdldEZhY2V0cyIsImFkZEZhY2V0cyIsIkNsYXNzIiwicHJvcGVydGllcyIsImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImNvbG91ciIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNvbG91cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwiaW5kZXhUdXBsZXMiLCJtYXAiLCJpbmRleFR1cGxlIiwiY29vcmRpbmF0ZVR1cGxlcyIsImNvbG91cmVkRmFjZXQiLCJmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVBbmRDb2xvdXIiLCJmYWNldCIsInNldEZhY2V0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsZ0NBQVIsQ0FBdEI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsc0JBQVIsQ0FEdEI7O0lBR01FLHFCOzs7Ozs7Ozs7OzsyQkFDR0MsYyxFQUFnQkMsZSxFQUFpQjtBQUN0QyxVQUFNQyxTQUFTLEtBQUtDLFNBQUwsRUFBZjs7QUFFQUgscUJBQWVJLFNBQWYsQ0FBeUJGLE1BQXpCOztBQUVBLDJJQUFhRixjQUFiLEVBQTZCQyxlQUE3QjtBQUNEOzs7bUNBRXFCSSxLLEVBQU9DLFUsRUFBWUMsVyxFQUFhQyxPLEVBQVNDLE0sRUFBK0I7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQzVGLFVBQU1DLHdCQUF3QmIsY0FBY2MsY0FBZCx1QkFBNkJQLEtBQTdCLEVBQW9DQyxVQUFwQyxTQUFtREksa0JBQW5ELEVBQTlCO0FBQUEsVUFDTUcsY0FBY0wsT0FEcEI7QUFBQSxVQUM4QjtBQUN4Qk4sZUFBU1csWUFBWUMsR0FBWixDQUFnQixVQUFDQyxVQUFELEVBQWdCO0FBQ3ZDLFlBQU1DLG1CQUFtQlQsV0FBekI7QUFBQSxZQUFzQztBQUNoQ1Usd0JBQWdCckIsY0FBY3NCLHVDQUFkLENBQXNERixnQkFBdEQsRUFBd0VELFVBQXhFLEVBQW9GTixNQUFwRixDQUR0QjtBQUFBLFlBRU1VLFFBQVFGLGFBRmQsQ0FEdUMsQ0FHVDs7QUFFOUIsZUFBT0UsS0FBUDtBQUNELE9BTlEsQ0FGZjs7QUFVQVIsNEJBQXNCUyxTQUF0QixDQUFnQ2xCLE1BQWhDOztBQUVBLGFBQU9TLHFCQUFQO0FBQ0Q7Ozs7RUF2QmlDYixhOztBQTBCcEN1QixPQUFPQyxPQUFQLEdBQWlCdkIscUJBQWpCIiwiZmlsZSI6ImNvbG91cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb2xvdXJlZEZhY2V0ID0gcmVxdWlyZSgnLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkJyksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKTtcblxuY2xhc3MgQ29sb3VyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIHJlbmRlcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIucmVuZGVyKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBjb2xvdXJlZENhbnZhc0VsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGluZGV4VHVwbGVzID0gaW5kZXhlcywgIC8vL1xuICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLm1hcCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZVR1cGxlcyA9IGNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBDb2xvdXJlZEZhY2V0LmZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZENvbG91cihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBjb2xvdXIpLFxuICAgICAgICAgICAgICAgICAgZmFjZXQgPSBjb2xvdXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBmYWNldDtcbiAgICAgICAgICB9KTtcblxuICAgIGNvbG91cmVkQ2FudmFzRWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcblxuICAgIHJldHVybiBjb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4iXX0=