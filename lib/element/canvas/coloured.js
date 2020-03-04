'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ColouredFacet = require('../../primitive/facet/coloured'),
    CanvasElement = require('../../element/canvas');

var ColouredCanvasElement = /*#__PURE__*/function (_CanvasElement) {
  _inherits(ColouredCanvasElement, _CanvasElement);

  function ColouredCanvasElement(transform, facets, mask, hidden, coordinates, indexes, colour) {
    var _this;

    _classCallCheck(this, ColouredCanvasElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColouredCanvasElement).call(this, transform, facets, mask, hidden));
    _this.coordinates = coordinates;
    _this.indexes = indexes;
    _this.colour = colour;
    return _this;
  }

  _createClass(ColouredCanvasElement, [{
    key: "createFacets",
    value: function createFacets(hidden) {
      var _this2 = this;

      hidden = _get(_getPrototypeOf(ColouredCanvasElement.prototype), "createFacets", this).call(this, hidden); ///

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
    key: "addFacets",
    value: function addFacets(colourRenderer, textureRenderer) {
      var facets = this.getFacets();
      colourRenderer.addFacets(facets);

      _get(_getPrototypeOf(ColouredCanvasElement.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(Class, properties, coordinates, indexes, colour) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
        remainingArguments[_key - 5] = arguments[_key];
      }

      return CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, coordinates, indexes, colour].concat(remainingArguments));
    }
  }]);

  return ColouredCanvasElement;
}(CanvasElement);

module.exports = ColouredCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG91cmVkLmpzIl0sIm5hbWVzIjpbIkNvbG91cmVkRmFjZXQiLCJyZXF1aXJlIiwiQ2FudmFzRWxlbWVudCIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsInRyYW5zZm9ybSIsImZhY2V0cyIsIm1hc2siLCJoaWRkZW4iLCJjb29yZGluYXRlcyIsImluZGV4ZXMiLCJjb2xvdXIiLCJpbmRleFR1cGxlcyIsIm1hcCIsImluZGV4VHVwbGUiLCJjb29yZGluYXRlVHVwbGVzIiwiY29sb3VyZWRGYWNldCIsImZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZENvbG91ciIsImZhY2V0Iiwic2V0RmFjZXRzIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJnZXRGYWNldHMiLCJhZGRGYWNldHMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxnQ0FBRCxDQUE3QjtBQUFBLElBQ01DLGFBQWEsR0FBR0QsT0FBTyxDQUFDLHNCQUFELENBRDdCOztJQUdNRSxxQjs7O0FBQ0osaUNBQVlDLFNBQVosRUFBdUJDLE1BQXZCLEVBQStCQyxJQUEvQixFQUFxQ0MsTUFBckMsRUFBNkNDLFdBQTdDLEVBQTBEQyxPQUExRCxFQUFtRUMsTUFBbkUsRUFBMkU7QUFBQTs7QUFBQTs7QUFDekUsK0ZBQU1OLFNBQU4sRUFBaUJDLE1BQWpCLEVBQXlCQyxJQUF6QixFQUErQkMsTUFBL0I7QUFFQSxVQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUVBLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUVBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQVB5RTtBQVExRTs7OztpQ0FFWUgsTSxFQUFRO0FBQUE7O0FBQ25CQSxNQUFBQSxNQUFNLDJGQUFzQkEsTUFBdEIsQ0FBTixDQURtQixDQUNtQjs7QUFFdEMsVUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDWCxZQUFNSSxXQUFXLEdBQUcsS0FBS0YsT0FBekI7QUFBQSxZQUFtQztBQUM3QkosUUFBQUEsTUFBTSxHQUFHTSxXQUFXLENBQUNDLEdBQVosQ0FBZ0IsVUFBQ0MsVUFBRCxFQUFnQjtBQUN2QyxjQUFNQyxnQkFBZ0IsR0FBRyxNQUFJLENBQUNOLFdBQTlCO0FBQUEsY0FBMkM7QUFDckNPLFVBQUFBLGFBQWEsR0FBR2YsYUFBYSxDQUFDZ0IsdUNBQWQsQ0FBc0RGLGdCQUF0RCxFQUF3RUQsVUFBeEUsRUFBb0YsTUFBSSxDQUFDSCxNQUF6RixDQUR0QjtBQUFBLGNBRU1PLEtBQUssR0FBR0YsYUFGZCxDQUR1QyxDQUdUOztBQUU5QixpQkFBT0UsS0FBUDtBQUNELFNBTlEsQ0FEZjtBQVNBLGFBQUtDLFNBQUwsQ0FBZWIsTUFBZjtBQUNEO0FBQ0Y7Ozs4QkFFU2MsYyxFQUFnQkMsZSxFQUFpQjtBQUN6QyxVQUFNZixNQUFNLEdBQUcsS0FBS2dCLFNBQUwsRUFBZjtBQUVBRixNQUFBQSxjQUFjLENBQUNHLFNBQWYsQ0FBeUJqQixNQUF6Qjs7QUFFQSwyRkFBZ0JjLGNBQWhCLEVBQWdDQyxlQUFoQztBQUNEOzs7bUNBRXFCRyxLLEVBQU9DLFUsRUFBWWhCLFcsRUFBYUMsTyxFQUFTQyxNLEVBQStCO0FBQUEsd0NBQXBCZSxrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQUFFLGFBQU92QixhQUFhLENBQUN3QixjQUFkLE9BQUF4QixhQUFhLEdBQWdCcUIsS0FBaEIsRUFBdUJDLFVBQXZCLEVBQW1DaEIsV0FBbkMsRUFBZ0RDLE9BQWhELEVBQXlEQyxNQUF6RCxTQUFvRWUsa0JBQXBFLEVBQXBCO0FBQThHOzs7O0VBcEM1S3ZCLGE7O0FBdUNwQ3lCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpCLHFCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyZWRGYWNldCA9IHJlcXVpcmUoJy4uLy4uL3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbik7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuXG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBjcmVhdGVGYWNldHMoaGlkZGVuKSB7XG4gICAgaGlkZGVuID0gc3VwZXIuY3JlYXRlRmFjZXRzKGhpZGRlbik7ICAvLy9cblxuICAgIGlmICghaGlkZGVuKSB7XG4gICAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMubWFwKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgY29sb3VyZWRGYWNldCA9IENvbG91cmVkRmFjZXQuZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQW5kQ29sb3VyKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuY29sb3VyKSxcbiAgICAgICAgICAgICAgICAgICAgZmFjZXQgPSBjb2xvdXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhY2V0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkQ2FudmFzRWxlbWVudDtcbiJdfQ==