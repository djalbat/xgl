'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RendererData = require('../../renderer/data'),
    vectorMaths = require('../../maths/vector'),
    arrayUtilities = require('../../utilities/array');

var add2 = vectorMaths.add2,
    multiply2 = vectorMaths.multiply2,
    merge = arrayUtilities.merge,
    flatten = arrayUtilities.flatten,
    add = merge; ///

var TextureRendererData = function (_RendererData) {
  _inherits(TextureRendererData, _RendererData);

  function TextureRendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex, vertexTextureCoordinatesData) {
    _classCallCheck(this, TextureRendererData);

    var _this = _possibleConstructorReturn(this, (TextureRendererData.__proto__ || Object.getPrototypeOf(TextureRendererData)).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex));

    _this.vertexTextureCoordinatesData = vertexTextureCoordinatesData;
    return _this;
  }

  _createClass(TextureRendererData, [{
    key: 'getVertexTextureCoordinatesData',
    value: function getVertexTextureCoordinatesData() {
      return this.vertexTextureCoordinatesData;
    }
  }, {
    key: 'addVertexTextureCoordinates',
    value: function addVertexTextureCoordinates(vertexTextureCoordinates) {
      vertexTextureCoordinates = vertexTextureCoordinates.map(function (vertexTextureCoordinates) {
        ///
        vertexTextureCoordinates = verticallyFlipVertexTextureCoordinates(vertexTextureCoordinates);

        return vertexTextureCoordinates;
      });

      var vertexTextureCoordinatesData = flatten(vertexTextureCoordinates);

      add(this.vertexTextureCoordinatesData, vertexTextureCoordinatesData);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var vertexTextureCoordinatesData = [],
          textureRendererData = RendererData.fromNothing(TextureRendererData, vertexTextureCoordinatesData);

      return textureRendererData;
    }
  }]);

  return TextureRendererData;
}(RendererData);

module.exports = TextureRendererData;

function verticallyFlipVertexTextureCoordinates(vertexTextureCoordinates) {
  return add2(multiply2(vertexTextureCoordinates, [1, -1]), [0, 1]);
} ///
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9yZW5kZXJlci9kYXRhL3RleHR1cmUuanMiXSwibmFtZXMiOlsiUmVuZGVyZXJEYXRhIiwicmVxdWlyZSIsInZlY3Rvck1hdGhzIiwiYXJyYXlVdGlsaXRpZXMiLCJhZGQyIiwibXVsdGlwbHkyIiwibWVyZ2UiLCJmbGF0dGVuIiwiYWRkIiwiVGV4dHVyZVJlbmRlcmVyRGF0YSIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJ2ZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwibWF4aW11bVZlcnRleEluZGV4IiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSIsInZlcnRleFRleHR1cmVDb29yZGluYXRlcyIsIm1hcCIsInZlcnRpY2FsbHlGbGlwVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwidGV4dHVyZVJlbmRlcmVyRGF0YSIsImZyb21Ob3RoaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLHFCQUFSLENBQXJCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxvQkFBUixDQURwQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSx1QkFBUixDQUZ2Qjs7SUFJUUcsSSxHQUFvQkYsVyxDQUFwQkUsSTtJQUFNQyxTLEdBQWNILFcsQ0FBZEcsUztJQUNOQyxLLEdBQW1CSCxjLENBQW5CRyxLO0lBQU9DLE8sR0FBWUosYyxDQUFaSSxPO0lBQ1RDLEcsR0FBTUYsSyxFQUFROztJQUVkRyxtQjs7O0FBQ0osK0JBQVlDLG1CQUFaLEVBQWlDQyxpQkFBakMsRUFBb0RDLGlCQUFwRCxFQUF1RUMsa0JBQXZFLEVBQTJGQyw0QkFBM0YsRUFBeUg7QUFBQTs7QUFBQSwwSUFDakhKLG1CQURpSCxFQUM1RkMsaUJBRDRGLEVBQ3pFQyxpQkFEeUUsRUFDdERDLGtCQURzRDs7QUFHdkgsVUFBS0MsNEJBQUwsR0FBb0NBLDRCQUFwQztBQUh1SDtBQUl4SDs7OztzREFFaUM7QUFDaEMsYUFBTyxLQUFLQSw0QkFBWjtBQUNEOzs7Z0RBRTJCQyx3QixFQUEwQjtBQUNwREEsaUNBQTJCQSx5QkFBeUJDLEdBQXpCLENBQTZCLFVBQVNELHdCQUFULEVBQW1DO0FBQUc7QUFDNUZBLG1DQUE0QkUsdUNBQXVDRix3QkFBdkMsQ0FBNUI7O0FBRUEsZUFBT0Esd0JBQVA7QUFDRCxPQUowQixDQUEzQjs7QUFNQSxVQUFNRCwrQkFBK0JQLFFBQVFRLHdCQUFSLENBQXJDOztBQUVBUCxVQUFJLEtBQUtNLDRCQUFULEVBQXVDQSw0QkFBdkM7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSwrQkFBK0IsRUFBckM7QUFBQSxVQUNNSSxzQkFBc0JsQixhQUFhbUIsV0FBYixDQUF5QlYsbUJBQXpCLEVBQThDSyw0QkFBOUMsQ0FENUI7O0FBR0EsYUFBT0ksbUJBQVA7QUFDRDs7OztFQTVCK0JsQixZOztBQStCbENvQixPQUFPQyxPQUFQLEdBQWlCWixtQkFBakI7O0FBRUEsU0FBU1Esc0NBQVQsQ0FBZ0RGLHdCQUFoRCxFQUEwRTtBQUFFLFNBQU9YLEtBQUtDLFVBQVVVLHdCQUFWLEVBQW9DLENBQUUsQ0FBRixFQUFLLENBQUMsQ0FBTixDQUFwQyxDQUFMLEVBQXFELENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBckQsQ0FBUDtBQUF3RSxDLENBQUUiLCJmaWxlIjoidGV4dHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXJEYXRhID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvZGF0YScpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi8uLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgYWRkMiwgbXVsdGlwbHkyIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgbWVyZ2UsIGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgbWF4aW11bVZlcnRleEluZGV4LCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBtYXhpbXVtVmVydGV4SW5kZXgpO1xuICAgIFxuICAgIHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMpIHtcbiAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMgPSB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMubWFwKGZ1bmN0aW9uKHZlcnRleFRleHR1cmVDb29yZGluYXRlcykgeyAgLy8vXG4gICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMgPSAgdmVydGljYWxseUZsaXBWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgICAgcmV0dXJuIHZlcnRleFRleHR1cmVDb29yZGluYXRlcztcbiAgICB9KTtcblxuICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBmbGF0dGVuKHZlcnRleFRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlckRhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXJEYXRhO1xuXG5mdW5jdGlvbiB2ZXJ0aWNhbGx5RmxpcFZlcnRleFRleHR1cmVDb29yZGluYXRlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMpIHsgcmV0dXJuIGFkZDIobXVsdGlwbHkyKHZlcnRleFRleHR1cmVDb29yZGluYXRlcywgWyAxLCAtMSBdKSwgWyAwLCAxIF0pOyB9ICAvLy9cbiJdfQ==