'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var TextureElement = function (_Element) {
  _inherits(TextureElement, _Element);

  function TextureElement(vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData) {
    _classCallCheck(this, TextureElement);

    var _this = _possibleConstructorReturn(this, (TextureElement.__proto__ || Object.getPrototypeOf(TextureElement)).call(this));

    _this.vertexPositionData = vertexPositionData;
    _this.vertexNormalData = vertexNormalData;
    _this.vertexIndexData = vertexIndexData;
    _this.textureCoordinateData = textureCoordinateData;
    return _this;
  }

  _createClass(TextureElement, [{
    key: 'getVertexPositionData',
    value: function getVertexPositionData() {
      return this.vertexPositionData;
    }
  }, {
    key: 'getVertexNormalData',
    value: function getVertexNormalData() {
      return this.vertexNormalData;
    }
  }, {
    key: 'getVertexIndexData',
    value: function getVertexIndexData() {
      return this.vertexIndexData;
    }
  }, {
    key: 'getTextureCoordinateData',
    value: function getTextureCoordinateData() {
      return this.textureCoordinateData;
    }
  }, {
    key: 'create',
    value: function create(colourShader, textureShader) {
      textureShader.addVertexPositionData(this.vertexPositionData);
      textureShader.addVertexNormalData(this.vertexNormalData);
      textureShader.addVertexIndexData(this.vertexIndexData);
      textureShader.addTextureCoordinateData(this.textureCoordinateData);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        remainingArguments[_key - 6] = arguments[_key];
      }

      /// 
      var textureElement = new (Function.prototype.bind.apply(Class, [null].concat([vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData], remainingArguments)))();

      return textureElement;
    }
  }]);

  return TextureElement;
}(Element);

module.exports = TextureElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3RleHR1cmUuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJUZXh0dXJlRWxlbWVudCIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiYWRkVmVydGV4UG9zaXRpb25EYXRhIiwiYWRkVmVydGV4Tm9ybWFsRGF0YSIsImFkZFZlcnRleEluZGV4RGF0YSIsImFkZFRleHR1cmVDb29yZGluYXRlRGF0YSIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInRleHR1cmVFbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7O0lBRU1DLGM7OztBQUNKLDBCQUFZQyxrQkFBWixFQUFnQ0MsZ0JBQWhDLEVBQWtEQyxlQUFsRCxFQUFtRUMscUJBQW5FLEVBQTBGO0FBQUE7O0FBQUE7O0FBR3hGLFVBQUtILGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsVUFBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxVQUFLQyxxQkFBTCxHQUE2QkEscUJBQTdCO0FBTndGO0FBT3pGOzs7OzRDQUV1QjtBQUN0QixhQUFPLEtBQUtILGtCQUFaO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsYUFBTyxLQUFLQyxnQkFBWjtBQUNEOzs7eUNBRW9CO0FBQ25CLGFBQU8sS0FBS0MsZUFBWjtBQUNEOzs7K0NBRTBCO0FBQ3pCLGFBQU8sS0FBS0MscUJBQVo7QUFDRDs7OzJCQUVNQyxZLEVBQWNDLGEsRUFBZTtBQUNsQ0Esb0JBQWNDLHFCQUFkLENBQW9DLEtBQUtOLGtCQUF6QztBQUNBSyxvQkFBY0UsbUJBQWQsQ0FBa0MsS0FBS04sZ0JBQXZDO0FBQ0FJLG9CQUFjRyxrQkFBZCxDQUFpQyxLQUFLTixlQUF0QztBQUNBRyxvQkFBY0ksd0JBQWQsQ0FBdUMsS0FBS04scUJBQTVDO0FBQ0Q7OzttQ0FFcUJPLEssRUFBT0MsVSxFQUFZWCxrQixFQUFvQkMsZ0IsRUFBa0JDLGUsRUFBaUJDLHFCLEVBQThDO0FBQUEsd0NBQXBCUyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUFHO0FBQy9JLFVBQU1DLG9EQUFxQkgsS0FBckIsaUJBQTJCVixrQkFBM0IsRUFBK0NDLGdCQUEvQyxFQUFpRUMsZUFBakUsRUFBa0ZDLHFCQUFsRixHQUE0R1Msa0JBQTVHLEtBQU47O0FBRUEsYUFBT0MsY0FBUDtBQUNEOzs7O0VBckMwQmhCLE87O0FBd0M3QmlCLE9BQU9DLE9BQVAsR0FBaUJoQixjQUFqQiIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBUZXh0dXJlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudmVydGV4UG9zaXRpb25EYXRhID0gdmVydGV4UG9zaXRpb25EYXRhO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsRGF0YSA9IHZlcnRleE5vcm1hbERhdGE7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleERhdGEgPSB2ZXJ0ZXhJbmRleERhdGE7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbkRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25EYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4Tm9ybWFsRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4SW5kZXhEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleEluZGV4RGF0YTtcbiAgfVxuXG4gIGdldFRleHR1cmVDb29yZGluYXRlRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKSB7XG4gICAgdGV4dHVyZVNoYWRlci5hZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICAgIHRleHR1cmVTaGFkZXIuYWRkVmVydGV4Tm9ybWFsRGF0YSh0aGlzLnZlcnRleE5vcm1hbERhdGEpO1xuICAgIHRleHR1cmVTaGFkZXIuYWRkVmVydGV4SW5kZXhEYXRhKHRoaXMudmVydGV4SW5kZXhEYXRhKTtcbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFRleHR1cmVDb29yZGluYXRlRGF0YSh0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyAgLy8vIFxuICAgIGNvbnN0IHRleHR1cmVFbGVtZW50ID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUVsZW1lbnQ7XG4iXX0=