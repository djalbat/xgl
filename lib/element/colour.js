'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var ColourElement = function (_Element) {
  _inherits(ColourElement, _Element);

  function ColourElement(vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData) {
    _classCallCheck(this, ColourElement);

    var _this = _possibleConstructorReturn(this, (ColourElement.__proto__ || Object.getPrototypeOf(ColourElement)).call(this));

    _this.vertexPositionData = vertexPositionData;
    _this.vertexNormalData = vertexNormalData;
    _this.vertexIndexData = vertexIndexData;
    _this.vertexColourData = vertexColourData;
    return _this;
  }

  _createClass(ColourElement, [{
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
    key: 'create',
    value: function create(colourShader, textureShader) {
      colourShader.addVertexPositionData(this.vertexPositionData);
      colourShader.addVertexNormalData(this.vertexNormalData);
      colourShader.addVertexIndexData(this.vertexIndexData);
      colourShader.addVertexColourData(this.vertexColourData);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        remainingArguments[_key - 6] = arguments[_key];
      }

      /// 
      var colourElement = new (Function.prototype.bind.apply(Class, [null].concat([vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData], remainingArguments)))();

      return colourElement;
    }
  }]);

  return ColourElement;
}(Element);

module.exports = ColourElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NvbG91ci5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkNvbG91ckVsZW1lbnQiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwidmVydGV4Q29sb3VyRGF0YSIsImNvbG91clNoYWRlciIsInRleHR1cmVTaGFkZXIiLCJhZGRWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJhZGRWZXJ0ZXhOb3JtYWxEYXRhIiwiYWRkVmVydGV4SW5kZXhEYXRhIiwiYWRkVmVydGV4Q29sb3VyRGF0YSIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNvbG91ckVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjs7SUFFTUMsYTs7O0FBQ0oseUJBQVlDLGtCQUFaLEVBQWdDQyxnQkFBaEMsRUFBa0RDLGVBQWxELEVBQW1FQyxnQkFBbkUsRUFBcUY7QUFBQTs7QUFBQTs7QUFHbkYsVUFBS0gsa0JBQUwsR0FBMEJBLGtCQUExQjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFObUY7QUFPcEY7Ozs7NENBRXVCO0FBQ3RCLGFBQU8sS0FBS0gsa0JBQVo7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtDLGdCQUFaO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsYUFBTyxLQUFLQyxlQUFaO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsYUFBTyxLQUFLQyxnQkFBWjtBQUNEOzs7MkJBRU1DLFksRUFBY0MsYSxFQUFlO0FBQ2xDRCxtQkFBYUUscUJBQWIsQ0FBbUMsS0FBS04sa0JBQXhDO0FBQ0FJLG1CQUFhRyxtQkFBYixDQUFpQyxLQUFLTixnQkFBdEM7QUFDQUcsbUJBQWFJLGtCQUFiLENBQWdDLEtBQUtOLGVBQXJDO0FBQ0FFLG1CQUFhSyxtQkFBYixDQUFpQyxLQUFLTixnQkFBdEM7QUFDRDs7O21DQUVxQk8sSyxFQUFPQyxVLEVBQVlYLGtCLEVBQW9CQyxnQixFQUFrQkMsZSxFQUFpQkMsZ0IsRUFBeUM7QUFBQSx3Q0FBcEJTLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQUc7QUFDMUksVUFBTUMsbURBQW9CSCxLQUFwQixpQkFBMEJWLGtCQUExQixFQUE4Q0MsZ0JBQTlDLEVBQWdFQyxlQUFoRSxFQUFpRkMsZ0JBQWpGLEdBQXNHUyxrQkFBdEcsS0FBTjs7QUFFQSxhQUFPQyxhQUFQO0FBQ0Q7Ozs7RUFyQ3lCaEIsTzs7QUF3QzVCaUIsT0FBT0MsT0FBUCxHQUFpQmhCLGFBQWpCIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgQ29sb3VyRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdmVydGV4Q29sb3VyRGF0YSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSA9IHZlcnRleFBvc2l0aW9uRGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbERhdGEgPSB2ZXJ0ZXhOb3JtYWxEYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhEYXRhID0gdmVydGV4SW5kZXhEYXRhO1xuICAgIHRoaXMudmVydGV4Q29sb3VyRGF0YSA9IHZlcnRleENvbG91ckRhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbkRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25EYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4Tm9ybWFsRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4SW5kZXhEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleEluZGV4RGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91ckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyRGF0YTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpIHtcbiAgICBjb2xvdXJTaGFkZXIuYWRkVmVydGV4UG9zaXRpb25EYXRhKHRoaXMudmVydGV4UG9zaXRpb25EYXRhKTtcbiAgICBjb2xvdXJTaGFkZXIuYWRkVmVydGV4Tm9ybWFsRGF0YSh0aGlzLnZlcnRleE5vcm1hbERhdGEpO1xuICAgIGNvbG91clNoYWRlci5hZGRWZXJ0ZXhJbmRleERhdGEodGhpcy52ZXJ0ZXhJbmRleERhdGEpO1xuICAgIGNvbG91clNoYWRlci5hZGRWZXJ0ZXhDb2xvdXJEYXRhKHRoaXMudmVydGV4Q29sb3VyRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgIC8vLyBcbiAgICBjb25zdCBjb2xvdXJFbGVtZW50ID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyRWxlbWVudDtcbiJdfQ==