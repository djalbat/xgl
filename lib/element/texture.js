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

    var _this = _possibleConstructorReturn(this, (TextureElement.__proto__ || Object.getPrototypeOf(TextureElement)).call(this, vertexPositionData, vertexNormalData, vertexIndexData));

    _this.textureCoordinateData = textureCoordinateData;
    return _this;
  }

  _createClass(TextureElement, [{
    key: 'getTextureCoordinateData',
    value: function getTextureCoordinateData() {
      return this.textureCoordinateData;
    }
  }, {
    key: 'create',
    value: function create(colourShader, textureShader) {
      var vertexPositionData = this.getVertexPositionData(),
          vertexNormalData = this.getVertexNormalData(),
          vertexIndexData = this.getVertexIndexData();

      textureShader.addVertexPositionData(vertexPositionData);
      textureShader.addVertexNormalData(vertexNormalData);
      textureShader.addVertexIndexData(vertexIndexData);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3RleHR1cmUuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJUZXh0dXJlRWxlbWVudCIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiZ2V0VmVydGV4UG9zaXRpb25EYXRhIiwiZ2V0VmVydGV4Tm9ybWFsRGF0YSIsImdldFZlcnRleEluZGV4RGF0YSIsImFkZFZlcnRleFBvc2l0aW9uRGF0YSIsImFkZFZlcnRleE5vcm1hbERhdGEiLCJhZGRWZXJ0ZXhJbmRleERhdGEiLCJhZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ0ZXh0dXJlRWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCOztJQUVNQyxjOzs7QUFDSiwwQkFBWUMsa0JBQVosRUFBZ0NDLGdCQUFoQyxFQUFrREMsZUFBbEQsRUFBbUVDLHFCQUFuRSxFQUEwRjtBQUFBOztBQUFBLGdJQUNsRkgsa0JBRGtGLEVBQzlEQyxnQkFEOEQsRUFDNUNDLGVBRDRDOztBQUd4RixVQUFLQyxxQkFBTCxHQUE2QkEscUJBQTdCO0FBSHdGO0FBSXpGOzs7OytDQUUwQjtBQUN6QixhQUFPLEtBQUtBLHFCQUFaO0FBQ0Q7OzsyQkFFTUMsWSxFQUFjQyxhLEVBQWU7QUFDbEMsVUFBTUwscUJBQXFCLEtBQUtNLHFCQUFMLEVBQTNCO0FBQUEsVUFDTUwsbUJBQW1CLEtBQUtNLG1CQUFMLEVBRHpCO0FBQUEsVUFFTUwsa0JBQWtCLEtBQUtNLGtCQUFMLEVBRnhCOztBQUlBSCxvQkFBY0kscUJBQWQsQ0FBb0NULGtCQUFwQztBQUNBSyxvQkFBY0ssbUJBQWQsQ0FBa0NULGdCQUFsQztBQUNBSSxvQkFBY00sa0JBQWQsQ0FBaUNULGVBQWpDOztBQUVBRyxvQkFBY08sd0JBQWQsQ0FBdUMsS0FBS1QscUJBQTVDO0FBQ0Q7OzttQ0FFcUJVLEssRUFBT0MsVSxFQUFZZCxrQixFQUFvQkMsZ0IsRUFBa0JDLGUsRUFBaUJDLHFCLEVBQThDO0FBQUEsd0NBQXBCWSxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUFHO0FBQy9JLFVBQU1DLG9EQUFxQkgsS0FBckIsaUJBQTJCYixrQkFBM0IsRUFBK0NDLGdCQUEvQyxFQUFpRUMsZUFBakUsRUFBa0ZDLHFCQUFsRixHQUE0R1ksa0JBQTVHLEtBQU47O0FBRUEsYUFBT0MsY0FBUDtBQUNEOzs7O0VBM0IwQm5CLE87O0FBOEI3Qm9CLE9BQU9DLE9BQVAsR0FBaUJuQixjQUFqQiIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBUZXh0dXJlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcikge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YSA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25EYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4RGF0YSA9IHRoaXMuZ2V0VmVydGV4SW5kZXhEYXRhKCk7XG5cbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFZlcnRleFBvc2l0aW9uRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICAgIHRleHR1cmVTaGFkZXIuYWRkVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhJbmRleERhdGEpO1xuICAgIFxuICAgIHRleHR1cmVTaGFkZXIuYWRkVGV4dHVyZUNvb3JkaW5hdGVEYXRhKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7ICAvLy8gXG4gICAgY29uc3QgdGV4dHVyZUVsZW1lbnQgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZUVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlRWxlbWVudDtcbiJdfQ==