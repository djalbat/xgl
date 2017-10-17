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
    calculateVertexColourData = vertexUtilities.calculateVertexColourData;

var ColourElement = function (_Element) {
  _inherits(ColourElement, _Element);

  function ColourElement(vertexPositionData, vertexIndexData, vertexNormalData, vertexColourData) {
    _classCallCheck(this, ColourElement);

    var _this = _possibleConstructorReturn(this, (ColourElement.__proto__ || Object.getPrototypeOf(ColourElement)).call(this));

    _this.vertexPositionData = vertexPositionData;
    _this.vertexIndexData = vertexIndexData;
    _this.vertexNormalData = vertexNormalData;
    _this.vertexColourData = vertexColourData;
    return _this;
  }

  _createClass(ColourElement, [{
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
    key: 'getVertexColourData',
    value: function getVertexColourData() {
      return this.vertexColourData;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer) {
      colourRenderer.addVertexPositionData(this.vertexPositionData);
      colourRenderer.addVertexIndexData(this.vertexIndexData);
      colourRenderer.addVertexNormalData(this.vertexNormalData);
      colourRenderer.addVertexColourData(this.vertexColourData);
    }
  }], [{
    key: 'fromPropertiesAndInitialVertexPositionData',
    value: function fromPropertiesAndInitialVertexPositionData(Class, properties, initialVertexPositionData) {
      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          position = properties.position,
          rotations = properties.rotations,
          colour = properties.colour,
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, position, rotations),
          vertexIndexData = calculateVertexIndexData(initialVertexPositionData),
          vertexNormalData = calculateVertexNormalData(vertexPositionData),
          vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
          colourElement = new Class(vertexPositionData, vertexIndexData, vertexNormalData, vertexColourData);


      return colourElement;
    }
  }]);

  return ColourElement;
}(Element);

module.exports = ColourElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NvbG91ci5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsInZlcnRleFV0aWxpdGllcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhIiwiQ29sb3VyRWxlbWVudCIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleEluZGV4RGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJ2ZXJ0ZXhDb2xvdXJEYXRhIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJhZGRWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJhZGRWZXJ0ZXhJbmRleERhdGEiLCJhZGRWZXJ0ZXhOb3JtYWxEYXRhIiwiYWRkVmVydGV4Q29sb3VyRGF0YSIsIkNsYXNzIiwicHJvcGVydGllcyIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiLCJjb2xvdXIiLCJjb2xvdXJFbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEscUJBQVIsQ0FEeEI7O0lBR1FFLDJCLEdBQWdIRCxlLENBQWhIQywyQjtJQUE2QkMseUIsR0FBbUZGLGUsQ0FBbkZFLHlCO0lBQTJCQyx3QixHQUF3REgsZSxDQUF4REcsd0I7SUFBMEJDLHlCLEdBQThCSixlLENBQTlCSSx5Qjs7SUFFcEZDLGE7OztBQUNKLHlCQUFZQyxrQkFBWixFQUFnQ0MsZUFBaEMsRUFBaURDLGdCQUFqRCxFQUFtRUMsZ0JBQW5FLEVBQXFGO0FBQUE7O0FBQUE7O0FBR25GLFVBQUtILGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBTm1GO0FBT3BGOzs7OzRDQUV1QjtBQUN0QixhQUFPLEtBQUtILGtCQUFaO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsYUFBTyxLQUFLQyxlQUFaO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsYUFBTyxLQUFLQyxnQkFBWjtBQUNEOzs7MENBRXFCO0FBQ3BCLGFBQU8sS0FBS0MsZ0JBQVo7QUFDRDs7OzJCQUVNQyxjLEVBQWdCQyxlLEVBQWlCO0FBQ3RDRCxxQkFBZUUscUJBQWYsQ0FBcUMsS0FBS04sa0JBQTFDO0FBQ0FJLHFCQUFlRyxrQkFBZixDQUFrQyxLQUFLTixlQUF2QztBQUNBRyxxQkFBZUksbUJBQWYsQ0FBbUMsS0FBS04sZ0JBQXhDO0FBQ0FFLHFCQUFlSyxtQkFBZixDQUFtQyxLQUFLTixnQkFBeEM7QUFDRDs7OytEQUVpRE8sSyxFQUFPQyxVLEVBQVlDLHlCLEVBQTJCO0FBQUEsVUFDdEZDLEtBRHNGLEdBQ2hDRixVQURnQyxDQUN0RkUsS0FEc0Y7QUFBQSxVQUMvRUMsTUFEK0UsR0FDaENILFVBRGdDLENBQy9FRyxNQUQrRTtBQUFBLFVBQ3ZFQyxLQUR1RSxHQUNoQ0osVUFEZ0MsQ0FDdkVJLEtBRHVFO0FBQUEsVUFDaEVDLFFBRGdFLEdBQ2hDTCxVQURnQyxDQUNoRUssUUFEZ0U7QUFBQSxVQUN0REMsU0FEc0QsR0FDaENOLFVBRGdDLENBQ3RETSxTQURzRDtBQUFBLFVBQzNDQyxNQUQyQyxHQUNoQ1AsVUFEZ0MsQ0FDM0NPLE1BRDJDO0FBQUEsVUFFeEZsQixrQkFGd0YsR0FFbkVMLDRCQUE0QmlCLHlCQUE1QixFQUF1REMsS0FBdkQsRUFBOERDLE1BQTlELEVBQXNFQyxLQUF0RSxFQUE2RUMsUUFBN0UsRUFBdUZDLFNBQXZGLENBRm1FO0FBQUEsVUFHeEZoQixlQUh3RixHQUd0RUoseUJBQXlCZSx5QkFBekIsQ0FIc0U7QUFBQSxVQUl4RlYsZ0JBSndGLEdBSXJFTiwwQkFBMEJJLGtCQUExQixDQUpxRTtBQUFBLFVBS3hGRyxnQkFMd0YsR0FLckVMLDBCQUEwQmMseUJBQTFCLEVBQXFETSxNQUFyRCxDQUxxRTtBQUFBLFVBTXhGQyxhQU53RixHQU14RSxJQUFJVCxLQUFKLENBQVVWLGtCQUFWLEVBQThCQyxlQUE5QixFQUErQ0MsZ0JBQS9DLEVBQWlFQyxnQkFBakUsQ0FOd0U7OztBQVE5RixhQUFPZ0IsYUFBUDtBQUNEOzs7O0VBMUN5QjNCLE87O0FBNkM1QjRCLE9BQU9DLE9BQVAsR0FBaUJ0QixhQUFqQiIsImZpbGUiOiJjb2xvdXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVydGV4Jyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhLCBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhLCBjYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGEsIGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEgfSA9IHZlcnRleFV0aWxpdGllcztcblxuY2xhc3MgQ29sb3VyRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleEluZGV4RGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4Q29sb3VyRGF0YSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSA9IHZlcnRleFBvc2l0aW9uRGF0YTtcbiAgICB0aGlzLnZlcnRleEluZGV4RGF0YSA9IHZlcnRleEluZGV4RGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbERhdGEgPSB2ZXJ0ZXhOb3JtYWxEYXRhO1xuICAgIHRoaXMudmVydGV4Q29sb3VyRGF0YSA9IHZlcnRleENvbG91ckRhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbkRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25EYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4SW5kZXhEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleEluZGV4RGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleE5vcm1hbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91ckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyRGF0YTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4UG9zaXRpb25EYXRhKHRoaXMudmVydGV4UG9zaXRpb25EYXRhKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleERhdGEodGhpcy52ZXJ0ZXhJbmRleERhdGEpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbERhdGEodGhpcy52ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhDb2xvdXJEYXRhKHRoaXMudmVydGV4Q29sb3VyRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXNBbmRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKENsYXNzLCBwcm9wZXJ0aWVzLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucywgY29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uRGF0YSA9IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgdmVydGV4SW5kZXhEYXRhID0gY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICAgICAgdmVydGV4Q29sb3VyRGF0YSA9IGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgY29sb3VyKSxcbiAgICAgICAgICBjb2xvdXJFbGVtZW50ID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcblxuICAgIHJldHVybiBjb2xvdXJFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyRWxlbWVudDtcbiJdfQ==