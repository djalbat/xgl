'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var MixedElement = function (_Element) {
  _inherits(MixedElement, _Element);

  function MixedElement(vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData, textureCoordinateData) {
    _classCallCheck(this, MixedElement);

    var _this = _possibleConstructorReturn(this, (MixedElement.__proto__ || Object.getPrototypeOf(MixedElement)).call(this));

    _this.vertexPositionData = vertexPositionData;
    _this.vertexNormalData = vertexNormalData;
    _this.vertexIndexData = vertexIndexData;
    _this.vertexColourData = vertexColourData;
    _this.textureCoordinateData = textureCoordinateData;
    return _this;
  }

  _createClass(MixedElement, [{
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
    key: 'getVertexColourData',
    value: function getVertexColourData() {
      return this.vertexColourData;
    }
  }, {
    key: 'getTextureCoordinateData',
    value: function getTextureCoordinateData() {
      return this.textureCoordinateData;
    }
  }, {
    key: 'create',
    value: function create(colourShader, textureShader) {
      colourShader.addVertexPositionData(this.vertexPositionData);
      colourShader.addVertexNormalData(this.vertexNormalData);
      colourShader.addVertexIndexData(this.vertexIndexData);
      colourShader.addVertexColourData(this.vertexColourData);
      textureShader.addTextureCoordinateData(this.textureCoordinateData);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData, textureCoordinateData) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 7 ? _len - 7 : 0), _key = 7; _key < _len; _key++) {
        remainingArguments[_key - 7] = arguments[_key];
      }

      /// 
      var colourElement = new (Function.prototype.bind.apply(Class, [null].concat([vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData, textureCoordinateData], remainingArguments)))();

      return colourElement;
    }
  }]);

  return MixedElement;
}(Element);

module.exports = MixedElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L21peGVkLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiTWl4ZWRFbGVtZW50IiwidmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4Tm9ybWFsRGF0YSIsInZlcnRleEluZGV4RGF0YSIsInZlcnRleENvbG91ckRhdGEiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiYWRkVmVydGV4UG9zaXRpb25EYXRhIiwiYWRkVmVydGV4Tm9ybWFsRGF0YSIsImFkZFZlcnRleEluZGV4RGF0YSIsImFkZFZlcnRleENvbG91ckRhdGEiLCJhZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJjb2xvdXJFbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7O0lBRU1DLFk7OztBQUNKLHdCQUFZQyxrQkFBWixFQUFnQ0MsZ0JBQWhDLEVBQWtEQyxlQUFsRCxFQUFtRUMsZ0JBQW5FLEVBQXFGQyxxQkFBckYsRUFBNEc7QUFBQTs7QUFBQTs7QUFHMUcsVUFBS0osa0JBQUwsR0FBMEJBLGtCQUExQjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxVQUFLQyxxQkFBTCxHQUE2QkEscUJBQTdCO0FBUDBHO0FBUTNHOzs7OzRDQUV1QjtBQUN0QixhQUFPLEtBQUtKLGtCQUFaO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsYUFBTyxLQUFLQyxnQkFBWjtBQUNEOzs7eUNBRW9CO0FBQ25CLGFBQU8sS0FBS0MsZUFBWjtBQUNEOzs7MENBRXFCO0FBQ3BCLGFBQU8sS0FBS0MsZ0JBQVo7QUFDRDs7OytDQUUwQjtBQUN6QixhQUFPLEtBQUtDLHFCQUFaO0FBQ0Q7OzsyQkFFTUMsWSxFQUFjQyxhLEVBQWU7QUFDbENELG1CQUFhRSxxQkFBYixDQUFtQyxLQUFLUCxrQkFBeEM7QUFDQUssbUJBQWFHLG1CQUFiLENBQWlDLEtBQUtQLGdCQUF0QztBQUNBSSxtQkFBYUksa0JBQWIsQ0FBZ0MsS0FBS1AsZUFBckM7QUFDQUcsbUJBQWFLLG1CQUFiLENBQWlDLEtBQUtQLGdCQUF0QztBQUNBRyxvQkFBY0ssd0JBQWQsQ0FBdUMsS0FBS1AscUJBQTVDO0FBQ0Q7OzttQ0FFcUJRLEssRUFBT0MsVSxFQUFZYixrQixFQUFvQkMsZ0IsRUFBa0JDLGUsRUFBaUJDLGdCLEVBQWtCQyxxQixFQUE4QztBQUFBLHdDQUFwQlUsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFBRztBQUNqSyxVQUFNQyxtREFBb0JILEtBQXBCLGlCQUEwQlosa0JBQTFCLEVBQThDQyxnQkFBOUMsRUFBZ0VDLGVBQWhFLEVBQWlGQyxnQkFBakYsRUFBbUdDLHFCQUFuRyxHQUE2SFUsa0JBQTdILEtBQU47O0FBRUEsYUFBT0MsYUFBUDtBQUNEOzs7O0VBM0N3QmxCLE87O0FBOEMzQm1CLE9BQU9DLE9BQVAsR0FBaUJsQixZQUFqQiIsImZpbGUiOiJtaXhlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgTWl4ZWRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEgPSB2ZXJ0ZXhQb3NpdGlvbkRhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxEYXRhID0gdmVydGV4Tm9ybWFsRGF0YTtcbiAgICB0aGlzLnZlcnRleEluZGV4RGF0YSA9IHZlcnRleEluZGV4RGF0YTtcbiAgICB0aGlzLnZlcnRleENvbG91ckRhdGEgPSB2ZXJ0ZXhDb2xvdXJEYXRhO1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gdGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25EYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleE5vcm1hbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleEluZGV4RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleERhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91ckRhdGE7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcikge1xuICAgIGNvbG91clNoYWRlci5hZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICAgIGNvbG91clNoYWRlci5hZGRWZXJ0ZXhOb3JtYWxEYXRhKHRoaXMudmVydGV4Tm9ybWFsRGF0YSk7XG4gICAgY29sb3VyU2hhZGVyLmFkZFZlcnRleEluZGV4RGF0YSh0aGlzLnZlcnRleEluZGV4RGF0YSk7XG4gICAgY29sb3VyU2hhZGVyLmFkZFZlcnRleENvbG91ckRhdGEodGhpcy52ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFRleHR1cmVDb29yZGluYXRlRGF0YSh0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyAgLy8vIFxuICAgIGNvbnN0IGNvbG91ckVsZW1lbnQgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHZlcnRleENvbG91ckRhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1peGVkRWxlbWVudDtcbiJdfQ==