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
    value: function createFacets(hidden) {
      var _this2 = this;

      hidden = _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'createFacets', this).call(this, hidden); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDb2xvdXJlZEZhY2V0IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJ0cmFuc2Zvcm0iLCJmYWNldHMiLCJtYXNrIiwiaGlkZGVuIiwiY29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiY29sb3VyIiwiaW5kZXhUdXBsZXMiLCJtYXAiLCJpbmRleFR1cGxlIiwiY29vcmRpbmF0ZVR1cGxlcyIsImNvbG91cmVkRmFjZXQiLCJmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVBbmRDb2xvdXIiLCJmYWNldCIsInNldEZhY2V0cyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiZ2V0RmFjZXRzIiwiYWRkRmFjZXRzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLGdDQUFSLENBQXRCO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLHNCQUFSLENBRHRCOztJQUdNRSxxQjs7O0FBQ0osaUNBQVlDLFNBQVosRUFBdUJDLE1BQXZCLEVBQStCQyxJQUEvQixFQUFxQ0MsTUFBckMsRUFBNkNDLFdBQTdDLEVBQTBEQyxPQUExRCxFQUFtRUMsTUFBbkUsRUFBMkU7QUFBQTs7QUFBQSw4SUFDbkVOLFNBRG1FLEVBQ3hEQyxNQUR3RCxFQUNoREMsSUFEZ0QsRUFDMUNDLE1BRDBDOztBQUd6RSxVQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjs7QUFFQSxVQUFLQyxPQUFMLEdBQWVBLE9BQWY7O0FBRUEsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBUHlFO0FBUTFFOzs7O2lDQUVZSCxNLEVBQVE7QUFBQTs7QUFDbkJBLDBKQUE0QkEsTUFBNUIsRUFEbUIsQ0FDbUI7O0FBRXRDLFVBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1gsWUFBTUksY0FBYyxLQUFLRixPQUF6QjtBQUFBLFlBQW1DO0FBQzdCSixpQkFBU00sWUFBWUMsR0FBWixDQUFnQixVQUFDQyxVQUFELEVBQWdCO0FBQ3ZDLGNBQU1DLG1CQUFtQixPQUFLTixXQUE5QjtBQUFBLGNBQTJDO0FBQ3JDTywwQkFBZ0JmLGNBQWNnQix1Q0FBZCxDQUFzREYsZ0JBQXRELEVBQXdFRCxVQUF4RSxFQUFvRixPQUFLSCxNQUF6RixDQUR0QjtBQUFBLGNBRU1PLFFBQVFGLGFBRmQsQ0FEdUMsQ0FHVDs7QUFFOUIsaUJBQU9FLEtBQVA7QUFDRCxTQU5RLENBRGY7O0FBU0EsYUFBS0MsU0FBTCxDQUFlYixNQUFmO0FBQ0Q7QUFDRjs7OzhCQUVTYyxjLEVBQWdCQyxlLEVBQWlCO0FBQ3pDLFVBQU1mLFNBQVMsS0FBS2dCLFNBQUwsRUFBZjs7QUFFQUYscUJBQWVHLFNBQWYsQ0FBeUJqQixNQUF6Qjs7QUFFQSw4SUFBZ0JjLGNBQWhCLEVBQWdDQyxlQUFoQztBQUNEOzs7bUNBRXFCRyxLLEVBQU9DLFUsRUFBWWhCLFcsRUFBYUMsTyxFQUFTQyxNLEVBQStCO0FBQUEsd0NBQXBCZSxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUFFLGFBQU92QixjQUFjd0IsY0FBZCx1QkFBNkJILEtBQTdCLEVBQW9DQyxVQUFwQyxFQUFnRGhCLFdBQWhELEVBQTZEQyxPQUE3RCxFQUFzRUMsTUFBdEUsU0FBaUZlLGtCQUFqRixFQUFQO0FBQThHOzs7O0VBcEM1S3ZCLGE7O0FBdUNwQ3lCLE9BQU9DLE9BQVAsR0FBaUJ6QixxQkFBakIiLCJmaWxlIjoiY29sb3VyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkRmFjZXQgPSByZXF1aXJlKCcuLi8uLi9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cikge1xuICAgIHN1cGVyKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuXG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcblxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbikge1xuICAgIGhpZGRlbiA9IHN1cGVyLmNyZWF0ZUZhY2V0cyhoaWRkZW4pOyAgLy8vXG5cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLm1hcCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBDb2xvdXJlZEZhY2V0LmZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZENvbG91cihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmNvbG91ciksXG4gICAgICAgICAgICAgICAgICAgIGZhY2V0ID0gY29sb3VyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBmYWNldDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4iXX0=