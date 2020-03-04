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

var TexturedFacet = require('../../primitive/facet/textured'),
    CanvasElement = require('../../element/canvas');

var TexturedCanvasElement = /*#__PURE__*/function (_CanvasElement) {
  _inherits(TexturedCanvasElement, _CanvasElement);

  function TexturedCanvasElement(transform, facets, mask, hidden, coordinates, indexes, imageName, textureCoordinates) {
    var _this;

    _classCallCheck(this, TexturedCanvasElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TexturedCanvasElement).call(this, transform, facets, mask, hidden));
    _this.coordinates = coordinates;
    _this.indexes = indexes;
    _this.imageName = imageName;
    _this.textureCoordinates = textureCoordinates;
    return _this;
  }

  _createClass(TexturedCanvasElement, [{
    key: "createFacets",
    value: function createFacets(hidden) {
      var _this2 = this;

      hidden = _get(_getPrototypeOf(TexturedCanvasElement.prototype), "createFacets", this).call(this, hidden); ///

      if (!hidden) {
        var indexTuples = this.indexes,
            ///
        facets = indexTuples.map(function (indexTuple, index) {
          var vertexTextureCoordinateTuples = _this2.textureCoordinates[index],
              ///
          coordinateTuples = _this2.coordinates,
              ///
          texturedFacet = TexturedFacet.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, _this2.imageName),
              facet = texturedFacet; ///

          return facet;
        });
        this.setFacets(facets);
      }
    }
  }, {
    key: "addFacets",
    value: function addFacets(colourRenderer, textureRenderer) {
      var facets = this.getFacets();
      textureRenderer.addFacets(facets);

      _get(_getPrototypeOf(TexturedCanvasElement.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        remainingArguments[_key - 6] = arguments[_key];
      }

      return CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, coordinates, indexes, imageName, textureCoordinates].concat(remainingArguments));
    }
  }]);

  return TexturedCanvasElement;
}(CanvasElement);

module.exports = TexturedCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHR1cmVkLmpzIl0sIm5hbWVzIjpbIlRleHR1cmVkRmFjZXQiLCJyZXF1aXJlIiwiQ2FudmFzRWxlbWVudCIsIlRleHR1cmVkQ2FudmFzRWxlbWVudCIsInRyYW5zZm9ybSIsImZhY2V0cyIsIm1hc2siLCJoaWRkZW4iLCJjb29yZGluYXRlcyIsImluZGV4ZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJpbmRleFR1cGxlcyIsIm1hcCIsImluZGV4VHVwbGUiLCJpbmRleCIsInZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiY29vcmRpbmF0ZVR1cGxlcyIsInRleHR1cmVkRmFjZXQiLCJmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVBbmRJbWFnZU5hbWUiLCJmYWNldCIsInNldEZhY2V0cyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiZ2V0RmFjZXRzIiwiYWRkRmFjZXRzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsZ0NBQUQsQ0FBN0I7QUFBQSxJQUNNQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxzQkFBRCxDQUQ3Qjs7SUFHTUUscUI7OztBQUNKLGlDQUFZQyxTQUFaLEVBQXVCQyxNQUF2QixFQUErQkMsSUFBL0IsRUFBcUNDLE1BQXJDLEVBQTZDQyxXQUE3QyxFQUEwREMsT0FBMUQsRUFBbUVDLFNBQW5FLEVBQThFQyxrQkFBOUUsRUFBa0c7QUFBQTs7QUFBQTs7QUFDaEcsK0ZBQU1QLFNBQU4sRUFBaUJDLE1BQWpCLEVBQXlCQyxJQUF6QixFQUErQkMsTUFBL0I7QUFFQSxVQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUVBLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUVBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBRUEsVUFBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjtBQVRnRztBQVVqRzs7OztpQ0FFWUosTSxFQUFRO0FBQUE7O0FBQ25CQSxNQUFBQSxNQUFNLDJGQUFzQkEsTUFBdEIsQ0FBTixDQURtQixDQUNtQjs7QUFFdEMsVUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDWCxZQUFNSyxXQUFXLEdBQUcsS0FBS0gsT0FBekI7QUFBQSxZQUFtQztBQUM3QkosUUFBQUEsTUFBTSxHQUFHTyxXQUFXLENBQUNDLEdBQVosQ0FBZ0IsVUFBQ0MsVUFBRCxFQUFhQyxLQUFiLEVBQXVCO0FBQzlDLGNBQU1DLDZCQUE2QixHQUFHLE1BQUksQ0FBQ0wsa0JBQUwsQ0FBd0JJLEtBQXhCLENBQXRDO0FBQUEsY0FBc0U7QUFDaEVFLFVBQUFBLGdCQUFnQixHQUFHLE1BQUksQ0FBQ1QsV0FEOUI7QUFBQSxjQUMyQztBQUNyQ1UsVUFBQUEsYUFBYSxHQUFHbEIsYUFBYSxDQUFDbUIsa0VBQWQsQ0FBaUZILDZCQUFqRixFQUFnSEMsZ0JBQWhILEVBQWtJSCxVQUFsSSxFQUE4SSxNQUFJLENBQUNKLFNBQW5KLENBRnRCO0FBQUEsY0FHTVUsS0FBSyxHQUFHRixhQUhkLENBRDhDLENBSWhCOztBQUU5QixpQkFBT0UsS0FBUDtBQUNELFNBUFEsQ0FEZjtBQVVBLGFBQUtDLFNBQUwsQ0FBZWhCLE1BQWY7QUFDRDtBQUNGOzs7OEJBRVNpQixjLEVBQWdCQyxlLEVBQWlCO0FBQ3pDLFVBQU1sQixNQUFNLEdBQUcsS0FBS21CLFNBQUwsRUFBZjtBQUVBRCxNQUFBQSxlQUFlLENBQUNFLFNBQWhCLENBQTBCcEIsTUFBMUI7O0FBRUEsMkZBQWdCaUIsY0FBaEIsRUFBZ0NDLGVBQWhDO0FBQ0Q7OzttQ0FFcUJHLEssRUFBT0MsVSxFQUFZbkIsVyxFQUFhQyxPLEVBQVNDLFMsRUFBV0Msa0IsRUFBMkM7QUFBQSx3Q0FBcEJpQixrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQUFFLGFBQU8xQixhQUFhLENBQUMyQixjQUFkLE9BQUEzQixhQUFhLEdBQWdCd0IsS0FBaEIsRUFBdUJDLFVBQXZCLEVBQW1DbkIsV0FBbkMsRUFBZ0RDLE9BQWhELEVBQXlEQyxTQUF6RCxFQUFvRUMsa0JBQXBFLFNBQTJGaUIsa0JBQTNGLEVBQXBCO0FBQXFJOzs7O0VBdkMxTjFCLGE7O0FBMENwQzRCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjVCLHFCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGV4dHVyZWRGYWNldCA9IHJlcXVpcmUoJy4uLy4uL3ByaW1pdGl2ZS9mYWNldC90ZXh0dXJlZCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpIHtcbiAgICBzdXBlcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcblxuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbikge1xuICAgIGhpZGRlbiA9IHN1cGVyLmNyZWF0ZUZhY2V0cyhoaWRkZW4pOyAgLy8vXG5cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLm1hcCgoaW5kZXhUdXBsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLnRleHR1cmVDb29yZGluYXRlc1tpbmRleF0sIC8vL1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBUZXh0dXJlZEZhY2V0LmZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUFuZEltYWdlTmFtZSh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgdGhpcy5pbWFnZU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICBmYWNldCA9IHRleHR1cmVkRmFjZXQ7ICAvLy9cblxuICAgICAgICAgICAgICByZXR1cm4gZmFjZXQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgICB9XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCk7XG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4iXX0=