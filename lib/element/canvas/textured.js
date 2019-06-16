'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TexturedFacet = require('../../primitive/facet/textured'),
    CanvasElement = require('../../element/canvas');

var TexturedCanvasElement = function (_CanvasElement) {
  _inherits(TexturedCanvasElement, _CanvasElement);

  function TexturedCanvasElement(transform, facets, mask, hidden, coordinates, indexes, imageName, textureCoordinates) {
    _classCallCheck(this, TexturedCanvasElement);

    var _this = _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).call(this, transform, facets, mask, hidden));

    _this.coordinates = coordinates;

    _this.indexes = indexes;

    _this.imageName = imageName;

    _this.textureCoordinates = textureCoordinates;
    return _this;
  }

  _createClass(TexturedCanvasElement, [{
    key: 'createFacets',
    value: function createFacets() {
      var _this2 = this;

      var hidden = this.isHidden();

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

      _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'createFacets', this).call(this);
    }
  }, {
    key: 'addFacets',
    value: function addFacets(colourRenderer, textureRenderer) {
      var facets = this.getFacets();

      textureRenderer.addFacets(facets);

      _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'addFacets', this).call(this, colourRenderer, textureRenderer);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        remainingArguments[_key - 6] = arguments[_key];
      }

      return CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, coordinates, indexes, imageName, textureCoordinates].concat(remainingArguments));
    }
  }]);

  return TexturedCanvasElement;
}(CanvasElement);

module.exports = TexturedCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJUZXh0dXJlZEZhY2V0IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJ0cmFuc2Zvcm0iLCJmYWNldHMiLCJtYXNrIiwiaGlkZGVuIiwiY29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiaW1hZ2VOYW1lIiwidGV4dHVyZUNvb3JkaW5hdGVzIiwiaXNIaWRkZW4iLCJpbmRleFR1cGxlcyIsIm1hcCIsImluZGV4VHVwbGUiLCJpbmRleCIsInZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiY29vcmRpbmF0ZVR1cGxlcyIsInRleHR1cmVkRmFjZXQiLCJmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVBbmRJbWFnZU5hbWUiLCJmYWNldCIsInNldEZhY2V0cyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiZ2V0RmFjZXRzIiwiYWRkRmFjZXRzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLGdDQUFSLENBQXRCO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLHNCQUFSLENBRHRCOztJQUdNRSxxQjs7O0FBQ0osaUNBQVlDLFNBQVosRUFBdUJDLE1BQXZCLEVBQStCQyxJQUEvQixFQUFxQ0MsTUFBckMsRUFBNkNDLFdBQTdDLEVBQTBEQyxPQUExRCxFQUFtRUMsU0FBbkUsRUFBOEVDLGtCQUE5RSxFQUFrRztBQUFBOztBQUFBLDhJQUMxRlAsU0FEMEYsRUFDL0VDLE1BRCtFLEVBQ3ZFQyxJQUR1RSxFQUNqRUMsTUFEaUU7O0FBR2hHLFVBQUtDLFdBQUwsR0FBbUJBLFdBQW5COztBQUVBLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjs7QUFFQSxVQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBVGdHO0FBVWpHOzs7O21DQUVjO0FBQUE7O0FBQ2IsVUFBTUosU0FBUyxLQUFLSyxRQUFMLEVBQWY7O0FBRUEsVUFBSSxDQUFDTCxNQUFMLEVBQWE7QUFDWCxZQUFNTSxjQUFjLEtBQUtKLE9BQXpCO0FBQUEsWUFBbUM7QUFDN0JKLGlCQUFTUSxZQUFZQyxHQUFaLENBQWdCLFVBQUNDLFVBQUQsRUFBYUMsS0FBYixFQUF1QjtBQUM5QyxjQUFNQyxnQ0FBZ0MsT0FBS04sa0JBQUwsQ0FBd0JLLEtBQXhCLENBQXRDO0FBQUEsY0FBc0U7QUFDaEVFLDZCQUFtQixPQUFLVixXQUQ5QjtBQUFBLGNBQzJDO0FBQ3JDVywwQkFBZ0JuQixjQUFjb0Isa0VBQWQsQ0FBaUZILDZCQUFqRixFQUFnSEMsZ0JBQWhILEVBQWtJSCxVQUFsSSxFQUE4SSxPQUFLTCxTQUFuSixDQUZ0QjtBQUFBLGNBR01XLFFBQVFGLGFBSGQsQ0FEOEMsQ0FJaEI7O0FBRTlCLGlCQUFPRSxLQUFQO0FBQ0QsU0FQUSxDQURmOztBQVVBLGFBQUtDLFNBQUwsQ0FBZWpCLE1BQWY7QUFDRDs7QUFFRDtBQUNEOzs7OEJBRVNrQixjLEVBQWdCQyxlLEVBQWlCO0FBQ3pDLFVBQU1uQixTQUFTLEtBQUtvQixTQUFMLEVBQWY7O0FBRUFELHNCQUFnQkUsU0FBaEIsQ0FBMEJyQixNQUExQjs7QUFFQSw4SUFBZ0JrQixjQUFoQixFQUFnQ0MsZUFBaEM7QUFDRDs7O21DQUVxQkcsSyxFQUFPQyxVLEVBQVlwQixXLEVBQWFDLE8sRUFBU0MsUyxFQUFXQyxrQixFQUEyQztBQUFBLHdDQUFwQmtCLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQUUsYUFBTzNCLGNBQWM0QixjQUFkLHVCQUE2QkgsS0FBN0IsRUFBb0NDLFVBQXBDLEVBQWdEcEIsV0FBaEQsRUFBNkRDLE9BQTdELEVBQXNFQyxTQUF0RSxFQUFpRkMsa0JBQWpGLFNBQXdHa0Isa0JBQXhHLEVBQVA7QUFBcUk7Ozs7RUF6QzFOM0IsYTs7QUE0Q3BDNkIsT0FBT0MsT0FBUCxHQUFpQjdCLHFCQUFqQiIsImZpbGUiOiJ0ZXh0dXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGV4dHVyZWRGYWNldCA9IHJlcXVpcmUoJy4uLy4uL3ByaW1pdGl2ZS9mYWNldC90ZXh0dXJlZCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpIHtcbiAgICBzdXBlcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcblxuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKCkge1xuICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuaXNIaWRkZW4oKTtcblxuICAgIGlmICghaGlkZGVuKSB7XG4gICAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMubWFwKChpbmRleFR1cGxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzW2luZGV4XSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldCA9IFRleHR1cmVkRmFjZXQuZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlQW5kSW1hZ2VOYW1lKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmltYWdlTmFtZSksXG4gICAgICAgICAgICAgICAgICAgIGZhY2V0ID0gdGV4dHVyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBmYWNldDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICAgIH1cblxuICAgIHN1cGVyLmNyZWF0ZUZhY2V0cygpO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRDYW52YXNFbGVtZW50O1xuIl19