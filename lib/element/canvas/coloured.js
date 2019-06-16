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

  function ColouredCanvasElement(transform, facets, mask, hidden, coordinates, indexes, colour) {
    _classCallCheck(this, ColouredCanvasElement);

    var _this = _possibleConstructorReturn(this, (ColouredCanvasElement.__proto__ || Object.getPrototypeOf(ColouredCanvasElement)).call(this, transform, facets, mask, hidden));

    _this.coordinates = coordinates;

    _this.indexes = indexes;

    _this.colour = colour;
    return _this;
  }

  _createClass(ColouredCanvasElement, [{
    key: 'createFacets',
    value: function createFacets() {
      var _this2 = this;

      var hidden = this.isHidden();

      if (!hidden) {
        var indexTuples = this.indexes,
            ///
        facets = indexTuples.map(function (indexTuple) {
          var coordinateTuples = _this2.coordinates,
              ///
          colouredFacet = ColouredFacet.fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, _this2.colour),
              facet = colouredFacet; ///

          return facet;
        });

        this.setFacets(facets);
      }

      _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'createFacets', this).call(this);
    }
  }, {
    key: 'addFacets',
    value: function addFacets(colourRenderer, textureRenderer) {
      var facets = this.getFacets();

      colourRenderer.addFacets(facets);

      _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'addFacets', this).call(this, colourRenderer, textureRenderer);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, coordinates, indexes, colour) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
        remainingArguments[_key - 5] = arguments[_key];
      }

      return CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, coordinates, indexes, colour].concat(remainingArguments));
    }
  }]);

  return ColouredCanvasElement;
}(CanvasElement);

module.exports = ColouredCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDb2xvdXJlZEZhY2V0IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJ0cmFuc2Zvcm0iLCJmYWNldHMiLCJtYXNrIiwiaGlkZGVuIiwiY29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiY29sb3VyIiwiaXNIaWRkZW4iLCJpbmRleFR1cGxlcyIsIm1hcCIsImluZGV4VHVwbGUiLCJjb29yZGluYXRlVHVwbGVzIiwiY29sb3VyZWRGYWNldCIsImZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZENvbG91ciIsImZhY2V0Iiwic2V0RmFjZXRzIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJnZXRGYWNldHMiLCJhZGRGYWNldHMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsZ0NBQVIsQ0FBdEI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsc0JBQVIsQ0FEdEI7O0lBR01FLHFCOzs7QUFDSixpQ0FBWUMsU0FBWixFQUF1QkMsTUFBdkIsRUFBK0JDLElBQS9CLEVBQXFDQyxNQUFyQyxFQUE2Q0MsV0FBN0MsRUFBMERDLE9BQTFELEVBQW1FQyxNQUFuRSxFQUEyRTtBQUFBOztBQUFBLDhJQUNuRU4sU0FEbUUsRUFDeERDLE1BRHdELEVBQ2hEQyxJQURnRCxFQUMxQ0MsTUFEMEM7O0FBR3pFLFVBQUtDLFdBQUwsR0FBbUJBLFdBQW5COztBQUVBLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFQeUU7QUFRMUU7Ozs7bUNBRWM7QUFBQTs7QUFDYixVQUFNSCxTQUFTLEtBQUtJLFFBQUwsRUFBZjs7QUFFQSxVQUFJLENBQUNKLE1BQUwsRUFBYTtBQUNYLFlBQU1LLGNBQWMsS0FBS0gsT0FBekI7QUFBQSxZQUFtQztBQUM3QkosaUJBQVNPLFlBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsVUFBRCxFQUFnQjtBQUN2QyxjQUFNQyxtQkFBbUIsT0FBS1AsV0FBOUI7QUFBQSxjQUEyQztBQUNyQ1EsMEJBQWdCaEIsY0FBY2lCLHVDQUFkLENBQXNERixnQkFBdEQsRUFBd0VELFVBQXhFLEVBQW9GLE9BQUtKLE1BQXpGLENBRHRCO0FBQUEsY0FFTVEsUUFBUUYsYUFGZCxDQUR1QyxDQUdUOztBQUU5QixpQkFBT0UsS0FBUDtBQUNELFNBTlEsQ0FEZjs7QUFTQSxhQUFLQyxTQUFMLENBQWVkLE1BQWY7QUFDRDs7QUFFRDtBQUNEOzs7OEJBRVNlLGMsRUFBZ0JDLGUsRUFBaUI7QUFDekMsVUFBTWhCLFNBQVMsS0FBS2lCLFNBQUwsRUFBZjs7QUFFQUYscUJBQWVHLFNBQWYsQ0FBeUJsQixNQUF6Qjs7QUFFQSw4SUFBZ0JlLGNBQWhCLEVBQWdDQyxlQUFoQztBQUNEOzs7bUNBRXFCRyxLLEVBQU9DLFUsRUFBWWpCLFcsRUFBYUMsTyxFQUFTQyxNLEVBQStCO0FBQUEsd0NBQXBCZ0Isa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFBRSxhQUFPeEIsY0FBY3lCLGNBQWQsdUJBQTZCSCxLQUE3QixFQUFvQ0MsVUFBcEMsRUFBZ0RqQixXQUFoRCxFQUE2REMsT0FBN0QsRUFBc0VDLE1BQXRFLFNBQWlGZ0Isa0JBQWpGLEVBQVA7QUFBOEc7Ozs7RUF0QzVLeEIsYTs7QUF5Q3BDMEIsT0FBT0MsT0FBUCxHQUFpQjFCLHFCQUFqQiIsImZpbGUiOiJjb2xvdXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyZWRGYWNldCA9IHJlcXVpcmUoJy4uLy4uL3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbik7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuXG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBjcmVhdGVGYWNldHMoKSB7XG4gICAgY29uc3QgaGlkZGVuID0gdGhpcy5pc0hpZGRlbigpO1xuXG4gICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5tYXAoKGluZGV4VHVwbGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gQ29sb3VyZWRGYWNldC5mcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVBbmRDb2xvdXIoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgdGhpcy5jb2xvdXIpLFxuICAgICAgICAgICAgICAgICAgICBmYWNldCA9IGNvbG91cmVkRmFjZXQ7ICAvLy9cblxuICAgICAgICAgICAgICByZXR1cm4gZmFjZXQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgICB9XG5cbiAgICBzdXBlci5jcmVhdGVGYWNldHMoKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4iXX0=