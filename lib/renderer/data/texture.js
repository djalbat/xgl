'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RendererData = require('../../renderer/data'),
    arrayUtilities = require('../../utilities/array'),
    vectorUtilities = require('../../utilities/vector');

var add2 = vectorUtilities.add2,
    multiply2 = vectorUtilities.multiply2,
    merge = arrayUtilities.merge,
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
      textureCoordinates = textureCoordinates.map(function (textureCoordinates) {
        ///
        textureCoordinates = verticallyFlipTextureCoordinates(textureCoordinates);

        return textureCoordinates;
      });

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

function verticallyFlipTextureCoordinates(textureCoordinates) {
  return add2(multiply2(textureCoordinates, [1, -1]), [0, 1]);
} ///
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9yZW5kZXJlci9kYXRhL3RleHR1cmUuanMiXSwibmFtZXMiOlsiUmVuZGVyZXJEYXRhIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidmVjdG9yVXRpbGl0aWVzIiwiYWRkMiIsIm11bHRpcGx5MiIsIm1lcmdlIiwiZmxhdHRlbiIsImFkZCIsIlRleHR1cmVSZW5kZXJlckRhdGEiLCJ2ZXJ0ZXhQb3NpdGlvbnNEYXRhIiwidmVydGV4Tm9ybWFsc0RhdGEiLCJ2ZXJ0ZXhJbmRleGVzRGF0YSIsIm1heGltdW1WZXJ0ZXhJbmRleCIsInRleHR1cmVDb29yZGluYXRlc0RhdGEiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJtYXAiLCJ2ZXJ0aWNhbGx5RmxpcFRleHR1cmVDb29yZGluYXRlcyIsInRleHR1cmVSZW5kZXJlckRhdGEiLCJmcm9tTm90aGluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxxQkFBUixDQUFyQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSx1QkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSx3QkFBUixDQUZ4Qjs7SUFJUUcsSSxHQUFvQkQsZSxDQUFwQkMsSTtJQUFNQyxTLEdBQWNGLGUsQ0FBZEUsUztJQUNOQyxLLEdBQW1CSixjLENBQW5CSSxLO0lBQU9DLE8sR0FBWUwsYyxDQUFaSyxPO0lBQ1RDLEcsR0FBTUYsSyxFQUFROztJQUVkRyxtQjs7O0FBQ0osK0JBQVlDLG1CQUFaLEVBQWlDQyxpQkFBakMsRUFBb0RDLGlCQUFwRCxFQUF1RUMsa0JBQXZFLEVBQTJGQyxzQkFBM0YsRUFBbUg7QUFBQTs7QUFBQSwwSUFDM0dKLG1CQUQyRyxFQUN0RkMsaUJBRHNGLEVBQ25FQyxpQkFEbUUsRUFDaERDLGtCQURnRDs7QUFHakgsVUFBS0Msc0JBQUwsR0FBOEJBLHNCQUE5QjtBQUhpSDtBQUlsSDs7OztnREFFMkI7QUFDMUIsYUFBTyxLQUFLQSxzQkFBWjtBQUNEOzs7MENBRXFCQyxrQixFQUFvQjtBQUN4Q0EsMkJBQXFCQSxtQkFBbUJDLEdBQW5CLENBQXVCLFVBQVNELGtCQUFULEVBQTZCO0FBQUc7QUFDMUVBLDZCQUFzQkUsaUNBQWlDRixrQkFBakMsQ0FBdEI7O0FBRUEsZUFBT0Esa0JBQVA7QUFDRCxPQUpvQixDQUFyQjs7QUFNQSxVQUFNRCx5QkFBeUJQLFFBQVFRLGtCQUFSLENBQS9COztBQUVBUCxVQUFJLEtBQUtNLHNCQUFULEVBQWlDQSxzQkFBakM7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSx5QkFBeUIsRUFBL0I7QUFBQSxVQUNNSSxzQkFBc0JsQixhQUFhbUIsV0FBYixDQUF5QlYsbUJBQXpCLEVBQThDSyxzQkFBOUMsQ0FENUI7O0FBR0EsYUFBT0ksbUJBQVA7QUFDRDs7OztFQTVCK0JsQixZOztBQStCbENvQixPQUFPQyxPQUFQLEdBQWlCWixtQkFBakI7O0FBRUEsU0FBU1EsZ0NBQVQsQ0FBMENGLGtCQUExQyxFQUE4RDtBQUFFLFNBQU9YLEtBQUtDLFVBQVVVLGtCQUFWLEVBQThCLENBQUUsQ0FBRixFQUFLLENBQUMsQ0FBTixDQUE5QixDQUFMLEVBQStDLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBL0MsQ0FBUDtBQUFrRSxDLENBQUUiLCJmaWxlIjoidGV4dHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXJEYXRhID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvZGF0YScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZWN0b3InKTtcblxuY29uc3QgeyBhZGQyLCBtdWx0aXBseTIgfSA9IHZlY3RvclV0aWxpdGllcyxcbiAgICAgIHsgbWVyZ2UsIGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgbWF4aW11bVZlcnRleEluZGV4LCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBtYXhpbXVtVmVydGV4SW5kZXgpO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IHRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cbiAgXG4gIGdldFRleHR1cmVDb29yZGluYXRlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGFkZFRleHR1cmVDb29yZGluYXRlcyh0ZXh0dXJlQ29vcmRpbmF0ZXMpIHtcbiAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXMubWFwKGZ1bmN0aW9uKHRleHR1cmVDb29yZGluYXRlcykgeyAgLy8vXG4gICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSAgdmVydGljYWxseUZsaXBUZXh0dXJlQ29vcmRpbmF0ZXModGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlcztcbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBmbGF0dGVuKHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICBhZGQodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlckRhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXJEYXRhO1xuXG5mdW5jdGlvbiB2ZXJ0aWNhbGx5RmxpcFRleHR1cmVDb29yZGluYXRlcyh0ZXh0dXJlQ29vcmRpbmF0ZXMpIHsgcmV0dXJuIGFkZDIobXVsdGlwbHkyKHRleHR1cmVDb29yZGluYXRlcywgWyAxLCAtMSBdKSwgWyAwLCAxIF0pOyB9ICAvLy9cbiJdfQ==