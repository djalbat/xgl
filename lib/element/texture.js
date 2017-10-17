'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    vertexUtilities = require('../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    calculateVertexNormalData = vertexUtilities.calculateVertexNormalData,
    calculateVertexIndexData = vertexUtilities.calculateVertexIndexData,
    calculateTextureCoordinateData = vertexUtilities.calculateTextureCoordinateData;

var TextureElement = function (_Element) {
  _inherits(TextureElement, _Element);

  function TextureElement(vertexPositionData, vertexIndexData, vertexNormalData, textureCoordinateData) {
    _classCallCheck(this, TextureElement);

    var _this = _possibleConstructorReturn(this, (TextureElement.__proto__ || Object.getPrototypeOf(TextureElement)).call(this));

    _this.vertexPositionData = vertexPositionData;
    _this.vertexIndexData = vertexIndexData;
    _this.vertexNormalData = vertexNormalData;
    _this.textureCoordinateData = textureCoordinateData;
    return _this;
  }

  _createClass(TextureElement, [{
    key: 'getVertexPositionData',
    value: function getVertexPositionData() {
      return this.vertexPositionData;
    }
  }, {
    key: 'getVertexIndexData',
    value: function getVertexIndexData() {
      return this.vertexIndexData;
    }
  }, {
    key: 'getVertexNormalData',
    value: function getVertexNormalData() {
      return this.vertexNormalData;
    }
  }, {
    key: 'getTextureCoordinateData',
    value: function getTextureCoordinateData() {
      return this.textureCoordinateData;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer) {
      textureRenderer.addVertexPositionData(this.vertexPositionData);
      textureRenderer.addVertexIndexData(this.vertexIndexData);
      textureRenderer.addVertexNormalData(this.vertexNormalData);
      textureRenderer.addTextureCoordinateData(this.textureCoordinateData);
    }
  }], [{
    key: 'fromPropertiesAndInitialVertexPositionData',
    value: function fromPropertiesAndInitialVertexPositionData(Class, properties, initialVertexPositionData) {
      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          position = properties.position,
          rotations = properties.rotations,
          imageName = properties.imageName,
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, position, rotations),
          vertexIndexData = calculateVertexIndexData(initialVertexPositionData),
          vertexNormalData = calculateVertexNormalData(vertexPositionData),
          textureCoordinateData = calculateTextureCoordinateData(initialVertexPositionData, imageName),
          textureElement = new Class(vertexPositionData, vertexIndexData, vertexNormalData, textureCoordinateData);


      return textureElement;
    }
  }]);

  return TextureElement;
}(Element);

module.exports = TextureElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3RleHR1cmUuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhIiwiY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhIiwiY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwiVGV4dHVyZUVsZW1lbnQiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJhZGRWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJhZGRWZXJ0ZXhJbmRleERhdGEiLCJhZGRWZXJ0ZXhOb3JtYWxEYXRhIiwiYWRkVGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImltYWdlTmFtZSIsInRleHR1cmVFbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEscUJBQVIsQ0FEeEI7O0lBR1FFLDJCLEdBQXFIRCxlLENBQXJIQywyQjtJQUE2QkMseUIsR0FBd0ZGLGUsQ0FBeEZFLHlCO0lBQTJCQyx3QixHQUE2REgsZSxDQUE3REcsd0I7SUFBMEJDLDhCLEdBQW1DSixlLENBQW5DSSw4Qjs7SUFFcEZDLGM7OztBQUNKLDBCQUFZQyxrQkFBWixFQUFnQ0MsZUFBaEMsRUFBaURDLGdCQUFqRCxFQUFtRUMscUJBQW5FLEVBQTBGO0FBQUE7O0FBQUE7O0FBR3hGLFVBQUtILGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxVQUFLQyxxQkFBTCxHQUE2QkEscUJBQTdCO0FBTndGO0FBT3pGOzs7OzRDQUV1QjtBQUN0QixhQUFPLEtBQUtILGtCQUFaO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsYUFBTyxLQUFLQyxlQUFaO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsYUFBTyxLQUFLQyxnQkFBWjtBQUNEOzs7K0NBRTBCO0FBQ3pCLGFBQU8sS0FBS0MscUJBQVo7QUFDRDs7OzJCQUVNQyxjLEVBQWdCQyxlLEVBQWlCO0FBQ3RDQSxzQkFBZ0JDLHFCQUFoQixDQUFzQyxLQUFLTixrQkFBM0M7QUFDQUssc0JBQWdCRSxrQkFBaEIsQ0FBbUMsS0FBS04sZUFBeEM7QUFDQUksc0JBQWdCRyxtQkFBaEIsQ0FBb0MsS0FBS04sZ0JBQXpDO0FBQ0FHLHNCQUFnQkksd0JBQWhCLENBQXlDLEtBQUtOLHFCQUE5QztBQUNEOzs7K0RBRWlETyxLLEVBQU9DLFUsRUFBWUMseUIsRUFBMkI7QUFBQSxVQUN0RkMsS0FEc0YsR0FDN0JGLFVBRDZCLENBQ3RGRSxLQURzRjtBQUFBLFVBQy9FQyxNQUQrRSxHQUM3QkgsVUFENkIsQ0FDL0VHLE1BRCtFO0FBQUEsVUFDdkVDLEtBRHVFLEdBQzdCSixVQUQ2QixDQUN2RUksS0FEdUU7QUFBQSxVQUNoRUMsUUFEZ0UsR0FDN0JMLFVBRDZCLENBQ2hFSyxRQURnRTtBQUFBLFVBQ3REQyxTQURzRCxHQUM3Qk4sVUFENkIsQ0FDdERNLFNBRHNEO0FBQUEsVUFDM0NDLFNBRDJDLEdBQzdCUCxVQUQ2QixDQUMzQ08sU0FEMkM7QUFBQSxVQUV4RmxCLGtCQUZ3RixHQUVuRUwsNEJBQTRCaUIseUJBQTVCLEVBQXVEQyxLQUF2RCxFQUE4REMsTUFBOUQsRUFBc0VDLEtBQXRFLEVBQTZFQyxRQUE3RSxFQUF1RkMsU0FBdkYsQ0FGbUU7QUFBQSxVQUd4RmhCLGVBSHdGLEdBR3RFSix5QkFBeUJlLHlCQUF6QixDQUhzRTtBQUFBLFVBSXhGVixnQkFKd0YsR0FJckVOLDBCQUEwQkksa0JBQTFCLENBSnFFO0FBQUEsVUFLeEZHLHFCQUx3RixHQUtoRUwsK0JBQStCYyx5QkFBL0IsRUFBMERNLFNBQTFELENBTGdFO0FBQUEsVUFNeEZDLGNBTndGLEdBTXZFLElBQUlULEtBQUosQ0FBVVYsa0JBQVYsRUFBOEJDLGVBQTlCLEVBQStDQyxnQkFBL0MsRUFBaUVDLHFCQUFqRSxDQU51RTs7O0FBUTlGLGFBQU9nQixjQUFQO0FBQ0Q7Ozs7RUExQzBCM0IsTzs7QUE2QzdCNEIsT0FBT0MsT0FBUCxHQUFpQnRCLGNBQWpCIiwiZmlsZSI6InRleHR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVydGV4Jyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhLCBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhLCBjYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGEsIGNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlRGF0YSB9ID0gdmVydGV4VXRpbGl0aWVzO1xuXG5jbGFzcyBUZXh0dXJlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleEluZGV4RGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudmVydGV4UG9zaXRpb25EYXRhID0gdmVydGV4UG9zaXRpb25EYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhEYXRhID0gdmVydGV4SW5kZXhEYXRhO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsRGF0YSA9IHZlcnRleE5vcm1hbERhdGE7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbkRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25EYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4SW5kZXhEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleEluZGV4RGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleE5vcm1hbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsRGF0YTtcbiAgfVxuXG4gIGdldFRleHR1cmVDb29yZGluYXRlRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleERhdGEodGhpcy52ZXJ0ZXhJbmRleERhdGEpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxEYXRhKHRoaXMudmVydGV4Tm9ybWFsRGF0YSk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFRleHR1cmVDb29yZGluYXRlRGF0YSh0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllc0FuZEluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEoQ2xhc3MsIHByb3BlcnRpZXMsIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpIHsgXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucywgaW1hZ2VOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uRGF0YSA9IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgdmVydGV4SW5kZXhEYXRhID0gY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIGltYWdlTmFtZSksXG4gICAgICAgICAgdGV4dHVyZUVsZW1lbnQgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHZlcnRleE5vcm1hbERhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUVsZW1lbnQ7XG4iXX0=