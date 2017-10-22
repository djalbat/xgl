'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RendererData = require('../../renderer/data'),
    arrayUtilities = require('../../utilities/array');

var merge = arrayUtilities.merge,
    flatten = arrayUtilities.flatten,
    add = merge; ///

var TextureRendererData = function (_RendererData) {
  _inherits(TextureRendererData, _RendererData);

  function TextureRendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex, textureCoordinatesData) {
    _classCallCheck(this, TextureRendererData);

    var _this = _possibleConstructorReturn(this, (TextureRendererData.__proto__ || Object.getPrototypeOf(TextureRendererData)).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex));

    _this.textureCoordinatesData = textureCoordinatesData;
    return _this;
  }

  _createClass(TextureRendererData, [{
    key: 'getTextureCoordinatesData',
    value: function getTextureCoordinatesData() {
      return this.textureCoordinatesData;
    }
  }, {
    key: 'addTextureCoordinates',
    value: function addTextureCoordinates(textureCoordinates) {
      var textureCoordinatesData = flatten(textureCoordinates);

      add(this.textureCoordinatesData, textureCoordinatesData);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var textureCoordinatesData = [],
          textureRendererData = RendererData.fromNothing(TextureRendererData, textureCoordinatesData);

      return textureRendererData;
    }
  }]);

  return TextureRendererData;
}(RendererData);

module.exports = TextureRendererData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9yZW5kZXJlci9kYXRhL3RleHR1cmUuanMiXSwibmFtZXMiOlsiUmVuZGVyZXJEYXRhIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJmbGF0dGVuIiwiYWRkIiwiVGV4dHVyZVJlbmRlcmVyRGF0YSIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJ2ZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwibWF4aW11bVZlcnRleEluZGV4IiwidGV4dHVyZUNvb3JkaW5hdGVzRGF0YSIsInRleHR1cmVDb29yZGluYXRlcyIsInRleHR1cmVSZW5kZXJlckRhdGEiLCJmcm9tTm90aGluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxxQkFBUixDQUFyQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSx1QkFBUixDQUR2Qjs7SUFHUUUsSyxHQUFtQkQsYyxDQUFuQkMsSztJQUFPQyxPLEdBQVlGLGMsQ0FBWkUsTztJQUNUQyxHLEdBQU1GLEssRUFBUTs7SUFFZEcsbUI7OztBQUNKLCtCQUFZQyxtQkFBWixFQUFpQ0MsaUJBQWpDLEVBQW9EQyxpQkFBcEQsRUFBdUVDLGtCQUF2RSxFQUEyRkMsc0JBQTNGLEVBQW1IO0FBQUE7O0FBQUEsMElBQzNHSixtQkFEMkcsRUFDdEZDLGlCQURzRixFQUNuRUMsaUJBRG1FLEVBQ2hEQyxrQkFEZ0Q7O0FBR2pILFVBQUtDLHNCQUFMLEdBQThCQSxzQkFBOUI7QUFIaUg7QUFJbEg7Ozs7Z0RBRTJCO0FBQzFCLGFBQU8sS0FBS0Esc0JBQVo7QUFDRDs7OzBDQUVxQkMsa0IsRUFBb0I7QUFDeEMsVUFBTUQseUJBQXlCUCxRQUFRUSxrQkFBUixDQUEvQjs7QUFFQVAsVUFBSSxLQUFLTSxzQkFBVCxFQUFpQ0Esc0JBQWpDO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEseUJBQXlCLEVBQS9CO0FBQUEsVUFDTUUsc0JBQXNCYixhQUFhYyxXQUFiLENBQXlCUixtQkFBekIsRUFBOENLLHNCQUE5QyxDQUQ1Qjs7QUFHQSxhQUFPRSxtQkFBUDtBQUNEOzs7O0VBdEIrQmIsWTs7QUF5QmxDZSxPQUFPQyxPQUFQLEdBQWlCVixtQkFBakIiLCJmaWxlIjoidGV4dHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXJEYXRhID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvZGF0YScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBtZXJnZSwgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jbGFzcyBUZXh0dXJlUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBtYXhpbXVtVmVydGV4SW5kZXgsIHRleHR1cmVDb29yZGluYXRlc0RhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIG1heGltdW1WZXJ0ZXhJbmRleCk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gdGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgYWRkVGV4dHVyZUNvb3JkaW5hdGVzKHRleHR1cmVDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBmbGF0dGVuKHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICBhZGQodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlckRhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXJEYXRhO1xuIl19